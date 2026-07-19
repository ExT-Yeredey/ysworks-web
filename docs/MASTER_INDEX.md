# YSWORKS Master Documentation Index

## Purpose

This is the complete searchable inventory of maintained Markdown documentation
in the public `ysworks-web` repository. It provides discovery metadata only. It
does not create or change authority.

Use the [Authority Map](navigation/AUTHORITY_MAP.md) to resolve precedence and
the [Document Graph](navigation/DOCUMENT_GRAPH.md) to understand relationships.

## Ten-Minute Engineer Onboarding

| Time | Read | Outcome |
| --- | --- | --- |
| 0–1 min | [Repository README](../README.md) | Understand repository purpose, stack, and boundaries |
| 1–2 min | [Documentation Navigation](navigation/README.md) | Locate the maintained maps |
| 2–4 min | [Authority Map](navigation/AUTHORITY_MAP.md) | Know which documents govern and how conflicts stop |
| 4–6 min | [Document Map](navigation/DOCUMENT_MAP.md) | Choose the reading path for the task |
| 6–8 min | [Architecture Map](navigation/ARCHITECTURE_MAP.md) | Understand public, client, and private system boundaries |
| 8–10 min | Applicable domain index and [Open Decisions](business/OPEN_DECISIONS.md) | Identify current rules and unresolved gates |

Before changing code, also read the
[Engineering Knowledge Base](../.ai/README.md), applicable accepted ADRs, and
the [Production Design System](../design-system/README.md).

## Search Guide

Use stable canonical names from the [Glossary](navigation/GLOSSARY.md). Search
aliases are listed below so historical filenames do not hide current meaning.

```sh
rg -n "term" README.md docs .ai design-system branding
rg -n "Open Decisions|Status:|Scope:" docs .ai
rg -n "Client Workspace|Client Portal|Tenant|Approval" docs
```

| Search intent | Recommended terms |
| --- | --- |
| Company constitution | `Company Bible`, `Volume I`, `I.` |
| Identity and brand | `Brand Bible`, `Volume II`, `II.`, `Design Authorities` |
| Client experience | `Client Experience Constitution`, `Volume III`, `III.` |
| Enterprise structure | `Enterprise Architecture`, `EA` |
| Company operations | `Operating Manual`, `YSW-OPS-MAN`, `quality gates` |
| Client product | `Client Workspace`, `Client Portal`, `tenant`, `projection` |
| Authority and automation | `HumanSeat`, `mandate`, `ApprovalRequest`, `ExecutionAuthorisation` |
| Domain data | `Canonical Domain Model`, `WorkItem`, `AuditEvent`, `ActivityEvent` |
| Public platform | `Secure Public Platform`, `webhook`, `Cloudflare`, `exposure` |
| Website product | `Master PRD`, `Website Information Architecture`, `Product` |
| Design implementation | `Design Tokens`, `Production Design System`, `components` |
| Historical sales filename | `SALES_FUNNEL.md`, `Client Journey Operational Map` |
| Unresolved matter | `Open Decisions`, `open`, `not selected`, `future` |

## Constitutional And Enterprise Foundation

| Document | Class | Topics |
| --- | --- | --- |
| [Documentation Index](README.md) | Primary documentation entry | authority, reading order, maintenance |
| [Company Bible](COMPANY_BIBLE.md) | Constitutional Volume I | company, mission, behaviour, authority, AI |
| [Brand Bible](BRAND_BIBLE.md) | Constitutional Volume II | identity, colour, typography, motion, monogram |
| [Client Experience Constitution](CLIENT_EXPERIENCE_CONSTITUTION.md) | Constitutional Volume III | journey, Workspace, delivery, support, reputation |
| [Enterprise Architecture](YSWORKS_ENTERPRISE_ARCHITECTURE.md) | Enterprise foundation | layers, domains, systems, information, security |
| [Master Specification](YSWORKS_MASTER_SPEC.md) | Product and ecosystem specification | services, technology, decisions, vocabulary |
| [Founder Handbook](FOUNDER_HANDBOOK.md) | Human operating handbook | judgement, quality, security, human–AI collaboration |
| [Operating Manual](OPERATING_MANUAL.md) | Operational manual | daily work, lifecycle, quality gates, incidents, knowledge, closure |
| [Master Index](MASTER_INDEX.md) | Search and inventory layer | discovery, aliases, complete document list |

## Architecture

