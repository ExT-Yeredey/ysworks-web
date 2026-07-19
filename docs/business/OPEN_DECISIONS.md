# Business Open Decisions

- Status: supporting register
- Higher authority: [Master Specification Open Decisions](../YSWORKS_MASTER_SPEC.md#12-open-decisions)

## Purpose

This register lists unresolved public-business and brand decisions. It does not
repeat decisions settled by the Founder or accepted ADRs.

## Required Before The Relevant Capability

| Decision | Required resolution |
| --- | --- |
| Production privacy notice | Final controller, jurisdiction, lawful basis, rights, retention, processor, and contact text before collecting personal data |
| Legal and contracting basis | Final legal entity, governing jurisdictions, contract forms, and professional legal review |
| Trademark review | Whether professional legal review or registration is required for the YSWORKS wordmark and YS monogram |
| Client pricing and commercial terms | Engagement-specific pricing, deposits, staged payment, recurring charges, refunds, cancellation, and urgent-work rules; public prices and ranges remain prohibited |
| Service levels | Whether any response, resolution, availability, recovery, or support commitment is offered and under which agreement |
| Logo asset set | Founder-approved vector construction, optical testing, lock-ups, clear space, favicon, application icon, social assets, exports, and source-master governance |
| Contact form | Runtime, privacy, Turnstile, server validation, abuse controls, retention, and safe routing before any real form exists |

## Open But Not Blocking The Current Public Website

| Decision | Required resolution |
| --- | --- |
| Analytics | Whether a privacy-aware provider creates enough decision value to justify collection |
| Newsletter | Whether a durable editorial purpose and cadence exist |
| Public portfolio | Which real work may be published with permission and evidence |
| Labs and Journal | Whether approved content and sustainable ownership justify either surface |
| Product visibility | When an actual YSWORKS product has an approved audience, evidence, support, privacy, and security boundary |
| Tailwind scope | Whether Tailwind remains the long-term Public Website standard or only the current repository choice |
| Photography archive | When sufficient real, approved photography exists and how consent, provenance, retention, and reuse are governed |
| Operational audio | Whether any interface sound is necessary and, if so, its accessible assets, controls, ownership, and testing |
| AI-media disclosure | The operational disclosure, provenance, review, and record format for approved generated media |

## Settled Decisions

The following are no longer open:

- `www.ysworks.dev` is the canonical Public Website hostname, subject to separate
  production connection authority.
- `contact@ysworks.dev` is the public contact method.
- Spanish is canonical at `/`; English uses `/en/`.
- The launch service portfolio is governed by ADR-M018.
- Public prices and ranges are prohibited.
- Client case placeholders are prohibited.
- Anime.js is the only permitted JavaScript animation library for the Public
  Website.
- YS AI OS remains private and has no independent public commercial identity.
- “Client Workspace” is the client-facing product name. “Client Portal” is the
  technical architecture and security term.
- Volume II — Brand Bible v1.1 is canonical within identity matters and remains
  subordinate to Volume I.
- Volume III — Client Experience Constitution v1.0 is canonical within client
  experience matters and remains subordinate to Volumes I and II.
- The constitutional monogram is `YS`; earlier `YW` references are superseded
  draft state.
- Sound doctrine, AI-generated-media doctrine, and the Brand Continuity Test are
  constitutionally settled by Volume II.
- The Client Workspace doctrine, Client Portal terminology, five first-screen
  questions, executive-first experience, progressive disclosure, reputation as
  a system, Client Experience Test, Clean Exit doctrine, and support taxonomy
  are constitutionally settled by Volume III.
- Authentication provider, database selection, notification channels, billing
  provider, service levels, legal contracts, and the production privacy notice
  remain open until their applicable implementation or legal gate.

## Rule

If implementation or publication depends on an unresolved decision, stop and
obtain the appropriate decision. Use the state with less collection, exposure,
commitment, or implied capability until then.
