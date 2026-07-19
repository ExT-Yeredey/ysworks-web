# YSWORKS Client Portal Foundation

- Status: Proposed functional, security, and experience contract
- Future hostname: `portal.ysworks.dev`
- Target exposure class: `PRIVATE`
- Scope: Documentation only

## 1. Purpose And Non-Goals

This document defines the **Client Portal**, the technical architecture and
security boundary for the future **Client Workspace** client-facing product. It
provides an authenticated, tenant-isolated view of approved YSWORKS project
information. The client experience is governed by the
[Client Experience Constitution](../CLIENT_EXPERIENCE_CONSTITUTION.md)
(*III.VII; III.XI*). This foundation defines functional and security contracts
without selecting or implementing a runtime, authorization engine, database,
authentication flow, or source integration.

This document does not authorize:

- creating the hostname or a DNS record;
- changing Cloudflare or production;
- creating Astro pages, APIs, authentication, databases, or storage;
- connecting PostgreSQL, GitHub, Notion, Google Drive, YS AI OS, or n8n;
- exposing internal source identifiers, infrastructure, workflows, or topology;
- creating client accounts or importing client data.

`portal.ysworks.dev` must remain nonexistent until the applicable roadmap gates
are approved. The portal is not an administration interface, workflow editor,
source-system browser, file-system browser, or real-time window into private
YSWORKS operations.

## 2. Product Principles

1. A client sees only an authorized, sanitized projection of its own data.
2. Authentication establishes identity; it never grants tenant or object access
   by itself.
3. Authorization is server-side, explicit, deny-by-default, and evaluated on
   every request and object.
4. Canonical private sources are never queried directly by a browser.
5. Progress and activity communicate verified facts, not optimism or theater.
6. Approvals are attributable, version-specific, immutable events.
7. The smallest useful amount of client and project data is exposed.
8. Internal tools, notes, workflows, prompts, logs, and commercial margins remain
   private.
9. Mobile access is a first-class workflow, not a compressed desktop dashboard.
10. Every future feature must preserve tenant isolation before convenience.

## 3. Functional Boundary

The future logical boundary is:

```text
Approved private sources
        |
        | server-side adapters or controlled synchronization only
        v
validation -> authorization context -> sanitization -> portal projection
                                                        |
                                                        v
                                           portal server or BFF boundary
                                                        |
                                                        v
                                     authenticated client browser
```

The diagram is a contract, not a deployment topology. Technology choices and
private source locations remain open.

The browser may communicate only with the portal boundary. It must never receive
source credentials or connect directly to a database, GitHub, Notion, Google
Drive, YS AI OS, n8n, or any future canonical private source.

## 4. User And Role Model

### 4.1 Role Definitions

#### Founder

Internal YSWORKS governance role.

- May manage portal policy, tenant lifecycle, role assignments, and emergency
  access.
- May view a client only for a documented business or support purpose.
- Cannot silently act as a client approver.
- Break-glass access requires reason, short duration, notification, and audit.
- MFA is mandatory.

#### Client Owner

Primary authorized representative for one client tenant.

- May view all portal-safe information for that client.
- May invite, suspend, or remove Client Members subject to future policy.
- May manage client-side approver assignments.
- May approve, reject, or request changes on eligible objects.
- May request tenant exports and account closure.
- Has no access to another client or internal YSWORKS-only information.

#### Client Member

Standard collaborator within one client tenant.

- May view projects and documents explicitly available to the member's client
  and project memberships.
- May comment, submit change requests, and interact with support where permitted.
- May approve only when separately designated as an approver for the exact
  project or approval type; membership alone does not grant approval authority.
- Cannot manage tenant owners, billing, exports, or other clients.

#### YSWORKS Operator

Internal project-delivery role.

- May manage portal-safe project projections for assigned clients only.
- May publish milestones, deliverables, meetings, and requests for approval.
- Cannot change a client's recorded decision or impersonate a client approver.
- Cross-client access is assignment-based, not global by default.
- MFA is mandatory.

#### Support

Internal support role with narrow, time-limited access.

- May inspect account and session metadata required to solve a support case.
- Has no document download, approval, billing, export, or project-edit permission
  by default.
