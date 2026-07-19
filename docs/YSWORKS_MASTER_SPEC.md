# YSWORKS Master Specification

- Status: Authoritative ecosystem specification
- Scope: Company, products, services, experience, design, technology, and
  cross-system policy
- Audience: YSWORKS decision-makers, operators, designers, engineers, and
  approved collaborators

## Authority And Scope

This document is the highest-level product, ecosystem, vocabulary, and
cross-system specification for YSWORKS. It defines official vocabulary, system
boundaries, product intent, and decisions that affect more than one YSWORKS
system.

The [Company Bible](COMPANY_BIBLE.md) is the highest-level constitutional
narrative for company identity, purpose, philosophy, principles, and long-term
direction. This specification derives its company narrative from that document
and remains authoritative for ecosystem architecture.

The [Brand Bible](BRAND_BIBLE.md) governs constitutional identity. The
[Client Experience Constitution](CLIENT_EXPERIENCE_CONSTITUTION.md) governs the
client relationship, journey, delivery, support, reputation, and Client
Workspace experience. Both remain subordinate to the preceding constitutional
volume.

The
[YSWORKS Enterprise Architecture](YSWORKS_ENTERPRISE_ARCHITECTURE.md)
operationalises Volumes I–III and governs enterprise structure, system
landscape, authority and information flow, domain ownership, automation,
knowledge, security principles, scalability, and enterprise tests. It defines
requirements rather than implemented state.

Detailed contracts remain authoritative within their domains:

- [Authority, Mandate, Approval And Audit System Design](architecture/AUTHORITY_MANDATE_APPROVAL_AUDIT_SYSTEM.md)
  governs the future logical contracts for actors, authority, mandates,
  decisions, approvals, execution authorisation, policy evaluation, risk, and
  audit. It does not select or claim a runtime implementation.
- [Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md)
  governs public exposure, domain architecture, edge security, webhooks, and
  production security.
- [Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md) governs
  portal roles, tenant isolation, progress, approvals, data projection,
  authentication, audit, privacy, documents, and responsive behavior.
- [Public Platform Architecture](architecture/README.md) defines the publication
  boundary for architecture documents.
- [Business Foundation](business/README.md) contains supporting commercial and
  public-communication policy.
- [Approved Design Authorities](design/README.md) maps the Founder-approved
  Brand Book, User Experience Foundation, and Design System names and versions
  to their governed repository sources.
- The public engineering knowledge base in [`.ai`](../.ai/README.md) governs the
  public website repository where it does not conflict with this specification.

This document does not replace or reproduce those contracts. A detailed
document may add constraints within its scope, but it may not weaken a rule in
this specification. If two approved documents conflict and this specification
does not explicitly settle the conflict, the matter remains an Open Decision.
Implementation must use the less-exposing state until the conflict is resolved.

The authority hierarchy, derived from the Company Bible (*I.XII.1*), is:

1. An explicit Founder decision governs company direction and resolves an
   otherwise unresolved documentation conflict. It must be recorded in the
   appropriate specification or decision record before implementation.
2. Applicable law and binding contracts prevail where relevant.
3. An accepted ADR prevails over descriptive prose only for the explicit
   technical decision and scope that the ADR governs. It does not override an
   unrelated domain contract or company-wide constitutional authority.
4. The Company Bible governs company-wide narrative and behaviour.
5. The Brand Bible governs identity within its constitutional scope and remains
   subordinate to the Company Bible.
6. The Client Experience Constitution governs client experience within its
   constitutional scope and remains subordinate to the Company Bible and Brand
   Bible.
7. The YSWORKS Enterprise Architecture governs enterprise structure within its
   domain and remains subordinate to Volumes I–III.
8. This Master Specification is the highest-level product, ecosystem,
   vocabulary, and cross-system architecture specification.
9. The Founder Handbook governs company behaviour.
10. The Operating Manual governs company operations when an approved version is
   present.
11. Detailed security, public-platform, portal, company, business, and
    repository documents remain authoritative inside their stated domains and
    may impose stricter constraints.
12. System designs, workflow definitions, and implementation documentation,
    including operational Brand Book, user-experience, design-system, and
    motion documents, implement the authorities above within their stated
    scope.

No lower-level document, implementation choice, dependency, or design proposal
silently creates an ecosystem decision. Genuine conflicts remain Open Decisions
unless the Founder resolves them or an accepted ADR resolves the matter inside
its explicit technical scope.

System names in this document define product categories and policy boundaries.
They are not confirmation of deployment, topology, inventory, addresses, ports,
credentials, vendors beyond approved decisions, or production readiness.

## 1. Company

### 1.1 Mission

The official mission is defined in the
[Company Bible](COMPANY_BIBLE.md) (*I.I.2; I.II.1*). In architecture, it
requires every system to serve a defined organisational outcome, retain
accountable ownership, and remain supportable within its approved boundary.

### 1.2 Vision

The official long-term vision is defined in the
[Company Bible](COMPANY_BIBLE.md) (*I.II.2–3*). Ecosystem growth must
not weaken quality, security, maintainability, accessibility, public honesty, or
human accountability.

### 1.3 Core Principles

The constitutional values and foundational principles are defined in the
[Company Bible](COMPANY_BIBLE.md) (*I.III*).
Architecture applies them through explicit ownership, minimum exposure,
evidence-based decisions, accessible and maintainable systems, documented
boundaries, and accountable human control.

### 1.4 Long-Term Direction

YSWORKS will develop an integrated capability across software, automation,
security, infrastructure, knowledge, and AI-assisted engineering. Services are
the first public commercial surface. Products and platforms become public only
after they exist, have an approved audience, and pass product, privacy,
security, support, and evidence reviews.

Internal systems may increase delivery quality and leverage. They are not public
products, client entitlements, or marketing proof unless a separate decision
explicitly promotes them.

### 1.5 Brand Positioning

The official brand idea is **Quiet Engineering**: invisible complexity, visible
simplicity.

YSWORKS is positioned as a technology engineering company and technical partner
for organizations that need digital systems built carefully. “Engineering
studio” is an accepted legacy descriptor in supporting documents, but
“technology engineering company” is the official company category for new
cross-system specifications and public positioning.

The brand is calm, precise, technical, modern, independent, and premium through
restraint. Trust comes from clear boundaries, reliable execution, accessible
experiences, documentation, and verifiable work.

### 1.6 What YSWORKS Is

YSWORKS is:

- a technology engineering company;
- a designer and builder of digital systems;
- a provider of software, web, automation, security, infrastructure,
  consulting, and maintenance services, with training as a supporting
  capability when required by an approved engagement;
- a long-term technical partner when an ongoing relationship is appropriate;
- an organization that uses AI as a controlled capability, not as a substitute
  for product judgment or responsibility;
- an owner of private internal systems and possible future public products.

### 1.7 What YSWORKS Is Not

YSWORKS is not:

- a traditional marketing agency;
- a template website shop;
- a generic chatbot provider;
- a seller of custom AI agents as its main product;
- a no-code automation reseller;
- an “AI-powered everything” company;
- a vendor of autonomous decisions without accountable human ownership;
- a public interface to internal infrastructure or private workflows;
- a company that invents clients, proof, metrics, testimonials, partnerships,
  certifications, or results;
- an unrestricted “anything technology” consultancy;
- a provider of guaranteed outcomes or zero-risk claims.

YSWORKS builds digital systems. A website or chatbot may be one component of a
system, but neither defines the company.

## 2. Ecosystem

### 2.1 Ecosystem Rules

The canonical eight-layer enterprise stack, thirteen business domains, and
eight-system landscape are defined by
[EA 3.1, EA 4.2, and EA 6.1](YSWORKS_ENTERPRISE_ARCHITECTURE.md).
The categories below describe product and ecosystem boundaries; they do not
replace that enterprise structure or prove that a system is implemented.

Every official system has one declared purpose, audience, data boundary, owner,
and exposure class before implementation. Systems exchange only the minimum
approved data through explicit contracts. A shared brand, identity provider, or
vendor does not create implicit trust between systems.

