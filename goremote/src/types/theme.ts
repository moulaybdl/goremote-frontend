/**
 * Theme Type Definitions
 *
 * This file contains TypeScript type definitions for the theme system
 * to ensure type safety when using colors throughout the application.
 */

/**
 * Available color scales (shade variations)
 */
export type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

/**
 * Brand color categories
 */
export type BrandColor = "primary" | "secondary" | "accent";

/**
 * Semantic color categories for UI states
 */
export type SemanticColor = "success" | "warning" | "error" | "info";

/**
 * Neutral color category
 */
export type NeutralColor = "neutral";

/**
 * Dark mode specific colors
 */
export type DarkColor = "dark";

/**
 * All available theme color categories
 */
export type ThemeColorCategory =
  | BrandColor
  | SemanticColor
  | NeutralColor
  | DarkColor;

/**
 * Complete color palette structure
 */
export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

/**
 * Dark mode color structure
 */
export interface DarkColorPalette {
  bg: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
}

/**
 * Complete theme structure
 */
export interface Theme {
  primary: ColorPalette;
  secondary: ColorPalette;
  accent: ColorPalette;
  success: ColorPalette;
  warning: ColorPalette;
  error: ColorPalette;
  info: ColorPalette;
  neutral: ColorPalette;
  dark: DarkColorPalette;
}

/**
 * Color combination for UI components
 */
export interface ColorCombination {
  background: string;
  text: string;
  border?: string;
  hover?: string;
  icon?: string;
}

/**
 * Component color variants
 */
export type ComponentVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

/**
 * Component sizes
 */
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * CSS utility class types
 */
export interface ColorUtilityClasses {
  background: string;
  text: string;
  border: string;
  ring: string;
  hoverBackground: string;
  hoverText: string;
  hoverBorder: string;
  focusRing: string;
  focusBorder: string;
}

/**
 * Theme mode
 */
export type ThemeMode = "light" | "dark" | "system";

/**
 * Color format types
 */
export type ColorFormat = "hex" | "rgb" | "hsl" | "css-var";

/**
 * Opacity levels for transparent colors
 */
export type OpacityLevel =
  | 0
  | 5
  | 10
  | 20
  | 25
  | 30
  | 40
  | 50
  | 60
  | 70
  | 75
  | 80
  | 90
  | 95
  | 100;

/**
 * Gradient direction
 */
export type GradientDirection =
  | "to-r"
  | "to-l"
  | "to-t"
  | "to-b"
  | "to-tr"
  | "to-tl"
  | "to-br"
  | "to-bl";

/**
 * Component state
 */
export type ComponentState =
  | "default"
  | "hover"
  | "focus"
  | "active"
  | "disabled";

/**
 * Color accessibility levels
 */
export type AccessibilityLevel = "AA" | "AAA";

/**
 * Theme configuration options
 */
export interface ThemeConfig {
  mode: ThemeMode;
  primaryColor: BrandColor;
  accentColor: BrandColor;
  borderRadius: "none" | "sm" | "md" | "lg" | "xl" | "full";
  fontFamily: "sans" | "serif" | "mono";
}

/**
 * Color utility function parameters
 */
export interface ColorUtilParams {
  color: ThemeColorCategory;
  shade?: ColorShade;
  opacity?: OpacityLevel;
  state?: ComponentState;
}

/**
 * Design token structure
 */
export interface DesignTokens {
  colors: Theme;
  spacing: Record<string, string>;
  typography: Record<string, any>;
  shadows: Record<string, string>;
  borderRadius: Record<string, string>;
  animation: Record<string, any>;
}
