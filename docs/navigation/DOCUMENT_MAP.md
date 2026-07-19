# YSWORKS Document Map

## Purpose

This map shows where governed and supporting knowledge lives. Authority is
defined in the [Authority Map](AUTHORITY_MAP.md), not by position in this list.
For the complete per-file inventory and search aliases, use the
[Master Documentation Index](../MASTER_INDEX.md).

## Repository Map

| Area | Purpose | Entry point |
| --- | --- | --- |
| Constitutional library | Company character, identity, and client experience | [Documentation Index](../README.md#constitution-library) |
| Enterprise foundation | Company-wide product and enterprise architecture | [Documentation Index](../README.md#enterprise-foundation) |
| Architecture | Public platform, Client Portal, authority, and canonical domain contracts | [Architecture Index](../architecture/README.md) |
| Company operations | Profile, commercial templates, delivery, support, and quality policies | [Company Documentation](../company/README.md) |
| Business foundation | Public positioning, services, website strategy, and open decisions | [Business Foundation](../business/README.md) |
| Design governance | Founder-approved design authority and token map | [Approved Design Authorities](../design/README.md) |
| Production design system | Repository UI implementation contracts | [Production Design System](../../design-system/README.md) |
| Brand assets | Governed locations for future approved assets | [Branding Assets](../../branding/README.md) |
| Engineering knowledge | Public Website implementation guidance and ADRs | [Engineering Knowledge Base](../../.ai/README.md) |
| Component catalogue | Implemented component organisation | [Component Library](../../src/components/README.md) |

## Foundation Documents

| Document | Role | Status |
| --- | --- | --- |
| [Volume I — Company Bible](../COMPANY_BIBLE.md) | Company-wide narrative and behavioural constitution | Canonical |
| [Volume II — Brand Bible](../BRAND_BIBLE.md) | Constitutional identity doctrine | Canonical |
| [Volume III — Client Experience Constitution](../CLIENT_EXPERIENCE_CONSTITUTION.md) | Constitutional client-experience doctrine | Canonical |
| [YSWORKS Enterprise Architecture](../YSWORKS_ENTERPRISE_ARCHITECTURE.md) | Enterprise structure and system-boundary foundation | Foundational |
| [YSWORKS Master Specification](../YSWORKS_MASTER_SPEC.md) | Product, ecosystem, vocabulary, and accepted decisions | Authoritative specification |
| [Founder Handbook](../FOUNDER_HANDBOOK.md) | Human behaviour, judgement, and operating discipline | Authoritative handbook |
| Operating Manual | Operational constitution requested but not present in this branch | Open; no canonical file |

## Architecture Documents

| Document | Governs |
| --- | --- |
| [Secure Public Platform Foundation](../architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md) | Public domains, exposure, edge security, webhooks, and production principles |
| [Client Portal Foundation](../architecture/CLIENT_PORTAL_FOUNDATION.md) | Client Workspace technical boundary, tenant isolation, projections, approvals, privacy, and responsive UX |
| [Authority, Mandate, Approval And Audit System](../architecture/AUTHORITY_MANDATE_APPROVAL_AUDIT_SYSTEM.md) | Machine-checkable authority, mandates, decisions, approvals, execution authorisation, policy, risk, and audit |
| [Canonical Domain Model](../architecture/CANONICAL_DOMAIN_MODEL.md) | Shared entities, ownership, tenancy, lifecycles, visibility, classification, and relationships |

## Known Naming Boundaries

| Similar names | Distinction |
| --- | --- |
| Company Bible / Master Specification | Company constitution / product and ecosystem specification |
| Brand Bible / Company Brand Book | Constitutional identity / operational brand application |
| Client Workspace / Client Portal | Client-facing product name / technical architecture and security term |
| Approved Design Authorities / Production Design System | Authority and version registry / implementation contracts |
| `docs/business/SALES_FUNNEL.md` / constitutional client journey | Historical filename containing the operational Client Journey map / governing journey in Volume III |
| `.ai/design-system-v1.md` / `design-system/` | Founder-approved source mapping / current repository implementation contracts |
| AuditEvent / ActivityEvent | Private append-only evidence / sanitised projection candidate |

## Reading Paths

### Company Or Policy Change

1. [Authority Map](AUTHORITY_MAP.md)
2. applicable constitutional volume
3. [Enterprise Architecture](../YSWORKS_ENTERPRISE_ARCHITECTURE.md)
4. [Master Specification](../YSWORKS_MASTER_SPEC.md)
5. applicable company or business document
6. open decisions and accepted ADRs

### Architecture Or System Design

1. [Authority Map](AUTHORITY_MAP.md)
2. [Architecture Map](ARCHITECTURE_MAP.md)
3. applicable foundation contract
4. [Authority System Design](../architecture/AUTHORITY_MANDATE_APPROVAL_AUDIT_SYSTEM.md)
5. [Canonical Domain Model](../architecture/CANONICAL_DOMAIN_MODEL.md)
6. accepted ADRs and private conformance review where required

### Public Website Implementation

1. [Master Specification](../YSWORKS_MASTER_SPEC.md)
2. [Business Foundation](../business/README.md)
3. [Approved Design Authorities](../design/README.md)
4. [Production Design System](../../design-system/README.md)
5. [Engineering Knowledge Base](../../.ai/README.md)

### Client Workspace Work

1. [Client Experience Constitution](../CLIENT_EXPERIENCE_CONSTITUTION.md)
2. [Enterprise Architecture](../YSWORKS_ENTERPRISE_ARCHITECTURE.md)
3. [Client Portal Foundation](../architecture/CLIENT_PORTAL_FOUNDATION.md)
4. [Canonical Domain Model](../architecture/CANONICAL_DOMAIN_MODEL.md)
5. [Authority System Design](../architecture/AUTHORITY_MANDATE_APPROVAL_AUDIT_SYSTEM.md)

## Coverage Rule

Every maintained Markdown document must be reachable from a README, a map, or
another governed document. Local-only handoff material and the unrelated
untracked roadmap are deliberately outside this map.