Public systems never provide direct browser access to private sources. Private
systems never become public because they have authentication or an obscure URL.
Administrative interfaces remain private and separate from client-facing
interfaces.

### 2.2 Public Website

The Public Website is the canonical anonymous public presence at
`www.ysworks.dev`. Its purpose is to explain YSWORKS, services, principles,
public products when approved, and the path to a qualified conversation.

It is static-first, content-led, accessible, fast, and free of private business
logic or business truth of its own. It does not expose internal systems, client
data, administration, authentication, workflows, or infrastructure. The apex
`ysworks.dev` redirects
permanently to the canonical `www` host under the approved public-platform
contract.

The first public contact channel is `contact@ysworks.dev`. A future contact form
may be added only with Cloudflare Turnstile, a honeypot, server-side validation,
rate limiting, minimal collection, privacy notice, generic responses, and no
private routing disclosure.

### 2.3 Client Workspace

The Client Workspace is the future authenticated client-facing product at
`portal.ysworks.dev`, with target exposure class `PRIVATE`. “Client Portal” is
the technical architecture and security term for its authenticated delivery
boundary. The Workspace gives each client an authorised, sanitised view of its
projects, progress, deliverables, approvals, documents, meetings, support, and
future billing information.

Its client-facing doctrine is governed by the
[Client Experience Constitution](CLIENT_EXPERIENCE_CONSTITUTION.md)
(*III.VII.1–3; III.XI.1–5*): the first screen answers the five constitutional
questions in order, presents state before navigation, serves the executive
reader first, and reveals technical detail progressively.

The Client Workspace is not an administration panel, source-system browser,
workflow editor, file-system browser, or real-time view into private
operations. It renders only mediated, authorised, client-specific truth and is
never a direct door into private systems (*EA 6.1; EA 10.5*). It remains
nonexistent until the gates in the
[Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md) are met.

### 2.4 YS AI OS

YS AI OS is the private internal operating and intelligence platform of
YSWORKS. Its purpose is to support internal quality, reasoning, documentation,
coordination, and delivery.

YS AI OS is never a public website feature, portfolio item, Client Workspace
surface, or implied client entitlement. Its architecture, prompts, agents,
tools, models, workflows, topology, telemetry, internal records, state, security
design, business logic, and roadmap remain private. It has no public logo or
independent public brand. Public communication may describe approved outcomes
or general AI-assisted engineering practices without naming internal
mechanisms. Its canonical responsibility and private boundary are governed by
*EA 6.1* and *EA 10.6*.

### 2.5 Automation Platform

The Automation Platform is the private orchestration capability used to run
approved operational automations and integrations. n8n is the selected private
workflow-orchestration technology within this category; the category does not
confirm a deployment or production connection.

The platform and its editor remain internal. Public providers send events only
to the narrow Secure Webhook Gateway defined by the public-platform contract.
The gateway authenticates, validates, rate-limits, and normalizes events before
any asynchronous private processing. Public browsers and providers never connect
directly to n8n or private execution endpoints.

n8n executes defined process steps under recorded mandates. It does not decide
or hold business authority (*EA 5.1; EA 6.1; EA 9.2–4*).

### 2.6 Infrastructure

Infrastructure is the operational foundation that hosts, connects, protects,
observes, backs up, and recovers approved systems. It includes the public edge,
static hosting, private compute, networking, container runtime, storage, and
operational controls as categories, not as a disclosed inventory.

Infrastructure remains private, replaceable, and non-public (*EA 6.1; EA
10.6*). Observability is the source of operational and audit truth across the
enterprise stack (*EA 3.1*). These requirements do not confirm topology,
production hosting, an observability implementation, or recovery controls.

Infrastructure has separate public, private, and internal trust zones. Docker is
an internal runtime and packaging technology, never a public control surface.
Cloudflare is the approved public edge. Cloudflare Tunnel provides outbound-only
connectivity for a future approved origin without router port forwarding.
Administrative access remains on the LAN or an approved Tailscale private
overlay and requires identity, MFA, least privilege, revocation, and audit.

### 2.7 Knowledge Base

The Knowledge Base is the governed **Knowledge** system: the collection of
reusable company, product, service, architecture, design, and engineering
knowledge. Every item has an audience and classification. Public knowledge must
be safe to publish; client-scoped knowledge must be tenant-isolated; internal
knowledge remains private.

Its five knowledge classes, ownership, standards, and evolution rules are
defined by *EA 8.1–3*. This Master Specification governs product and ecosystem
vocabulary within that hierarchy; it is not the root authority for
constitutional or enterprise-structure knowledge.

### 2.8 Internal Documentation

Internal Documentation is a classified body of operational knowledge rather
than a separate system in the canonical landscape. It contains private
operational material needed to run YSWORKS. It may include private procedures,
implementation records, incident material, source inventories, contracts,
internal commercial information, and restricted technical details.

Internal Documentation is not stored in the public website repository and is
not exposed through the Public Website, Client Workspace, public documentation,
status surfaces, or public search. An approved public summary must be rewritten
for its audience; internal material is never published by simple redaction or
pass-through.

### 2.9 System Relationships

Canonical relationship rules are governed by *EA 6.2*: truth flows up, mandates
flow down; versioned artefacts pass through GitHub; public-to-private paths are
mediated; and every system remains replaceable. The following product-level
constraints apply within those rules:

- The Public Website may publish approved descriptions of services, public
  products, and company principles. It has no direct connection to private
  platforms.
- The Client Workspace consumes purpose-built server-side projections through
  the Client Portal technical boundary. It never exposes or queries approved
  private sources directly from the browser.
- YS AI OS may support internal work but does not control portal authorization,
  act as public proof, or appear in client-facing interfaces.
- The Automation Platform may process normalized events and produce approved
  outcomes. It never receives unauthenticated public traffic directly.
- Infrastructure provides bounded runtime and security services to each system
  without merging their trust zones.
- The Knowledge Base provides approved policy and terminology to every system.
- Internal Documentation supports operations but does not flow into a public or
  client-facing system without classification, review, and a new audience-safe
  artifact.
- GitHub is the source-control and review system for public repositories and
  approved code. Repository access does not grant infrastructure, portal, or
  client-data access.

## 3. Services

### 3.1 Service Policy

Services describe work YSWORKS can responsibly perform. They are not products,
internal systems, or promises of a particular implementation. A service may be
published only when its problem, customer, deliverables, exclusions, delivery
model, and supporting evidence are approved.

YSWORKS does not publish prices, ranges, “starting from” amounts, or rate tables.
Each engagement is studied and budgeted according to scope, complexity, timing,
integrations, support, and maintenance. The primary public call to action asks
the prospective customer to explain the project.

### 3.2 Launch Service Portfolio

The launch service categories are:

- AI Systems, limited to controlled intelligent business capabilities with a
  defined outcome and accountable human ownership;
- Automation;
- Software Development;
- Web Development;
- practical Cybersecurity;
- Infrastructure, Systems, and Professional Hardware;
- Consulting; and
- Maintenance and ongoing support.

Training is a supporting delivery capability, not an independent launch service
category. Any separately marketed training service is a future decision.
Additional categories remain future services until explicitly approved.

### 3.3 AI Systems

**Purpose:** Design controlled AI-assisted capabilities tied to a specific user
or operational outcome.

**Target customer:** Product teams and organizations with a defined use case,
appropriate data boundaries, accountable owners, and a need for evaluation or
human review.

**Typical deliverables:** Use-case qualification, product specification,
prototype, evaluation plan, data-boundary review, fallback behavior, limitation
notes, or an approved AI-assisted feature.

This category excludes access to YS AI OS, private prompts, private agents,
unsupported autonomy, model guarantees, and broad transformation claims.

### 3.4 Automation

**Purpose:** Reduce repetitive work and improve handoffs through controlled,
observable automation.

**Target customer:** Organizations with manual processes, disconnected tools,
repeatable rules, and an accountable process owner.

