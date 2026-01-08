# TechLog

Personal tech blog, portfolio, and resume website built with Next.js and NestJS.

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: NestJS 10, TypeScript, Mongoose
- **Database**: MongoDB
- **Infrastructure**: Docker, Nginx, GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- Docker (for MongoDB)

### Development Setup

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/chefii/techlog.git
   cd techlog
   npm install
   ```

2. **Start MongoDB**
   ```bash
   docker compose -f infra/docker/docker-compose.dev.yml up -d
   ```

3. **Configure environment**
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your settings
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

   - Frontend: http://localhost:3000
   - Backend: http://localhost:4000

## Project Structure

```
techlog/
├── frontend/          # Next.js application
├── backend/           # NestJS API server
├── shared/            # Shared types and constants
├── infra/             # Docker, Nginx configs
├── docs/              # Documentation
└── .github/           # CI/CD workflows
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all services in development mode |
| `npm run dev:frontend` | Start frontend only |
| `npm run dev:backend` | Start backend only |
| `npm run build` | Build all packages |
| `npm run lint` | Run linters |
| `npm run test` | Run tests |

## Documentation

- [Architecture](docs/architecture.md)
- [Decision Records](docs/decisions/)

## License

MIT



  ---
  생성된 구조

  techlog/
  ├── frontend/                    # Next.js 14 + TypeScript + Tailwind
  │   ├── src/app/                # App Router 페이지
  │   ├── package.json
  │   └── tsconfig.json
  │
  ├── backend/                     # NestJS 10 + TypeScript + Mongoose
  │   ├── src/
  │   │   ├── modules/
  │   │   │   ├── auth/           # JWT 인증
  │   │   │   ├── posts/          # 블로그 CRUD
  │   │   │   ├── portfolio/      # 포트폴리오 CRUD
  │   │   │   └── resume/         # 이력서 CRUD
  │   │   └── main.ts
  │   └── .env.example
  │
  ├── shared/                      # 공유 타입/상수
  │   ├── types/
  │   └── constants/
  │
  ├── infra/
  │   ├── docker/
  │   │   ├── docker-compose.yml      # 프로덕션
  │   │   ├── docker-compose.dev.yml  # 개발용 (MongoDB만)
  │   │   ├── Dockerfile.backend
  │   │   └── Dockerfile.frontend
  │   └── nginx/nginx.conf
  │
  ├── docs/
  │   ├── architecture.md
  │   └── decisions/ADR-001-tech-stack-selection.md
  │
  ├── .github/workflows/
  │   ├── ci.yml                  # 린트/빌드/테스트
  │   └── deploy.yml              # Docker 빌드 & 배포
  │
  └── README.md

  ---
  다음 단계

  # 1. 의존성 설치
  npm install

  # 2. MongoDB 실행 (Docker)
  docker compose -f infra/docker/docker-compose.dev.yml up -d

  # 3. 환경변수 설정
  cp backend/.env.example backend/.env

  # 4. 개발 서버 시작
  npm run dev

  - Frontend: http://localhost:3000
  - Backend: http://localhost:4000
  - API Health: http://localhost:4000/api/health

  ---
  면접 포인트

  1. NestJS 선택 이유 → Spring과 유사한 DI/모듈 구조로 엔터프라이즈급 설계 능력 입증
  2. Monorepo 구성 → shared/ 패키지로 프론트-백 타입 동기화
  3. ADR 문서화 → 의사결정 과정을 기록하는 개발자임을 어필
  4. Docker + CI/CD → 운영 환경까지 고려한 풀스택 역량





  생성된 관리자 페이지 구조

  /admin
  ├── login              # 로그인 페이지
  ├── (dashboard)        # 대시보드
  ├── posts/             # 포스트 관리
  │   ├── (list)         # 목록
  │   ├── new            # 새 포스트
  │   └── [id]           # 수정
  ├── portfolio/         # 포트폴리오 관리
  │   ├── (list)         # 목록
  │   ├── new            # 새 항목
  │   └── [id]           # 수정
  └── resume/            # 이력서 관리 (탭 방식)

  주요 기능

  | 페이지           | 기능                                               |
  |------------------|----------------------------------------------------|
  | /admin/login     | JWT 로그인                                         |
  | /admin           | 대시보드, 통계, 퀵 액션                            |
  | /admin/posts     | 포스트 목록, 생성, 수정, 삭제                      |
  | /admin/portfolio | 포트폴리오 CRUD                                    |
  | /admin/resume    | 이력서 편집 (Basic/Experience/Education/Skills 탭) |

  생성된 유틸

  - src/lib/api.ts - API 클라이언트
  - src/lib/auth.ts - 인증 유틸 (JWT 토큰 관리)
  - src/components/admin/Sidebar.tsx - 사이드바
  - src/components/admin/PostForm.tsx - 포스트 폼
  - src/components/admin/PortfolioForm.tsx - 포트폴리오 폼

  접속 방법

  # 개발 서버 실행 후
  http://localhost:3000/admin/login

  백엔드의 .env 파일에서 관리자 계정 설정 필요:
  ADMIN_EMAIL=admin@techlog.dev
  ADMIN_PASSWORD=$2b$10$... (bcrypt 해시)

  