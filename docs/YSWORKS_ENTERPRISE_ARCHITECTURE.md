# YSWORKS Enterprise Architecture

**Document ID: YSW-EA · Version 1.0 · July 2026**
**Status: Foundational, non-constitutional. Subordinate to Volumes I–III of the Constitution Library; it operationalises them and may never contradict them. Superior, within its domain, to all system designs, workflow definitions and software implementations, which must conform to it.**
**Audience: whoever designs or implements systems for YSWORKS — engineers, and the machine agents working under them.**
**Citation form: chapter and section — e.g. *EA 5.3*.**

---

## 1. Purpose

### 1.1 Why this document exists

Organisations acquire structure whether or not anyone designs it. Work finds paths, information finds pools, authority finds habits — and after a few years the company runs on an architecture nobody chose, documented nowhere, held together by memory. Enterprise architecture exists to replace that accident with a decision: a deliberate description of how the company is structured, so that every future system, workflow and piece of software is built *into* a known whole rather than *onto* an unknown one.

The Constitution Library explains why the company behaves as it does. This document explains how the company is structured so that the behaviour is possible, repeatable and survivable. It is the bridge between philosophy and software: precise enough that implementation can begin from it, abstract enough that no technology choice is ever trapped by it.

### 1.2 Five words, kept distinct

Confusion between these five words produces most bad architecture, so they are fixed here.

The **company** is the institution: its character (Volume I), obligations, assets and name. It is the thing that survives everything else changing.

The **organisation** is the arrangement of responsibility within the company: who owns what, who answers for what, how authority is distributed (Chapters 4–5).

A **system** is any arranged whole with behaviour — a business process, a team, a piece of infrastructure, a relationship. The company contains many systems and is itself one (Volume I, Book XIII).

A **process** is a repeatable path that work takes through systems: defined inputs, stations, decisions and outputs.

**Software** is the executable encoding of parts of systems and processes. It is the most visible and the most replaceable of the five. Software expresses the architecture; it is never the architecture. This ordering is the document's first design rule: no piece of software may define a structure that this document has not defined first.

## 2. Foundational Principles

Six principles govern every structural decision below. Each descends from the constitution; each has a concrete architectural consequence.

**Systems before tools.** The structure of work is designed before the tool that hosts it is chosen (I.XIII.1). Consequence: every tool in the landscape (Chapter 6) is an implementation of a named responsibility, and every tool must be replaceable without redesigning the responsibility.

**Relationships before components.** A component is defined by its connections: what feeds it, what it feeds, what fails with it (I.XIII.3). Consequence: every system in this architecture is specified with its interfaces and dependencies, never in isolation, and an undocumented connection is treated as a defect.

**Authority before automation.** No process is automated until its decision structure is explicit: who decides, who approves, what escalates (I.V.2). Consequence: the authority model (Chapter 5) precedes the automation architecture (Chapter 9) in this document and in every implementation, without exception.

**Knowledge before memory.** What the company knows must live in its knowledge architecture (Chapter 8), not in individual recollection (I.III.4). Consequence: a process is not operational until it is documented; a decision is not made until it is recorded; a person leaving must be an inconvenience, never an amputation.

**Clarity before cleverness.** Every structure is optimised for the stranger who must understand it later (I.III.5, I.XIV.2). Consequence: plainer structures are preferred to denser ones at equal capability, and every system must become easier to understand every year (I.XVI.2).

**Capability before dependency.** Structures increase the capability of whoever uses them — clients above all (Volume III, Preamble) — and never manufacture captivity. Consequence: clean exit is an architectural requirement of every system that touches a client (EA 14), and export is designed in, not bolted on.

## 3. Enterprise Layers

### 3.1 The stack

The company is structured as eight layers. Each layer depends only on the layers beneath it; no layer reaches upward.

**Founder & Governance** — the source of authority: strategy, policy, approvals, constitutional interpretation. Everything below acts within mandates issued here.

**Experience** — every surface a human touches: the public website, the Client Workspace, communications, documents. This layer expresses Volumes II and III; it holds no business logic of its own and no truth of its own — it renders truth held below.

**Business** — the commercial and relational substance: leads, opportunities, engagements, clients, agreements, billing. The layer where Volume III's journey (III.II) lives as state.