**Typical deliverables:** Process map, automation opportunity assessment,
integration contract, failure-mode analysis, workflow implementation, audit
requirements, operating documentation, or supported automation.

This category excludes hidden autonomous behavior, public access to private
workflow editors, automation without ownership, and unsafe credential or data
handling.

### 3.5 Software Development

**Purpose:** Design and build maintainable digital products, applications, and
system foundations.

**Target customer:** Founders, product teams, small and medium businesses, and
organizations with a bounded software problem and decision owner.

**Typical deliverables:** Discovery specification, user journeys, architecture
contract, product foundation, focused MVP slice, application capability,
integration boundary, testing criteria, or maintainability improvement.

This category excludes speculative large builds, undefined product ownership,
and claims of market success without evidence.

### 3.6 Web Development

**Purpose:** Create fast, accessible, secure, and maintainable public websites
and web platforms.

**Target customer:** Organizations whose public experience, content structure,
performance, accessibility, conversion path, or maintainability needs material
improvement.

**Typical deliverables:** Information architecture, content model, UX direction,
static-first website, web platform foundation, frontend implementation,
accessibility review, performance review, SEO foundation, deployment-readiness
package, or maintenance documentation.

This category does not make YSWORKS a template website shop. The website is one
part of a governed digital system.

### 3.7 Cybersecurity

**Purpose:** Reduce avoidable exposure and improve the security posture of
public digital systems and approved operations.

**Target customer:** Teams that need safer defaults, clearer access boundaries,
input protection, secret handling, deployment review, or a prioritized hardening
plan.

**Typical deliverables:** Public attack-surface review, security baseline,
configuration review, threat-model summary, access-control review, secret and
environment review, form or webhook protection requirements, dependency risk
notes, or hardening plan.

The launch service does not include accredited or advanced penetration testing,
offensive security, forensics, incident response, or compliance certification.
No public copy may imply those capabilities without a future Founder decision,
qualified delivery capability, evidence, and a separately approved service
contract. No service guarantees zero risk.

### 3.8 Infrastructure

**Purpose:** Establish a reliable and supportable operational foundation for
approved digital systems.

**Target customer:** Organizations that need a bounded review or design for
hosting, networking, professional hardware, runtime operations, continuity, or
system ownership.

**Typical deliverables:** Requirements assessment, infrastructure architecture,
hosting decision, network or hardware plan, environment model, operational
responsibility matrix, backup and recovery requirements, migration plan, or
maintenance baseline.

This category never includes public exposure of control planes, private
topology, credentials, or unsupported availability guarantees.

Physical and professional-hardware work is a real launch capability. On-site
delivery is primarily available in Madrid and Lanzarote. Discovery, consulting,
architecture, software, configuration planning, and support may be delivered
remotely more broadly when the engagement is suitable. Exact travel, on-site,
support, and geographic commitments belong to the proposal and contract.

### 3.9 Consulting

**Purpose:** Give decision-makers clear technical direction before or during an
investment.

**Target customer:** Leaders and technical teams facing an architecture,
product, risk, modernization, integration, or prioritization decision.

**Typical deliverables:** Audit, decision record, architecture review, risk
register, phased recommendation, feasibility assessment, implementation plan,
or independent technical review.

This category excludes open-ended execution without scope and legal, financial,
or compliance guarantees.

### 3.10 Training

**Purpose:** Help an organization understand, operate, and maintain an approved
system or engineering practice.

**Target customer:** Client owners, operators, support teams, and technical teams
responsible for a delivered or reviewed capability.

**Typical deliverables:** Role-based workshop, operating guide, handover session,
security-awareness session, maintenance playbook, recorded walkthrough when
approved, or competency checklist.

Training is practical and tied to an approved scope. It is not certification,
generic motivational content, disclosure of private YSWORKS methods, or an
independent launch category.

### 3.11 Maintenance

**Purpose:** Keep an approved system secure, current, understandable, and useful
after delivery.

**Target customer:** Clients with systems that require defined continuity,
support, monitoring, updates, review, or planned evolution.

**Typical deliverables:** Maintenance scope, update cadence, issue triage,
dependency review, operational review, documentation updates, agreed support
response, improvement backlog, or periodic service report.

The official adaptable support levels are:

- **Essential Care:** bounded maintenance and essential continuity for stable
  systems;
- **Growth Care:** maintenance plus planned improvement for systems that are
  evolving;
- **Continuous Operations:** broader operational continuity and active technical
  stewardship for systems with ongoing needs.

These names describe adaptable levels of responsibility, not rigid packages.
They have no public prices and do not override a client-specific scope,
availability, support, or maintenance agreement.

### 3.12 Future Services

Future service categories may be introduced only after capability, customer
problem, safety, evidence, delivery ownership, exclusions, and support have been
approved. A future service is not published as available, represented by an
empty page, or implied through marketing before that review.

Potential directions may emerge from public products, knowledge services,
specialized security, data systems, managed operations, or industry-specific
platforms. Their names and commercial status remain undefined until formally
decided.

## 4. Client Experience

### 4.1 Experience Principles

The complete relationship and journey are governed by the
[Client Experience Constitution](CLIENT_EXPERIENCE_CONSTITUTION.md)
(*III.I–XVIII*). This section records ecosystem boundaries and implementation-
relevant constraints without replacing that constitutional doctrine.

The client experience is direct, informed, low-pressure, and traceable. Each
stage has a clear owner, next action, information boundary, and exit condition.
No stage uses fake urgency, hidden data collection, unsupported guarantees, or
private-system disclosure.

### 4.2 Discovery

Discovery starts with the customer's problem, desired outcome, users,
constraints, existing systems, risks, timing, and decision process. It produces
enough shared understanding to decide whether further qualification is useful.
It does not assume that a build is the correct answer.

### 4.3 Contact

The primary public channel is `contact@ysworks.dev`. The public website asks the
prospective customer to explain the project, relevant context, and desired
outcome. It does not ask for passwords, credentials, secrets, regulated data, or
unnecessary personal information.

A future form must satisfy the Secure Webhook Gateway and public-form contracts.
Until then, the website must not simulate submission or imply that a form stores
or sends data.

### 4.4 Qualification

YSWORKS evaluates fit using problem clarity, scope, risk, ownership, timing,
budget suitability when appropriate, maintainability, ethical constraints, and
the ability to deliver responsibly. Qualification may result in progression,
request for clarification, referral, or a direct decline.

### 4.5 Proposal

A proposal defines scope, outcomes, assumptions, exclusions, phases, validation,
responsibilities, timing, support, maintenance, and commercial terms. The budget
is specific to scope, complexity, timing, integrations, support, and maintenance.
Public price anchors or standard rate claims are not used.

### 4.6 Approval

Commercial approval establishes the agreed engagement and authorized decision
owners. Product approvals during delivery are separate, version-bound records.
No approval directly deploys infrastructure, merges code, changes DNS or
Cloudflare, executes a workflow, publishes a product, or performs another
privileged operation.

Portal approval behavior, when implemented, follows the
[Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md).

### 4.7 Implementation

Implementation proceeds in reviewable increments against the approved scope and
validation criteria. Changes in assumptions, risk, scope, dependencies, or
client responsibilities are made explicit. Internal tools may support delivery,
but the client receives only approved outputs and public-safe explanations.

### 4.8 Delivery

Delivery includes the agreed system or artifact, validation evidence,
documentation, known limitations, access handover where applicable, operating
responsibilities, and the next maintenance or closure decision. Completion is
based on acceptance criteria, not a presentation percentage.

### 4.9 Support

Support follows an agreed scope, channel, priority vocabulary, availability, and
responsibility model. Client-visible communication explains impact and next
action without exposing internal routing, logs, infrastructure, or private
actors.

### 4.10 Long-Term Relationship

After delivery, the client may close the engagement, request a new scoped
project, or use an adaptable maintenance level. Long-term work is earned through
usefulness, transparency, and continuity. It is not created through lock-in,
hidden dependencies, or pressure tactics.

### 4.11 Public Proof

