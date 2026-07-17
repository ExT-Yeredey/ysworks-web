# YSWORKS UI Component Library

## Scope

This directory contains public-safe, reusable Astro components. Components are
presentation and interaction primitives only. They contain no backend access,
private-system coupling, business records, metrics, or production claims.

Import individual components from their category or use `index.ts` as the
library entry point.

## Catalog

- Layout: `Navbar`, `Footer`, `Section`, `Container`, `Grid`.
- Buttons: `Button` with `primary`, `secondary`, `ghost`, and `text` variants.
- Cards: `ServiceCard`, `ProcessCard`, `TechnologyCard`, `CtaCard`, and the
  composable `Card` primitive.
- Content patterns: `Faq` and `Process` compose accessible primitives without
  embedding business content.
- Typography: `HeroTitle`, `SectionTitle`, `Paragraph`, `MonoEyebrow`, `Quote`.
- Icons: `Icon` provides the approved interface for decorative and labelled
  interface symbols.
- Interactive: `Accordion`, `Tabs`, `Modal`, `CopyButton`, `ThemeToggle`.
- Visual: `Diagram`, `DiagramNode`, `DiagramConnector`, `Timeline`, `Badge`,
  `StatusPill`, `Divider`.
- Effects: `Glow`, `Noise`, `Glass`, `Border`.

Compound components must be composed with their required children:

- `Accordion` contains one or more `AccordionItem` components.
- `Tabs` contains `TabsList`, `Tab`, and corresponding `TabPanel` components.
- `Timeline` contains `TimelineItem` components.
- `Diagram` contains diagram nodes and connectors.

## Contracts

- Use semantic heading levels in document order; typography components do not
  infer page structure.
- Give every tab and panel a unique matching `id`, `controls`, and `labelledby`
  relationship.
- Open a modal with an element whose `data-modal-open` value matches the modal
  `id`. Modal close controls use `data-modal-close`.
- Provide localized labels for navigation, modal controls, copying, themes, and
  tab lists.
- Decorative icons omit a label and remain hidden from assistive technology;
  meaningful standalone icons require a localized `label`.
- Do not put secrets or restricted values in `CopyButton`.
- Use status text with `Badge` or `StatusPill`; color never carries meaning
  alone.
- Preserve the global theme and token imports from `src/styles/global.css`.

## Accessibility

Native elements provide the baseline behavior. Interactive components preserve
keyboard operation, visible focus, programmatic names, state attributes, and
reduced-motion behavior. Consumers remain responsible for meaningful content,
heading order, unique identifiers, and testing the composed page at WCAG 2.2 AA.

## Animation

Anime.js is the only third-party JavaScript animation dependency and is reserved
for coordinated landing-page choreography, SVG drawing, and complex timelines.
CSS owns simple states; WAAPI owns simple imperative global interactions;
IntersectionObserver owns visibility; and `requestAnimationFrame` is limited to
genuine scroll synchronisation. Motion is progressive and responds to dynamic
changes in `prefers-reduced-motion` without replaying completed entrances.

`ClientRouter` remains the governed route-transition implementation for V1. A
later bounded migration may replace it with native MPA View Transitions only
after history, focus, theme, ES/EN navigation, back/forward, script lifecycle,
and reduced-motion behavior pass compatibility QA.

## Themes

All components consume semantic tokens from `src/styles/theme.css` and support
both `[data-theme="dark"]` and `[data-theme="light"]`. `ThemeToggle` provides an
accessible Dark/Light menu. A first visit resolves the operating-system
preference without storing it; an explicit Dark or Light selection is persisted
across ES/EN routes. Dark is the fallback when no preference can be resolved.

## Governed client-area navigation

`Navbar` exposes an optional `clientArea` entry but renders no placeholder when
it is absent. It may be supplied only when a real private route exists with
approved authentication, server-side tenant authorization, session and logout
handling, client-data isolation, and no exposure of YS AI OS internals. The
future destination may present authorized project, conversation, task,
deliverable, document, proposal, invoice, support, service, integration, and
operational views; none of these responsibilities are implemented by this
public component library.
