# Coding Standards

## Purpose

These standards guide code changes for the YSWORKS public website.

They do not describe private systems or internal implementation details. They define how this public Astro repository should be maintained.

## Framework

Use Astro as the primary framework.

Prefer static generation unless a feature clearly requires runtime behavior. Keep pages and components small, explicit, and easy to review.

## TypeScript

- Use strict TypeScript.
- Prefer explicit types for shared data and public interfaces.
- Keep utility functions small and deterministic.
- Avoid broad `any` usage.
- Do not encode private business logic in public code.
- Keep type definitions close to the data or component they describe unless they are shared.

## Astro

- Keep route files in `src/pages/`.
- Use `src/layouts/` for document and page layouts.
- Use `src/sections/` for page-level sections.
- Use `src/components/` for reusable components.
- Keep content and structured public data separate from presentation.
- Prefer server-rendered or static Astro components for non-interactive UI.

## React Islands

Use React islands only when interactivity is required.

Prefer Astro components for static UI. Avoid turning static content into client-side JavaScript without a clear user-facing reason.

React islands should:

- Have a narrow responsibility.
- Hydrate only when needed.
- Avoid unnecessary client state.
- Avoid private-system coupling.
- Keep props serializable and public-safe.

## Tailwind CSS

- Use Tailwind for utility-first styling.
- Keep class usage readable.
- Extract repeated UI patterns into components when duplication becomes meaningful.
- Avoid arbitrary values unless they encode a deliberate design decision.
- Do not introduce a final color system until the visual direction is approved.
- Prefer CSS and semantic markup over JavaScript-driven styling.

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
- Test keyboard navigation for new interactive UI.

## Performance

Performance is a product requirement.

- Prefer static HTML.
- Keep client-side JavaScript minimal.
- Avoid unnecessary React islands.
- Use CSS for presentation and simple state where possible.
- Keep images optimized and appropriately sized.
- Avoid layout shifts.
- Do not add dependencies for small UI behavior.

## Security

- Treat every committed file as public.
- Never commit secrets or private configuration.
- Keep environment examples safe.
- Validate and sanitize any future user input.
- Do not expose private systems through public API routes or client code.

## Dependencies

Do not install dependencies unless they solve a clear problem and justify their maintenance cost.

Before adding a dependency, prefer:

- Platform APIs.
- Astro features.
- Existing dependencies.
- A small local implementation.

Any dependency addition should explain the tradeoff.

## Validation

Run before reporting completion:

```sh
pnpm astro check
pnpm biome check .
pnpm build
```

For documentation-only changes, `pnpm astro check` and `pnpm biome check .` are sufficient unless the change affects build behavior.