Client work becomes public only with permission, accurate evidence, safe assets,
and an approved description of scope and outcome. Client logos, testimonials,
metrics, and results are never assumed.

Informal work, unfinished work, and work whose scope has materially changed are
not published as client cases. No “case study coming soon” placeholder is
created. Own projects and technical capabilities may be shown only with an
accurate status and without implying a client relationship.

## 5. Design Language

### 5.1 Governing Sources

This specification establishes design intent, not a component library. Final
token domains remain governed by their approved contracts. The
[Approved Design Authorities](design/README.md) registry maps the
Founder-approved Brand Bible v1.1, operational Brand Book v1.0, User Experience
Foundation v1.1, and YSWORKS Design System v1.1 to their canonical repository
sources. The [Brand Bible](BRAND_BIBLE.md) governs identity within its scope and
remains subordinate to the Company Bible. The operational sources,
[Brand Positioning](business/BRAND_POSITIONING.md), and the applicable product
contract govern measurable brand and interface direction within their scopes.
Other design proposals are inputs, not authority. The Founder-approved
[YSWORKS Design Tokens v1.0](design/YSWORKS_DESIGN_TOKENS_V1.md) establish the
cross-ecosystem color foundation. Fonts, spacing, breakpoints, assets, and
motion proposals do not become cross-ecosystem decisions until reviewed and
accepted by the Founder or an ADR.

### 5.2 Official Direction

The official visual language is minimal, premium through restraint, technical,
modern, and fast. It is dark-mode-first, responsive-first, and
accessibility-first. It communicates maturity through hierarchy, legibility,
consistency, and performance rather than effects.

Typography must create a clear semantic hierarchy and remain readable across
supported viewports. Spacing must be systematic and content-led. Neither the
Master Specification nor an unreviewed design proposal fixes a font family,
type scale, spacing unit, breakpoint, or final vector geometry. The
constitutional monogram is geometric **YS**, paired operationally with the
uppercase `YSWORKS` wordmark and used alone for compact product marks. Earlier
`YW` references are superseded draft state and have no implementation authority.
YS AI OS remains in the same visual family without becoming public or receiving
a separate public logo. Generated raster material is a reference only, never a
production asset. The official colour contract is YSWORKS Design Tokens v1.0:
Primary 500 `#6D5EF7` is the brand colour and the
governed primary scale, interaction states, and dark surfaces apply to every
YSWORKS product and communication surface.

Avoid neon AI imagery, robots, circuit boards, generic stock technology scenes,
fake offices, fake teams, exaggerated gradients, gamer aesthetics, and visuals
that imply access to private systems.

### 5.3 Animation Philosophy

Motion may explain change, establish hierarchy, confirm interaction, or guide
attention. It must not delay access to content, create decorative spectacle, or
serve as proof of technical capability.

CSS remains appropriate for layout, hover and focus feedback, basic state
transitions, and simple presentation. Native WAAPI handles simple imperative
interactions, IntersectionObserver handles visibility, and
requestAnimationFrame is limited to genuine scroll synchronization. Anime.js is
the only permitted JavaScript animation dependency for the Public Website and
is reserved for approved coordinated choreography. Motion and any additional
JavaScript animation library are not permitted and must not be reintroduced.

Anime.js is progressive enhancement only. Public content, navigation, controls,
and binding actions remain visible, understandable, and usable when JavaScript
is unavailable, delayed, blocked, or animation initialization fails. Every use
must respect `prefers-reduced-motion` and remove, simplify, or bypass nonessential
motion without removing information or functionality.

### 5.4 Responsive And Accessible Experience

Every public and client-facing surface begins with the smallest supported
viewport and progressively uses available space. Navigation, content order,
tables, forms, dialogs, and binding actions must remain understandable without
horizontal page scrolling.

The applicable product contract defines its detailed accessibility target.
Semantic structure, keyboard access, visible focus, reflow, zoom, contrast,
touch targets, labels, status communication, and reduced motion are mandatory
design concerns.

## 6. Technology Stack

### 6.1 Stack Policy

The official stack names approved technologies and their system roles. It does
not require every technology in every product, authorize deployment, or prove
that a private component exists. The smallest suitable subset is preferred.
Dependencies and vendor capabilities are reviewed before implementation.

### 6.2 Astro

Astro is the official framework for the Public Website. It provides static-first
rendering, content-oriented routing, reusable components, and narrow interactive
islands when a public interaction requires them.

Astro is not automatically the runtime for the Client Portal, Automation
Platform, YS AI OS, or future backend services. Those decisions remain scoped to
their products.

### 6.3 TypeScript

TypeScript is part of the current Public Website repository and its strict
engineering baseline. It is preferred for that repository's application logic
and contracts. This repository fact does not select TypeScript for the Client
Portal, YS AI OS, Automation Platform, or every future service.

TypeScript does not encode authorization by itself and does not replace runtime
validation at a trust boundary. Any cross-ecosystem language standard requires
a separate accepted decision.

### 6.4 Tailwind CSS

Tailwind CSS is installed in the current Public Website repository and its
repository coding standards direct current website work to use it. That makes it
a current implementation constraint, not an accepted cross-ecosystem technology
decision and not an automatic choice for future interfaces.

Its long-term Public Website status must be reconciled with the reviewed design
system and recorded in an accepted ADR before this Master Specification calls it
official.

### 6.5 Animation Library

Anime.js is the accepted and only permitted JavaScript animation library for the
Public Website. This decision does not select Anime.js for the Client Portal, YS
AI OS, the Automation Platform, or another YSWORKS system.

CSS remains the correct mechanism for layout, hover, focus, basic state
transitions, and simple presentation. JavaScript animation is justified only
when it materially improves hierarchy, state communication, or comprehension.
Anime.js usage must be progressively enhanced, must preserve a visible and
usable baseline when JavaScript or initialization fails, and must respect
`prefers-reduced-motion`. Motion is rejected for the Public Website and must
remain removed from its dependency graph and implementation.

### 6.6 Cloudflare Pages

Cloudflare Pages is the official hosting target for the static Public Website.
GitHub-reviewed source, CI validation, `pnpm build`, and static output form the
approved delivery model. A Pages preview is not production approval.

### 6.7 Cloudflare Tunnel

Cloudflare Tunnel is the approved connectivity model for a future authorized
self-hosted HTTP origin. It uses outbound-only connectors and does not require or
permit router port forwarding. It is not needed for the static Public Website.

### 6.8 Cloudflare Access

Cloudflare Access is the recommended initial authentication-perimeter candidate
for a small, invitation-only Client Workspace pilot, subject to an explicit
provider decision and current plan validation. The authentication provider
remains open. Access authenticates identity; it never authorizes tenant, object,
field, approval, or document access. The portal must enforce those decisions
server-side.

Access may protect approved private applications. It does not justify publishing
Docker, n8n, Portainer, databases, home-control systems, reverse-proxy
administration, or YS AI OS panels.

### 6.9 Docker

Docker is the selected internal container packaging and runtime technology when
an approved private service requires containers. This role does not confirm a
deployment or inventory. Its daemon, API, socket, management interface, and
control plane are never public and are never mounted into an Internet-facing
component.

Docker is not required for the static Public Website and this decision does not
authorize a container deployment.

### 6.10 n8n

n8n is the selected private workflow-orchestration technology for the Automation
Platform. This role does not confirm a deployment or production connection. Its
editor, management API, workflow definitions, execution endpoints, and logs
remain internal. Public webhooks terminate at the Secure Webhook Gateway and
reach n8n only through an approved normalized asynchronous boundary.

n8n is an executor, not a decision-maker or holder of business authority.
Every workflow requires a defined mandate, approval gates where applicable,
audit evidence, and fail-closed mutation behaviour with a documented degraded
or manual path (*EA 5.1; EA 9.2–4*). These are architectural requirements, not
claims about current workflow implementation.

### 6.11 GitHub

GitHub is the official source-control, review, and CI integration platform for
approved repositories. Changes use branches, reviewable commits, pull requests,
automated validation, least privilege, and strong account authentication.

