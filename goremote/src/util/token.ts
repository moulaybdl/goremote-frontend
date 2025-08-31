// src/utils/tokenStorage.ts
type TOKEN_KEY = "refresh_token" | "access_token";

export const tokenStorage = {
  get: (token_key: TOKEN_KEY): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(token_key);
  },

  set: (token_key: TOKEN_KEY, token: string): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(token_key, token);
  },

  remove: (token_key: TOKEN_KEY): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(token_key);
  },
};