- Any elevation requires a case reference, explicit scope, expiry, and audit.
- Client-session impersonation is disabled initially; if ever introduced, it
  requires consent, a visible banner, and a non-repudiable audit record.
- MFA is mandatory.

#### Read-Only Auditor (Future)

Time-bounded review role for a named tenant or project.

- May view an explicitly enumerated audit scope.
- Cannot comment, approve, request changes, download documents, manage users, or
  access support tools unless the audit grant explicitly includes that action.
- Access expires automatically.
- MFA should be mandatory regardless of whether the auditor is internal or
  external.

### 4.2 Conceptual Permission Matrix

This matrix describes intent, not an authorization implementation.

| Capability | Founder | Client Owner | Client Member | Operator | Support | Auditor |
| --- | --- | --- | --- | --- | --- | --- |
| View tenant-safe overview | Purpose-bound | Own tenant | Assigned scope | Assigned clients | Case-bound metadata | Explicit scope |
| Manage client members | Policy oversight | Own tenant | No | No | No | No |
| Publish portal-safe project data | Emergency only | No | No | Assigned clients | No | No |
| Comment or request change | No client impersonation | Yes | If permitted | Assigned clients | Support case only | No |
| Record client approval | Never as client | Yes | Only if designated | No | No | No |
| Upload or publish deliverable | No by default | Client upload if enabled | Client upload if enabled | Assigned clients | No | No |
| View billing | Purpose-bound | Future, own tenant | No | Limited future status | No | No |
| Export tenant data | Governance | Request own tenant | No | Prepare, not approve | No | Explicitly granted |
| Access another tenant | Purpose-bound, audited | Never | Never | Only if assigned | Only case-bound | Never |

### 4.3 Permission Invariants

- A user may hold roles in more than one tenant, but every request uses one
  explicit server-derived tenant context.
- Roles do not accumulate across tenants.
- “Internal user” is not a global bypass.
- Support and emergency access are temporary grants, not standing roles with
  hidden powers.
- No role may alter or delete an immutable approval or audit event.
- The portal never infers authorization from an email domain alone.

## 5. Tenant Isolation

### 5.1 Mandatory Isolation

The following are prohibited:

- cross-client reads, writes, searches, counts, timing disclosures, or exports;
- sequential or predictable public identifiers;
- treating an opaque identifier as the authorization control;
- accepting a browser-supplied tenant identifier as authoritative;
- exposing canonical private IDs, URLs, paths, repository names, workspace IDs,
  workflow IDs, database keys, or internal object relationships;
- direct browser access to canonical private sources;
- shared cache entries, search indexes, queues, files, logs, or exports without a
  verified tenant partition;
- errors that confirm whether an object exists in another tenant.

### 5.2 Tenant Context Contract

- Derive tenant context from the validated identity and active membership on the
  server.
- Bind every object lookup to tenant context and the required capability.
- Use high-entropy, non-sequential portal identifiers. Authorization remains
  mandatory even if an identifier is unguessable.
- Return the same generic not-found response for nonexistent and unauthorized
  objects where disclosure would create an enumeration channel.
- Include tenant context in storage, cache, queue, search, export, analytics, and
  audit keys.
- Prevent tenant context from being changed through query parameters, hidden
  fields, object IDs, file names, or client-side state alone.
- Test horizontal and vertical authorization for every object type and action.

### 5.3 Sanitized Projection

Each client receives a purpose-built portal projection, never a pass-through
copy of a source object. A projection must:

- map canonical identifiers to portal identifiers;
- expose only approved fields;
- normalize source-specific statuses into portal vocabulary;
- remove private notes, internal actors, routing, logs, prompts, and credentials;
- carry tenant, visibility, version, source-freshness, and authorization metadata
  on the server side;
- fail closed when source data is malformed, stale beyond policy, or lacks a
  visibility classification.

## 6. Information Architecture And Dashboard

### 6.1 Global Shell

The shell contains:

- current client and project context;
- concise primary navigation;
- global notifications limited to actionable client events;
- account, session, privacy, and sign-out controls;
- a persistent indicator when data is not current or an internal support session
  is active;
- keyboard-accessible navigation and a skip link.

### 6.2 Sections