Public repositories contain only public-safe material. GitHub does not store
production secrets, private infrastructure documentation, client data, or YS AI
OS internals.

## 7. Security

### 7.1 Governing Contract

The complete public security architecture is defined by the
[Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md).
This section states ecosystem invariants and does not replace route, webhook,
Cloudflare, caching, header, or production-readiness requirements in that
contract.

Enterprise security principles are governed by *EA 10.1–6*. System designs must
implement and verify those principles; their presence in Enterprise
Architecture does not prove a control exists.

### 7.2 Security Principles

- Minimize the public surface.
- Deny by default at identity, tenant, object, route, method, schema, cache,
  storage, and egress boundaries.
- Keep data stores and control planes unreachable from the public Internet.
- Authenticate every external machine event cryptographically and protect
  against replay.
- Require Zero Trust, MFA, least privilege, revocation, and audit for
  administrative access.
- Keep production, preview, development, and client contexts separate.
- Keep secrets outside repositories, builds, URLs, screenshots, logs, and
  documentation.
- Validate controls through evidence; configuration alone is not proof.
- Give every public capability an owner, threat model, data contract, disable or
  rollback mechanism, monitoring, and incident procedure.
- Isolate client data at authorization, processing, storage, cache, search, log,
  export, backup, and deletion boundaries.

### 7.3 Never Expose

The following must never be anonymously Internet-reachable or publicly
documented as accessible:

- Docker daemon, API, socket, or management plane;
- Portainer or any container-management interface;
- Redis;
- PostgreSQL;
- Home Assistant;
- Homebridge;
- Raspberry Pi hosts, identity, topology, ports, or management surfaces;
- n8n editor, management API, direct execution endpoints, workflows, or logs;
- YS AI OS panels, agents, prompts, tools, state, or internal documentation;
- reverse-proxy, tunnel, infrastructure, or monitoring administration;
- internal logs, stack traces, debug output, queue depth, or dependency health;
- secrets, credentials, tokens, cookies, keys, certificates, or secret names;
- client private data or information belonging to another tenant;
- internal pricing, rates not approved for a client, costs, margins,
  profitability, or negotiation history;
- internal workflows, routing, business logic, source identifiers, or private
  topology;
- origin addresses or any route that bypasses the approved public edge.

Authentication does not create an exception for infrastructure editors or
control planes. They remain on the LAN or approved Tailscale private overlay.

### 7.4 Public Exposure

Only the canonical Public Website and explicitly approved narrow public
interfaces may be anonymous. `hooks.ysworks.dev` is reserved for registered,
authenticated webhook and form routes. `portal.ysworks.dev`,
`status.ysworks.dev`, and `docs.ysworks.dev` remain future surfaces subject to
their separate readiness gates. No additional public subdomain exists by
implication.

## 8. Client Portal

### 8.1 Governing Contract

The [Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md) is the
authoritative detailed specification. The Client Workspace remains a future
product and must not be implemented from this summary alone.

The client-facing product is the **Client Workspace**. “Client Portal” names
the technical architecture and security boundary. The
[Client Experience Constitution](CLIENT_EXPERIENCE_CONSTITUTION.md)
(*III.VII; III.XI*) governs its client experience; this section summarises only
the technical contract.

### 8.2 Roles

- **Founder:** internal governance and audited emergency role; MFA required.
- **Client Owner:** primary representative for one client tenant, including
  membership and designated approval responsibilities.
- **Client Member:** project collaborator with explicitly assigned visibility and
  actions; membership alone does not grant approval authority.
- **YSWORKS Operator:** assigned delivery role for named clients; MFA required.
- **Support:** narrow, case-bound, time-limited support role; MFA required.
- **Read-Only Auditor:** future time-bounded role for an explicitly enumerated
  tenant or project scope.

Authentication establishes identity only. Roles, membership, tenant context,
object access, field visibility, and actions are authorized independently on the
server for every request.

### 8.3 Permissions And Isolation

Permissions are deny-by-default, tenant-scoped, assignment-aware, and
purpose-bound. “Internal user” is never a global bypass. Browser-provided tenant
or object identifiers are never authoritative. Cross-client reads, writes,
searches, counts, timing disclosures, caches, files, logs, exports, and errors
that confirm another tenant are prohibited.

Clients receive high-entropy portal identifiers and sanitized projections, not
canonical source records. The browser never connects directly to PostgreSQL,
GitHub, Notion, Google Drive, YS AI OS, n8n, or another private source.

### 8.4 Dashboard

The approved information architecture contains Overview, Projects, Milestones,
Deliverables, Approvals, Change Requests, Activity, Meetings, Support, Documents,
and future Billing. Empty future sections remain hidden until their product and
data contracts exist.

Overview prioritizes required actions, verified progress, blockers, client
dependencies, next action, responsible visible party, estimated date, upcoming
meeting, and meaningful activity. It excludes vanity charts, fabricated health,
raw logs, and private operational metrics.

### 8.5 Progress

Progress is derived from approved phases, milestones, acceptance criteria,
baseline weights, and evidence. Arbitrary manual percentages are prohibited. If
a defensible percentage cannot be calculated, the portal shows phase,
milestones, blockers, dependencies, and next action without a percentage.

### 8.6 Approvals

An approval is an immutable decision bound to tenant, project, exact object,
version, content digest, identity, role, server timestamp, policy, and audit
event. A changed object requires a new version and approval; the earlier approval
remains historical evidence only.

An approval never directly merges, deploys, publishes, changes infrastructure,
changes DNS or Cloudflare, executes n8n or YS AI OS, writes to a canonical private
source, or releases credentials.

### 8.7 Audit And Privacy

Authentication, sessions, membership, roles, publication, approvals, change
requests, documents, exports, support elevation, billing visibility, privacy
requests, retention, and offboarding are auditable. Events are immutable,
tenant-aware, redacted, retention-limited, and free of secrets or raw private
payloads.

Portal data is minimized. Sessions are secure, revocable, and shorter for
privileged actions. Retention, export, deletion, backup, legal-hold, and privacy
requirements must be approved before production.

### 8.8 Documents

Documents use approved types and sizes, quarantine, malware and content-type
validation, visibility classes, version and digest metadata, controlled
short-lived delivery, revocation, retention, and audit. Canonical storage URLs,
credentials, active scripts, unscanned files, and cross-tenant access never reach
the browser.

## 9. Brand Voice

### 9.1 Voice

YSWORKS communicates in a professional, modern, honest, direct, calm, and
technically precise voice. Writing uses plain language, specific nouns, active
voice, short paragraphs, explicit limits, and concrete outcomes.

### 9.2 Communication Rules

- Explain what is true.
- Lead with the customer problem and useful outcome.
- Distinguish current, future, exploratory, private, and unavailable states.
- Use one official term for one concept.
- State exclusions when they affect expectations.
- Write for understanding before search ranking or conversion.
- Keep private mechanisms out of public explanations.
- Translate meaning and tone naturally; do not mirror awkward source-language
  syntax.

### 9.3 Prohibited Voice

Do not use buzzwords, manufactured urgency, fake scarcity, inflated certainty,
or language such as revolutionary, disruptive, world-class, best-in-class,
game-changing, cutting-edge, proprietary magic, guaranteed growth, autonomous
agents, or “AI-powered everything.”

Do not frame YSWORKS primarily as a website company, chatbot company, or AI
agency. Do not invent proof. Do not imply that internal leverage is a client
product or a guaranteed result.

### 9.4 Language Policy

Spanish and English are the official Public Website languages. Copy is authored
and reviewed in both languages; no runtime machine translation is used. Spanish
is the default canonical language at the root route. English uses the `/en/`
route prefix. Each localized page has a self-canonical URL and reciprocal
`hreflang` links for `es`, `en`, and `x-default` where appropriate.

Navigation, footer, metadata, structured data, legal notices, errors, and
interaction labels are localized through shared content contracts without
duplicating components. Language selection is keyboard and screen-reader
accessible, preserves the equivalent route when one exists, and falls back to
Spanish when localized content is unavailable. A missing translation must not
silently mix languages on one page.

