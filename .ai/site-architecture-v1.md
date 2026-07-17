# User Experience Foundation v1.1

## Status and scope

This governed source defines the experience foundation for YSWORKS Public
Website v2 and the bounded visual preparation of the future Client Portal. It
does not authorize production deployment, authentication, backend access,
Cloudflare or DNS changes.

The complete route and content contract is maintained in
[Website Information Architecture](../docs/business/WEBSITE_INFORMATION_ARCHITECTURE.md).

## Product separation

The ecosystem contains three distinct products:

1. the anonymous Public Website;
2. the future authenticated Client Portal;
3. the private YS AI OS.

Users must never be led to believe that a public preview is an authenticated
portal or that YS AI OS is a customer product. Shared visual language does not
merge information, identity, authorization, or trust boundaries.

## Public navigation

The stable navigation is Home, Services, Process, About, Contact, language, and
theme. It contains no primary marketing button. Content provides contextual
conversion paths.

A Client Area slot is reserved internally but remains invisible until a real
login exists with approved authentication, server-side tenant authorization,
session handling, client isolation, and security review.

## Public journeys

### Home

Home is an executive overview. It establishes the company position, summarizes
the editorial sequence, and provides one clear continuation from every major
section. It does not attempt to explain every service or internal capability.

### Services

Services supports deliberate comparison. Every service states the problem,
approach, typical outputs, related technologies, and a path to Contact. Public
technology names illustrate relevant capability without exposing private
architecture.

### Process

Process explains how decisions progress through Discovery, Architecture,
Implementation, Validation, Delivery, and Continuous Improvement. Structure and
evidence carry the story; decorative timelines are not required.

### About

About establishes engineering philosophy, human supervision, transparency,
long-term thinking, quality, and Founder accountability without becoming a
personal-brand page.

### Contact

Contact should feel like the first engineering meeting. It sets out ways to
collaborate, project fit, useful initial context, confidentiality limits, and
realistic next steps. Email remains the only active submission channel until a
protected form boundary exists.

## Client Portal preview rules

Non-indexed visual route previews may demonstrate hierarchy and responsive
composition. They must:

- state that the portal is unavailable;
- contain no sign-in simulation, session, client record, metric, invoice,
  message, document, or business placeholder;
- remain absent from Public Website navigation;
- provide no connection to PostgreSQL, GitHub, Notion, Drive, n8n, YS AI OS, or
  another private source;
- avoid implying that a public path is the production portal boundary.

## Bilingual and responsive behavior

Spanish remains canonical at root paths and English uses `/en/`. Equivalent
routes preserve context when changing language. Navigation, footer, controls,
empty states, privacy text, and error recovery are authored naturally in both
languages.

All experiences are designed from 375px upward, reflow without horizontal page
scroll, preserve readable measure, and use touch targets appropriate to their
context.

## Accessibility

WCAG 2.2 AA is the product baseline. Semantic landmarks, heading order, visible
focus, keyboard access, useful names, state parity, contrast, zoom, reflow, and
reduced motion are required. JavaScript failure must not hide content or remove
essential navigation.

## Motion

Motion follows the approved hierarchy:

1. CSS for simple presentation and states;
2. WAAPI for simple imperative global interactions;
3. IntersectionObserver for visibility;
4. requestAnimationFrame only for genuine scroll synchronization;
5. Anime.js v4 for approved coordinated Public Website choreography.

No additional animation library is permitted. Motion is progressive, restrained,
interruptible, and dynamically responds to `prefers-reduced-motion`. This
Public Website stack is not automatically the Client Portal or YS AI OS motion
architecture.

## Public-safety rules

Do not publish fake clients, cases, testimonials, metrics, screenshots,
partnerships, prices, outcomes, or certifications. Do not expose YS AI OS,
internal dashboards, prompts, agents, workflows, infrastructure, secrets, logs,
private costs, business logic, client data, or private security architecture.