| Section | Purpose | Primary content and actions |
| --- | --- | --- |
| Overview | Answer “where are we and what needs attention?” | Project health, current phase, verified progress, blockers, next action, pending approvals, client dependencies, next meeting |
| Projects | List authorized engagements | Project summary, status, phase, owner, dates, filters; no cross-client aggregate |
| Milestones | Show objective delivery checkpoints | Acceptance criteria, status, dependencies, evidence, estimate, responsible visible party |
| Deliverables | Provide versioned outputs | Title, version, status, approved description, safe file metadata, review or download action |
| Approvals | Centralize decisions | Pending and historical approvals, exact object/version, deadline, decision state, comments |
| Change Requests | Make scope changes explicit | Request, rationale, impact assessment, decision, owner, timeline; commercial detail only when approved for the client |
| Activity | Explain meaningful change | Sanitized chronological events; no raw logs or internal-only actions |
| Meetings | Prepare and follow up | Scheduled time, purpose, attendees approved for display, agenda, public notes, action items |
| Support | Provide a clear help path | New support request, status, safe conversation, service expectations; no internal ticket routing |
| Billing (Future) | Show approved commercial records | Invoice and payment status through a future hosted billing provider; no card data |
| Documents | Find approved client documents | Folder-independent categories, search within tenant, version, type, size, status, access and retention metadata |

Billing remains hidden until the product, provider, privacy, and accounting
contracts exist. An empty placeholder is not published.

### 6.3 Overview Priority

The Overview answers the five constitutional first-screen questions in this
order:

1. Is everything all right?
2. What is happening?
3. What requires my attention?
4. What is YSWORKS doing?
5. What happens next?

State appears before navigation. The first screen serves the executive reader
first; technical detail remains available through progressive disclosure.
Project health, evidence-based progress, blockers, client dependencies, pending
approvals, the responsible visible party, estimated dates, meetings, and recent
meaningful activity are mapped beneath those questions without changing their
order.

The page must not use vanity charts, invented velocity, raw internal metrics, or
false green health states.

### 6.4 Common States

Every section defines:

- loading without layout shift;
- genuinely empty state with a useful explanation;
- filtered-empty state distinct from no data;
- stale-data state with last verified time;
- access-denied state without object disclosure;
- recoverable error with a safe retry;
- unavailable state without stack traces or dependency names.

## 7. Project Progress Model

### 7.1 Core Entities

| Entity | Meaning |
| --- | --- |
| Project | Client-visible engagement boundary |
| Phase | Ordered delivery stage with entry and exit criteria |
| Milestone | Verifiable outcome with evidence and acceptance criteria |
| Deliverable | Versioned reviewable object produced by a milestone |
| Blocker | Condition that prevents a defined next step |
| Client dependency | Client-owned input or decision required for progress |
| Next action | The next concrete action that advances or resolves the project |

### 7.2 Required Visible Fields

Each project projection contains:

- current phase;
- milestone summary;
- evidence-based percentage or an explicit “not baselined” state;
- active blockers;
- normalized status;
- one next action;
- responsible visible party;
- estimated date with confidence or qualification;
- client dependency and requested-by date when applicable;
- last verified timestamp.

### 7.3 Status Vocabulary

Use a small stable vocabulary:

- `PLANNING`: scope or baseline is not yet approved;
- `ACTIVE`: verified work can advance;
- `WAITING_CLIENT`: a named client dependency blocks the next action;
- `BLOCKED`: a non-client blocker prevents advancement;
- `AT_RISK`: an evidenced risk threatens an approved estimate;
- `IN_REVIEW`: a versioned object awaits review or approval;
- `COMPLETE`: all completion criteria and required approvals are satisfied;
- `PAUSED`: work is intentionally suspended with an approved reason.

Status is derived from conditions and evidence. It is not a free-form color.

### 7.4 Percentage Contract

Do not show a percentage until project phases, milestones, acceptance criteria,
and baseline weights are agreed.

The baseline model is:

```text
project progress =
  sum(milestone baseline weight * verified completion factor)
  / sum(active baseline milestone weights)
```

Rules:

- Baseline milestone weights reflect agreed delivery significance, not hours
  spent or a desired visual result.
- A milestone has objective completion criteria and evidence.
- The default completion factor is `0` until criteria are satisfied and `1` when
  satisfied.
- Partial completion is allowed only when the milestone contains pre-defined,
  independently verifiable weighted criteria; it is calculated from those
  criteria, never typed as an arbitrary percentage.