**Delivery** — the performance of engineering: understanding, design, implementation, documentation, handover, maintenance. The layer where Volume I's doctrine (I.IV) becomes work.

**Automation** — the execution of defined processes without continuous human attention, always within mandates from Governance and in service of the layers above (Chapter 9).

**Knowledge** — the company's documented memory: constitutional, architectural, operational, project and client knowledge (Chapter 8). Every layer above reads from and writes to this layer.

**Infrastructure** — the private foundation on which everything runs: computation, storage, networks, deployment. Deliberately boring, deliberately replaceable.

**Observability** — the layer that tells the truth about all the others: monitoring, logging, audit. It is drawn last because everything rests on it: a company that cannot observe itself cannot govern, deliver, automate or improve honestly (I.IV.6).

### 3.2 Why the order matters

Three gradients run down the stack, and they are the reason the order is load-bearing.

**Authority descends.** Mandates flow downward only. A lower layer never instructs a higher one; it reports upward through Observability and waits for direction. This is the Founder's authority (I.X.1) expressed structurally.

**Stability increases downward.** Upper layers change often — experience is redesigned, business terms evolve. Lower layers change rarely — knowledge formats and audit principles should outlive many websites. Dependencies therefore point from the volatile to the stable, never the reverse; a stable layer that depends on a volatile one inherits its volatility, which is how companies become fragile.

**Truth hardens downward.** The Experience layer renders; the Business layer asserts; Knowledge records; Observability witnesses. When layers disagree, the lower layer is correct, and the disagreement is a defect in the upper one. No surface may show what the layers beneath cannot substantiate — the architectural form of the honesty constraints (I.VIII.2).

## 4. Business Domains

### 4.1 The principle of domains

Layers describe *how* the company is stacked; domains describe *what* the company must be good at. A domain is a named area of responsibility with exactly one accountable owner, a defined set of duties, and explicit interactions with other domains. Today most domains are owned by the Founder in person. The architecture separates them anyway, deliberately: growth then consists of handing a well-defined domain to a new owner, rather than untangling one from an undifferentiated whole (Chapter 11). A domain owned by one person is still a domain.

### 4.2 The domains

**Governance** owns the constitution's application: policy, approvals, standards, this document. It interacts with every domain as the source of mandate and the destination of escalation. Its output is decisions and their records.

**Business Development** owns the journey's first stations (III.II): discovery through agreement. It qualifies honestly (III.II.3), proposes explicitly (III.V), and hands agreed engagements to Delivery with the written understanding attached. It may never promise what Delivery has not confirmed it can keep (III.V.3).

**Client Experience** owns the relationship as experienced (Volume III entire): communication rhythm, visibility, the Workspace's truthfulness, difficult conversations, the exit. It is the guardian of the eight sentences (III.XVIII) and holds veto over any surface or process that would cost one.

**Engineering** owns the doctrine of Volume I, Book IV: design, implementation, technical standards, technical review. It decides how things are built; it shares with Governance the duty of refusing what should not be built (I.VI.4).

**Operations** owns the running company: the execution of processes, coordination of work in progress, maintenance schedules, the daily state. Operations is the primary client of Automation and the primary author of playbooks.

**Knowledge** owns the knowledge architecture (Chapter 8): its classes, its standards, its currency. Every domain writes; Knowledge keeps the library coherent, versioned and findable.

**Infrastructure** owns the private foundation: environments, deployment, backup, recovery readiness. Its standing orders are replaceability and boredom.

**Security** owns boundaries and their enforcement (Chapter 10): classification, access, isolation, incident posture. Security holds a structural veto: no system ships over its objection, and only Governance may overrule it — in writing.

**Finance** owns the money's clarity: billing accuracy, traceability, the experience of Volume III, Book XII. Its standard is the absence of ambiguity, audited continuously.

**Legal** owns agreements and obligations: that commitments made are recorded, that records made are kept, that the company's undertakings and the constitution never diverge silently.

**Research** owns deliberate learning: evaluation of tools, methods and capabilities *before* they are needed in delivery — so that adoption decisions are evidence-based (I.IV.6) and hype never enters through the back door (I.III.3).

**Brand** owns Volume II's application: identity, voice, surfaces, the continuity test (II.XV). Everything public passes through its standards; nothing public bypasses them.

**People** owns capability and its growth: today, the Founder's own development and the definition of future roles; tomorrow, hiring against documented domains, onboarding through the knowledge architecture, and the principle that people join to own systems, not to become them.

