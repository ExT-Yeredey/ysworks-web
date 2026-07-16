# YSWORKS Design System V1

## 1. Design Philosophy

YSWORKS should feel modern, elegant, calm, technical, and trustworthy.

The visual language should be inspired by the restraint and precision of Vercel, Linear, Cloudflare, Apple, and Anthropic. The result should communicate engineering quality without becoming decorative, loud, or trend-driven.

The system should favor:

- Clear hierarchy.
- Quiet confidence.
- Fast comprehension.
- Strong typography.
- Precise spacing.
- Minimal visual noise.
- Durable design decisions.

The public website should never feel flashy. It should feel composed, stable, and technically mature.

## 2. Typography

### Primary Font

Use Inter as the primary interface font.

Inter is readable at small sizes, widely supported, neutral, and appropriate for technical products. It works well for dense interface text and polished editorial presentation without calling attention to itself.

### Monospace Font

Use a modern monospace font for code-like text, technical labels, and system-style details.

Recommended options:

- JetBrains Mono.
- IBM Plex Mono.
- Geist Mono.
- SF Mono as a system fallback.

The monospace font should be used sparingly. It should support technical emphasis, not define the entire brand.

### Font Scale

Use a restrained, modular scale:

- 12px: metadata, captions, compact labels.
- 14px: secondary UI text.
- 16px: default body text.
- 18px: large body text and short lead text.
- 24px: section headings.
- 32px: page headings.
- 48px: primary hero heading on larger screens.
- 64px: maximum display size, used rarely.

Avoid oversized type unless the content requires it. The site should feel precise, not theatrical.

### Heading Hierarchy

Headings should create a clear document outline:

- `h1`: one per page, used for the primary page subject.
- `h2`: major sections.
- `h3`: subsection headings.
- `h4` and below: only when the content structure requires additional depth.

Heading text should be concise. Avoid marketing-heavy phrasing.

### Paragraph Sizing

Default paragraph text should be 16px on mobile and desktop.

Long-form text may use 17px or 18px when the layout supports it. Secondary text may use 14px. Captions and metadata may use 12px.

### Line Heights

Use generous but controlled line heights:

- Headings: 1.05 to 1.2.
- Body text: 1.55 to 1.7.
- UI labels: 1.2 to 1.4.
- Metadata: 1.3 to 1.5.

Readable text matters more than visual density.

## 3. Color System

The Founder-approved [YSWORKS Design Tokens v1.0](../docs/design/YSWORKS_DESIGN_TOKENS_V1.md)
are the permanent color foundation for every YSWORKS product and communication
surface.

Primary 500, `#6D5EF7`, is the official YSWORKS brand color. The primary scale
is:

- Primary 50: `#F4F2FF`.
- Primary 100: `#E8E4FF`.
- Primary 200: `#D2CAFF`.
- Primary 300: `#B7A8FF`.
- Primary 400: `#947EFF`.
- Primary 500: `#6D5EF7`.
- Primary 600: `#5A4DE6`.
- Primary 700: `#493DD0`.
- Primary 800: `#382FA8`.
- Primary 900: `#261F73`.

Hover uses `#7A6CFF`, active uses `#5A4DE6`, and visible focus uses
`#8A7DFF`. Glow, soft-surface, and accent-border treatments use the opacity
tokens in the governed contract. Implementations consume semantic roles rather
than embedding raw values in components.

### Neutral Palette

The neutral palette should carry most of the interface. The official dark
foundation is Background `#09090B`, Surface `#111114`, Surface Alt `#17171C`,
Border `#24242A`, Text `#F5F5F7`, and Muted `#A1A1AA`.

It should include:

- Background.
- Surface.
- Surface elevated.
- Border subtle.
- Border strong.
- Text primary.
- Text secondary.
- Text muted.
- Text disabled.

The neutral system should support both dark-first presentation and strong readability. Avoid a single-tone dark interface where every surface feels the same.

### Accent Palette

YSWORKS Purple should be used sparingly.

Accent usage may include:

- Primary calls to action.
- Active navigation states.
- Focus indicators.
- Small visual anchors.
- Important but non-critical highlights.

Do not rely on accent color to create visual interest across the whole site. The design should still work when accents are minimal.

