# Overview

This is a portfolio web application built with a modern full-stack architecture. The project showcases a GenAI Engineer's professional profile, including their projects, skills, experience, and contact information. It features a React-based frontend with a dark-themed, animated UI, golden ratio-based spacing system, floating cogs background pattern, and an Express.js backend with PostgreSQL database support via Drizzle ORM.

## Recent Updates (October 2025)
- **Resume**: Updated to Swetha_ATS_1760453545923.pdf
- **Projects**: Added 5th project card - Custom Sanskrit Transformer (NLP model with CUDA/TensorRT optimization)
- **Design System**: Implemented golden ratio (φ ≈ 1.618) spacing system across all sections for visual harmony
- **Background**: Added minimal floating cogs SVG animation pattern with slow rotation and low opacity

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool

**UI System**: 
- shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for styling with a custom dark theme configuration
- Framer Motion for animations and page transitions
- Custom cursor implementation and animated backgrounds for enhanced UX

**Routing**: Wouter for client-side routing (lightweight alternative to React Router)

**State Management**: 
- TanStack React Query (v5) for server state management and API data fetching
- React Hook Form with Zod resolver for form validation

**Design System**:
- CSS custom properties for theming with dark mode support
- Inter and JetBrains Mono fonts from Google Fonts
- Consistent color palette with primary (orange #f97316), secondary (blue), and accent (cyan) colors
- Component-based architecture with reusable UI primitives
- **Golden Ratio Spacing System**: CSS variables based on φ (1.618) for harmonious layout
  - `--space-phi-1` through `--space-phi-5` (1.618rem to 11.09rem)
  - Utility classes: `.golden-section`, `.golden-gap`, `.golden-mb`
- **Floating Cogs Background**: Minimal SVG pattern with slow rotating cogs (opacity 0.03)

## Backend Architecture

**Server Framework**: Express.js with TypeScript

**Development Setup**:
- Vite middleware for hot module replacement in development
- Custom error overlay and runtime error handling via Replit plugins
- Request/response logging middleware with JSON response capture

**Storage Layer**:
- Abstracted storage interface (`IStorage`) for database operations
- In-memory storage implementation (`MemStorage`) as default
- Drizzle ORM configured for PostgreSQL via Neon serverless driver
- Database schema defined in shared directory for type safety across frontend/backend

**API Design**:
- RESTful API endpoints prefixed with `/api`
- Request validation using Zod schemas generated from Drizzle schema
- JSON request/response format with body parsing middleware

## Data Storage

**Database**: PostgreSQL (configured via Neon serverless)

**ORM**: Drizzle ORM with Drizzle Kit for migrations

**Schema Design**:
- Users table with UUID primary keys (generated via `gen_random_uuid()`)
- Username/password authentication fields
- Type-safe schema using Drizzle Zod integration for validation

**Migration Strategy**:
- Schema defined in `shared/schema.ts` for shared types
- Migrations output to `./migrations` directory
- Database push command for schema synchronization

## Build & Deployment

**Development Mode**:
- Vite dev server with HMR
- TSX for running TypeScript server code
- Concurrent frontend/backend development

**Production Build**:
- Vite builds React frontend to `dist/public`
- esbuild bundles Express server to `dist/index.js` as ESM module
- Static file serving from production build

**Path Aliases**:
- `@/*` - Client source files
- `@shared/*` - Shared types and schemas
- `@assets/*` - Static assets (includes resume PDFs served as static files via Express)

# External Dependencies

## Core UI Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, popover, select, tabs, toast, tooltip, etc.)
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **Framer Motion**: Animation library for React components
- **class-variance-authority**: Utility for creating variant-based component styles

## Backend Services
- **Neon Database**: Serverless PostgreSQL via `@neondatabase/serverless` driver
- **Drizzle ORM**: Type-safe SQL ORM with Zod schema integration
- **connect-pg-simple**: PostgreSQL session store (for future session management)

## Development Tools
- **Vite**: Build tool and dev server with React plugin
- **TypeScript**: Type safety across the entire stack
- **Replit Plugins**: Runtime error modal, cartographer, and dev banner for Replit environment
- **Wouter**: Lightweight routing library for React

## Form & Validation
- **React Hook Form**: Form state management with `@hookform/resolvers`
- **Zod**: Schema validation library integrated with Drizzle

## Utilities
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional class name utilities
- **nanoid**: Unique ID generation
- **lucide-react**: Icon library

## Additional UI Components
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider component
- **vaul**: Drawer component
- **react-day-picker**: Date picker component
- **input-otp**: OTP input component
- **react-resizable-panels**: Resizable panel layouts