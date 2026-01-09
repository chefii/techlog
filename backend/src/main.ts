import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  });

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle("TechLog API")
    .setDescription("TechLog 블로그/포트폴리오/이력서 API 문서")
    .setVersion("1.0")
    .addBearerAuth(
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "JWT 토큰 입력",
      },
      "access-token",
    )
    .addTag("auth", "인증 API")
    .addTag("users", "사용자 관리 API")
    .addTag("posts", "블로그 포스트 API")
    .addTag("portfolio", "포트폴리오 API")
    .addTag("resume", "이력서 API")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);

  const port = process.env.PORT || 4000;
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger docs: http://localhost:${port}/api-docs`);
}

bootstrap();