### 4.3 Interaction rules

Domains interact through defined interfaces, not through ambient familiarity — even while one person plays several parts. Three rules govern: every handover between domains carries its record (the understanding, the agreement, the decision); every conflict between domains escalates to Governance rather than being settled by adjacency; and every domain may query another's state through Observability rather than by interruption. These rules feel ceremonial at one person and become the company's survival at ten (Chapter 11).

## 5. Authority Model

### 5.1 Definitions

Seven words are used precisely throughout the company and its systems.

A **decision** selects among alternatives and creates obligation. A **recommendation** proposes a decision and carries no authority of its own — its weight is its evidence. An **approval** is a decision that permits another actor's intended action; it is specific, informed and recorded, never blanket. **Execution** is the performance of decided work; executing is not deciding, and an executor who encounters an undecided question stops and escalates. **Automation** is execution by machine within a mandate (Chapter 9). **Delegation** is the explicit transfer of decision rights within named bounds; it transfers the right, never the accountability (I.V.2). **Authority** is the traceable chain from any act back to a human seat entitled to have caused it.

### 5.2 The structure of authority

All authority in YSWORKS originates in the Founder (I.X.1) and reaches every act by explicit delegation. The architecture makes the chain literal: for every action taken by any actor — person, process or machine — it must be answerable in one step *who decided this, under what delegation, recorded where*. An act whose chain cannot be traced is unauthorised by definition, whatever its outcome. This traceability is what Observability exists to preserve (EA 3.1) and what audit exists to prove.

Decisions are classed by reversibility (I.X.2), and the class determines the process: reversible decisions are made close to the work, quickly, and corrected without ceremony; irreversible or expensive decisions are made slowly, in writing, with alternatives recorded. Systems that route decisions must know the class before they route.

### 5.3 Decisions that always remain human

Certain decisions are never delegated to automation, at any scale, under any convenience. They are listed here so that every future system is built with these stops designed in:

Constitutional interpretation and amendment. Commitments made to clients — scope, dates, prices, promises (III.V.3). Movement of money. Acceptance or refusal of an engagement (I.VI.4). Beginning and ending relationships — client, provider, or personnel. Security exceptions and access grants beyond standing policy. Any irreversible action affecting client data or client systems. Public statements in the company's name. And any action a policy has marked as requiring approval: the mark itself may be automated; the approval may not.

Machines may prepare, analyse, draft and recommend across all of these. The seat is human (I.V.2), and every system must render the seat visible.

## 6. System Landscape

### 6.1 The systems

The company's structure is currently implemented across eight named systems. Each is described by responsibility and relationship only; implementation detail belongs to system designs, not here.

**Public Website.** The Experience layer's anonymous surface. Responsibilities: credibility, education, honest conversion (III.III). It holds no client data, performs no business logic, and renders only claims the lower layers substantiate. It is the only system whose entire content is public by classification (EA 10.4).

**Client Workspace.** The Experience layer's authenticated surface — the pull channel of III.VII, governed in full by III.XI. (Client Workspace is the product name; *Client Portal* names the technical architecture.) Responsibilities: rendering the truthful state of each client's relationship — projects, work, documents, communication, billing records, support, activity, permissions. It is a window onto Business and Delivery state, never a door into private systems.

**YS AI OS.** The private coordination and supervision platform (I.VII.2) — the internal implementation of Chapters 3, 5 and 9: authority, policy, approvals, audit, memory, orchestration of work and automation. It is not a public product, is never exposed through any client surface, and is publicly described only by the sanctioned sentence. Its own architecture is documented separately and privately.

**GitHub.** The versioned home of artefacts: source, configurations, documents-as-code. Responsibilities: history, review, and the guarantee that every change to a versioned artefact has an author, a diff and a timestamp. It is the system that makes "the document leads" (I.XII) mechanically true.

**Cloudflare.** The public edge: the boundary between the untrusted internet and everything else. Responsibilities: serving the public surfaces, mediating all inbound public traffic, and ensuring that no path exists from the public edge into private systems except the deliberate, minimal, mediated ones.

**n8n.** The workflow execution engine of the Automation layer. Responsibility: performing defined process steps under mandates supervised by YS AI OS (Chapter 9). It executes; it does not decide.

