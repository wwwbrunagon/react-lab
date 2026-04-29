#### React-Lab: Multi-project React workspace with internal routing

A system where:

- Each project lives in its own folder
- Each project defines its own metadata + page
- The app auto-discovers projects
- Navigation and routing are generated from data

##### Folder structure (baseline)

```
src/
  core/
    types.ts
    registry.ts
  projects/
    project-1/
      Project1Page.tsx
      index.ts
    project-2/
      Project2Page.tsx
      index.ts
  pages/
    Home.tsx
  router/
    AppRouter.tsx
  main.tsx
```

This separation is intentional:

- `core` → shared system logic
- `projects` → plugins
- `pages` → app-level pages (Home, etc.)
- `router` → routing only
