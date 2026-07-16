# YSWORKS Operating Manual v1.0

- Status: Founder-approved operational authority
- Scope: Company-wide operations and operational decision control
- Applies to: Human operators, AI collaborators, YS AI OS, Client Portal,
  GitHub, Notion, n8n, Cloudflare, internal dashboards, and future systems
- Owner: Founder

## Authority And Interpretation

This manual is the single operational source of truth for how YSWORKS moves
work from intent to completion. Every human role, AI capability, and company
system must preserve its controls. A tool may support an operation; it cannot
redefine the operation, its authority, or its completion criteria.

The [Founder Handbook](FOUNDER_HANDBOOK.md) remains authoritative for company
behavior and judgment. The [YSWORKS Master Specification](YSWORKS_MASTER_SPEC.md)
remains authoritative for company and ecosystem architecture. The
[Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md) and
[Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md)
remain authoritative within their domains and may impose stricter controls.
Accepted ADRs govern their stated decisions.

This manual governs the operational path between those authorities. An explicit
Founder decision overrides an unresolved documentation conflict and must be
recorded. Until it is recorded, use the more conservative, less-exposing, and
more reversible interpretation.

This is a public-safe operating constitution. It does not publish private
workflows, client information, credentials, production topology, internal
pricing, or system access instructions.

## 1. Purpose

The manual makes YSWORKS operations consistent, traceable, and accountable. It
defines the minimum path for commercial work, delivery, maintenance, support,
production change, incidents, documentation, and future automation.

It exists to ensure that:

- the business need is understood before technology is selected;
- every material action has an accountable human owner;
- clients receive honest commitments and useful evidence;
- AI assists work without replacing responsibility;
- public, client, and private systems remain separated;
- completion means verified completion, not visible activity;
- production never changes by implication; and
- growth does not weaken security, quality, or client trust.

The manual does not replace a client contract, legal or accounting advice, a
security runbook, or a product-specific specification.

## 2. Operating Principles

### 2.1 Human-first Engineering

YSWORKS designs work around people, responsibilities, and useful outcomes.
Automation may remove repetition; it must not hide accountability, prevent
informed review, or make a consequential decision appear ownerless.

### 2.2 Business Before Technology

The problem, affected people, desired outcome, constraints, authority, and
operating responsibility are established before a tool or implementation is
selected. A technically possible action is not automatically useful or
authorized.

### 2.3 One Accountable Owner

Every lead, proposal, project, deliverable, production change, maintenance
relationship, support case, incident, and controlled document has one named
accountable human owner. Contributors and AI systems may assist; ownership does
not become collective or implicit.

### 2.4 Honest Communication

Facts, assumptions, forecasts, risks, unknowns, and decisions are distinguished.
YSWORKS does not manufacture urgency, certainty, scarcity, metrics,
testimonials, outcomes, progress, or approval.

### 2.5 Minimum Necessary Scope

Collect the least information, request the least access, create the fewest
systems, and automate the smallest stable process needed for the approved
outcome. Additional complexity requires a demonstrated operational benefit.

### 2.6 Evidence Before Status

Status follows evidence. A task, milestone, project, incident, or maintenance
action is not complete because a person or system changed its label.

### 2.7 Separation Of Trust

Public, client-visible, internal, and restricted information remain separated.
Development, preview, and production remain separate operating contexts. Client
boundaries remain separate at every stage, including communication,
documentation, AI context, support, and reporting.

### 2.8 Reversible Change

Prefer the smallest change that can be reviewed, stopped, contained, or
reversed. Irreversible or high-impact actions require stronger evidence,
explicit authority, and a documented recovery path.

### 2.9 Premium Engineering

Premium engineering means clarity, restraint, reliability, accessibility,
security, maintainability, and careful execution. It does not mean decorative
complexity, unnecessary tools, inflated claims, or concealed operational cost.

## 3. Definition Of Done

