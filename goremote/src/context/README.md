# Context Directory

This directory contains React Context providers and related utilities for global state management.

## Purpose

- Manage global application state using React Context API
- Provide shared data and functions across component tree
- Handle authentication state, theme preferences, user settings, etc.
- Alternative to prop drilling for deeply nested components

## Guidelines

- Create separate contexts for different concerns
- Use TypeScript for context type safety
- Provide custom hooks for context consumption
- Consider performance implications of context updates
- Use React.memo() for components that consume context

## Common Context Types

- **AuthContext** - User authentication and session management
- **ThemeContext** - Theme and UI preferences
- **UserContext** - User profile and settings
- **NotificationContext** - Global notifications and alerts
- **ModalContext** - Modal state management

## Example Structure

```
context/
├── AuthContext.tsx
├── ThemeContext.tsx
├── UserContext.tsx
└── index.ts (barrel exports)
```

## Example Implementation

```typescript
// AuthContext.tsx
interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
```
