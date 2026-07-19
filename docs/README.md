# YSWORKS Documentation

## Purpose

This directory contains the public-safe specifications and supporting documents
that govern YSWORKS company behavior, ecosystem architecture, public platform,
client workspace, company operations, and business foundation.

It does not contain credentials, production configuration, private topology,
client information, internal workflows, or restricted operational material.

## Authority Map

1. Explicit Founder decisions are the highest internal authority.
2. Applicable law and binding contracts prevail where relevant.
3. Accepted ADRs prevail only within their explicit technical scope.
4. [Company Bible](COMPANY_BIBLE.md) is the highest company-wide narrative and
   behavioural constitution.
5. [Brand Bible](BRAND_BIBLE.md) is Volume II of the constitutional library. It
   remains subordinate to Volume I and governs identity above operational
   brand, design, motion, and experience documents.
6. [Client Experience Constitution](CLIENT_EXPERIENCE_CONSTITUTION.md) is
   Volume III of the constitutional library. It remains subordinate to Volumes
   I and II and governs client experience, journey, relationship, delivery,
   support, reputation, and the Client Workspace experience.
7. [YSWORKS Enterprise Architecture](YSWORKS_ENTERPRISE_ARCHITECTURE.md)
   operationalises Volumes I–III and governs enterprise structure, layers,
   domains, authority flow, system relationships, information flow, knowledge,
   automation, security principles, scalability, and enterprise tests.
8. [YSWORKS Master Specification](YSWORKS_MASTER_SPEC.md) defines product,
   ecosystem, vocabulary, accepted decisions, and cross-system architecture.
9. [Founder Handbook](FOUNDER_HANDBOOK.md) defines company behaviour, judgement,
   delivery discipline, and human–AI collaboration.
10. The Operating Manual governs company operations when an approved version is
   present.
11. Detailed domain foundations and policies remain authoritative within their
   stated scope. In particular:
   - [Company Documentation](company/README.md) applies company authority to
     commercial, delivery, support, and quality standards.
   - [Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md)
   governs public exposure and public-platform security.
   - [Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md)
     governs the technical architecture and tenant isolation of the
     client-facing Client Workspace.
   - [Authority, Mandate, Approval And Audit System Design](architecture/AUTHORITY_MANDATE_APPROVAL_AUDIT_SYSTEM.md)
     governs the logical contract for future machine-checkable authority and
     consequential execution without claiming a runtime implementation.
   - [YSWORKS Canonical Domain Model](architecture/CANONICAL_DOMAIN_MODEL.md)
     governs shared entity meanings, domain ownership, tenant scope,
     lifecycles, projections, classification, and authority boundaries.
   - [Public Platform Architecture Index](architecture/README.md) defines the
     publication boundary for architecture contracts.
   - [Business Foundation](business/README.md) supports public positioning,
     services, content, and commercial policy.
12. System designs, workflow definitions, and implementation documentation
    implement the authorities above within their stated scope. In particular:
    - [Approved Design Authorities](design/README.md), including YSWORKS Design
      Tokens v1.0, govern brand, experience, and interface decisions.
    - The repository
      [production design-system contracts](../design-system/README.md) govern
      consistent implementation of those approved design decisions.
    - Implementation documentation governs only its stated implementation
      scope. The repository [engineering knowledge base](../.ai/README.md)
      governs the Public Website implementation within that boundary.

## Foundation Library

### Constitution Library

- [Volume I — Company Bible](COMPANY_BIBLE.md) defines company-wide character,
  behaviour, purpose, and constitutional standing.
- [Volume II — Brand Bible](BRAND_BIBLE.md) defines identity as the visible
  consequence of that character and is subordinate to Volume I.
- [Volume III — Client Experience Constitution](CLIENT_EXPERIENCE_CONSTITUTION.md)
  defines the relationship between YSWORKS and its clients across the full
  lifecycle and is subordinate to Volumes I and II.

The constitutional hierarchy is governed by the
[Company Bible, Volume I, Book XII, Article 1](COMPANY_BIBLE.md). No document
silently resolves a conflict; genuine conflicts must be reported and governed.

### Enterprise Foundation

- [YSWORKS Enterprise Architecture v1.0](YSWORKS_ENTERPRISE_ARCHITECTURE.md)
  operationalises the constitutional volumes and governs enterprise structure
  within its domain. It defines architectural requirements, not implemented
  controls or deployment state.

## Reading Order

For company or cross-system work:

1. read the Company Bible;
2. read the Brand Bible for identity, communication, design, motion, or
   experience work;
3. read the Client Experience Constitution for any client journey,
   relationship, delivery, support, reputation, or Workspace work;
4. read the Enterprise Architecture for company structure, domain ownership,
   system relationships, information, knowledge, automation, security
   principles, or scalability work;
5. read the Master Specification and Founder Handbook;
6. read the detailed contract for the affected domain;
7. inspect applicable ADRs and Open Decisions; and
8. use the more conservative behaviour when an unresolved conflict remains.

For work limited to the public website repository, also follow the public
engineering knowledge base before implementation.

## Maintenance Rules

- Keep every document safe for a public repository.
- Cross-reference authoritative material instead of duplicating it.
- Record genuine conflicts as Open Decisions.
- Do not present future intent as current capability.
- Keep behavior, architecture, and implementation authority distinct.
- Update indexes when an authoritative document is added, renamed, or retired.
- Never use documentation approval as production-change authorization.
