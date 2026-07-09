# Coding Standards

## Framework

Use Astro as the primary framework.

Prefer static generation unless a feature clearly requires runtime behavior. Keep pages and components small, explicit, and easy to review.

## TypeScript

- Use strict TypeScript.
- Prefer explicit types for shared data and public interfaces.
- Keep utility functions small and deterministic.
- Avoid broad `any` usage.
- Do not encode private business logic in public code.

## Astro

- Keep route files in `src/pages/`.
- Use `src/layouts/` for document and page layouts.
- Use `src/sections/` for page-level sections.
- Use `src/components/` for reusable components.
- Keep content and structured public data separate from presentation.

## React Islands

Use React islands only when interactivity is required.

Prefer Astro components for static UI. Avoid turning static content into client-side JavaScript without a clear user-facing reason.

## Tailwind CSS

- Use Tailwind for utility-first styling.
- Keep class usage readable.
- Extract repeated UI patterns into components when duplication becomes meaningful.
- Avoid arbitrary values unless they encode a deliberate design decision.
- Do not introduce a final color system until the visual direction is approved.

## Biome

Biome is the formatter and linter.

Run before review:

```sh
pnpm biome check .
```

Use repository formatting rules rather than personal editor defaults.

## Accessibility

- Use semantic HTML.
- Preserve heading order.
- Provide useful link and button text.
- Ensure interactive elements are keyboard accessible.
- Maintain visible focus states.
- Avoid relying on color alone to communicate meaning.
- Keep motion subtle and respectful of reduced-motion preferences.

## Dependencies

Do not install dependencies unless they solve a clear problem and justify their maintenance cost.

Before adding a dependency, prefer platform APIs, Astro features, or a small local implementation.
