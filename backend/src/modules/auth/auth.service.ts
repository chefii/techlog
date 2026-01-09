import {
  Injectable,
  UnauthorizedException,
  Inject,
  forwardRef,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import * as bcrypt from "bcrypt";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UserRole } from "../users/schemas/user.schema";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    const payload = {
      email: user.email,
      sub: (user as any)._id,
      role: user.role,
    };

    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(email: string, password: string) {
    // 먼저 관리자 계정 확인
    const adminEmail = this.configService.get<string>("ADMIN_EMAIL");
    const adminPassword = this.configService.get<string>("ADMIN_PASSWORD");

    if (email === adminEmail) {
      const isHashed = adminPassword?.startsWith("$2");
      let isPasswordValid = false;

      if (isHashed) {
        isPasswordValid = await bcrypt.compare(password, adminPassword || "");
      } else {
        isPasswordValid = password === adminPassword;
      }

      if (isPasswordValid) {
        const payload = { email, sub: "admin", role: UserRole.ADMIN };
        return {
          user: { email, role: UserRole.ADMIN, name: "Admin" },
          access_token: this.jwtService.sign(payload),
        };
      }
    }

    // 일반 사용자 로그인
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    if (!user.isActive) {
      throw new UnauthorizedException("Account is deactivated");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    await this.usersService.updateLastLogin((user as any)._id.toString());

    const payload = {
      email: user.email,
      sub: (user as any)._id,
      role: user.role,
    };
    return {
      user: {
        _id: (user as any)._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: any) {
    if (payload.sub === "admin") {
      return { email: payload.email, userId: "admin", role: UserRole.ADMIN };
    }

    return {
      email: payload.email,
      userId: payload.sub,
      role: payload.role || UserRole.USER,
    };
  }
}
