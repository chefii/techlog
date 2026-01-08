# TechLog Architecture

## Overview

TechLog is a personal tech blog, portfolio, and resume website built with a modern Node.js stack.

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context / Server Components

### Backend
- **Framework**: NestJS 10
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with Passport.js

### Infrastructure
- **Containerization**: Docker
- **Reverse Proxy**: Nginx
- **CI/CD**: GitHub Actions

## Directory Structure

```
techlog/
├── frontend/          # Next.js application
├── backend/           # NestJS API server
├── shared/            # Shared types and constants
├── infra/             # Infrastructure configurations
├── docs/              # Documentation
└── .github/           # CI/CD workflows
```

## Data Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Browser   │────▶│    Nginx    │────▶│  Frontend   │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐     ┌─────────────┐
                    │   Backend   │────▶│   MongoDB   │
                    └─────────────┘     └─────────────┘
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/profile` - Get current user (protected)

### Posts
- `GET /api/posts` - List published posts
- `GET /api/posts/:slug` - Get post by slug
- `POST /api/posts` - Create post (protected)
- `PATCH /api/posts/:id` - Update post (protected)
- `DELETE /api/posts/:id` - Delete post (protected)

### Portfolio
- `GET /api/portfolio` - List all portfolio items
- `GET /api/portfolio/featured` - List featured items
- `GET /api/portfolio/:id` - Get portfolio item
- `POST /api/portfolio` - Create item (protected)
- `PATCH /api/portfolio/:id` - Update item (protected)
- `DELETE /api/portfolio/:id` - Delete item (protected)

### Resume
- `GET /api/resume` - Get active resume
- `GET /api/resume/:id` - Get resume by ID
- `POST /api/resume` - Create resume (protected)
- `PATCH /api/resume/:id` - Update resume (protected)
- `DELETE /api/resume/:id` - Delete resume (protected)

## Security Considerations

1. **Authentication**: JWT tokens with configurable expiration
2. **Authorization**: Protected routes require valid JWT
3. **Input Validation**: class-validator on all DTOs
4. **CORS**: Configured for frontend origin only
5. **Rate Limiting**: Nginx-level rate limiting on API routes