The approved home-page direction is:

- Spanish: “Tecnología que hace avanzar tu empresa.”
- English: “Technology that moves your business forward.”

The supporting copy explains that YSWORKS designs, builds, automates, and secures
digital solutions so a business can operate better, scale safely, and rely less
on manual work.

## 10. Future Roadmap

This roadmap defines sequence, not dates, commitments, or implementation
authorization. Each stage requires a separate scope, owner, risk review, and
exit gate.

Enterprise growth follows the fixed order in *EA 11.1*: systems,
documentation, architecture, automation, delegation, then people. Roadmap
sequence never overrides that constraint.

### 10.1 Public Website

Establish the canonical bilingual public presence, service clarity, honest
contact path, privacy foundation, accessibility, performance, SEO, and approved
public proof. Add forms, analytics, journal, labs, portfolio, or public products
only after their separate readiness conditions are met.

### 10.2 Client Workspace

Progress through foundation, synthetic static prototype, authentication,
read-only projection, approvals, documents, future billing, and production
hardening as defined by the Client Portal Foundation.

### 10.3 Automation Platform

Define ownership, event contracts, isolated environments, secret handling,
failure behavior, audit, recovery, and the Secure Webhook Gateway before any
public integration. Add providers incrementally after authentication, replay,
schema, idempotency, queue, and downstream-isolation validation.

### 10.4 Infrastructure

Establish reproducible, reviewed, least-privilege foundations for public edge,
private connectivity, runtime isolation, storage, backup, recovery, monitoring,
patching, access, and incident response. Public production requires evidence for
origin isolation, restoration, rollback, rotation, and exposure inventory.

### 10.5 AI Platform

Develop controlled internal AI capabilities around approved outcomes,
evaluation, data boundaries, human responsibility, observability, and fallback.
Promote a capability to a public product only through a separate product,
security, privacy, support, and evidence decision.

### 10.6 Internal OS

Evolve YS AI OS as a private operating capability for quality, coordination,
documentation, and delivery. Preserve strict separation from public
repositories, client interfaces, and marketing proof.

### 10.7 Knowledge Platform

Create a governed hierarchy for this master specification, domain contracts,
ADRs, standards, reusable knowledge, client-scoped knowledge, and private
operational documentation. Add classification, ownership, review, retention,
search, and publication controls before broader automation or distribution.

## 11. Decisions

The following register lists major ecosystem decisions. Detailed ADRs remain in
their referenced documents. `Accepted` means the direction is official;
`Conditional` means the direction is official only after its named gate;
`Proposed` means implementation cannot depend on it yet.

### ADR-M001: Technology Engineering Company

- **Decision:** Position YSWORKS as a technology engineering company using the
  Quiet Engineering idea.
- **Reason:** The category covers the complete system capability without making
  AI, websites, or chatbots the company identity.
- **Alternatives rejected:** Marketing agency, template website shop, generic AI
  consultancy, chatbot company, and unrestricted technology consultancy.
- **Status:** Accepted.

### ADR-M002: Static-First Public Website

- **Decision:** Use Astro and Cloudflare Pages for the static-first Public
  Website. Treat TypeScript and Tailwind CSS as current repository technologies,
  not cross-ecosystem standards.
- **Reason:** This minimizes runtime complexity and supports performance,
  accessibility, security, content structure, and maintainability while keeping
  the accepted decision aligned with the ADRs that actually govern it.
- **Alternatives rejected:** Plain unstructured HTML for the full site, a
  client-rendered React application, Next.js as the default, and self-hosting the
  static website.
- **Status:** Accepted. See [ADR-001](../.ai/decisions/ADR-001.md) and
  [ADR-002](../.ai/decisions/ADR-002.md).

### ADR-M003: Engineering-First Brand

- **Decision:** Use a dark-first, restrained, accessible, engineering-first
  design language and factual voice. Adopt YSWORKS Design Tokens v1.0 as the
  cross-ecosystem color contract, with Primary 500 `#6D5EF7` as the official
  brand color.
- **Reason:** Trust must come from clarity and execution rather than spectacle or
  unsupported proof.
- **Alternatives rejected:** Marketing-first branding, AI-hype positioning,
  product-dashboard theater, neon technology aesthetics, and fake social proof.
- **Status:** Accepted. See [ADR-003](../.ai/decisions/ADR-003.md).

### ADR-M004: Animation Governance

- **Decision:** Use Anime.js as the only permitted JavaScript animation library
  for the Public Website. Continue to use CSS for layout, hover, focus, basic
  state transitions, and simple presentation. Require progressive enhancement,
  a visible and usable no-animation baseline, initialization-failure safety, and
  `prefers-reduced-motion` support. Motion must remain removed.
- **Reason:** One narrowly scoped library prevents competing animation runtimes
  while supporting interactions whose state communication or sequencing
  benefits from JavaScript. The progressive-enhancement boundary preserves
  accessibility, resilience, performance discipline, and static-first delivery.
- **Alternatives rejected:** Motion, multiple JavaScript animation libraries,
  animation-first page architecture, JavaScript-dependent access to content,
  and treating CSS as unsuitable for simple presentation and state feedback.
- **Status:** Accepted by Founder decision for the Public Website. Other YSWORKS
  systems require their own scoped decision.

### ADR-M005: Canonical Domain And Minimal Public Surface

- **Decision:** Use `ysworks.dev` as the apex, `www.ysworks.dev` as the canonical
  website, and only the hostnames approved by the public-platform contract.
- **Reason:** One hostname per trust purpose reduces ambiguity, bypass risk, and
  premature public surface.
- **Alternatives rejected:** Apex as a second web origin, wildcard DNS, shared
  public and administrative hosts, and speculative product subdomains.
- **Status:** Accepted as an architecture contract; production connection
  requires separate approval.

### ADR-M006: Cloudflare As Public Edge

- **Decision:** Use Cloudflare for authoritative public DNS and edge controls;
  use outbound-only Cloudflare Tunnel for any future approved self-hosted HTTP
  origin.
- **Reason:** The model supports a narrow public surface and blocks direct origin
  ingress without router port forwarding.
- **Alternatives rejected:** Direct origin exposure, router port forwarding, and
  a self-hosted public edge for the static website.
- **Status:** Accepted as a foundation; exact plan capabilities remain an Open
  Decision before implementation.

### ADR-M007: Caddy For A Future Fixed HTTP Boundary

- **Decision:** Prefer Caddy if a small, fixed self-hosted HTTP boundary becomes
  necessary behind Cloudflare Tunnel.
- **Reason:** Caddy provides a small, readable configuration without requiring
  Docker control-plane access.
- **Alternatives rejected:** Traefik without a proven dynamic-discovery need and
  NGINX when its extra manual configuration has no compensating requirement.
- **Status:** Conditional; no self-hosted public origin is currently authorized.

### ADR-M008: Private Control Planes And Data Stores

- **Decision:** Keep Docker, Portainer, n8n administration, Redis, PostgreSQL,
  home-control systems, reverse-proxy administration, and YS AI OS panels
  internal with no public DNS or ingress.
- **Reason:** Authentication alone does not adequately protect high-impact
  control planes and canonical private data.
- **Alternatives rejected:** Public login pages, obscure URLs, Access-only
  publication, and direct provider-to-n8n routing.
- **Status:** Accepted and mandatory.

### ADR-M009: Private YS AI OS

- **Decision:** Keep YS AI OS private and separate from public repositories,
  portfolio, products, and client interfaces.
- **Reason:** It contains proprietary mechanisms and private operational context;
  public trust does not require their disclosure.
- **Alternatives rejected:** Publishing selected internals, using internal agents
  as marketing proof, and mixed public/private documentation.
- **Status:** Accepted. See [ADR-004](../.ai/decisions/ADR-004.md).

### ADR-M010: Narrow Secure Webhook Gateway

- **Decision:** Terminate public forms and provider events at
  `hooks.ysworks.dev` on explicitly registered routes with signature, timestamp,
  replay, schema, rate, timeout, idempotency, and minimal-response controls.
