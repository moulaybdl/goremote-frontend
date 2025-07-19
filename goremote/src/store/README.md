# Store Directory

This directory contains global state management logic and store configuration.

## Purpose

- Manage complex application state that needs to be shared across components
- Provide predictable state updates and data flow
- Handle asynchronous operations and side effects
- Centralize business logic and data management
- Enable time-travel debugging and state persistence

## Guidelines

- Choose appropriate state management solution (Redux, Zustand, Jotai, etc.)
- Keep store slices focused and cohesive
- Use TypeScript for type-safe state management
- Implement proper error handling
- Consider performance implications of state updates
- Write tests for store logic and reducers

## Common State Management Solutions

### Redux Toolkit (RTK)

- `store.ts` - Store configuration
- `slices/` - Feature-based state slices
- `middleware/` - Custom middleware
- `selectors/` - Memoized state selectors

### Zustand

- `stores/` - Individual store definitions
- `types.ts` - Store type definitions
- `middleware.ts` - Custom middleware

### Jotai

- `atoms/` - Atomic state definitions
- `derived/` - Derived atoms
- `stores.ts` - Store providers

## Example Structure (Redux Toolkit)

```
store/
├── slices/
│   ├── authSlice.ts
│   ├── userSlice.ts
│   ├── postsSlice.ts
│   └── uiSlice.ts
├── middleware/
│   ├── authMiddleware.ts
│   └── loggerMiddleware.ts
├── selectors/
│   ├── authSelectors.ts
│   └── userSelectors.ts
├── types.ts
├── store.ts
└── index.ts
```

## Example Structure (Zustand)

```
store/
├── authStore.ts
├── userStore.ts
├── postsStore.ts
├── uiStore.ts
├── types.ts
└── index.ts
```

## Example Implementation (Redux Toolkit)

```typescript
// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
```

## Example Implementation (Zustand)

```typescript
// authStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        token: null,
        isLoading: false,
        login: async (credentials) => {
          set({ isLoading: true });
          try {
            const response = await authApi.login(credentials);
            set({
              user: response.user,
              token: response.token,
              isLoading: false,
            });
          } catch (error) {
            set({ isLoading: false });
            throw error;
          }
        },
        logout: () => {
          set({ user: null, token: null });
        },
      }),
      { name: "auth-store" }
    )
  )
);
```