**Knowledge.** The library itself: constitutional volumes, this architecture, operational documents, project records, client documentation — organised, versioned and owned per Chapter 8. Knowledge is a system, not a folder: it has structure, standards and a keeper.

**Infrastructure.** The private execution environment — currently modest, deliberately replaceable (I.XI.3 applies to hardware too). Responsibilities: running the private systems, isolation between planes, backup and verified recovery. Its location and topology are internal information (EA 10.6).

### 6.2 Relationship rules

Four rules bind the landscape together and take precedence over any single system's convenience. **Truth flows up, mandates flow down**: surfaces render state held in Business, Delivery and Knowledge; direction and policy descend from Governance through the OS. **Everything versioned passes through the versioned home**: change without history is change the company cannot explain (I.IV.6). **The public reaches the private only through mediated boundaries**: the edge and the Workspace are windows with rules, never corridors. **Every system is replaceable**: each system's responsibilities are defined here precisely so that any implementation of them can be exchanged without the architecture noticing more than a migration.

## 7. Information Flow

### 7.1 The canonical flow

Information about the company's work matures through a defined sequence of states:

**Lead → Opportunity → Client → Project → Knowledge → Automation → Support → History.**

A lead is an unqualified signal. An opportunity is a qualified conversation (III.II.3). A client is an agreed relationship (III.II.1, Agreement). A project is work in delivery. Knowledge is what the work taught, captured (Chapter 8). Automation is knowledge made executable where appropriate (Chapter 9). Support is the running relationship (III.X). History is the complete, closed record — the state from which nothing disappears.

### 7.2 One direction, by default

Information moves forward through this flow; it does not move backward except by explicit, recorded authorisation. The rule exists for four reasons. **Auditability**: a state that can be silently rewritten is not a record but a draft, and the company's honesty constraints require records (I.VIII.3). **Integrity of meaning**: each state carries commitments — a client is not an opportunity again just because a renewal is being discussed; the renewal is a *new* opportunity that references the client's history, leaving the history intact. **Clean systems**: forward-only flows produce state machines that can be implemented, observed and reasoned about; bidirectional mutation produces archaeology. **Memory**: History is only trustworthy if arrival there is permanent — the company's ability to learn (I.XVI) rests on a past that stays put.

Backward movement, where genuinely required — a correction, a reclassification — is performed as a new, authorised, recorded event that *supersedes* rather than *overwrites*. The original remains. This is the architectural form of never falsifying the record.

### 7.3 Boundaries within the flow

The flow runs inside boundaries that it never crosses casually. Client information lives in that client's context and never migrates into another's (III isolation; EA 10.5). Information gathered at one classification never flows to a lower one without an explicit declassification decision (EA 10.4). And knowledge extracted from client work for the company's general library is abstracted first: the lesson travels; the client's particulars do not, without authorisation.

## 8. Knowledge Architecture

### 8.1 The classes

The company's knowledge is organised in five classes, each with its own change cadence and authority.

**Constitutional documents** — Volumes I–III. Amended rarely, by the Founder, in writing (I.XII). They answer *why*.

**Architectural documents** — this document and the system designs beneath it, including **ADRs**: architecture decision records, each capturing one significant decision with its context, alternatives and reasoning. ADRs exist because the *why not otherwise* cannot be reconstructed later (I.IV.4). They answer *how structured*.

**Operational documents** — manuals, playbooks, templates, checklists: the executable knowledge of Operations. A playbook is a process written so a competent stranger could perform it; operational documents are the direct precondition of delegation and automation alike (Chapters 9, 11). They answer *how done*.

**Records** — project records, client documentation (owned by the client, part of delivery — III.IX), decisions, approvals, and the **audit** trail: the append-only witness of what actually occurred. Records answer *what happened*.

**Memory** — the working context held by the company's private systems to coordinate current work. Memory is operationally vital and architecturally subordinate: anything in memory that matters beyond the current work must graduate into a document or a record. Memory is a cache, never the library.

### 8.2 Ownership and standards

Every document has exactly one owner, a version, an identifier and a stated audience — the library's existing conventions (document IDs, citation forms) apply universally. The Knowledge domain owns the standards; the authoring domain owns the content. Two constitutional standards bind all classes: the reader test — a document is good when its reader can act without its author (I.III.4) — and the clarity gradient — the corpus must become easier to navigate and understand every year (I.XVI.2), which makes pruning, merging and rewriting a scheduled duty, not an act of housekeeping enthusiasm.

