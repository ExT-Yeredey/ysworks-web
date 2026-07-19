# Website Information Architecture

## Status

- Version: Public Website v2
- Status: Founder-approved product architecture
- Scope: anonymous Public Website and bounded Client Workspace interface preview

## Product model

YSWORKS presents one ecosystem through three separated products:

1. **Public Website:** anonymous company, service, process, and contact surface
   at `www.ysworks.dev`.
2. **Client Workspace:** future authenticated and tenant-isolated client-facing
   product at `portal.ysworks.dev`. “Client Portal” is its technical
   architecture and security term.
3. **YS AI OS:** private internal operating system with no public routes,
   interface, or implementation detail.

Shared brand and design tokens do not merge their identity, authorization, data,
deployment, or operational boundaries.

## Primary navigation

The Public Website navigation is:

- Home;
- Services;
- Process;
- About;
- Contact;
- language;
- theme;
- a reserved Client Area slot.

The navigation contains no marketing CTA. Chrome navigates; page content
provides conversion paths. The Client Area item remains absent until a real
login exists with approved authentication and server-side authorization.

## Public sitemap

Spanish is canonical at root routes. English uses the `/en/` prefix.

```text
/
/services
/process
/about
/contact
/privacy
/404

/en/
/en/services/
/en/process/
/en/about/
/en/contact/
/en/privacy/
```

Every localized public page has an equivalent language route, self-canonical
URL, reciprocal `hreflang`, accessible language control, and safe fallback.

## Page contracts

### Home

Home is an executive overview. It establishes confidence, preserves the approved
editorial sequence, summarizes rather than exhausts, and routes visitors to
dedicated pages. Every major explanatory section ends with one meaningful
continuation path.

### Services

Services presents Automation, AI Systems, Web Engineering, Infrastructure,
Cybersecurity, Integrations, and Maintenance as separate blocks. Every block
defines the problem, approach, typical outputs, related technology, and a
contact path. It contains no fabricated customers, cases, metrics, testimonials,
prices, or outcomes.

### Process

Process explains Discovery, Architecture, Implementation, Validation, Delivery,
and Continuous Improvement. It makes decision criteria and evidence visible
without decorative timelines or private workflow disclosure.

### About

About defines the company, engineering philosophy, human supervision,
transparency, long-term thinking, and quality principles. It introduces the
Founder as the accountable company authority without turning the page into
personal branding.

### Contact

Contact behaves like the first engineering meeting. It explains collaboration
paths, useful context, fit, realistic response behavior, confidentiality limits,
and common questions. The primary public channel remains
`contact@ysworks.dev`; no form submission is simulated.

### Privacy and 404

Privacy states the real collection posture. The 404 route provides recovery,
language, and theme controls without exposing implementation details.

## Client Workspace route foundation

The repository prepares non-indexed interface-foundation previews for:

```text
/client
/client/dashboard
/client/projects
/client/tasks
/client/files
/client/chat
/client/company
/client/invoices
/client/settings
```

Equivalent English previews use `/en/client...`. These routes:

- remain absent from Public Website navigation;
- clearly state that the Client Workspace is unavailable;
- contain no authentication, sessions, client data, mock business data, or
  private-system connections;
- do not replace the future `portal.ysworks.dev` product;
- cannot be activated as a client service until the Client Portal Foundation is
  implemented and independently reviewed.

The Workspace experience follows the
[Client Experience Constitution](../CLIENT_EXPERIENCE_CONSTITUTION.md)
(*III.VII.1–3; III.XI.1–5*): state before navigation, the five first-screen
questions in constitutional order, an executive-first view, and progressive
disclosure of technical depth.

## Navigation and content rules

- Link only to real public destinations.
- Keep the primary navigation stable and shallow.
- Do not expose YS AI OS, internal dashboards, infrastructure, prompts, agents,
  workflows, logs, secrets, costs, or private client information.
- Do not publish unapproved client claims, cases, logos, metrics, testimonials,
  prices, or outcomes.
- Preserve keyboard navigation, visible focus, WCAG AA contrast, semantic
  structure, reduced motion, and progressive enhancement.
