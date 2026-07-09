# Site Architecture V1

## Purpose

This document defines the public website architecture for YSWORKS Web before building the homepage.

It describes public navigation, page intent, content boundaries, and future-safe structure. It does not describe private systems, internal workflows, YS AI OS architecture, prompts, agents, automation pipelines, infrastructure, or business logic.

## Primary Navigation

Recommended primary navigation:

- Work.
- Services.
- Labs.
- Journal.
- About.
- Contact.

Navigation should be short, stable, and easy to scan. Labels should describe public website destinations, not internal systems.

## Sitemap

Initial public sitemap:

```text
/
/work
/services
/labs
/journal
/about
/contact
```

Future pages may be added only when there is real public content to support them.

## Purpose of Each Page

### Home

Purpose: communicate what YSWORKS is, what kind of public work it does, and how to continue exploring.

The homepage should establish trust through clarity, performance, accessibility, and restraint. It should not try to explain private systems.

### Work

Purpose: present public work only when real, approved, and safe to publish.

Do not create fake case studies, fake clients, fake metrics, fake screenshots, or invented outcomes. If no approved public work exists, the page can explain the type of work YSWORKS does at a high level without naming clients or exposing private methods.

### Services

Purpose: describe public service categories.

The page may describe outcomes such as secure web systems, automation strategy, platform engineering, integration work, performance improvement, and technical consulting at a high level.

It must not describe private workflows, internal system design, proprietary implementation details, or confidential business logic.

### Labs

Purpose: provide a public place for experiments, prototypes, technical notes, and exploratory ideas that are safe to publish.

Labs should show curiosity and engineering taste without revealing private systems or implying production commitments.

### Journal

Purpose: publish public writing, technical notes, engineering observations, and design-system thinking.

Journal content should be factual, durable, and public-safe. Avoid hype, invented authority, and private implementation details.

### About

Purpose: explain YSWORKS at a high level.

The page may cover values, public focus, engineering principles, and working style. It must not expose internal operating systems, private architecture, confidential roadmap, or proprietary processes.

### Contact

Purpose: provide a clear public path for inquiries.

The page should collect minimal information and set expectations plainly. It should not expose private email addresses directly if avoidable.

## User Journey

Primary user journey:

1. Visitor lands on the homepage.
2. Visitor understands the public positioning quickly.
3. Visitor chooses one of three paths:
   - Review public work or work categories.
   - Understand services.
   - Contact YSWORKS.
4. Visitor can optionally explore Labs, Journal, or About for more context.

The journey should be calm and direct. The website should not force users through marketing funnels or excessive interactions.

## Homepage Section Order

Recommended homepage structure:

1. Hero.
2. Public positioning statement.
3. Service categories.
4. Selected public work or work principles.
5. Labs or technical notes preview.
6. Trust principles.
7. Contact call to action.

If there is no approved public work, replace selected work with a concise explanation of work principles. Do not fabricate proof.

## Footer Structure

Recommended footer content:

- YSWORKS wordmark or text mark.
- Primary navigation links.
- Optional secondary links:
  - GitHub.
  - Journal.
  - Contact.
- Legal links when available:
  - Privacy.
  - Terms.
- Copyright or simple year mark.

The footer should remain quiet. It should not become a secondary homepage or contain unsupported claims.

## Public-Safe Content Rules

All public content must be:

- True.
- Maintainable.
- Clear.
- Free of private implementation details.
- Safe if indexed by a search engine.
- Understandable without private context.

Do not publish:

- Fake clients.
- Fake case studies.
- Fake testimonials.
- Fake metrics.
- Fake screenshots.
- Invented partnerships.
- Unsupported awards or certifications.
- Private system diagrams.
- Internal tool names.
- Internal workflow details.

## What Belongs in Labs

Labs may include:

- Public experiments.
- Interface studies.
- Design-system explorations.
- Public technical notes.
- Small prototypes.
- Performance experiments.
- Accessibility experiments.
- Public diagrams that explain general concepts.

Labs must remain clearly exploratory. Labs content should not imply a product roadmap, client work, private platform access, or production availability unless explicitly true and approved.

## What Must Stay Out of the Public Site

The public site must not expose:

- YS AI OS internals.
- Internal architecture.
- AI agents.
- Prompts.
- MCP servers.
- Automation workflows.
- n8n workflows.
- Raspberry infrastructure.
- Internal documentation.
- Automation pipelines.
- Business logic.
- Private security architecture.
- Proprietary engineering processes.
- Future confidential roadmap.
- Implementation details of internal systems.

Artificial intelligence may be mentioned only as a public high-level capability or context. Clients buy outcomes, not models, prompts, agents, or workflows.

## Future Contact Form Notes

A future contact form should be implemented only when the repository is ready for public input handling.

Recommended requirements:

- Use Cloudflare Turnstile for abuse protection.
- Include a honeypot field.
- Add rate limiting at the public edge or API layer.
- Validate all input server-side.
- Collect only necessary information.
- Avoid direct exposure of private email if possible.
- Do not expose internal routing, automation, or workflow details.
- Return generic success and error messages.
- Keep logs minimal and privacy-aware.

Any contact form backend should be treated as a public API boundary. It must not expose private systems or become a proxy to internal operations.

## Implementation Notes

Build pages only when there is real public content.

Prefer static Astro pages. Add client-side JavaScript only when the interaction requires it. Keep public APIs limited to website-specific needs.

Every page should pass the same bar:

- Fast.
- Accessible.
- Public-safe.
- Easy to maintain.
- Honest.
- Minimal.
