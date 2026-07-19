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
6. [YSWORKS Master Specification](YSWORKS_MASTER_SPEC.md) defines product,
   ecosystem, vocabulary, accepted decisions, and cross-system architecture.
7. [Founder Handbook](FOUNDER_HANDBOOK.md) defines company behaviour, judgement,
   delivery discipline, and human–AI collaboration.
8. The Operating Manual governs company operations when an approved version is
   present.
9. Detailed domain foundations and policies remain authoritative within their
   stated scope. In particular:
   - [Company Documentation](company/README.md) applies company authority to
     commercial, delivery, support, and quality standards.
   - [Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md)
   governs public exposure and public-platform security.
   - [Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md)
     governs the technical architecture and tenant isolation of the
     client-facing Client Workspace.
   - [Public Platform Architecture Index](architecture/README.md) defines the
     publication boundary for architecture contracts.
   - [Business Foundation](business/README.md) supports public positioning,
     services, content, and commercial policy.
10. Operational Brand Book, Design System, UX, and Motion documents implement
    the constitutional identity within their measurable scopes:
    - [Approved Design Authorities](design/README.md), including YSWORKS Design
      Tokens v1.0, govern brand, experience, and interface decisions.
    - The repository
      [production design-system contracts](../design-system/README.md) govern
      consistent implementation of those approved design decisions.
11. Implementation documentation governs only its stated implementation scope.
    The repository [engineering knowledge base](../.ai/README.md) governs the
    Public Website implementation within that boundary.

## Constitutional Library

- [Volume I — Company Bible](COMPANY_BIBLE.md) defines company-wide character,
  behaviour, purpose, and constitutional standing.
- [Volume II — Brand Bible](BRAND_BIBLE.md) defines identity as the visible
  consequence of that character and is subordinate to Volume I.

The constitutional hierarchy is governed by the
[Company Bible, Volume I, Book XII, Article 1](COMPANY_BIBLE.md). No document
silently resolves a conflict; genuine conflicts must be reported and governed.

## Reading Order

For company or cross-system work:

1. read the Company Bible;
2. read the Brand Bible for identity, communication, design, motion, or
   experience work;
3. read the Master Specification and Founder Handbook;
4. read the detailed contract for the affected domain;
5. inspect applicable ADRs and Open Decisions; and
6. use the more conservative behaviour when an unresolved conflict remains.

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