### 8.3 Evolution

Knowledge changes by the same discipline as software: proposed, reviewed at a depth proportional to its class, versioned, and superseded rather than deleted. The chain of custody runs downhill: constitutional change may force architectural change, which may force operational change; no operational document may quietly contradict the layer above it. Where practice and documentation diverge, one of them is wrong, and the divergence itself is treated as an incident of the Knowledge domain — found, decided, fixed in whichever direction the truth requires.

## 9. Automation Architecture

### 9.1 The chain of service

Automation exists inside a strict chain: **automation serves operations; operations serve the business; the business serves clients.** Each link is a constraint. Automation that does not make a defined operation better — faster, safer, more consistent — is machinery for its own sake and is not built (I.V.3). Operations that do not serve the business's actual work are ritual. And the chain's far end is fixed by Volume III: **clients are never managed by automation alone.** Automation may inform, prepare, remind, execute and record within the relationship; the relationship itself — its judgement, its difficult conversations, its commitments — is held by people (III.XIII, III.V.3). A client who can only reach a machine has been demoted from counterpart to caller, and the architecture forbids the demotion.

### 9.2 The mandate structure

Every automation runs under a **mandate**: a defined scope of action, defined inputs it may read, defined effects it may cause, defined conditions under which it must stop. Mandates are issued under the authority model (Chapter 5), supervised through the private coordination platform, and recorded like any delegation. An automation acting outside its mandate is not an eager helper; it is an unauthorised actor, and the architecture treats it exactly as it would treat an unauthorised person.

### 9.3 Approval gates

Wherever an automated flow approaches an action on the always-human list (EA 5.3) — or any action policy marks as consequential — the flow contains a **gate**: a designed stop at which the flow presents its evidence, a human decides, and the decision is recorded before execution proceeds. Gates are architectural, not advisory: the flow *cannot* proceed ungated, rather than *should not*. Three properties make gates trustworthy: the request is specific (this action, this scope, this evidence — never "approve whatever comes"); the approval is consumed by the action it authorised and expires with changed context; and the whole exchange lands in the audit trail. A gate that has become a rubber stamp is a failed gate and an incident of Governance.

### 9.4 Failure and accountability

Automation fails in a designed direction: **closed for mutations, degraded for reads** — when supervision, policy or context is unavailable, automated flows stop changing the world and report, rather than guessing (I.IV.3). Every critical automated process has a documented manual path, so that the company can operate — more slowly, but honestly — with its automation switched off (EA 12.5). And accountability never transfers: the Founder remains accountable for everything done under the company's mandates, which is precisely why the mandates, gates and records exist. Automation changes the cost of doing; it changes nothing about who answers.

## 10. Security Architecture

*Principles only; controls and mechanisms belong to system designs.*

### 10.1 Least privilege

Every actor — person, process, machine — holds the minimum access its current responsibility requires, granted explicitly, reviewed periodically, and removed the moment the responsibility ends (III.XVII.2 applies internally too). Convenience is not a privilege class.

### 10.2 Zero trust between components

No system trusts another because of where it sits. Every request across a boundary is identified, authorised and appropriate to the requester's mandate, regardless of network, layer or history. The private network is a boundary of exposure, not a badge of trust.

### 10.3 Auditability

Every consequential action leaves a record sufficient to reconstruct who, what, when, under which authority (EA 5.2). The audit trail is append-only, protected from its own subjects, and preserved through failure by design (III.XIV.3). What cannot be audited cannot be trusted, and what cannot be trusted is not deployed.

### 10.4 Classification

All information carries one of four classifications, and systems enforce the boundaries between them. **Public** — published deliberately. **Client-confidential** — a client's information, held for the relationship, governed by Volume III. **Internal** — the company's working information. **Restricted** — the small core whose exposure would damage the company structurally: credentials, private system internals, security posture. Movement downward in classification is a decision, never a drift (EA 7.3).

### 10.5 Client isolation

Each client's context is structurally separate: their data, documents, communications and Workspace view exist in their own compartment, and no path — human, interface or automated — crosses compartments without failing safe. Isolation is enforced by design, verified by test, and boring on purpose: it must not depend on anyone's carefulness (III.XI.1).