| Document | Class | Topics |
| --- | --- | --- |
| [Architecture Index](architecture/README.md) | Folder index | foundations, system designs, publication boundary |
| [Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md) | Domain foundation | domains, exposure, TLS, Cloudflare, webhooks |
| [Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md) | Domain foundation | Workspace, roles, tenant isolation, approvals, privacy |
| [Authority, Mandate, Approval And Audit System](architecture/AUTHORITY_MANDATE_APPROVAL_AUDIT_SYSTEM.md) | System design | actors, authority, mandates, policy, audit, risk |
| [Canonical Domain Model](architecture/CANONICAL_DOMAIN_MODEL.md) | System design | entities, ownership, tenancy, lifecycles, projections |

## Company Documentation

| Document | Class | Topics |
| --- | --- | --- |
| [Company Documentation Index](company/README.md) | Folder index | company policies, templates, open boundaries |
| [Company Profile](company/company-profile.md) | Operational profile | company, delivery model, public boundaries |
| [Capability Statement](company/capability-statement.md) | Capability record | services, evidence, engagement boundary |
| [Brand Book](company/brand-book.md) | Operational brand entry | brand application, constitutional citations |
| [Visual Identity](company/visual-identity.md) | Identity construction policy | monogram, assets, construction, approval |
| [Client Onboarding](company/client-onboarding.md) | Client policy | entry, access, records, exit gate |
| [Proposal Template](company/proposal-template.md) | Commercial template | scope, deliverables, responsibilities, approval |
| [Quotation Template](company/quotation-template.md) | Commercial template | priced scope, payment events, acceptance |
| [Delivery Process](company/delivery-process.md) | Delivery policy | understanding, design, validation, release, handover |
| [Project Lifecycle](company/project-lifecycle.md) | Delivery policy | project states, progress, pause, closure |
| [Communication Policy](company/communication-policy.md) | Relationship policy | channels, records, meetings, escalation |
| [Quality Policy](company/quality-policy.md) | Quality policy | quality plan, definition of done, non-conformance |
| [Maintenance Policy](company/maintenance-policy.md) | Continuing-service policy | responsibilities, tiers, exclusions, review |
| [Support Policy](company/support-policy.md) | Support policy | query, request, incident, critical incident |

## Business And Website Strategy

| Document | Class | Topics |
| --- | --- | --- |
| [Business Foundation Index](business/README.md) | Folder index | public business and website strategy |
| [Company Vision](business/COMPANY_VISION.md) | Supporting summary | constitutional company direction |
| [Brand Positioning](business/BRAND_POSITIONING.md) | Public positioning | audience, tone, promises, boundaries |
| [Master PRD](business/MASTER_PRD.md) | Website product requirements | users, journeys, conversions, success |
| [Service Catalog](business/SERVICE_CATALOG.md) | Public service mapping | launch services, maintenance, boundaries |
| [Website Information Architecture](business/WEBSITE_INFORMATION_ARCHITECTURE.md) | Website structure | sitemap, pages, routes, Client Workspace foundation |
| [Trust And Transparency](business/TRUST_AND_TRANSPARENCY.md) | Proof policy | evidence, claims, disclosure, prohibited proof |
| [Business Open Decisions](business/OPEN_DECISIONS.md) | Decision register | unresolved and settled business gates |
| [Target Customers](business/TARGET_CUSTOMERS.md) | Audience strategy | customer fit, needs, exclusions |
| [Content Strategy](business/CONTENT_STRATEGY.md) | Content policy | themes, proof, case studies, publication |
| [SEO Strategy](business/SEO_STRATEGY.md) | Search strategy | metadata, routes, language, technical SEO |
| [Lead Generation](business/LEAD_GENERATION.md) | Contact strategy | forms, contact, conversion quality |
| [Client Journey Operational Map](business/SALES_FUNNEL.md) | Journey mapping | discovery, qualification, agreement, delivery, exit |
| [Portfolio Strategy](business/PORTFOLIO_STRATEGY.md) | Proof and portfolio policy | projects, case studies, open-source work |
| [Product Integration](business/PRODUCT_INTEGRATION.md) | Product boundary map | public products, private systems, integration order |
| [Business Roadmap](business/BUSINESS_ROADMAP.md) | High-level roadmap | presence, content, leads, products, scale |
| [Acceptance Criteria](business/ACCEPTANCE_CRITERIA.md) | Website review checklist | structure, SEO, UX, accessibility, readiness |

## Design Governance And Implementation

