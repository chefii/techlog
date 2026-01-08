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
   git clone <repository-url>
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
