# Styles Directory

This directory contains styling files, theme configurations, and design system utilities.

## Purpose

- Organize application styles and design tokens
- Define global styles and CSS utilities
- Manage theme configurations and design systems
- House component-specific styles (if not using CSS-in-JS)
- Provide consistent design patterns and variables

## Guidelines

- Follow a consistent naming convention
- Use CSS custom properties for theme variables
- Organize styles by feature or component
- Consider using CSS methodologies (BEM, SMACSS)
- Optimize for performance and maintainability
- Document design tokens and usage patterns

## Common Files and Patterns

### Global Styles

- `globals.css` - Global styles and resets
- `base.css` - Base typography and element styles
- `utilities.css` - Utility classes

### Theme and Design System

- `theme.css` - CSS custom properties for theming
- `tokens.css` - Design tokens (colors, spacing, typography)
- `variables.css` - CSS variables and configuration

### Component Styles

- `components/` - Component-specific styles
- `layouts/` - Layout-specific styles
- `pages/` - Page-specific styles

### Responsive Design

- `breakpoints.css` - Media query definitions
- `grid.css` - Grid system utilities
- `responsive.css` - Responsive utilities

## Example Structure

```
styles/
├── globals.css
├── theme/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── shadows.css
├── components/
│   ├── button.css
│   ├── modal.css
│   └── navigation.css
├── layouts/
│   ├── header.css
│   └── sidebar.css
├── utilities/
│   ├── spacing.css
│   ├── text.css
│   └── display.css
└── index.css
```

## Design Tokens Example

```css
/* theme/colors.css */
:root {
  /* Primary colors */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;

  /* Semantic colors */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #06b6d4;

  /* Neutral colors */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-500: #6b7280;
  --color-gray-900: #111827;
}

/* theme/typography.css */
:root {
  /* Font families */
  --font-sans: "Inter", -apple-system, sans-serif;
  --font-mono: "Fira Code", "Monaco", monospace;

  /* Font sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;

  /* Line heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
}

/* theme/spacing.css */
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  --space-16: 4rem;
  --space-32: 8rem;
}
```

## Tailwind CSS Integration

If using Tailwind CSS, this directory might contain:

- `tailwind.config.js` customizations
- Custom Tailwind components
- Utility class extensions

## CSS-in-JS Alternatives

If using styled-components, emotion, or similar:

- Theme provider configurations
- Global style definitions
- Styled component utilities
