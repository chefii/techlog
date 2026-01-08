# ADR-001: Tech Stack Selection

## Status
Accepted

## Context
Building a personal tech blog/portfolio/resume website to demonstrate Node.js expertise alongside existing Java experience. The solution needs to be:
- Production-ready and maintainable
- Demonstrate enterprise-level architecture
- SEO-optimized for blog content
- Type-safe across the stack

## Decision

### Frontend: Next.js 14 with App Router
**Rationale:**
- SSR/SSG support for SEO optimization (critical for blog)
- React ecosystem familiarity
- App Router represents the latest React patterns
- Built-in image optimization and performance features

### Backend: NestJS 10
**Rationale:**
- Familiar architecture for Spring/Java developers (DI, decorators, modules)
- First-class TypeScript support
- Robust ecosystem (Passport, class-validator, etc.)
- Demonstrates ability to write structured, enterprise-grade Node.js code

### Database: MongoDB with Mongoose
**Rationale:**
- Flexible schema for varied content types (posts, portfolio, resume)
- Easy local development without schema migrations
- Mongoose provides type safety and validation
- Good fit for document-centric content

### Styling: Tailwind CSS
**Rationale:**
- Rapid development with utility classes
- No context switching between files
- Excellent production bundle optimization
- Large community and ecosystem

## Consequences

### Positive
- Consistent TypeScript across the entire stack
- Shared types between frontend and backend
- Familiar patterns for enterprise developers
- Strong community support for all technologies

### Negative
- Learning curve for App Router if used to Pages Router
- MongoDB requires careful schema design despite flexibility
- NestJS has more boilerplate than Express

## Alternatives Considered

1. **Express.js** - Too minimal, doesn't demonstrate architectural skills
2. **Fastify** - Less familiar ecosystem, fewer decorators
3. **PostgreSQL** - More rigid schema, overkill for content-centric app
4. **styled-components** - Additional runtime, slower development
