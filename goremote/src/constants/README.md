# Constants Directory

This directory contains application-wide constants, configuration values, and static data.

## Purpose

- Define reusable constant values used across the application
- Store configuration settings
- Maintain enums and static data
- Keep magic numbers and strings in one place

## Guidelines

- Use descriptive names for constants
- Group related constants together
- Export constants using named exports
- Use TypeScript for type safety
- Consider using enums for related constant groups

## Common Files

- `api.ts` - API endpoints and base URLs
- `routes.ts` - Application route paths
- `config.ts` - Application configuration
- `messages.ts` - Error messages and user-facing text
- `enums.ts` - Application enums
- `theme.ts` - Theme-related constants (colors, spacing, etc.)

## Example

```typescript
// api.ts
export const API_BASE_URL = "https://api.example.com";
export const ENDPOINTS = {
  USERS: "/users",
  POSTS: "/posts",
} as const;

// routes.ts
export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
} as const;
```