### 10.6 Private infrastructure, public interfaces

The company's infrastructure is private: not addressable from the public internet, not described in public materials, not reachable from client surfaces except through the deliberate, minimal, mediated interfaces the architecture names (EA 6.2). Public interfaces are few, small and known; everything not explicitly public is private by default. The perimeter's design goal is that its complete map fits on one page and its exceptions on none.

## 11. Scalability

### 11.1 The order of growth

YSWORKS does not scale by adding people first. It scales in a fixed order: **better systems, better documentation, better architecture, better automation, better delegation — then people.** The order is not frugality; it is engineering. Headcount added to an undocumented, unautomated company multiplies coordination cost faster than capacity: each new person must extract knowledge from other people's heads, and the extraction interrupts the only people who have it. Headcount added to a documented, structured company inherits its capability on arrival.

### 11.2 What each stage buys

Better systems remove work; better documentation makes remaining work transferable (I.III.4); better architecture makes systems independent enough to change separately (EA 14); better automation executes the well-understood under mandate (Chapter 9); better delegation transfers decision rights along the authority model without losing traceability (EA 5.1). Only then does a new person arrive — to *own a domain* (EA 4.1) that already exists, with documents that already teach it and systems that already run it. People join YSWORKS to hold seats, not to become load-bearing walls.

### 11.3 The constraint

The rate limit on growth is constitutional: the company grows at the rate at which its standard can be kept (I.XI.1). Architecturally this means every stage of scale is preceded by the question *what must be true of our systems before this growth is safe* — and the answer is built first. Scale that outruns structure is not growth; it is deferred collapse with better revenue.

## 12. Failure Modes

The architecture assumes failure and is shaped to contain it. Seven modes are designed against explicitly.

### 12.1 Single points of failure

Every layer is examined for the component whose loss stops the company. The mitigations are structural: replaceable systems (EA 6.2), documented processes with manual paths (EA 9.4), verified backup and recovery for anything stateful, and domain separation so that one failing area degrades the company rather than halting it. Where a single point cannot yet be removed — small companies have them — it is *named*, recorded, and scheduled for removal rather than ignored.

### 12.2 Knowledge loss

The failure of memory-as-storage. Mitigated by the knowledge architecture itself: nothing operational lives only in a head (I.III.4), memory graduates to documents (EA 8.1), and departures — including planned absence — are rehearsed against the question *what could this person alone do or explain?* The correct answer trends toward *nothing*, and the trend is measured.

### 12.3 Founder absence

The company's deepest current single point, named honestly. The architecture reduces it from every side: the constitution externalises judgement — the *why* survives the person; the authority model externalises decision structure — delegations and always-human lists are written, not remembered; documented operations keep delivery and maintenance running; and automation under mandate continues routine execution safely, failing closed at every gate that requires the absent seat (EA 9.4). In extended absence the company degrades by design: it keeps its commitments, pauses what requires ungrantable approval, and preserves every record for the authority that resumes. What it never does is improvise authority that was not delegated.

### 12.4 Provider failure

Any external system — edge, hosting, tooling — can fail commercially or technically. Mitigations: the replaceability rule (every provider implements a responsibility this document defines, so the responsibility survives the provider), exportable data everywhere, and boundaries drawn so that a provider's failure is an outage, never a loss. The company's continuity may depend on providers for *speed*; it must never depend on any single provider for *existence*.

### 12.5 Automation failure

Covered structurally in EA 9.4: fail closed for mutations, degrade to reads, stop at broken mandates, report through Observability, hand over to the documented manual path. The company must remain operable — slower, smaller, but honest — with its automation entirely off. That property is tested, not assumed (EA 14).

### 12.6 Security failure

Assumed possible despite Chapter 10 — architecture that assumes its own perfection is advertising. Containment is pre-built: compartments limit blast radius (EA 10.5), least privilege limits what any compromised actor can do, classification limits what any breach can reveal, and the audit trail survives to tell the truth (EA 10.3). Response follows the incident posture of III.XIV: facts early, evidence protected, impact and containment stated, cadence kept.

### 12.7 Communication failure

The quiet failure: messages missed, context lost, silence misread. Mitigated architecturally rather than by exhortation: the record-first culture makes the written trail the source of truth (III.VI.5), the Workspace holds state independently of any conversation (III.VII.2), and every commitment lives in a system rather than an inbox. When a channel fails, the truth is still standing somewhere the parties can walk to.