- Blocked, waiting, and at-risk states do not create artificial progress.
- Scope changes create a new baseline version and preserve the previous baseline
  in the audit history.
- Rounding rules are stable and documented.
- If the model cannot produce a defensible number, show the phase, milestones,
  blockers, and next action without a percentage.

An accepted milestone never becomes incomplete silently. Correction requires a
new versioned event and visible explanation.

### 7.5 Estimates And Responsibility

- An estimated date is not a promise and displays its basis or confidence when
  uncertainty is meaningful.
- Client dependency delays are shown factually without blame.
- Responsible visible party uses `YSWORKS`, the client organization, or a person
  only when displaying the person's name is approved and necessary.
- Overdue state is computed from an approved date, not manually colored.

## 8. Approval Contract

### 8.1 Client Actions

An authorized approver may:

- approve;
- reject;
- request changes;
- add a comment.

Comments do not imply a decision. Requesting changes does not silently approve
unaffected parts unless the approval object explicitly supports partial scope.

### 8.2 Approval Record

Every decision is bound to:

- portal tenant ID;
- project ID;
- exact object type and portal object ID;
- immutable object version and content digest;
- decision type;
- actor identity and role at decision time;
- server timestamp and user-visible timezone;
- comment and attachment references approved for that decision;
- policy version and approval authority used;
- request ID and immutable audit event ID.

The source system may receive an authorized projection of the outcome later, but
the browser never writes to a canonical source directly.

### 8.3 Decision Rules

- Revalidate identity, tenant, role, assignment, object version, and approval
  state at submission time.
- Reject a decision for a stale or superseded version and show the newer version.
- Creating or publishing a new object version immediately moves every pending
  approval request for the previous version to `SUPERSEDED`. A completed approval
  remains immutable historical evidence but never approves the new version; the
  new version requires its own approval request and decision.
- Require explicit confirmation that names the action and object version.
- Use idempotency to prevent duplicate decisions.
- A successful response follows durable recording of the decision.
- Never edit or delete an approval. Corrections use a linked superseding event.
- Operator, Support, and Founder roles cannot masquerade as a client decision.
- High-impact approvals may require step-up authentication as a future policy.
- An approval records a business decision only. It must never directly deploy,
  merge, publish infrastructure, change DNS or Cloudflare, execute an n8n or YS
  AI OS workflow, write to a canonical private source, release credentials, or
  trigger another privileged operation. Any future downstream action requires a
  separate server-side policy, authorization, command, idempotency key, audit
  event, and human control where risk requires it.

### 8.4 Approval State Model

```text
DRAFT -> REQUESTED -> APPROVED
                   -> REJECTED
                   -> CHANGES_REQUESTED -> SUPERSEDED by a new version
                   -> EXPIRED
                   -> CANCELLED before a decision
```

## 9. Public-Safe Data Contract

“Public-safe” here means safe for the authenticated, authorized client audience;
it does not mean anonymously public.

### 9.1 Allowed Projection Fields

| Category | Fields that may be exposed after authorization |
| --- | --- |
| Identity | Display name, approved avatar, organization display name, portal role label |
| Project | Portal ID, title, approved summary, status, phase, verified progress, approved dates, visible responsible party |
| Milestone | Portal ID, title, client-safe criteria, status, evidence summary, dates, dependencies |
| Deliverable | Portal ID, title, description, version, digest display, media type, size, review state, safe download action |
| Approval | Portal ID, target title/type/version, requested time, deadline, decision, actor display name, approved comment |
| Change request | Portal ID, client-safe request, rationale, status, approved impact summary, dates |
| Activity | Event label, client-safe summary, visible actor, timestamp, related portal object |
| Meeting | Purpose, approved attendees, scheduled time, public agenda, public notes, action items |
| Support | Portal case ID, subject, client-visible messages, status, severity vocabulary, timestamps |
| Document | Portal ID, title, category, version, media type, size, client-visible owner, dates, retention label |
| Freshness | Last verified timestamp and stale/unavailable state |

Every field still requires tenant, object, and field-level visibility checks.

### 9.2 Fields That Must Be Omitted

