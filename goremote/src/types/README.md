# Types Directory

This directory contains TypeScript type definitions, interfaces, and type utilities used throughout the application.

## Purpose

- Define shared TypeScript types and interfaces
- Provide type safety across the application
- Document data structures and API contracts
- Create reusable type utilities and generic types
- Centralize type definitions for better maintainability

## Guidelines

- Use descriptive names for types and interfaces
- Group related types together in logical files
- Export types using named exports
- Use generic types for reusable patterns
- Document complex types with JSDoc comments
- Follow TypeScript best practices (prefer interfaces over types when possible)

## Common Files and Categories

### Domain Types

- `user.ts` - User-related types and interfaces
- `post.ts` - Post/content-related types
- `auth.ts` - Authentication and authorization types
- `api.ts` - API request/response types

### UI Types

- `components.ts` - Component prop types
- `forms.ts` - Form and input types
- `navigation.ts` - Routing and navigation types
- `theme.ts` - Theme and styling types

### Utility Types

- `common.ts` - Common utility types
- `helpers.ts` - Type helper utilities
- `generics.ts` - Generic type definitions
- `enums.ts` - Enum definitions

### External Types

- `global.d.ts` - Global type declarations
- `modules.d.ts` - Module augmentations
- `vendor.d.ts` - Third-party library types

## Example Structure

```
types/
├── domain/
│   ├── user.ts
│   ├── post.ts
│   └── auth.ts
├── api/
│   ├── requests.ts
│   ├── responses.ts
│   └── endpoints.ts
├── ui/
│   ├── components.ts
│   ├── forms.ts
│   └── navigation.ts
├── utils/
│   ├── common.ts
│   └── helpers.ts
├── global.d.ts
└── index.ts (barrel exports)
```

## Example Implementations

```typescript
// domain/user.ts
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MODERATOR = "moderator",
}

export interface CreateUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UpdateUserRequest
  extends Partial<Omit<User, "id" | "createdAt" | "updatedAt">> {}

// api/responses.ts
export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
  success: false;
  timestamp: string;
}

// ui/components.ts
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  "data-testid"?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnBackdrop?: boolean;
}

// utils/common.ts
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type NonNullable<T> = T extends null | undefined ? never : T;

export type ValueOf<T> = T[keyof T];

// utils/helpers.ts
export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;

export type EventHandler<T = Element> = (
  event: React.SyntheticEvent<T>
) => void;

export type FormFieldError = {
  message: string;
  type: string;
};

export type FormErrors<T> = {
  [K in keyof T]?: FormFieldError;
};

// global.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      NEXT_PUBLIC_API_URL: string;
    }
  }

  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export {};
```

## Type Organization Best Practices

1. **Domain-Driven**: Organize types by business domain
2. **Layer-Based**: Separate API, UI, and business logic types
3. **Feature-Based**: Group types by application features
4. **Barrel Exports**: Use index files for clean imports
5. **Documentation**: Add JSDoc comments for complex types