## 13. Future Evolution

The architecture will outlive every technology named in Chapter 6, and it is written to survive them. Its evolution is governed by principles, never by prescriptions.

**Pace layering.** Change frequency must match the stack (EA 3.2): experience may change seasonally, business processes yearly, knowledge structures rarely, constitutional foundations almost never. An architecture change is examined first for *which layer it truly belongs to* — most urgent-seeming changes are upper-layer changes wearing lower-layer costumes.

**Document-first change.** Structure changes in this document before it changes in systems (I.XII; EA 1.2). The sequence is constitutional check, architectural amendment, design, then implementation — in that order, at whatever speed, with no step skipped silently.

**Replaceability as a permanent goal.** Every evolution should leave every component easier to replace, not harder. Migrations are the architecture's fitness test: a company that can move is a company that cannot be held.

**Review at material evolution.** This document is reviewed whenever the company materially changes — new domains occupied by new people, new systems entering the landscape, new classes of client work — and at minimum once a year against the tests of Chapter 14. It carries versions and reasons like everything else in the library.

**No technology prescriptions, ever.** This document names current systems as implementations of responsibilities. Its amendments may rename the implementations freely; they may never let an implementation redefine a responsibility.

## 14. Enterprise Tests

The architecture is verified by questions, asked regularly, answered honestly, recorded. A *no* is not shame; it is a work item with an address.

1. **The stranger test.** Could a competent engineer, new to the company, understand any given system from its documents alone and act safely within a day? (EA 2, 8.2)
2. **The component failure test.** Can each system in the landscape fail without collapsing the company — degraded, not destroyed? (EA 12.1)
3. **The clean exit test.** Could any client leave this quarter and receive everything they own, in usable form, without heroics? (EA 2; III.XVII)
4. **The survival-of-knowledge test.** If any one person were unavailable for a month, what knowledge would the company lose? Name it; the list is the backlog. (EA 12.2, 12.3)
5. **The independent evolution test.** Can each system be changed — or replaced — without forcing simultaneous change in the others? (EA 6.2, 13)
6. **The authority trace test.** Pick any consequential recent action at random: can its chain be traced to a human seat, through recorded delegation, in one step? (EA 5.2)
7. **The safe automation test.** Switch any automation off, conceptually or actually: does the company still operate through its manual path, and does the automation itself fail closed rather than improvising? (EA 9.4, 12.5)
8. **The isolation test.** Attempt, on paper, to reach one client's information from another client's context: does every path fail safe? (EA 10.5)
9. **The honesty test.** Does any surface, in any layer, currently claim what the layers beneath cannot substantiate? (EA 3.2; I.VIII)
10. **The one-page test.** Can the company's complete public perimeter — every interface between the world and the private systems — still be drawn on one page? (EA 10.6)

## 15. Closing

This document set out to describe a company as an engineered system, and it closes on the claim underneath every chapter: **YSWORKS is not defined by its software.** The websites will be rebuilt, the tools exchanged, the infrastructure replaced — Chapter 6 is the most perishable chapter here, by design. What persists is the structure this document records: authority that can always be traced, layers whose dependencies point toward stability, domains with owners, knowledge that outlives its authors, automation that serves under mandate and stops when unsure, boundaries that hold without anyone's vigilance, and a flow of information that never rewrites its own past.

Software is one expression of that structure — the fastest-changing, most visible expression, and the least essential. A company whose identity lives in its software dies with a migration. A company whose architecture lives in documents like this one can lose any system on any day and remain itself by the following morning, because what it actually is was never installed anywhere: it is the arrangement — of responsibility, of truth, of memory, of authority — that the systems merely execute.

The constitutional volumes end on character: the company recognisable without its pixels, the client who would return with a harder problem. This document ends on the engineering that makes those endings durable. Character decides what the company will do; architecture decides whether it still can — after the failure, after the departure, after the decade. The company survives because its architecture survives. Everything Codex now builds is an implementation of this skeleton and this nervous system; and when any implementation and this document disagree, the implementation is wrong, until the day the document is amended — deliberately, in writing, with reasons — by the authority this architecture exists to serve.

**End of YSWORKS Enterprise Architecture, Version 1.0.**
