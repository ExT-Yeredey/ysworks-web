# YSWORKS Approved Design Authorities

- Status: Founder-approved authority registry
- Scope: Public Website brand, user experience, and interface design
- Applies to: Human and AI design, content, and frontend work

Repository-wide authority and dependency relationships are indexed in the
[Authority Map](../navigation/AUTHORITY_MAP.md) and
[Dependency Map](../navigation/DEPENDENCY_MAP.md).

## Purpose

This registry maps the approved authority names and versions to their canonical
repository sources. It does not reproduce or reinterpret those sources.

## Authority Map

| Approved authority | Version | Canonical repository source | Supporting source |
| --- | --- | --- | --- |
| YSWORKS Brand Bible | 1.1 | [Brand Bible](../BRAND_BIBLE.md) | Volume II of the constitutional library, subordinate to the [Company Bible](../COMPANY_BIBLE.md) |
| Client Experience Constitution | 1.0 | [Client Experience Constitution](../CLIENT_EXPERIENCE_CONSTITUTION.md) | Volume III of the constitutional library, subordinate to Volumes I and II |
| Operational Brand Book | 1.0 | [Company Brand Book](../company/brand-book.md) | [Brand Kit V1](../../.ai/brand-kit-v1.md), retained as an operational and historical source, plus [Brand Positioning](../business/BRAND_POSITIONING.md) |
| User Experience Foundation | 1.1 | [Site Architecture V1](../../.ai/site-architecture-v1.md) | UX, accessibility, responsive, and performance rules in [Design System V1](../../.ai/design-system-v1.md) and the applicable product specification |
| YSWORKS Design System | 1.1 | [Design System V1](../../.ai/design-system-v1.md) | [Design System principles](../../.ai/design-system.md) |
| YSWORKS Design Tokens | 1.0 | [Design Tokens v1.0](YSWORKS_DESIGN_TOKENS_V1.md) | Brand and interface color contract for every YSWORKS surface |

The version identifiers in this registry identify the Founder-approved governed
source sets. A historical filename or heading that ends in `v1` does not reduce
the approved version recorded here.

## Precedence

The [Company Bible](../COMPANY_BIBLE.md) governs company character
(*I.VIII; I.XIV–XV*). The subordinate
[Brand Bible](../BRAND_BIBLE.md) governs identity, visual language, motion, and
experience reasoning. The Company Brand Book is its operational entry point;
the Brand Kit and Brand Positioning provide supporting context but may not
weaken either constitutional volume.

The constitutional monogram is **YS** (*II.VIII.1*). `YW` survives only as an
obsolete historical draft reference. Final YS vector geometry remains a bounded
brand-asset task; generated raster material is never a production asset.

The User Experience Foundation governs public journeys, information hierarchy,
responsive behavior, accessibility, interaction cost, and progressive
enhancement. Client Workspace experience is also governed by the Client
Experience Constitution. Launch scope and route decisions remain governed by
the Master Specification and the approved business foundation when older
architecture material describes future pages.

The Design System governs visual roles, typography, spacing, component behavior,
motion principles, accessibility, responsive behavior, and performance. The
Founder-approved Design Tokens v1.0 govern the final brand and dark-surface color
values across the ecosystem.

When these sources conflict, the authority hierarchy in the
[YSWORKS Master Specification](../YSWORKS_MASTER_SPEC.md) applies. In particular,
accepted ADR-M004 governs the Public Website animation-library decision.
Design and experience implementations also conform to the layer, system, and
public/private boundaries in
[YSWORKS Enterprise Architecture](../YSWORKS_ENTERPRISE_ARCHITECTURE.md)
(*EA 3.1; EA 6.1–2; EA 10.6*).

## Product separation

The Public Website, Client Workspace, and YS AI OS are separate systems sharing
a governed visual family:

- the Public Website is anonymous, editorial, and conversion-oriented;
- the Client Workspace is the future authenticated, tenant-isolated
  client-facing product; its technical architecture and security boundary is
  named Client Portal; and
- YS AI OS is a private operating system and never a public interface.

Shared tokens and brand principles do not permit shared authentication,
authorization, data access, navigation, or runtime boundaries.