The Founder Handbook defines the company-wide
[Definition of Done](FOUNDER_HANDBOOK.md#6-definition-of-done). Operationally,
work is done only when all applicable requirements below are satisfied.

### 3.1 Outcome

- The approved scope and intended outcome are satisfied.
- Acceptance criteria are met with verifiable evidence.
- Exclusions, limitations, residual risks, and deferred work are visible.
- No fake metric, arbitrary percentage, or unsupported claim represents
  completion.

### 3.2 Control

- Required client, operator, security, and Founder decisions are recorded.
- The delivered object and version match the reviewed object and version.
- Production authorization, when relevant, is separate and explicit.
- Access, privacy, tenant, and information-classification boundaries have been
  checked.

### 3.3 Quality

- Applicable validation, review, accessibility, security, and recovery checks
  pass.
- Known failure behavior is understood and safe.
- A rollback, disable, correction, or exit path exists where the work can affect
  people, clients, data, money, or production.

### 3.4 Handover

- The accountable owner, next action, and operating responsibility are clear.
- Documentation matches the delivered state.
- The client or internal recipient has the agreed deliverables and instructions.
- Maintenance, further work, or closure has been decided explicitly.

If one applicable condition is missing, the work is incomplete or conditionally
accepted; it is never silently treated as done.

## 4. Lead Lifecycle

Every lead has a named owner, current stage, next action, and lawful minimum
record. A stage may be lightweight, but it cannot be skipped when its decision
or risk exists.

### 4.1 First Contact

The public contact channel is `contact@ysworks.dev`. Record only the identity,
contact details, problem summary, source, and context required to respond. Do
not request secrets, credentials, regulated data, or private system access.

The lead receives an honest acknowledgement and a clear next step. An automated
acknowledgement may confirm receipt; it may not promise acceptance, price,
availability, delivery, or outcome.

**Exit:** A human owner is assigned and the lead is ready for qualification,
awaiting information, declined, or closed.

### 4.2 Qualification

Assess problem clarity, service fit, responsible capability, risk, timing,
decision authority, maintainability, geographic constraints where relevant, and
commercial suitability. Do not prolong a lead that YSWORKS cannot serve
responsibly.

Qualification may lead to discovery, a request for limited clarification, a
referral, a respectful decline, or closure. The reason is recorded internally
without creating unnecessary personal or sensitive data.

**Exit:** The lead is qualified for a defined discovery step or has a recorded
non-progression outcome.

### 4.3 Discovery

Understand the business, users, current process, desired outcome, constraints,
dependencies, risks, timing, decision process, and evidence of success. Confirm
whether a project is the appropriate response; do not assume implementation is
required.

Discovery may be included, separately scoped, or paid. Its commercial treatment
must be clear before substantive work begins.

**Exit:** There is enough shared understanding to prepare a responsible
proposal, recommend a different next step, or decline.

### 4.4 Proposal

The proposal states the outcome, scope, deliverables, assumptions, exclusions,
phases, acceptance criteria, responsibilities, dependencies, timing,
maintenance or closure path, change process, and commercial terms. Pricing is
specific to the engagement and is never inferred from public ranges.

Every proposal has a validity condition and a named YSWORKS owner. Material
uncertainty is stated rather than hidden inside a fixed promise.

**Exit:** The proposal is issued as an exact reviewable version and is accepted,
declined, expired, or revised.

### 4.5 Approval

Commercial approval must identify the proposal version, approving client
authority, decision, and timestamp. A comment, meeting, portal action, or email
is sufficient only when it clearly binds the authorized person to the exact
proposal under the agreed process.

Commercial approval does not authorize production, publication, a privileged
action, or work outside the proposal.

**Exit:** The approved proposal is ready for contract, or the opportunity is
revised or closed.

### 4.6 Contract

Use an agreement appropriate to the engagement, entity, risk, data, intellectual
property, support, and jurisdiction. Scope and commercial documents must agree.
Conflicting terms are resolved before work begins.

Only an authorized human may bind YSWORKS. AI, automation, portal status, or a
repository event cannot execute or amend a contract.

**Exit:** The agreement is executed by authorized parties, required information
is complete, and conditions to start are explicit.

### 4.7 Payment

Issue the agreed invoice or payment request. Where a deposit or advance payment
is required, cleared payment is a start condition unless the Founder records an
exception. Payment status is verified through the approved financial record,
not through a screenshot, chat claim, or AI inference.

**Exit:** The required start payment is confirmed, formally waived by the
Founder, or the engagement is paused or closed.

### 4.8 Project Creation

Create one governed project record only after the commercial start conditions
are met. Record the client, accountable owner, project classification, approved
scope, proposal and contract references, responsibilities, acceptance model,
information classification, communication channel, decision authorities,
delivery path, and maintenance or closure expectation.

Create repositories, Notion spaces, portal records, automation, or access only
when the project requires them. Apply the least privilege and the correct client
boundary from creation.

**Exit:** The project is operable, ownership is clear, required systems are
ready, and kickoff can occur without relying on undocumented context.

### 4.9 Delivery

Deliver in reviewable increments against the approved scope. Record material
decisions, evidence, client dependencies, blockers, changes, approvals, and
known limitations. Progress is based on verifiable milestones, never arbitrary
manual percentages.

Scope changes enter the change process before implementation. Client urgency or
technical convenience does not expand the contract or production authority.

**Exit:** The Definition of Done is met and the client has accepted the exact
deliverables under the agreed process.

### 4.10 Maintenance

Maintenance begins only through an explicit scope defining responsibilities,
availability, exclusions, response expectations, access, review cadence, and
commercial terms. Delivery support is not assumed to be indefinite
maintenance.

**Exit:** Maintenance is active under an agreed model, renewed or revised, or
ended through controlled closure.

### 4.11 Closure

Confirm delivery and acceptance status, unresolved obligations, final financial
status, ownership and licensing, data return or deletion, access revocation,
credential rotation where required, retention, support end, and the next
relationship state.

Archive the project record without publishing client work. A case study, logo,
testimonial, metric, or outcome requires separate explicit permission and
evidence.

**Exit:** Obligations, access, records, client communication, and ownership have
a recorded final state.

## 5. Project Classification

Classification determines governance, review, coordination, and evidence. It
does not determine public price or client importance. Classify using scope,
number of stakeholders, uncertainty, data sensitivity, integration count,
production impact, reversibility, duration, and support burden.

### 5.1 Small

A bounded outcome with limited dependencies, low operational impact, and one
clear decision path. Documentation may be compact, but scope, acceptance,
ownership, validation, and closure remain mandatory.

### 5.2 Medium

Multiple deliverables, milestones, integrations, or stakeholders requiring a
formal delivery plan, decision log, regular status, and explicit change control.

### 5.3 Large

Material coordination, multiple systems or phases, significant operational
change, sensitive data, or extended delivery. Requires stronger governance,
independent review where appropriate, staged release, and formal readiness and
closure evidence.

### 5.4 Enterprise

An engagement involving organization-wide impact, multiple authority groups,
high continuity or compliance expectations, complex procurement, or material
security and integration boundaries. Enterprise is a governance class, not a
claim of company size or a standard package.

### 5.5 Maintenance

An ongoing governed responsibility rather than a finite build. Classification
records the maintained systems, service level, access, recurring obligations,
support and incident boundaries, review cadence, and exit conditions.

### 5.6 Internal

Company-owned work without a client contract. Internal projects still require
an owner, purpose, classification, information boundary, Definition of Done,
and production authorization where applicable. “Internal” never means
uncontrolled.

The accountable owner proposes classification. The Founder approves Large,
Enterprise, material Maintenance, and high-impact Internal classifications and
any reclassification that changes risk, commitment, or authority.

## 6. Commercial Rules

### 6.1 Payment Models

An engagement may use one or more of these models when stated clearly:

- fixed fee for a stable, bounded scope;
- milestone payments for phased delivery;
- paid discovery for material uncertainty;
- time-based work for explicitly variable scope or authorized urgent work;
- recurring fees for agreed maintenance or continuing responsibility; and
- a separately approved combination of these models.

The proposal states currency, taxes where applicable, invoicing trigger, due
condition, included expenses, change treatment, and consequences of non-payment.
No payment model transfers unlimited risk to either party by implication.

### 6.2 Deposit Rules

A deposit or advance payment is the default start condition for project work.
Its amount or proportion is set by scope, scheduling commitment, procurement,
risk, and cash exposure; this manual defines no standard public percentage.

Work is not scheduled as committed and third-party cost is not incurred until
the required payment clears. Only the Founder may waive or vary this control,
and the reason and exposure must be recorded.

### 6.3 Recurring Services

Recurring service begins with a written term, billing cadence, responsibility
boundary, availability, support channel, review condition, renewal or
continuation rule, and exit process. Recurring payment does not create unlimited
work, immediate response, or responsibility for systems outside the agreement.

### 6.4 Urgent Work

Urgency is assessed, not accepted automatically. Before commitment, confirm
authority, impact, available capacity, information quality, security risk,
dependencies, commercial treatment, and the smallest safe intervention.

Urgent work may have separately approved expedited terms. It never bypasses
contract, payment, security, review, client isolation, production authorization,
or incident controls. If safe delivery is not possible, YSWORKS declines or
proposes containment and a realistic next step.

### 6.5 Discount Philosophy

YSWORKS does not use artificial list prices, inflated anchors, permanent
discounts, or pressure tactics. A discount must have a clear business reason,
preserve responsible delivery, and be visible in the approved commercial
record.

Only the Founder may approve a discount or non-standard payment exception.
Prefer reducing or phasing scope over hiding the true effort or weakening the
delivery standard. No discount purchases a testimonial, logo, case study,
metric, or misleading claim.

### 6.6 Commercial Change

New scope, changed assumptions, accelerated timing, additional integrations,
increased support, or new risk requires an impact assessment and an approved
change before commitment. Silence or continued work is not acceptance of a
commercial change.

## 7. Operational Workflow

Each project records which system is authoritative for each record type. No
project may depend on conflicting copies without a named reconciliation owner.

### 7.1 Client

The client provides authorized decisions, required context, dependencies,
access through approved channels, review, and acceptance. Client communication
is factual, audience-appropriate, and free of other-client or private-system
information.

### 7.2 Portal

The Client Portal is a sanitized, tenant-isolated client view. It may present
approved status, milestones, deliverables, approvals, documents, support, and
future invoice information. It is not the authority for private source data,
infrastructure, workflows, or production execution.

### 7.3 GitHub

GitHub governs versioned repository work, review, CI evidence, and approved
technical history within the relevant repository. An issue, commit, passing
check, pull request approval, or merge does not by itself create client
acceptance, contractual approval, or production authorization.

### 7.4 Notion And Knowledge Systems

An approved knowledge system may hold project planning, decisions, meeting
records, controlled procedures, and reusable knowledge at the correct
classification. It must not become an uncontrolled duplicate of contracts,
credentials, production secrets, client data, or repository history.

### 7.5 AI

AI may assist research, drafting, analysis, implementation, testing, review,
summarization, classification proposals, and knowledge retrieval within an
approved context. Its output is unverified until an accountable human reviews
it at the level required by the decision.

### 7.6 Human

Humans own intent, relationship, commitments, authority, risk acceptance,
approval, and final judgment. The named owner resolves conflicts between tools,
ensures required evidence exists, and stops work when authority or safety is
unclear.

### 7.7 Delivery

Delivery packages only the approved client-facing system, artifact,
documentation, evidence, known limitations, and handover. Internal prompts,
agents, workflows, notes, logs, costs, infrastructure, and unrelated client
information are excluded.

### 7.8 Support

Support enters through the agreed channel, receives a client-safe identifier,
owner, impact, priority, next action, and status. Internal triage may use private
systems, but the client sees only authorized information. Support does not
silently become a project, production change, or unlimited maintenance.

### 7.9 Operational Sequence

The normal sequence is:

1. the client or owner states the need;
2. a human validates scope, authority, and information classification;
3. the authoritative project record receives the work item;
4. humans and approved AI or automation perform bounded work;
5. GitHub or the appropriate work system records reviewable output;
6. validation produces evidence;
7. the authorized human approves the applicable decision;
8. a separate production decision occurs if required;
9. the Portal or communication channel receives a sanitized update; and
10. delivery, maintenance, support, or closure records the final state.

## 8. Human Vs AI Authority

### 8.1 What AI May Do

Within an approved information and action boundary, AI may:

- organize and summarize provided material;
- draft documents, plans, code, tests, messages, and review findings;
- compare evidence to stated criteria;
- identify inconsistency, risk, missing information, or possible improvement;
- propose classifications, priorities, alternatives, and next actions;
- execute reversible tool actions explicitly delegated by an authorized human;
  and
- monitor a defined condition and report without expanding its own authority.

AI must expose uncertainty, failed validation, assumptions, and conflicts. Its
work remains attributable to the human owner and the systems used.

### 8.2 What AI May Not Do

AI may not independently:

- bind YSWORKS or a client to scope, price, contract, payment, or commitment;
- qualify or reject a client without accountable human review;
- approve a proposal, deliverable, invoice, expense, publication, or release;
- accept residual risk or declare consequential work complete;
- send external communication unless the exact action is authorized;
- grant access, disclose private information, or choose a new data use;
- merge, deploy, publish, alter production, change Cloudflare or DNS, execute a
  privileged workflow, or rotate credentials without explicit authorization;
- impersonate a human or client approver;
- make consequential decisions about people; or
- conceal that evidence, authority, or context is missing.

### 8.3 What Always Requires Founder Approval

The Founder must approve:

- company policy, operating authority, or an exception to this manual;
- a new service category, public product, public claim, client proof, or use of
  client identity;
- a contract commitment or material deviation from approved commercial terms;
- discounts, deposit waivers, unusual payment exposure, or unbudgeted recurring
  obligations;
- Large or Enterprise commitment and material ongoing Maintenance exposure;
- production launch, deployment, publication, or material production change;
- new public exposure, domain, Cloudflare or DNS change, or privileged
  infrastructure access;
- acceptance of material security, privacy, legal, financial, or continuity
  risk;
- external communication for a critical incident or material breach;
- privileged AI or automation capable of state-changing action; and
- a change to the authority, principles, or official terminology of this
  manual.

Founder approval remains subject to applicable law, client authority, and
domain controls. It is not a security bypass or a client approval.

## 9. Production Rules

### 9.1 Authorization

Nothing reaches or changes production without explicit recorded authorization.
The authorization identifies the owner, system, environment, exact change or
version, evidence, timing or release condition, rollback or disable path, and
post-change responsibility.

The following never constitute production authorization by themselves:

- a signed contract or paid invoice;
- client approval of a proposal or deliverable;
- a merged pull request or passing CI;
- a successful preview;
- an AI recommendation;
- a calendar deadline; or
- previous access or a similar earlier approval.

### 9.2 Readiness

Before authorization, confirm scope, review, validation, security and privacy
boundaries, dependencies, observability appropriate to risk, backup or recovery
where applicable, support ownership, stakeholder communication, and rollback.
Unresolved critical risk stops release unless the Founder records lawful,
informed risk acceptance and the domain contract permits it.

### 9.3 Rollback Policy

Every material production change defines:

- the safe prior or disabled state;
- the signals and thresholds that trigger rollback or stop;
- the person authorized to decide and perform it;
- the data, compatibility, and client consequences;
- the maximum acceptable decision delay; and
- the validation required after rollback.

Rollback is a controlled safety action, not a failure to protect appearances.
When rollback is unsafe or impossible, the release requires an approved
containment and recovery plan before it begins.

### 9.4 Emergency Work

An emergency may shorten coordination, not remove authority or evidence. The
incident owner may perform only the pre-authorized containment necessary to
reduce harm. Any production change still requires the appropriate explicit
human authorization and must be recorded during or immediately after the action
without fabricating a retrospective approval.

## 10. Maintenance Model

The official client-facing names remain **Essential Care**, **Growth Care**, and
**Continuous Operations**, as defined by the Master Specification. To satisfy
operational classification needs without creating conflicting public packages,
this manual maps the requested shorthand as follows:

| Operational class | Official client-facing name | General responsibility |
| --- | --- | --- |
| Essential | Essential Care | Bounded maintenance and essential continuity for a stable system |
| Professional | Growth Care | Maintenance plus planned improvement for an evolving system |
| Enterprise | Continuous Operations | Broader continuity and active stewardship for ongoing operational needs |

The shorthand is internal classification only. Proposals, contracts, the
Portal, invoices, and client communication use the official client-facing name.
These are adaptable levels of responsibility, not rigid packages, and have no
public prices.

### 10.1 Essential — Essential Care

Defines a bounded system list, routine review or update responsibilities, issue
intake, agreed response expectations, documentation upkeep, exclusions, and an
escalation path. It does not imply continuous monitoring or unlimited change.

### 10.2 Professional — Growth Care

Includes Essential Care responsibilities plus an agreed improvement cadence,
prioritized evolution, broader dependency review, and planned delivery capacity.
Projects and material changes still require explicit scope and approval.

### 10.3 Enterprise — Continuous Operations

Defines wider continuity, active technical stewardship, more formal operating
reviews, incident coordination, dependency and lifecycle planning, and agreed
availability for named systems. It does not imply unrestricted access,
unlimited work, or acceptance of client-owned risk.

### 10.4 Common Maintenance Rules

Every maintenance agreement defines systems, client, owner, term, availability,
channels, priority vocabulary, responsibilities, access, included and excluded
work, reporting, incident boundary, data handling, commercial terms, review,
renewal or continuation, and exit. Maintenance ends with controlled handover,
access revocation, and record retention or deletion.

## 11. Portal Rules

The Client Portal Foundation remains the detailed authority. These operational
rules define how company work may be represented there.

### 11.1 Visible Information

Show only tenant-authorized, sanitized information needed for the client to
understand status and act: approved project summaries, phases, verifiable
milestones, blockers, dependencies, next actions, visible responsibilities,
deliverables, approvals, documents, meetings, support, and approved future
invoice status.

### 11.2 Private Information

Never expose other-client data, internal notes, prompts, agents, YS AI OS,
workflows, n8n details, repositories or private source identifiers, raw logs,
infrastructure, secrets, credentials, security internals, internal costs,
margins, negotiation history, or unapproved personal data.

The Portal never queries private canonical sources directly from the browser.
It receives an authorized sanitized projection.

### 11.3 Approvals

An approval binds the exact tenant, project, object, version, digest, authorized
identity, decision, comment, and timestamp. Changing the object invalidates its
current approval and requires a new decision. An approval never directly merges,
deploys, publishes, changes infrastructure, executes automation, or pays an
invoice.

### 11.4 Documents

Only approved, classified, versioned, safe documents are visible. Visibility,
access, retention, revocation, and download are auditable. Private source links,
active or unsafe files, credentials, and unrestricted folders remain excluded.

### 11.5 Support

The Portal may show the client-safe request, impact, priority, status, messages,
next action, and agreed service expectation. It does not show internal routing,
private actors, raw diagnostics, logs, or another client's workload.

### 11.6 Invoices

Invoice and payment status remain future capability until accounting, provider,
privacy, authorization, and reconciliation rules are approved. When enabled,
the Portal shows only client-authorized records and never stores raw payment
card data. A displayed status does not replace the approved financial record.

## 12. Documentation Rules

### 12.1 Naming

Use one official term for one concept. Controlled company documents use clear,
stable titles and filenames. Project records include the client-safe project
name or governed identifier, document purpose, and version or decision date
where needed. Avoid labels such as “final-final,” unexplained acronyms, and
names that expose clients or private systems to an unauthorized audience.

### 12.2 Versioning

Authoritative manuals, specifications, policies, and contracts carry a visible
status and version. A major version changes authority, obligation, or operating
model. A minor version adds or clarifies compatible rules. Editorial corrections
may retain the version when they do not change meaning, but the review record
must remain traceable.

Superseded material is marked or archived; contradictory active versions are
not left for operators or AI to interpret.

### 12.3 Ownership

Every controlled document names or inherits an accountable human owner. The
owner ensures accuracy, classification, audience, review, approval, publication,
retention, and retirement. AI may draft or compare; it cannot own or approve the
document.

### 12.4 Reviews

Review authoritative documentation after a material service, legal, security,
commercial, system, role, incident, or operating-model change. Review also when
evidence shows the documented process is unclear or inaccurate. Approval of a
document does not authorize implementation or production.

### 12.5 Information Classification

Before storage or sharing, classify the document for public, client-scoped,
internal, or restricted use. Store it only in a system approved for that class
and audience. Public repositories contain public-safe material only.

## 13. Incident Management

An incident is an event that threatens or causes harm to confidentiality,
integrity, availability, safety, client trust, financial control, contractual
commitment, or company operations.

### 13.1 Immediate Rules

- Protect people and reduce harm first.
- Stop unsafe action and assign one human incident owner.
- Contain only within existing authority; escalate immediately when authority is
  insufficient.
- Preserve relevant evidence without copying secrets or private data into
  inappropriate systems.
- Do not speculate, conceal, delete evidence, assign blame, or manufacture a
  reassuring status.
- Keep client and public communication factual, approved, and proportionate.

### 13.2 Incident Lifecycle

1. **Detect:** Record the observed facts, time, reporter, and affected context.
2. **Triage:** Assess potential impact, affected clients or systems, urgency,
   uncertainty, and required authority.
3. **Assign:** Name the incident owner, decision authority, and communication
   owner.
4. **Contain:** Limit harm using the smallest safe authorized action.
5. **Investigate:** Establish evidence, timeline, scope, and root conditions.
6. **Communicate:** Notify required internal, client, provider, legal, or public
   parties through the approved authority.
7. **Recover:** Restore a validated safe state and monitor for recurrence.
8. **Close:** Confirm obligations, residual risk, records, and ownership.
9. **Improve:** Complete a blameless review with accountable corrective actions.

Severity vocabulary, notification deadlines, regulatory obligations, and
technical procedures belong to the applicable incident plan and jurisdiction.
This manual does not invent them.

### 13.3 Post-incident Review

The review distinguishes direct cause, contributing conditions, control gaps,
decision quality, communication, and recovery. Each accepted action has an
owner, evidence of completion, and review point. A lesson is not complete until
it changes a control, process, system, or authoritative document.

## 14. Security Rules

Detailed security remains governed by the Secure Public Platform Foundation and
applicable domain contracts. Operationally:

- verify identity, authority, scope, and destination before access or sharing;
- use least privilege and separate clients, roles, and environments;
- keep secrets outside repositories, documents, messages, screenshots, logs,
  URLs, and unapproved AI systems;
- never expose Docker, Portainer, Redis, PostgreSQL, n8n administration, home
  systems, private infrastructure, YS AI OS, or internal panels publicly;
- never treat a login screen, opaque identifier, or private URL as sufficient
  protection;
- use approved channels and the minimum necessary client data;
- revoke access when responsibility ends or compromise is suspected;
- require MFA for Founder and privileged internal roles;
- report suspected exposure, unauthorized access, loss, or misuse immediately;
- preserve public, client, internal, and restricted boundaries; and
- stop when the safe or authorized action is unclear.

An urgent deadline, client request, previous access, automation, or Founder role
does not bypass a security control. Exceptions require documented lawful
authority, risk assessment, containment, and review; some prohibitions permit no
exception.

## 15. Continuous Improvement

Improvement begins with evidence from delivery, support, incidents, review,
client feedback, defects, operational friction, or changed constraints. Tool
adoption, activity volume, and automation count are not improvement metrics.

For a material improvement:

1. state the problem and affected outcome;
2. establish the current evidence and root condition;
3. define the smallest useful change and its owner;
4. assess security, privacy, client, commercial, and maintenance effects;
5. test in a controlled context;
6. compare the result with the intended evidence;
7. approve, revise, or retire the change; and
8. update the governing process and remove superseded practice.

Metrics may support improvement only when they are necessary, accurately
defined, responsibly collected, and not used to create false performance or
client proof.

## 16. Future Automation Principles

Automation is introduced only after a process is understood, stable enough to
encode, and owned by an accountable human.

Every future automation must have:

- a defined business purpose and owner;
- explicit inputs, outputs, authority, and information classification;
- client, environment, and role boundaries;
- a human review or approval point proportional to consequence;
- safe failure, timeout, retry, duplicate, and exception behavior;
- observable outcomes without exposing private data;
- a disable, rollback, and manual operating path;
- evidence that it improves the process; and
- a review and retirement condition.

Automation may reduce work; it may not expand its own scope, infer new
authority, approve its own output, hide a failure, or make production changes
because another system emitted an event. n8n, YS AI OS, AI agents, Cloudflare,
GitHub automation, and future tools all follow the same rule.

Privileged automation requires Founder approval before activation. Begin with
read-only or reversible assistance whenever possible. Promote autonomy only
after evidence, review, bounded authority, and recovery are demonstrated.

## 17. Glossary

### Accountable Owner

The named human responsible for outcome, authority, evidence, escalation, and
closure. Contributors and systems do not dilute this responsibility.

### Approval

An authorized, attributable decision bound to an exact object, version, scope,
and time. Approval in one domain does not imply approval in another.

### Client

A customer with an active or historically governed YSWORKS engagement. Portal
use represents each client through an isolated tenant.

### Closure

The controlled end state for obligations, access, data, records, ownership,
support, finances, and communication.

### Contract

The executed agreement that creates binding commercial and legal obligations.
It does not itself authorize production.

### Deliverable

A defined, versioned, reviewable output with acceptance criteria and an approved
audience.

### Deployment

A controlled release of an approved version into a named environment. It
requires separate production authorization when the environment is production.

### Discovery

The bounded work used to understand a business problem, desired outcome,
constraints, risks, and responsible next step.

### Evidence

Information that can be inspected and is sufficient to support a claim,
decision, validation, or completion status.

### Founder

The human role accountable for company policy, exceptional authority, and the
decisions explicitly reserved by this manual. It is not a security bypass or a
client approver.

### Incident

An event that threatens or causes harm to company or client operations, trust,
security, privacy, safety, financial control, or commitments.

### Lead

A person or organization whose stated need is being assessed before a governed
client engagement exists.

### Maintenance

An agreed continuing responsibility for named systems, outcomes, availability,
support, review, or evolution within explicit boundaries.

### Milestone

A verifiable project outcome with criteria, evidence, dependencies, and an
authorized status.

### Operator

An authorized YSWORKS human role acting within assigned clients, projects,
systems, and delegated authority.

### Portal

The tenant-isolated client interface for approved sanitized information. It is
not an administration interface or private source of truth.

### Production

The live environment or public operational state relied upon by users, clients,
or company operations. Preview and development are not production.

### Project

The governed boundary for scope, responsibilities, milestones, deliverables,
decisions, evidence, commercial terms, and closure.

### Public-safe

Reviewed for a declared audience with secrets, private mechanisms, unnecessary
personal data, internal commercial information, and unauthorized client data
removed.

### Rollback

The controlled return to a validated prior or disabled state after a change
fails or exceeds its approved risk.

### Sanitized Projection

A purpose-built client view containing only authorized fields and terminology,
not a direct copy of a private source.

### Scope Change

A change to outcome, work, assumption, timing, dependency, responsibility,
support, cost, or risk that requires impact assessment and approval.

### System Of Record

The approved authority for a defined record type. A client project may use
several systems of record, but each fact has one named authority.

### Tenant

The isolated client boundary used to authorize client-facing data and actions.

### Work Item

A bounded, owned unit of project, support, maintenance, incident, or internal
work with an intended outcome and final state.