- canonical database primary keys and connection details;
- repository, branch, issue, commit, workspace, page, drive, folder, workflow,
  execution, container, host, or infrastructure identifiers unless deliberately
  transformed into an approved client concept;
- private source URLs or deep links;
- prompts, agent configuration, YS AI OS internals, n8n workflows, automation
  routing, source schemas, or sync state details;
- internal notes, private comments, staff-only actors, performance evaluations,
  internal costs, cost breakdowns, profitability, margins, rates not approved for
  display, or negotiation history;
- credentials, tokens, cookies, authorization headers, signed source URLs,
  secret names, or certificate material;
- raw logs, stack traces, queries, debug output, correlation internals, queue
  depth, or dependency health;
- client data belonging to another tenant, including aggregate counts that allow
  inference;
- unnecessary personal data, security posture, session details, IP addresses, or
  device fingerprints;
- unscanned, quarantined, expired, revoked, or internal-only files;
- raw source payloads or unclassified extension fields.

### 9.3 Future Source Boundaries

The names below are source categories, not confirmation of deployed systems.

| Future source | Permitted server-side use | Browser prohibition |
| --- | --- | --- |
| PostgreSQL | Controlled adapter or projection input | No database connection, query, credentials, or canonical IDs |
| GitHub | Selected project/deliverable metadata after mapping | No repository token, direct private-repository access, private URL, raw issue, branch, or internal comment access |
| Notion | Approved page fields transformed into portal records | No workspace access token, page ID, private block, or direct embed by default |
| Google Drive | Approved document metadata and controlled file delivery | No Drive credentials, private folder traversal, or unrestricted source link |
| YS AI OS | Explicitly approved outcome projection only | No panels, prompts, agents, tools, internal state, or direct connection |
| n8n | Asynchronous server-side integration outcome only if approved | No editor, workflow ID, execution log, webhook bypass, or direct connection |

### 9.4 Freshness And Failure

- Every projection records when it was last verified.
- Stale data is labeled; it is not presented as current.
- A source failure returns a generic portal state and does not name the private
  dependency.
- A synchronization error never falls back to unfiltered source data.
- Deletion, revocation, and visibility changes propagate within a documented
  objective before production approval.

## 10. Authentication Foundation

Authentication is not implemented by this document. Every option still requires
server-side tenant membership and authorization.

Cloudflare Access, OTP, passkeys, and external identity providers establish an
authenticated identity only. None is ever the portal's tenant, role, object, or
field authorization system. The portal server must validate the identity token,
derive active tenant membership, and authorize every request independently.

### 10.1 Comparison

| Option | Advantages | Risks and operational cost | Fit |
| --- | --- | --- | --- |
| Cloudflare Access | Fast perimeter, default-deny policies, hosted login, OTP and external IdPs, short sessions, MFA controls, signed identity token | Access token must be validated at the server; it does not implement tenant/object authorization; client lifecycle can become manual | Best initial pilot for few invited clients |
| Custom magic links | Familiar passwordless experience and full product control | Requires secure token issuance, single use, expiry, email delivery, replay defense, recovery, session and abuse engineering | Do not build initially |
| Passkeys | Phishing-resistant, strong user experience after enrollment, no shared secret | Requires enrollment, device portability, recovery, fallback, support, account-linking, and browser compatibility design | Preferred mature direction, not first implementation |
| External identity provider | Mature MFA, lifecycle, federation, risk controls, passkeys depending on provider | Vendor cost, configuration, client organization compatibility, account linking and migration complexity | Introduce when client count, compliance, or federation requires it |

### 10.2 Initial Recommendation

For a small invitation-only pilot, use Cloudflare Access as the authentication
perimeter if the current Free plan and account limits support the expected users:

- allow exact invited identities, never `Everyone` or an unrestricted email
  domain;
- validate the Access JWT at the portal server boundary, including signature,
  issuer, audience, and expiry;
- derive portal membership separately; an Access allow result is necessary but
  never sufficient for tenant access;
- use Cloudflare or an approved external IdP for internal identities;
- require MFA for Founder, YSWORKS Operator, and Support policies;
- use Access independent MFA or IdP-reported MFA where supported;
- permit email OTP for invited client users only as a temporary low-volume
  option after documenting email-account risk and recovery;
- use short application sessions and revoke Access plus portal membership during
  offboarding;
