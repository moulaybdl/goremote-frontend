# Hooks Directory

This directory contains custom React hooks that encapsulate reusable stateful logic.

## Purpose

- Extract and reuse stateful logic between components
- Provide clean abstractions for common patterns
- Simplify component code by moving complex logic to hooks
- Enable easier testing of stateful logic

## Guidelines

- Follow the "use" naming convention (e.g., `useAuth`, `useLocalStorage`)
- Keep hooks focused on a single responsibility
- Use TypeScript for parameter and return type safety
- Consider performance implications (memoization, dependency arrays)
- Write unit tests for complex hooks
- Document hook parameters and return values

## Common Hook Categories

### Data Fetching Hooks

- `useApi` - Generic API request hook
- `useUsers` - Fetch and manage users data
- `usePosts` - Fetch and manage posts data

### State Management Hooks

- `useLocalStorage` - Persist state in localStorage
- `useSessionStorage` - Persist state in sessionStorage
- `useDebounce` - Debounce values or functions

### UI Hooks

- `useModal` - Modal state management
- `useToggle` - Boolean state toggle
- `useClickOutside` - Detect clicks outside element
- `useMediaQuery` - Responsive design helper

### Utility Hooks

- `useAuth` - Authentication state and methods
- `useTheme` - Theme management
- `useCopyToClipboard` - Copy text to clipboard

## Example Structure

```
hooks/
├── api/
│   ├── useApi.ts
│   └── useUsers.ts
├── state/
│   ├── useLocalStorage.ts
│   └── useDebounce.ts
├── ui/
│   ├── useModal.ts
│   └── useToggle.ts
└── index.ts (barrel exports)
```

## Example Implementation

```typescript
// useToggle.ts
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, { toggle, setTrue, setFalse }] as const;
};
```
