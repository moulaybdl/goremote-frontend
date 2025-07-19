# Layouts Directory

This directory contains layout components that define the overall structure and arrangement of pages.

## Purpose

- Define consistent page layouts across the application
- Provide reusable layout components for different page types
- Handle common layout elements (navigation, sidebar, footer)
- Implement responsive design patterns
- Manage layout-specific state and behavior

## Guidelines

- Create layout components for different page types
- Use composition patterns for flexible layouts
- Implement responsive design with mobile-first approach
- Handle navigation and routing within layouts
- Consider accessibility in layout design
- Use semantic HTML elements for better SEO

## Common Layout Types

### Main Layouts

- `DefaultLayout` - Standard layout with header, main content, and footer
- `AuthLayout` - Layout for authentication pages (login, register)
- `DashboardLayout` - Layout with sidebar navigation for admin/dashboard pages
- `LandingLayout` - Layout for marketing/landing pages

### Specialized Layouts

- `BlankLayout` - Minimal layout with no navigation
- `PrintLayout` - Layout optimized for printing
- `ModalLayout` - Layout for modal content
- `ErrorLayout` - Layout for error pages

## Example Structure

```
layouts/
├── DefaultLayout/
│   ├── index.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Sidebar.tsx
├── AuthLayout/
│   └── index.tsx
├── DashboardLayout/
│   └── index.tsx
└── index.ts (barrel exports)
```

## Example Implementation

```typescript
// DefaultLayout/index.tsx
interface DefaultLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  title?: string;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  showSidebar = false,
  title,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title={title} />
      <div className="flex flex-1">
        {showSidebar && <Sidebar />}
        <main className="flex-1 p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
```

## Usage in Next.js

Layouts can be applied at the page level or using Next.js 13+ app directory layout patterns.