- keep client and internal login policies separate.

Cloudflare documents that Access OTP is single-use and expires after ten minutes.
It also supports IdP-based and independent MFA. Exact plan availability and
account limits must be rechecked immediately before implementation.

### 10.3 Migration Direction

Move to a managed external identity provider with passkey support when any of the
following becomes true:

- multiple client organizations require federation or centralized offboarding;
- account recovery and support load exceed the pilot process;
- compliance requires stronger identity proofing, event export, or lifecycle
  automation;
- passkeys must become the default client experience;
- portal-specific session and identity features exceed Access capabilities.

Do not migrate by creating duplicate identities. Define stable portal subject
mapping, account linking, verified migration, and rollback first.

## 11. Sessions, Audit, And Privacy

### 11.1 Session Contract

- Use secure, HTTP-only, same-site cookies; never store bearer tokens in browser
  local storage.
- Rotate the application session after authentication, privilege change, tenant
  change, and step-up authentication.
- Initial target: up to eight hours absolute duration for client sessions and one
  hour for privileged internal sessions, subject to threat-model review.
- Apply shorter inactivity and re-authentication windows to approvals, member
  management, exports, document publication, and support elevation.
- Revoke all sessions when membership is removed, identity risk is detected, or
  the client is offboarded.
- Display active sessions and provide “sign out all sessions” in a later phase.
- Session errors reveal no tenant or identity existence.

### 11.2 Auditable Events

Audit at minimum:

- successful and failed authentication outcomes available to the portal;
- session creation, renewal, revocation, and step-up;
- invite, membership, role, tenant, approver, and access-policy changes;
- project, milestone, deliverable, and visibility publication changes;
- approval request, view, decision, expiry, cancellation, and supersession;
- change request creation and decision;
- document upload, scan result, publish, view, download, revoke, and delete;
- export request, generation, download, expiry, and deletion;
- support case access, elevation, impersonation attempt, and break-glass access;
- billing record visibility or hosted-provider handoff when billing exists;
- privacy request, retention action, and tenant offboarding.

Audit events contain an immutable event ID, server timestamp, actor subject,
tenant, action, target portal identifier and version, result, policy version,
request correlation ID, and approved reason. They must not contain secrets,
complete document bodies, raw source payloads, or unnecessary personal data.

### 11.3 Retention Baseline

These are product defaults pending legal, contractual, and privacy review:

| Data | Proposed baseline |
| --- | --- |
| Security and access audit | 24 months |
| Approval and change-decision records | Contract duration plus 24 months |
| Client-visible activity | 12 months, with durable decisions linked separately |
| Support conversations | 12 months after closure unless contract requires less or more |
| Export packages | Delete after 7 days or first successful retrieval, whichever policy selects |
| Revoked sessions and one-time tokens | Minimal metadata through their security investigation window |
| Documents | Contract-specific retention; no indefinite default |
| Deleted tenant live projection | Remove within 30 days after approved closure, subject to legal hold |
| Backup remnants | Expire through the documented backup cycle, target no more than 90 days |

Retention jobs, legal holds, deletion evidence, and backup behavior require a
separate implementation design. Keep data for the shortest defensible period.

### 11.4 Privacy And Data Rights

- Publish a portal-specific privacy notice before collecting portal data.
- State purposes, categories, processors, retention, access, correction, export,
  deletion, support, and complaint channels.
- Provide a verified process for tenant export and data-subject requests.
- Exports use the same tenant and field authorization as the UI and are encrypted
  at rest with short-lived retrieval.
- Do not expose internal staff notes or another person's unnecessary personal
  data in an export.
- Record consent only where consent is the correct legal basis; do not use it as
  a blanket substitute for a lawful basis.
- Analytics are minimal, tenant-safe, documented, and disabled until approved.

### 11.5 Document Treatment

- Accept only documented file types and sizes.
- Quarantine uploads until malware and content-type checks succeed.
- Store client and internal documents in separate visibility classes.
- Generate short-lived, audience-bound download grants through the portal; never
  expose canonical storage URLs or credentials.
- Use safe download disposition for active or ambiguous content.
- Preserve version, digest, publisher, visibility, scan result, retention, and
  revocation metadata.
- Prevent documents from being indexed, cached publicly, embedded across tenants,
  or rendered with active scripts.