- **Reason:** Public traffic must not reach workflow tools or private processing
  directly.
- **Alternatives rejected:** Direct n8n webhooks, catch-all proxies, shared public
  editor hosts, and unauthenticated provider routes.
- **Status:** Accepted as an architecture contract; runtime and queue remain Open
  Decisions.

### ADR-M011: Tenant-Isolated Client Portal

- **Decision:** Build the future portal around server-side deny-by-default
  authorization and sanitized tenant projections.
- **Reason:** Authentication and opaque identifiers do not prevent cross-client
  disclosure or unauthorized object access.
- **Alternatives rejected:** Client-side authorization, direct source access,
  email-domain authorization, shared unpartitioned caches, and global internal
  bypass roles.
- **Status:** Accepted as a product and security contract; implementation remains
  gated.

### ADR-M012: Cloudflare Access Candidate For Initial Portal Authentication

- **Decision:** Retain Cloudflare Access as the recommended candidate for a
  small invitation-only Client Workspace pilot, while the portal separately
  authorizes every tenant and object. Final provider selection remains open.
- **Reason:** It provides a low-operational-cost identity perimeter suitable for
  few invited users.
- **Alternatives rejected:** Building magic links initially, treating Access as
  tenant authorization, and starting with a complex identity platform before
  scale requires it.
- **Status:** Proposed candidate. Reopened by the Enterprise Architecture v1.0
  integration pending an explicit authentication-provider decision and plan,
  identity, MFA, lifecycle, and token-validation review.

### ADR-M013: Evidence-Based Progress And Immutable Approvals

- **Decision:** Calculate progress from verified milestone criteria and bind
  approvals to exact immutable versions and digests.
- **Reason:** Arbitrary percentages and mutable approvals create false status and
  non-repudiation failures.
- **Alternatives rejected:** Manually chosen progress, approvals by comment,
  approval inheritance across versions, and approval-triggered infrastructure
  changes.
- **Status:** Accepted as a portal contract.

### ADR-M014: GitHub Review Workflow

- **Decision:** Use GitHub branches, reviewable commits, pull requests, CI, and
  least-privilege authentication for approved repositories.
- **Reason:** Review and repeatable validation provide traceability and reduce
  unreviewed change risk.
- **Alternatives rejected:** Direct unreviewed changes to the default branch,
  repository-held production secrets, and public repositories containing private
  operations.
- **Status:** Accepted.

### ADR-M015: Evidence-Only Public Portfolio

- **Decision:** Publish client work only with permission, accurate evidence, safe
  assets, and approved status; otherwise publish no client case placeholder.
- **Reason:** Absence of public proof is safer than invented or premature proof.
- **Alternatives rejected:** Unapproved logos, informal work framed as a client
  case, unfinished work framed as complete, “coming soon” case cards, invented
  metrics, and testimonials without evidence.
- **Status:** Accepted.

### ADR-M016: Scoped Commercial Terms

- **Decision:** Do not publish prices, ranges, starting prices, or rate tables.
  Scope each proposal according to project conditions and describe maintenance
  through adaptable support levels.
- **Reason:** Delivery responsibility varies materially with scope, complexity,
  timing, integrations, support, and maintenance.
- **Alternatives rejected:** Fixed public price tables, marketing price anchors,
  and rigid one-size-fits-all maintenance packages.
- **Status:** Accepted.

### ADR-M017: Bilingual Public Website

- **Decision:** Author Spanish and English content without runtime translation;
  use Spanish root routes and `/en/` English routes with reciprocal localization
  metadata and shared components.
- **Reason:** Explicit localized routes provide stable navigation, natural copy,
  accessible selection, and coherent SEO.
- **Alternatives rejected:** Runtime machine translation, mixed-language pages,
  duplicated component trees, query-only language state, and silent missing-copy
  fallbacks.
- **Status:** Accepted for future Public Website implementation.

### ADR-M018: Launch Service Portfolio

- **Decision:** Launch with controlled AI Systems, Automation, Software
  Development, Web Development, practical Cybersecurity, Infrastructure,
  Systems and Professional Hardware, Consulting, and Maintenance. Treat
  Training only as a supporting delivery capability.
- **Reason:** These categories reflect approved, supportable capabilities while
  preventing a suggested or future capability from becoming a public offer by
  implication.
- **Alternatives rejected:** Training as an independent launch category,
  advanced or accredited offensive-security claims, custom AI agents as the
  primary product, and an unrestricted technology catalog.
- **Status:** Accepted. On-site physical and hardware delivery is primarily in
  Madrid and Lanzarote; suitable remote work may be delivered more broadly.

### ADR-M019: Unified Geometric YS Identity

- **Decision:** Use `YS` as the constitutional geometric monogram and `YSWORKS`
  uppercase as the official wordmark. Use the wordmark with the monogram for the
  primary identity and the monogram alone for approved compact applications.
  Client Workspace shares the YSWORKS identity. YS AI OS remains in the same
  visual family without a separate public logo or public identity.
- **Reason:** One scalable identity connects the Public Website, Client
  Workspace, private internal systems, and future surfaces without fragmenting
  the company brand.
- **Alternatives rejected:** The obsolete `YW` draft state, unrelated product
  brands, direct use of a generated raster as a production logo, and improvised
  vector geometry without review.
- **Status:** Accepted and aligned with Brand Bible v1.1 (*II.VIII.1*).
  Governed vector construction, optical testing, lockups, favicon, application
  icons, trademark review, and production migration remain bounded open tasks.

### ADR-M020: Enterprise Architecture v1.0

- **Decision:** Adopt
  [YSWORKS Enterprise Architecture v1.0](YSWORKS_ENTERPRISE_ARCHITECTURE.md) as
  the enterprise-structure authority subordinate to Volumes I–III. Its
  eight-layer stack, thirteen domains, authority vocabulary, always-human
  decisions, canonical system landscape, forward-only information flow,
  knowledge classes, mandate-based automation, approval gates, security
  principles, scalability order, named Founder-absence risk, and Enterprise
  Tests are architectural requirements.
- **Reason:** Future systems, workflows, and implementations require one
  governed structure for responsibility, truth, knowledge, authority, and
  replaceability.
- **Alternatives rejected:** Tool-led structure, implicit authority, autonomous
  decision-making by automation, backward mutation of records, public access to
  private systems, and treating current implementations as permanent
  architecture.
- **Status:** Accepted. This decision does not claim that any control, system,
  store, workflow, topology, backup, recovery objective, or continuity
  mechanism is implemented.

## 12. Open Decisions

Open Decisions are real governance gates, not placeholders or permission to
invent an answer during implementation. The less-exposing behavior applies until
each decision is approved.

### 12.1 Cross-Document Conflicts

1. **Tailwind CSS authority:** Tailwind CSS is installed and directed by the
   current repository coding standards, but no accepted ADR makes it the
   long-term Public Website or ecosystem standard. It remains a current
   repository constraint while its official scope is open.
2. **Client Workspace authentication:** Earlier prose described Cloudflare
   Access as the approved initial perimeter. Enterprise Architecture integration
   keeps the authentication provider open. ADR-M012 now records Access only as
   a proposed candidate until an explicit provider decision is accepted.

ADR-M015 and the supporting Business Foundation now consistently prohibit case
placeholders. ADR-M001 and the Company Bible consistently define YSWORKS as a
technology engineering company. ADR-M004 settles the animation-library
decision. “Client Workspace” is the client-facing product name, while “Client
Portal” remains the technical architecture and security term. ADR-M020 settles
the enterprise layers, domains, authority model, system responsibilities,
knowledge classes, automation mandates, enterprise security principles,
scalability order, and Enterprise Tests. Those matters are no longer
documentation conflicts.

Volume I, Book XII, Article 1 predates the Enterprise Architecture and therefore
does not name it in the document-order enumeration. The current recorded Founder
decision inserts Enterprise Architecture after Volume III and before this
Master Specification without rewriting the canonical Volume I manuscript.

### 12.2 Company And Commercial

