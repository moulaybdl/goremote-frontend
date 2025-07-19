# Lib Directory

This directory contains utility libraries, helper functions, and third-party service integrations.

## Purpose

- House utility functions and helper libraries
- Configure and wrap third-party libraries
- Provide common functionality used across the application
- Isolate external dependencies and API integrations
- Create reusable business logic functions

## Guidelines

- Keep functions pure and testable when possible
- Use TypeScript for type safety
- Document complex utility functions
- Group related utilities together
- Consider performance implications
- Write unit tests for utility functions

## Common Subdirectories and Files

### Utilities

- `utils.ts` - General utility functions
- `validation.ts` - Data validation helpers
- `formatting.ts` - Date, number, and text formatting
- `storage.ts` - localStorage/sessionStorage helpers

### API and Services

- `api.ts` - API client configuration
- `auth.ts` - Authentication utilities

### Third-party Integrations

- `analytics.ts` - Analytics service setup (Google Analytics, etc.)
- `sentry.ts` - Error tracking configuration
- `stripe.ts` - Payment processing utilities

### Data Processing

- `transformers.ts` - Data transformation utilities
- `validators.ts` - Custom validation functions
- `parsers.ts` - Data parsing utilities
- `serializers.ts` - Data serialization utilities

## Example Structure

```
lib/
├── utils/
│   ├── formatting.ts
│   ├── validation.ts
│   └── index.ts
├── api/
│   ├── client.ts
│   └── endpoints.ts
├── integrations/
│   ├── analytics.ts
│   └── stripe.ts
└── index.ts (barrel exports)
```

## Example Implementation

```typescript
// utils/formatting.ts
export const formatCurrency = (amount: number, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};

export const formatDate = (date: Date, format = "short") => {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: format as any,
  }).format(date);
};

// api/client.ts
import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```