- Revocation takes effect for new access immediately and invalidates outstanding
  download grants where supported.

## 12. Responsive Experience

### 12.1 Brand Direction

The portal should feel calm, precise, technical, and restrained:

- dark-first neutral surfaces with the approved YSWORKS purple accent;
- strong typographic hierarchy and generous spacing;
- subtle borders and status treatments that do not rely on color alone;
- sparse, purposeful motion with reduced-motion support;
- plain language, specific dates, and clear responsibility;
- no AI theater, gamified progress, vanity charts, or fabricated activity.

### 12.2 Mobile

- Prioritize attention, next action, blocker, and approval cards.
- Use a compact top bar and accessible navigation drawer or bottom-level primary
  destinations without hiding account and sign-out controls.
- Convert wide tables to ordered cards with stable labels.
- Keep approval actions reachable but separated to prevent accidental decisions.
- Use a full-screen document and comment flow only when it preserves context.
- Support 320 CSS pixels without horizontal page scrolling.

### 12.3 Tablet

- Use a collapsible navigation rail and one- or two-column content.
- Keep project context persistent while allowing milestone, approval, and
  document detail panels.
- Avoid desktop-density tables when touch targets would become too small.

### 12.4 Desktop

- Use a restrained persistent sidebar, contextual header, and bounded content
  width.
- Overview may use two columns, with action-required content first in reading
  order.
- Tables are allowed for milestones, activity, documents, and billing only when
  responsive alternatives and keyboard navigation exist.
- Detail views preserve breadcrumbs and client/project context.

### 12.5 Accessibility And Interaction

- Meet WCAG 2.2 AA as the minimum target.
- Use semantic landmarks, headings, tables, dialogs, and form labels.
- Preserve keyboard order, visible focus, zoom, reflow, and screen-reader status
  announcements.
- Confirm destructive or binding actions and describe their exact effect.
- Never put the only approval control in swipe, hover, drag, color, or icon-only
  interaction.
- Use localized, unambiguous dates and always preserve the authoritative
  timestamp.
- Loading skeletons, optimistic updates, and toasts must not fabricate successful
  approval or document operations.

## 13. Roadmap

No phase authorizes implementation. Each phase requires a separately approved
scope, threat model, and exit gate.

### Phase 1: Foundation

Deliverables:

- approve roles, tenant model, data classification, projection contract, audit
  baseline, authentication direction, and open decisions;
- create threat models for tenant isolation, approvals, documents, support, and
  account recovery;
- define product owner, security owner, privacy owner, and client-support owner.

Exit criteria:

- every portal object has an owner, visibility class, and tenant boundary;
- no unresolved critical isolation assumption exists;
- no DNS, account, source, or production change has occurred.

### Phase 2: Static Prototype

Deliverables after separate authorization:

- create non-production screens using synthetic, non-client data;
- validate navigation, responsive behavior, accessibility, status vocabulary,
  progress explanation, approvals language, and empty/error states.

Exit criteria:

- prototype contains no authentication, source connection, real client data, or
  production hostname;
- user testing confirms that next actions, blockers, and decision consequences
  are understood.

### Phase 3: Authentication

Deliverables after separate authorization:

- implement the selected identity perimeter, server token validation, portal
  subjects, tenant memberships, sessions, revocation, MFA policies, and recovery;
- complete authentication and authorization threat testing.

Exit criteria:

- Founder, Operator, and Support MFA is enforced and evidenced;
- cross-tenant and stale-session tests fail closed;
- access removal invalidates sessions within the approved objective.

### Phase 4: Read-Only Data

Deliverables after separate authorization:

- introduce one low-risk source adapter and sanitized read-only projection;
- expose Overview, Projects, Milestones, Deliverables metadata, Activity, and
  Meetings with freshness indicators.

Exit criteria:

- browser has no source credentials or direct source route;
- tenant, field, cache, search, error, and export isolation tests pass;
- stale and unavailable source behavior is safe.

### Phase 5: Approvals

Deliverables after separate authorization:

- implement immutable, version-bound approval requests and decisions;
- add step-up, idempotency, stale-version, concurrency, notification, and audit
  controls.

Exit criteria:

- decisions cannot be forged, duplicated, overwritten, backdated, or applied to
  the wrong version;
