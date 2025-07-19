# Components Directory

This directory contains reusable React components used throughout the application.

## Structure

- **UI Components**: Basic building blocks like buttons, inputs, modals, etc.
- **Feature Components**: Components specific to business logic and features
- **Layout Components**: Components used for page layouts and structure
- **Common Components**: Shared components used across multiple features

## Guidelines

- Keep components focused and single-responsibility
- Use TypeScript for type safety
- Include proper prop types and interfaces
- Follow consistent naming conventions (PascalCase for component files)
- Consider component composition over inheritance
- Include unit tests for complex components

## Example Structure

```
components/
├── ui/
│   ├── Button/
│   ├── Input/
│   └── Modal/
├── features/
│   ├── UserProfile/
│   └── Dashboard/
└── common/
    ├── Header/
    └── Footer/
```
