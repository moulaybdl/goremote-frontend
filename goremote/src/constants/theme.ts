/**
 * GoRemote Theme Configuration
 *
 * This file contains the complete color theme system for the GoRemote application.
 * All colors are defined exactly as specified in the design document.
 */

export const GOREMOTE_COLORS = {
  // Basic Colors
  primary: "var(--color-primary)", // #002924
  accent: "var(--color-accent)", // #00E0FF
  accentAlt: "var(--color-accent-alt)", // #04BFA8
  glow: "var(--color-glow)", // #00FFE0

  // Typography Colors
  text: {
    primary: "var(--color-text-primary)", // #F2F4F6
    secondary: "var(--color-text-secondary)", // #A6ACB8
    muted: "var(--color-text-muted)", // #4C5569
    link: "var(--color-link)", // #485260
  },

  // Feedback Colors
  feedback: {
    success: "var(--color-success)", // #4ADE80
    warning: "var(--color-warning)", // #FACC15
    error: "var(--color-error)", // #FF1A00
    price: "var(--color-price)", // #A6FF00
  },

  // Border Colors
  border: {
    dark: "var(--border-dark)", // #22272C
    muted: "var(--border-muted)", // #2C323F
    subtle: "var(--border-subtle)", // #373F49
  },

  // Background & Surface Colors
  surface: {
    background: "var(--color-background)", // #121417
    light: "var(--color-surface-light)", // #181B1F
    dark: "var(--color-surface-dark)", // #14161A
    muted: "var(--color-surface-muted)", // #171B22
    deep: "var(--color-surface-deep)", // #15181C
    chat: "var(--color-surface-chat)", // #181C23
  },
} as const;

/**
 * Color utility functions for programmatic color access
 */
export const getGoRemoteColor = (path: string) => {
  const keys = path.split(".");
  let current: any = GOREMOTE_COLORS;

  for (const key of keys) {
    current = current[key];
    if (!current) return null;
  }

  return current;
};

/**
 * Common color combinations for GoRemote UI components
 */
export const GOREMOTE_COMBINATIONS = {
  // Primary button styles
  primaryButton: {
    background: GOREMOTE_COLORS.primary,
    text: GOREMOTE_COLORS.text.primary,
    hover: GOREMOTE_COLORS.accent,
  },

  // Accent button styles
  accentButton: {
    background: GOREMOTE_COLORS.accent,
    text: GOREMOTE_COLORS.primary,
    hover: GOREMOTE_COLORS.accentAlt,
  },

  // Success states
  success: {
    background: GOREMOTE_COLORS.surface.light,
    border: GOREMOTE_COLORS.feedback.success,
    text: GOREMOTE_COLORS.feedback.success,
    icon: GOREMOTE_COLORS.feedback.success,
  },

  // Warning states
  warning: {
    background: GOREMOTE_COLORS.surface.light,
    border: GOREMOTE_COLORS.feedback.warning,
    text: GOREMOTE_COLORS.feedback.warning,
    icon: GOREMOTE_COLORS.feedback.warning,
  },

  // Error states
  error: {
    background: GOREMOTE_COLORS.surface.light,
    border: GOREMOTE_COLORS.feedback.error,
    text: GOREMOTE_COLORS.feedback.error,
    icon: GOREMOTE_COLORS.feedback.error,
  },

  // Input field styles
  input: {
    background: GOREMOTE_COLORS.surface.muted,
    border: GOREMOTE_COLORS.border.muted,
    borderFocus: GOREMOTE_COLORS.accent,
    text: GOREMOTE_COLORS.text.primary,
    placeholder: GOREMOTE_COLORS.text.muted,
  },

  // Card styles
  card: {
    background: GOREMOTE_COLORS.surface.light,
    border: GOREMOTE_COLORS.border.dark,
  },

  // Navigation styles
  navigation: {
    background: GOREMOTE_COLORS.surface.dark,
    border: GOREMOTE_COLORS.border.dark,
    text: GOREMOTE_COLORS.text.secondary,
    textActive: GOREMOTE_COLORS.accent,
    backgroundActive: GOREMOTE_COLORS.surface.muted,
  },

  // Chat specific
  chat: {
    background: GOREMOTE_COLORS.surface.chat,
    border: GOREMOTE_COLORS.border.subtle,
    text: GOREMOTE_COLORS.text.primary,
  },

  // Price display
  price: {
    text: GOREMOTE_COLORS.feedback.price,
    background: GOREMOTE_COLORS.surface.deep,
  },
} as const;

/**
 * CSS class name generators for GoRemote colors
 */
export const generateGoRemoteClasses = (colorType: string) => ({
  background: `bg-${colorType}`,
  text: `text-${colorType}`,
  border: `border-${colorType}`,
  hoverBackground: `hover:bg-${colorType}`,
  hoverText: `hover:text-${colorType}`,
  focusRing: `focus:ring-${colorType}`,
  focusBorder: `focus:border-${colorType}`,
});

/**
 * Type definitions for GoRemote theme
 */
export type GoRemoteColorCategory =
  | "primary"
  | "accent"
  | "accent-alt"
  | "glow"
  | "success"
  | "warning"
  | "error"
  | "price";

export type GoRemoteTextColor = "primary-text" | "secondary" | "muted" | "link";

export type GoRemoteBorderColor = "dark" | "muted" | "subtle";

export type GoRemoteSurfaceColor =
  | "background"
  | "surface-light"
  | "surface-dark"
  | "surface-muted"
  | "surface-deep"
  | "surface-chat";