- client approver authority and revocation are demonstrated.

### Phase 6: Documents

Deliverables after separate authorization:

- implement quarantine, scanning, sanitized metadata, controlled delivery,
  versioning, revocation, retention, and audit;
- add tenant-safe search and approved export.

Exit criteria:

- malicious, cross-tenant, expired, revoked, and active-content cases fail safe;
- canonical storage identifiers and credentials never reach the browser.

### Phase 7: Billing

Deliverables after separate authorization:

- select a hosted billing provider and expose only client-approved invoice and
  payment status;
- document accounting, privacy, webhook, dispute, and retention boundaries.

Exit criteria:

- YSWORKS does not store or process raw card details;
- billing roles, tenant isolation, reconciliation, and failure states pass review.

### Phase 8: Production Hardening

Deliverables after separate authorization:

- complete penetration testing, authorization matrix testing, restore exercise,
  retention and deletion exercise, key rotation, incident tabletop, load and
  abuse testing, accessibility audit, and operational readiness review;
- validate headers, caching, monitoring, alerting, support, rollback, and public
  status communication.

Exit criteria:

- no critical or high unresolved issue exists without accountable risk
  acceptance;
- tenant isolation, approvals, documents, sessions, audit, recovery, revocation,
  backup, and deletion have evidence;
- accountable owners approve the production hostname and launch separately.

## 14. Open Decisions

Resolve before the relevant implementation phase:

- legal controller/processor roles and applicable privacy jurisdictions;
- exact pilot clients, user count, invitation, recovery, and offboarding process;
- Cloudflare Free plan, Access, independent MFA, session, and logging limits at
  implementation time;
- client OTP risk acceptance and passkey/IdP migration trigger;
- stable portal subject and tenant identifier strategy;
- authorization model and policy test format;
- projection runtime, storage, synchronization, freshness, deletion, and failure
  objectives;
- first canonical source and the minimum permitted field mapping;
- project baseline ownership and milestone weighting approval;
- which Client Members may approve and how approver authority is delegated;
- approval legal meaning, electronic-signature requirements, and retention;
- document types, size limits, scanning, preview, storage, residency, encryption,
  and retention;
- support elevation and whether impersonation is ever permitted;
- tenant export format and data-subject request process;
- audit destination, access, tamper resistance, and final retention schedule;
- notification channels and rules for personal data in notifications;
- hosted billing provider, accounting boundary, and invoice retention;
- localization, timezone, language, accessibility testing, and support targets;
- recovery objectives, availability target, incident roles, and launch rollback.

Until a decision is approved, choose the state with less exposure: no hostname,
no account, no source connection, no client data, and no public capability.

## 15. Documentation Validation Contract

For documentation-only portal changes:

| Validation | Required result |
| --- | --- |
| Ruff | `N/A` when no Python or Python configuration changes |
| Tests | Run when a repository test script exists; otherwise record `N/A` |
| Compile/type check | Run `pnpm astro check` |
| Build | Run `pnpm build` |
| Lint and format | Run `pnpm biome check .` |
| Dependency boundaries | Confirm no manifest, lockfile, source, runtime, or infrastructure configuration changed |
| Markdown | Check local links, structure, and whitespace |
| Secret scan | Use the configured scanner or a documented high-risk-pattern fallback |

Review must also confirm that the document contains no real client data,
credentials, deployable configuration, private topology, source inventory
confirmation, or workflow detail.

## 16. Authoritative References

- [Volume III — Client Experience Constitution](../CLIENT_EXPERIENCE_CONSTITUTION.md)
- [Cloudflare Access policies](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/)
- [Cloudflare Access one-time PIN](https://developers.cloudflare.com/cloudflare-one/integrations/identity-providers/one-time-pin/)
- [Cloudflare Access MFA requirements](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/mfa-requirements/)
- [Cloudflare identity providers](https://developers.cloudflare.com/cloudflare-one/integrations/identity-providers/)
- [Cloudflare Access JWT validation](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/validating-json/)
- [Cloudflare One account limits](https://developers.cloudflare.com/cloudflare-one/account-limits/)
- [W3C Web Authentication Level 3](https://www.w3.org/TR/webauthn-3/)

References support capability and standards statements only. Every feature and
plan limit must be rechecked before implementation.
