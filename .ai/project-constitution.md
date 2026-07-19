# Project Constitution

## Purpose

This repository contains the public website for YSWORKS.

Its purpose is to maintain a clear, fast, accessible, secure, and professional public web presence. The repository should demonstrate engineering quality without exposing proprietary systems, internal operations, private automation, or confidential documentation.

This `.ai/` directory is the public engineering knowledge base for the website. It exists to guide future human developers and AI coding agents as they evolve the repository.

The [Company Bible](../docs/COMPANY_BIBLE.md) and subordinate
[Brand Bible](../docs/BRAND_BIBLE.md) govern company character and identity.
This implementation constitution may not contradict either volume.

## Repository Scope

This repository may contain:

- Public website pages.
- Public copy and metadata.
- Public static assets.
- Public design system foundations.
- Public frontend components.
- Public build, lint, formatting, and deployment configuration.
- Public documentation for maintaining this website.
- Public architecture decisions for this website.

This repository must remain focused on the public web surface.

## Explicit Non-Scope

This repository must not contain private platform details, private operational details, internal implementation material, or confidential roadmap information.

Never expose:

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
- Private or speculative roadmap items.
- Implementation details of internal systems.

If a detail only makes sense because of private YSWORKS systems, it does not belong here.

## Public-Safe Rule

Treat every committed file as public.

Before adding content, ask:

- Would this be safe if indexed by a search engine?
- Does this reveal how a private system works?
- Does this mention internal tooling or infrastructure?
- Does this create a claim that needs evidence?
- Can a future maintainer understand it without private context?

If the answer is uncertain, do not commit the detail.

## Engineering Principles

- Public-safe by default.
- Static-first where possible.
- Minimal surface area.
- Readable code over clever code.
- Accessibility, performance, and security as baseline requirements.
- No fake customers, fake metrics, fake case studies, or invented claims.
- No secrets in source control.
- No unnecessary dependencies.
- Small, reviewable changes.

## AI Agent Rules

AI coding agents working in this repository must:

- Read the `.ai/` documentation before making substantial changes.
- Keep all work scoped to the public website.
- Avoid private implementation details.
- Prefer maintainable, boring engineering decisions.
- Run validation before reporting completion.
- Never commit, push, deploy, or install packages unless explicitly requested.

AI can help maintain this repository, but it must not turn private knowledge into public documentation or code.

## Review Standard

Before merging any change, verify that it:

- Belongs in a public website repository.
- Does not reveal private systems or internal operations.
- Is maintainable by a small engineering team.
- Preserves accessibility, performance, and security expectations.
- Can be explained from the public website context alone.
- Does not depend on invented proof, fake clients, or unsupported claims.

## Change Philosophy

The best changes are narrow, durable, and easy to review.

Prefer improving clarity over adding surface area. Prefer deleting uncertainty over adding abstraction. Prefer public facts over brand theater.