| Document | Class | Topics |
| --- | --- | --- |
| [Approved Design Authorities](design/README.md) | Authority registry | versions, sources, precedence, product separation |
| [Design Tokens v1.0](design/YSWORKS_DESIGN_TOKENS_V1.md) | Governed token specification | colour, surfaces, interaction, products |
| [Production Design System Index](../design-system/README.md) | Implementation index | product boundary, maintenance |
| [Design-System Tokens](../design-system/tokens.md) | Implementation contract | CSS variables, semantic tokens, themes |
| [Spacing](../design-system/spacing.md) | Implementation contract | rhythm, section spacing, gaps |
| [Typography](../design-system/typography.md) | Implementation contract | type roles, measures, hierarchy |
| [Motion](../design-system/motion.md) | Implementation contract | motion tokens, reduced motion, Anime.js boundary |
| [Components](../design-system/components.md) | Implementation contract | component states, buttons, cards, controls |
| [Layout](../design-system/layout.md) | Implementation contract | containers, grid, responsive composition |
| [Accessibility](../design-system/accessibility.md) | Implementation contract | semantics, keyboard, contrast, testing |
| [Design-System Branding](../design-system/branding.md) | Implementation contract | logo, colour, product separation |

## Branding Asset Structure

| Document | Class | Topics |
| --- | --- | --- |
| [Branding Assets Index](../branding/README.md) | Asset governance | ownership, structure, approval gate |
| [Logo Masters](../branding/logo/README.md) | Future asset location | vector masters, lock-ups |
| [Identity Icons](../branding/icons/README.md) | Future asset location | favicon, app icons |
| [Brand Templates](../branding/templates/README.md) | Future asset location | documents, presentations |
| [Brand Exports](../branding/exports/README.md) | Future asset location | generated approved formats |

## Engineering Knowledge And ADRs

| Document | Class | Topics |
| --- | --- | --- |
| [Engineering Knowledge Base](../.ai/README.md) | Engineering index | reading order, boundaries, ADRs |
| [Project Constitution](../.ai/project-constitution.md) | Repository engineering policy | project rules, authority links |
| [Product](../.ai/product.md) | Public Website product guide | users, outcomes, scope |
| [Architecture](../.ai/architecture.md) | Public Website architecture guide | Astro, components, deployment integration |
| [Coding Standards](../.ai/coding-standards.md) | Engineering standard | TypeScript, Astro, quality |
| [Security](../.ai/security.md) | Engineering security guide | public safety, secrets, boundaries |
| [Writing Style](../.ai/writing-style.md) | Content implementation guide | voice, clarity, bilingual copy |
| [Engineering Glossary](../.ai/glossary.md) | Implementation glossary | repository-specific terms |
| [Brand Kit V1](../.ai/brand-kit-v1.md) | Historical supporting source | operational visual values |
| [Branding Guidance](../.ai/branding.md) | Engineering brand guide | brand implementation |
| [Design System Principles](../.ai/design-system.md) | Supporting source | design philosophy |
| [Design System V1](../.ai/design-system-v1.md) | Founder-approved source mapping | UX and design-system source |
| [Site Architecture V1](../.ai/site-architecture-v1.md) | UX Foundation source | routes, content, responsive UX |
| [ADR-001](../.ai/decisions/ADR-001.md) | Accepted ADR | Astro |
| [ADR-002](../.ai/decisions/ADR-002.md) | Accepted ADR | Cloudflare Pages |
| [ADR-003](../.ai/decisions/ADR-003.md) | Accepted ADR | engineering-first branding |
| [ADR-004](../.ai/decisions/ADR-004.md) | Accepted ADR | private YS AI OS boundary |

## Navigation And Repository Entry Points

| Document | Class | Topics |
| --- | --- | --- |
| [Navigation Hub](navigation/README.md) | Navigation index | maps and maintenance |
| [Document Map](navigation/DOCUMENT_MAP.md) | Repository map | areas, naming boundaries, reading paths |
| [Document Graph](navigation/DOCUMENT_GRAPH.md) | Relationship map | authority, conformance, support, implementation |
| [Architecture Map](navigation/ARCHITECTURE_MAP.md) | Architecture navigation | systems, contracts, trust boundaries |
| [Authority Map](navigation/AUTHORITY_MAP.md) | Authority navigation | precedence, scope, conflict handling |
| [Dependency Map](navigation/DEPENDENCY_MAP.md) | Change-impact navigation | dependencies, consumers, review sets |
| [Glossary](navigation/GLOSSARY.md) | Canonical term router | company, architecture, domain entities |
| [Acronym Index](navigation/ACRONYM_INDEX.md) | Abbreviation router | ADR, EA, API, security, recovery |
| [Repository README](../README.md) | Repository entry | stack, folders, development, routes |
| [UI Component Library](../src/components/README.md) | Implementation index | layouts, primitives, sections, conventions |

## Completeness Rule

Every maintained Markdown file must appear in this index or be linked from an
indexed folder README. Local handoff input, generated output, dependencies,
private material, and unrelated untracked files are excluded deliberately.

When a document is added, moved, renamed, superseded, or retired, update this
index, the applicable folder README, and the
[Document Graph](navigation/DOCUMENT_GRAPH.md).