### Semantic Colors

Semantic colors should communicate state and feedback.

They must be distinct from decorative accents and must meet accessibility requirements.

### Success

Use success color for completed actions, confirmed states, and positive system feedback.

Success should not be used as a general decorative green.

### Warning

Use warning color for states that require attention but are not failures.

Warnings should be clear, calm, and not overly alarming.

### Error

Use error color for failed actions, invalid input, destructive states, and critical feedback.

Error states must be supported by text, not color alone.

### Information

Use information color for neutral guidance, notices, and contextual system messages.

Information should feel helpful rather than promotional.

## 4. Spacing System

Use a consistent spacing scale based on 4px increments.

Recommended scale:

- 4px.
- 8px.
- 12px.
- 16px.
- 24px.
- 32px.
- 48px.
- 64px.
- 96px.
- 128px.

Small spacing should handle UI density. Larger spacing should define page rhythm and section separation.

Spacing should create clarity, not emptiness. Avoid layouts that depend on excessive whitespace to feel premium.

## 5. Radius

Border radius should be restrained.

Recommended philosophy:

- 4px for small controls and technical UI.
- 6px to 8px for cards, panels, and common containers.
- 12px only for larger featured surfaces when justified.
- Fully rounded shapes only for avatars, status dots, toggles, and circular icon buttons.

Avoid overly rounded cards and soft shapes that make the interface feel casual.

## 6. Shadows

Use shadows minimally.

The default interface should rely on contrast, borders, spacing, and surface color rather than heavy elevation.

Appropriate shadow usage:

- Subtle overlays.
- Menus.
- Modals.
- Focused floating controls.

Avoid large soft shadows, glow effects, and decorative depth.

## 7. Motion

Motion should be subtle, fast, and functional.

### Duration

Recommended durations:

- 100ms to 150ms for hover and focus transitions.
- 150ms to 220ms for small UI state changes.
- 220ms to 320ms for larger entrance or layout transitions.

Avoid long animations that delay comprehension.

### Easing

Use natural easing curves:

- Ease-out for entrances.
- Ease-in for exits.
- Ease-in-out for state changes.

Motion should feel responsive and quiet.

### Hover Transitions

Hover states should be immediate and restrained.

Acceptable hover changes:

- Slight color shift.
- Border emphasis.
- Text color change.
- Subtle background change.
- Small transform only when it improves affordance.

Avoid bounce, exaggerated scale, rotation, or decorative motion.

### Loading Animations

Loading states should be simple.

Use:

- Skeletons for content loading.
- Small progress indicators for actions.
- Minimal opacity or shimmer effects only when necessary.

Loading animation must not distract from the task.

Respect reduced-motion preferences.

## 8. Iconography

Use thin, geometric, consistent line icons.

Recommended style:

- 1.5px to 2px stroke.
- Rounded line caps.
- Simple silhouettes.
- Consistent optical size.
- No filled decorative icon sets unless required by context.

Icons should clarify actions and structure. They should not become decoration.

Use labels when an icon alone may be ambiguous.

## 9. Accessibility

Accessibility is a baseline requirement.

### Contrast

All text and meaningful UI elements must meet WCAG contrast expectations.

Do not use low-contrast gray text for important content.

### Keyboard Navigation

All interactive elements must be reachable and usable with a keyboard.

Focus states must be visible and consistent.

### Reduced Motion

Respect `prefers-reduced-motion`.

Animations should be disabled or simplified when reduced motion is requested.

### Semantic HTML

Use semantic elements before custom abstractions:

- `header`.
- `nav`.
- `main`.
- `section`.
- `article`.
- `footer`.
- Native buttons and links.

Do not use generic elements where native semantics are available.

## 10. Responsive Strategy

Use a mobile-first approach.

Start with the smallest viewport and progressively enhance layout as space increases.

### Breakpoints

Recommended breakpoint model:

- Small: 480px.
- Medium: 768px.
- Large: 1024px.
- Extra large: 1280px.
- Wide: 1536px.

Breakpoints should respond to layout needs, not device assumptions.

### Container Widths

Recommended maximum widths:

- Text content: 680px to 760px.
- Standard content: 960px to 1120px.
- Wide layout: 1200px to 1280px.

