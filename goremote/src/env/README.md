# Environment Directory

This directory contains environment-specific configuration and validation for environment variables.

## Purpose

- Validate and type environment variables
- Provide type-safe access to environment configuration
- Handle different environment setups (development, staging, production)
- Centralize environment variable management

## Guidelines

- Use a validation library like Zod for environment variable validation
- Provide default values where appropriate
- Fail fast if required environment variables are missing
- Document all environment variables and their purposes
- Keep sensitive data in environment variables, not in code

## Common Files

- `index.ts` - Main environment configuration and validation
- `client.ts` - Client-side environment variables (must be prefixed with NEXT*PUBLIC*)
- `schema.ts` - Environment variable validation schemas

## Example Implementation

```typescript
// schema.ts
import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "staging", "production"]),
  NEXT_PUBLIC_API_URL: z.string().url(),
});

// index.ts
export const env = envSchema.parse(process.env);
```

## Environment Variables Documentation

Document all environment variables used in your application:

- `NEXT_PUBLIC_API_URL` - Public API base URL for external services
- `NODE_ENV` - Application environment