- Which real work, owned products, open-source work, or technical demonstrations
  may become public proof.
- Final legal company, contracting, jurisdiction, privacy-controller, and
  processor details.
- Legal and commercial approval of proposal, quotation, payment, refund,
  support, maintenance, and service-level terms. The company documentation
  provides governed foundations but is not a substitute for legal review or an
  engagement-specific agreement.
- Whether training becomes a separately marketed service or remains attached to
  delivery and maintenance engagements.

### 12.3 Public Website And Brand

- Final governed vector masters, compact assets, favicon, application icon,
  lockups, and social image for the constitutional `YS` monogram. The raster
  reference must not ship directly; the public wordmark remains uppercase
  `YSWORKS`.
- Whether professional trademark review or registration is required.
- Governance for a future authentic photography archive, operational audio
  assets, and AI-media disclosure implementation.
- Whether Tailwind CSS remains the long-term Public Website styling standard or
  only the current repository implementation choice.
- Final reviewed typography, spacing, breakpoint, component, and motion tokens;
  unreviewed design recommendations do not settle them. Color is settled by
  YSWORKS Design Tokens v1.0.
- Final production privacy notice before collection, forms, analytics,
  newsletter, or downloads.
- Whether privacy-aware analytics, newsletter, Journal, Labs, or downloads are
  introduced and under what content cadence.
- Final English and Spanish editorial review, locale-specific legal content, and
  behavior when a page intentionally exists in only one language.
- Final Content Security Policy allowlist based on the actual asset and vendor
  inventory.

### 12.4 Public Platform

- Cloudflare plan and exact feature availability at implementation time.
- Whether any self-hosted public origin is necessary.
- Secure Webhook Gateway runtime, durable queue, secret manager, key rotation,
  log destination, retention, recovery, and provider-specific contracts.
- Identity provider, device posture, administrative MFA, service identity, and
  access-review requirements.
- Public status provider, operational independence, availability objectives,
  and incident roles.

### 12.5 Client Portal

All portal-specific Open Decisions remain governed by
[Client Portal Foundation section 14](architecture/CLIENT_PORTAL_FOUNDATION.md#14-open-decisions),
including legal roles, pilot users, identity lifecycle, authorization model,
projection runtime, source mapping, milestone weighting, approver delegation,
documents, support elevation, audit, billing, localization, recovery, and launch
readiness.

No portal hostname, account, source connection, client data, or production
capability exists until its applicable decisions and gates are approved.

### 12.6 Enterprise Implementation

The Enterprise Architecture is settled; its implementations are not. The
following remain open until governed system designs or decisions resolve them:

- exact Client Workspace technical stack and authentication provider;
- database, event-bus or queue, audit-store, and knowledge-store technologies;
- private-system deployment topology and production hosting beyond the already
  approved static Public Website target;
- backup technology, retention, and exact RPO/RTO;
- Founder continuity mechanism and delegated emergency authority;
- operational observability stack and notification providers;
- billing provider and accounting integration;
- detailed API contracts; and
- implementation sequence.

## 13. Glossary

### Approval

The specific, informed, recorded decision that permits an intended action
(*EA 5.1*). Approval is not a privileged execution command, is consumed only by
its authorised action, and does not carry across changed context or versions.

### Authority

The traceable chain from an act to the human seat entitled to have caused it
(*EA 5.1–2*). Tool access, role labels, recommendations, automation, and
execution are not authority by themselves.

### Automation

Execution by machine within a recorded mandate (*EA 5.1; EA 9.2*). Automation
does not decide and does not receive accountability.

### Automation Platform

The private YSWORKS capability for approved workflow orchestration and
integrations. n8n is its selected private orchestration technology; this does
not confirm a deployment, and its control surfaces remain internal.

### Client

A Customer with an active or historically governed YSWORKS engagement. In the
portal, a Client is represented by one isolated Tenant.

### Client Member

A portal user authorized for explicitly assigned resources and actions inside
one Client Tenant. Membership alone does not grant approval authority.

### Client Owner

The primary authorized client representative for membership, designated
approvers, export, closure, and other client-governance actions within one
Tenant.

### Customer

An organization or authorized person evaluating, purchasing, or receiving a
YSWORKS service or product. “Customer” is the broad commercial term; “Client” is
used for a governed engagement and portal context.

### Decision

A selection among alternatives that creates an obligation (*EA 5.1*).
Reversibility determines the required decision process.

### Delegation

The explicit transfer of decision rights within named bounds. Delegation
transfers the right, never accountability (*EA 5.1*).

### Deployment

A controlled release of an approved system version into a named environment.
Deployment requires separate authorization, validation, traceability, and a
rollback or disable path.

### Deliverable

A defined, reviewable output of an engagement or Milestone. Portal deliverables
are versioned and exposed only through an authorized sanitized projection.

### Domain

A named area of business responsibility with one accountable owner, defined
duties, and explicit interactions (*EA 4.1–3*).

### Execution

Performance of already-decided work. An executor that encounters an undecided
question stops and escalates (*EA 5.1*).

### Founder

The internal governance role accountable for company policy and exceptional,
audited access. Founder is not a global authorization bypass and cannot act as a
client approver.

### Infrastructure

The hosting, network, runtime, storage, security, observability, backup, and
recovery foundation for approved Systems. The term does not imply public access
or disclose private topology.

### Internal Documentation

Private operational and business material that is not stored in or published
through public repositories or client-facing systems.

### Knowledge Base

The governed collection of classified specifications, decisions, standards, and
reusable knowledge for YSWORKS, organised into the five classes in *EA 8.1*.

### Mandate

The recorded scope, readable inputs, permitted effects, and stop conditions
under which an automation may execute (*EA 9.2*).

### Maintenance

An agreed continuing responsibility to keep a System secure, current,
understandable, supported, or improving within explicit scope and availability.

### Milestone

A verifiable Project outcome with acceptance criteria, evidence, dependencies,
and an approved baseline weight when progress is calculated.

### Operator

A YSWORKS delivery role authorized only for assigned Clients and Projects. An
Operator cannot impersonate a client approver or use internal status as a global
bypass.

### Recommendation

An evidence-bearing proposal for a decision with no authority of its own
(*EA 5.1*).

### Portal

The technical architecture and security term for the authenticated delivery
boundary of the Client Workspace. It presents tenant-isolated, sanitised
project information and is not an infrastructure or workflow administration
interface.

### Product

A repeatable YSWORKS-owned offering with an approved audience, scope, privacy,
security, support, and lifecycle. A private internal System is not a Product by
default.

### Project

The governed boundary for a client engagement, including scope, responsibilities,
phases, Milestones, Deliverables, decisions, and approved visibility.

### Public-Safe

Reviewed for its declared audience with private mechanisms, secrets,
unnecessary personal data, internal commercial material, and unauthorized client
information removed. In the portal, public-safe means safe for the authenticated
authorized client audience, not anonymous publication.

### Service

A category of client work YSWORKS can responsibly deliver within an approved
purpose, customer, scope, exclusions, evidence, and delivery model.

### Support

An agreed client service and a narrow internal portal role. The role has
case-bound, time-limited access and no approval, billing, export, or document
permission by default.

### System

A governed combination of software, data, process, interfaces, infrastructure,
ownership, and operating rules that produces a defined outcome.

### Tenant

The mandatory authorization and data-isolation boundary representing exactly
one Client in the portal. Tenant context is derived on the server and applied to
every object and data boundary.

### Workflow

A defined sequence of human and software steps that moves work from intent to
result. Public descriptions stay outcome-level; private routing and workflow
definitions remain internal.

### Workspace

The client-facing product name for the future authenticated YSWORKS experience.
Within that product, a Workspace may organise people and material, but it is
never an authorisation control by itself and must not be confused with a portal
Tenant.

### YS AI OS

The private internal operating and intelligence platform of YSWORKS. It is not a
public Product, client entitlement, portfolio item, or public repository scope.

### YSWORKS

The public technology engineering company and owner of the ecosystem defined by
this specification.