Line length should remain readable. Do not stretch paragraphs across wide screens.

## 11. Component Principles

Components should be reusable, composable, accessible, and simple.

Build components when they reduce duplication or clarify intent. Avoid creating a component abstraction for a one-off layout unless it improves readability.

Component rules:

- Keep APIs small.
- Prefer composition over configuration.
- Make accessibility part of the component contract.
- Keep visual variants limited.
- Avoid hidden behavior.
- Avoid coupling public UI components to private systems or business logic.

Components should be easy to inspect, test, replace, and delete.

## 12. UX Principles

The website should keep users focused.

Prioritize:

- Content first.
- Performance first.
- Clear hierarchy.
- Predictable navigation.
- Fast page loads.
- Minimal interaction cost.
- Honest public information.

Avoid:

- Decorative complexity.
- Excessive animation.
- Overdesigned layouts.
- Unnecessary JavaScript.
- Invented credibility signals.
- Content that depends on private implementation details.

The best version of the YSWORKS website should feel quiet, capable, and exact.

## 13. Performance Principles

Performance is a feature.

The public website should feel immediate because the implementation is simple, static, and careful.

### Render Performance

- Prefer static HTML over client-rendered UI.
- Avoid layout shifts.
- Keep above-the-fold rendering predictable.
- Use semantic markup that renders well before JavaScript loads.
- Avoid animation or effects that degrade scrolling.

### Bundle Size

- Treat JavaScript as a cost.
- Keep React islands rare and focused.
- Avoid large dependencies for small interactions.
- Review bundle impact before adding visual libraries.
- Ship only what the page needs.

### CSS Over JavaScript

Use CSS for:

- Layout.
- Responsive behavior.
- Hover and focus states.
- Simple transitions.
- Visual state where possible.

Use JavaScript only when the interaction cannot be expressed reliably with HTML and CSS.

### Progressive Enhancement

The website should remain understandable when JavaScript is delayed, disabled, or fails.

Interactive features should enhance the baseline experience rather than replace it.

### Static Generation

Prefer static generation for public pages.

Static output improves speed, reliability, hosting simplicity, and security posture.

### Minimal Client-Side JavaScript

Client-side JavaScript should be intentional.

Before adding it, ask:

- What user problem does this solve?
- Can Astro, HTML, or CSS solve it instead?
- Does it improve the public experience enough to justify the cost?
- Does it expose any private assumptions?

## 14. Trust Principles

Trust is built through engineering quality, not fake marketing.

YSWORKS should earn trust through:

- Clear public documentation.
- Consistent interface behavior.
- Accessible implementation.
- Secure defaults.
- Fast pages.
- Honest language.
- Maintainable code.
- Transparent public boundaries.

Do not invent clients, outcomes, metrics, certifications, partnerships, case studies, or internal capabilities.

## 15. Writing Style

Public writing should be short, factual, and calm.

Rules:

- Use short sentences.
- Avoid buzzwords.
- Prefer facts.
- Explain outcomes.
- Never exaggerate.
- Never invent clients.
- Never invent achievements.
- Avoid vague claims such as "revolutionary" or "world-class".
- Keep technical language understandable.

Writing should sound like an engineer explaining what is true.

## 16. AI Philosophy

Artificial intelligence is an implementation detail.

Clients buy outcomes. They do not buy models, prompts, agents, or internal workflows.

AI should only be visible on the public website when it improves understanding for the reader. It should not expose private systems or turn internal methods into marketing claims.

Use AI language carefully:

- Explain outcomes before mechanisms.
- Avoid naming private tools or architectures.
- Do not imply capabilities that are not public and verifiable.
- Do not reveal prompts, agent design, workflows, or internal automation.

## 17. Photography & Visual Assets

Visual assets should feel original, precise, and intentional.

Avoid:

- Fake offices.
- Fake people.
- Generic stock photography.
- Artificial corporate imagery.
- Overly polished scenes with no product relevance.
- Images that imply clients, team size, offices, or capabilities that are not public facts.

Prefer:

- Original graphics.
- Interface previews.
- Diagrams.
- Abstract compositions.
- Custom illustrations.
- Product-adjacent visuals that clarify the public website message.

Assets should support trust and comprehension. They should not create false proof.
