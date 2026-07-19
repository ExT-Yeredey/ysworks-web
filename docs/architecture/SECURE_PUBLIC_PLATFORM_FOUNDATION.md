# YSWORKS Secure Public Platform Foundation

- Status: Proposed architecture contract
- Scope: Public production foundation
- Canonical domain: `ysworks.dev`
- Canonical website: `www.ysworks.dev`

## 1. Purpose And Boundaries

This document defines the target public architecture and mandatory security
contracts for a future YSWORKS production platform. It is intentionally not an
implementation guide.

It implements the enterprise public/private boundary in
[YSWORKS Enterprise Architecture](../YSWORKS_ENTERPRISE_ARCHITECTURE.md)
(*EA 6.2; EA 10.1–6*). In particular, public interfaces must remain few,
minimal, mediated, and capable of being mapped on one page. This is a target
architecture, not evidence that controls are configured.

It does not authorize or contain:

- production changes;
- DNS or Cloudflare configuration;
- container, reverse-proxy, tunnel, or firewall configuration;
- private hostnames, IP addresses, ports, network maps, or origin identifiers;
- workflow definitions or private automation details;
- secrets, tokens, certificate material, or secret names tied to production;
- confirmation that any service category named below is deployed.

The architecture follows four principles:

1. Minimize the public surface.
2. Terminate untrusted traffic at a purpose-built boundary.
3. Keep administration behind identity-aware, default-deny access.
4. Keep data stores and control planes unreachable from the public Internet.

## 2. Trust And Exposure Classes

The classification applies to reachability, not to data sensitivity.

| Class | Meaning | DNS and access contract |
| --- | --- | --- |
| `PUBLIC` | Intentionally reachable without employee identity | Public DNS is allowed; edge controls and application authentication still apply |
| `PRIVATE` | Remotely reachable only by authorized people or machines | May use a public hostname only behind Cloudflare Access; default deny; no direct origin route |
| `INTERNAL` | Reachable only inside a private network or on the host | No public DNS record and no Internet-routable listener |
| `FUTURE` | Reserved concept with no current exposure approval | No DNS record until an architecture and security review promotes it |

`PRIVATE` never means “public with an obscure URL.” A private application must
fail closed at the identity-aware edge and again at the origin where supported.

## 3. Public Domain Architecture

### 3.1 Naming Contract

Use one hostname per trust purpose. Do not mix public webhook paths and an
administrative UI on the same hostname. Do not create wildcard DNS records.

| Hostname | Class | Intended purpose | Decision |
| --- | --- | --- | --- |
| `ysworks.dev` | `PUBLIC` | Stable apex and brand entry point | Redirect permanently to the canonical `www` URL, preserving safe paths and query strings |
| `www.ysworks.dev` | `PUBLIC` | Static-first website | Canonical web origin; no administrative or integration routes |
| `hooks.ysworks.dev` | `PUBLIC` | Secure webhook and form ingress gateway | Only explicitly registered provider routes; no root handler, catch-all, proxy, editor, or direct route to automation tools |
| `portal.ysworks.dev` | `FUTURE`, target `PRIVATE` | Future authenticated Client Workspace through the Client Portal technical boundary | Do not create until the product exists and strict per-client identity, authorization, data, cache, log, and operational isolation is validated |
| `status.ysworks.dev` | `FUTURE` | Minimal public availability page | Promote to `PUBLIC` only when monitoring is independent and output cannot reveal architecture, IP addresses, origins, internal names, or private services |
| `docs.ysworks.dev` | `FUTURE` | Public product or API documentation | Create only when durable public documentation exists; not for internal runbooks |

This list is exhaustive for the current foundation. Do not reserve or publish
additional product, API, asset, preview, or administration subdomains before a
real product and a reviewed architecture require them. In particular, there is
no public administration hostname.

Internal services must use private naming outside public DNS. Service-specific
hostnames such as database, cache, container, home-control, or workflow-editor
names are forbidden in the public zone.

### 3.2 DNS Contract

- Cloudflare is the authoritative DNS and security edge for public hostnames.
- The apex and `www` records point only to the approved static hosting target.
- Dynamic public applications use proxied records or Tunnel-managed routes; an
  origin address must never appear in public DNS.
- `PRIVATE` hostnames must have an Access application before a route becomes
  reachable. Access is default deny.
- `INTERNAL` and unapproved `FUTURE` names have no public record.
- DNSSEC is required before production, subject to registrar validation.
- CAA records should restrict certificate issuance to deliberately approved
  authorities after verifying every active hosting and certificate flow.
- Email authentication records, if email is introduced, are managed as a
  separate domain-security workstream.
- DNS changes require peer review, recorded owner, rollback plan, and validation.

## 4. Public Exposure Policy

### 4.1 Service Decision Matrix

The product names below are policy examples, not an infrastructure inventory.

| Service category | Maximum class | Public exposure decision | Required boundary |
| --- | --- | --- | --- |
| Public website | `PUBLIC` | Allowed | Cloudflare edge and static hosting |
| Secure webhook gateway | `PUBLIC` | Allowed only as a narrow ingress API | WAF, authentication, validation, replay defense, rate limits, asynchronous handoff |
| Future Client Workspace through the Client Portal boundary | `FUTURE` then `PRIVATE` | Never anonymous and never shared across clients without enforced tenant boundaries | Identity-aware access, per-client authorization and data isolation, no shared caches, redacted tenant-aware logs |
| Public status page | `FUTURE` then `PUBLIC` | Allowed only when it reveals no private topology and is operationally independent | Cloudflare edge; read-only, minimal data |
| GitHub public repository and profile | `PUBLIC` external SaaS | Allowed intentionally; never proxy GitHub through YSWORKS | GitHub authentication, branch protection, secret scanning, least privilege |
| GitHub administration | `PRIVATE` external SaaS | Never anonymous | Strong GitHub authentication, MFA or passkey, least privilege |
| n8n editor or management API | `INTERNAL` | Never public and never a webhook origin | Private network; any remote human access additionally requires Zero Trust |
| n8n webhook execution endpoints | `INTERNAL` | Never exposed directly | Receive only normalized, authenticated events from the gateway |
| Portainer or container-management UI | `INTERNAL` | Never public | Private network; Zero Trust for any remote human access |
| Docker daemon, API, or socket | `INTERNAL` | Never public and never mounted into an Internet-facing component | Host-local or tightly isolated control plane only |
| PostgreSQL | `INTERNAL` | Never public | Private data network, authenticated application clients, encrypted transport where applicable |
| Redis | `INTERNAL` | Never public | Private data network; no Internet-routable listener |
| Home Assistant | `INTERNAL` | Never part of the YSWORKS public platform | Separate trust zone; remote access is a separate private architecture decision |
| Homebridge | `INTERNAL` | Never part of the YSWORKS public platform | Separate trust zone; no public route |
| YS AI OS internal panels | `INTERNAL` | Never public and never embedded in a public or client-facing host | LAN or approved Tailscale private overlay only; least privilege and MFA where supported |
| Reverse-proxy administration API or dashboard | `INTERNAL` | Never public | Loopback or private management network; authentication is not a substitute for isolation |
| Cloudflare Tunnel connector | `INTERNAL` egress | No inbound public listener | Outbound-only connection with narrowly scoped routes and credentials |

### 4.2 Absolute Prohibitions

No exception process may make the following anonymously Internet-reachable:

- a container runtime or its socket;
- a database or cache;
- an orchestration, workflow, or infrastructure editor;
- a home-control service;
- a reverse-proxy or tunnel administration interface;
- any YS AI OS internal panel or control surface;
- an origin address that bypasses Cloudflare;
- a debug, metrics, health-detail, or log endpoint that exposes private state.

Secrets, credentials, internal logs, and client identities, payloads, files, or
other client information must never be published through a website, webhook
response, status page, documentation site, repository, cache, or diagnostic
endpoint.

### 4.3 Administrative Access Boundary

- Administrative interfaces remain reachable only from the local LAN or an
  approved Tailscale private overlay. They have no public DNS record or public
  ingress route.
- Tailscale access does not make an interface public; device and user identity,
  MFA, least privilege, revocation, and audit requirements still apply.
- Cloudflare Access may protect an approved private application, but it does not
  justify publishing infrastructure editors or control planes.
- Administrative access must fail closed if the private overlay or identity
  control is unavailable.

An urgent support need does not override these prohibitions. Use a controlled,
time-limited private access path with an audit trail.

## 5. Reverse Proxy Foundation

The public website on Cloudflare Pages does not need a self-hosted reverse
proxy. This decision applies only if a future approved HTTP origin must be
reached through Cloudflare Tunnel.

### 5.1 Comparison

| Criterion | Caddy | Traefik | NGINX |
| --- | --- | --- | --- |
| Simplicity | Small, readable configuration; secure HTTPS defaults | Strong dynamic discovery but more concepts and labels | Explicit and mature, but more boilerplate and manual TLS work |
| Security fit | Can operate without Docker access; safe forwarded-header handling requires trusted-proxy configuration | Docker discovery commonly needs Docker API access; this expands control-plane risk | Can operate without Docker access; secure behavior depends more heavily on complete manual configuration |
| Maintenance | Low for a few stable routes | Best when routes change dynamically across an orchestrated fleet | Predictable and widely understood; configuration and certificate lifecycle need more operator care |
| Raspberry/ARM compatibility | Suitable Go binary and container images; verify the exact supported build before deployment | Suitable Go binary and multi-architecture images; higher operational complexity | Official ARM64 packages exist for supported Linux distributions |
| TLS | Automatic certificate management and HTTPS when used directly | ACME and certificate resolvers are integrated but require explicit configuration | Capable TLS termination; certificate automation is external or separately engineered |
| Cloudflare fit | Good behind Tunnel; configure only Cloudflare or connector hops as trusted proxies | Good behind Tunnel; dynamic providers are unnecessary for a small fixed surface | Good behind Tunnel; precise header and origin TLS configuration is manual |
| Best fit | Small, stable, security-focused HTTP boundary | Large dynamic container or orchestrator environment | Teams already standardized on NGINX or needing its advanced controls |

### 5.2 Recommendation

Use **Caddy** for any future small, fixed self-hosted HTTP boundary, with these
conditions:

- Cloudflare remains the public edge and Tunnel is the only ingress path.
- Caddy does not receive the Docker socket or control-plane credentials.
- Routes are explicit and default deny; no automatic publication by container
  label.
- The administration API is host-local or disabled from network access.
- Forwarded client headers are trusted only from the defined connector/proxy hop.
- Upstream TLS verification is never disabled.
- Logs exclude secrets, authorization headers, full webhook bodies, and personal
  data.

Traefik becomes preferable only if a future orchestrated environment creates a
proven need for dynamic service discovery and Docker access can be isolated
through a least-privilege API proxy. NGINX remains a valid alternative when
operator familiarity or advanced proxy behavior outweighs configuration cost.

This recommendation does not authorize installation or configuration.

## 6. Cloudflare Foundation

Cloudflare is the only intended public network edge. Capabilities depend on the
selected plan, so every production control must be checked against the actual
account before relying on it.

### 6.1 HTTPS

- Redirect HTTP to HTTPS at the edge.
- Use TLS 1.2 as the minimum and enable TLS 1.3.
- Use `Full (strict)` whenever Cloudflare connects to an HTTPS origin; never use
  `Flexible`.
- Keep certificate renewal automated and alert before expiry.
- Roll out HSTS in stages: start with a short lifetime after all hosts are HTTPS,
  then increase to at least one year. Add `includeSubDomains` only after the full
  hostname inventory passes validation. Treat preload as a separate, hard-to-
  reverse decision.
- Do not weaken origin certificate validation to resolve deployment errors.

### 6.2 Tunnel

- Prefer named, remotely managed tunnels with outbound-only connectors.
- A Tunnel connector initiates outbound connections and must not require or
  authorize opening or forwarding inbound ports on the Internet router.
- Block public inbound traffic to tunnel origins.
- Use separate tunnels or credentials for materially different environments or
  trust zones; never share production credentials with development.
- Map only approved hostnames to explicit services and end with a deny/default
  failure route.
- Use at least two connectors on independent failure domains only when uptime
  requirements justify it.
- Rotate connector credentials and revoke a connector when its host is retired
  or suspected compromised.
- Monitor connector health without publishing internal details.

Cloudflare documents that Tunnel uses outbound-only connections, allowing
inbound traffic to the origin to be blocked. Any design that requires router
port forwarding is outside this foundation and must be rejected.

### 6.3 WAF

- Enable the plan-appropriate Cloudflare managed ruleset.
- Add the OWASP ruleset where the plan permits, beginning in log or challenge
  mode and promoting after false-positive review.
- Scope rules by hostname and route. Static pages, browser forms, and machine
  webhooks have different traffic contracts.
- Allow only documented HTTP methods. A webhook route normally accepts `POST`;
  provider verification may explicitly allow `GET` on a separate route.
- Enforce content type and body-size limits at the edge and again in the gateway.
- Never create a broad WAF bypass for webhook providers. Any exception must name
  the exact route and rule, have an owner and expiry, and preserve signature
  verification.
- Treat WAF as defense in depth, not application authentication.

### 6.4 Rate Limiting

Use two layers:

1. Cloudflare applies coarse limits before origin work.
2. The gateway applies identity-, route-, and event-aware quotas after
   authentication.

Initial guardrails to validate with observed provider retry behavior:

| Surface | Edge guardrail | Gateway guardrail | Response |
| --- | --- | --- | --- |
| Static website | Challenge abnormal bursts; do not impair verified search bots | Not applicable | Edge-managed |
| Contact form | 5 submissions per 10 minutes per client signal; 20 per day per client signal | Duplicate and destination quotas | Generic `429` |
| Provider webhook | High burst ceiling per route, initially 600 requests per minute; do not use interactive challenge | Provider, tenant, event type, and event-ID quotas | Minimal `429` only when safe for provider retries |
| Future public API | Deny until an API-specific quota contract exists | Credential and operation quota | Versioned API error |

IP address alone is not a trustworthy identity. Thresholds are starting policy,
not capacity claims; validate in shadow/log mode and tune before enforcement.
Cloudflare notes that distributed counters can allow a small number of excess
requests before mitigation, so origin-side limits remain mandatory.

### 6.5 Bot Protection

- Apply bot signals and managed challenges to browser surfaces.
- Use Turnstile plus a honeypot and server-side checks for public forms.
- Do not apply JavaScript or interactive challenges to machine webhook routes.
- Preserve verified search-engine access to public pages.
- Do not treat a successful bot challenge as authorization.

### 6.6 Zero Trust And Cloudflare Access

- All administrative access is default deny and requires an approved identity
  provider, MFA, and least privilege.
- Require device posture for high-impact administration when available.
- Use short sessions for control planes and require re-authentication for
  sensitive actions.
- Machine access uses service authentication or mTLS, never a shared human login.
- Each application has an owner, allowed group, session duration, and quarterly
  access review.
- Avoid `Bypass`. If a host needs public and private routes, split the hostnames or
  define the smallest exact public path before the private application route.
- Validate Access tokens at the origin or connector where supported so a routing
  mistake cannot bypass Access.
- Record successful and denied administrative access in an access-controlled log
  with a defined retention period.

### 6.7 Security Headers

The website and gateway must emit a reviewed policy appropriate to their
content. Target headers are:

| Header | Contract |
| --- | --- |
| `Content-Security-Policy` | Default deny; allow scripts, styles, images, fonts, frames, and connections only from enumerated required sources; avoid `unsafe-eval`; deploy report-only before enforcement |
| `Strict-Transport-Security` | Staged rollout described in the HTTPS section |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` or stricter |
| `Permissions-Policy` | Disable browser capabilities not used by the site |
| `frame-ancestors` in CSP | `'none'` unless an approved embedding use case exists |
| `Cross-Origin-Opener-Policy` | `same-origin` after compatibility validation |
| `X-Robots-Tag` | `noindex, nofollow` for private previews and non-public error surfaces |
| `Cache-Control` | Route-specific policy; sensitive and webhook responses use `no-store` |

Do not add permissive CORS headers globally. Public API and webhook routes define
their own origin contract; provider-to-server webhooks do not need browser CORS.

### 6.8 Caching

| Content | Policy |
| --- | --- |
| Fingerprinted static assets | Public cache for one year with `immutable` |
| HTML | Short edge TTL or revalidation; purge on deployment; never cache personalized output |
| Public status response | At most 60 seconds unless freshness requirements are stricter |
| Form and webhook requests/responses | `no-store`; never cache non-`GET` ingress |
| Access-protected or authenticated content | `private, no-store` unless a separate reviewed contract proves safe |
| Errors containing request context | `no-store` |

The origin remains the source of cache intent. Cloudflare Cache Rules may tighten
or separate edge TTLs but must not override `no-store` on sensitive responses.

## 7. Secure Webhook Gateway

### 7.1 Architecture Contract

```text
Provider or browser
        |
        v
Cloudflare DNS, TLS, WAF, coarse rate limit
        |
        v
Dedicated webhook gateway
  authenticate -> replay check -> validate -> normalize -> enqueue
        |                                             |
        | minimal response                            v
        +---------------------------------- internal durable queue
                                                        |
                                                        v
                                             private consumers/workflows
```

The gateway is the only public integration boundary. Private consumers never
receive Internet traffic directly. Acceptance and processing are separate:
after authentication and validation, the gateway durably records or enqueues the
event and responds without waiting for downstream automation.

### 7.2 Route Registration Contract

Every integration must be registered before exposure with:

- owner and business purpose;
- provider and environment;
- exact hostname, path, and allowed methods;
- authentication algorithm and secret-rotation procedure;
- maximum body size and content types;
- versioned input schema and normalized event schema;
- replay key, idempotency key, and retention window;
- edge and gateway rate limits;
- acknowledgement deadline and retry behavior;
- data classification, log-redaction rules, and retention;
- failure destination, alert owner, disable switch, and decommission date.

Each provider receives one or more exact, separately registered routes. The
hostname root, unknown paths, unregistered providers, and unregistered methods
return `404` or `405` without forwarding. There is no catch-all, path-derived
upstream, generic proxy, editor route, or route that accepts arbitrary workflow
identifiers.

No provider route may accept an event until signature, authenticated timestamp
and freshness, replay or idempotency key, and versioned payload schema checks all
succeed.

### 7.3 Signature Verification

- Verify the provider's native signature over the exact raw request bytes before
  parsing or transforming the payload.
- Require every provider contract to validate a signed or otherwise
  cryptographically authenticated event timestamp and reject events outside its
  documented freshness window. If a provider cannot supply authenticated
  freshness, place it behind an mTLS or service-authenticated broker that does.
- Prefer HMAC-SHA-256 or an asymmetric signature scheme documented by the
  provider. Reject weak or undocumented custom schemes.
- Compare signatures in constant time.
- Bind a generic YSWORKS signature to version, timestamp, method, canonical path,
  content digest, and event ID. Do not sign only the parsed JSON.
- Use a unique secret or key per provider and environment. Support an explicit
  two-key rotation window.
- Reject missing, malformed, unknown-version, or unverifiable signatures with a
  generic response and no diagnostic detail.
- Never put webhook secrets in URLs, source control, client-side code, or logs.

For a provider that does not support cryptographic signatures, require mTLS or a
service-authenticated broker. A static bearer token alone is insufficient for a
new production integration.

### 7.4 Replay And Idempotency Protection

- Require an authenticated timestamp for every provider contract. The generic
  contract accepts at most five minutes of clock skew; provider-specific windows
  may be narrower and must never exceed the provider's documented retry need
  without explicit review.
- Atomically reserve the signed event ID or nonce before enqueueing. Reject a
  duplicate reservation.
- Keep replay keys for at least 10 minutes and business idempotency keys for at
  least 24 hours; increase the window to match the provider's documented retries.
- Use the provider's stable event identifier when available. A payload hash is a
  fallback, not the primary identity.
- Ensure retries return the same acknowledgement class without repeating side
  effects.
- Synchronize gateway clocks and alert on material drift.

### 7.5 Payload Validation

- Accept only the route's documented media type and character encoding.
- Enforce a default maximum body size of 256 KiB. A provider-specific exception
  requires documented evidence, an explicit cap, and streaming-safe handling.
- Parse with bounded depth, collection length, string length, and numeric range.
- Validate a versioned envelope and event-specific schema before normalization.
- Reject ambiguous, duplicate, or type-confused security-critical fields.
- Allow provider extension fields only where the schema explicitly permits them;
  never pass an unvalidated payload directly to a private consumer.
- Normalize into an internal event envelope containing a generated receipt ID,
  provider, event ID, event type, accepted timestamp, schema version, and the
  minimal validated data.
- Never deserialize executable objects, evaluate templates, follow payload URLs,
  or fetch attachments in the request path.

### 7.6 Timeouts And Resource Limits

- Edge-to-gateway request deadline: 10 seconds maximum.
- Signature, replay, validation, and durable enqueue target: 2 seconds.
- Upstream connection and read timeouts must be explicit and shorter than the
  external deadline.
- Downstream work is asynchronous and has its own per-task deadline, retry
  budget, circuit breaker, and dead-letter handling.
- Bound concurrent requests, memory per request, queue depth, retry count, and
  total event age.
- Shed load with minimal `429` or `503` responses rather than accumulating
  unbounded work.

### 7.7 Minimal Responses

Successful delivery returns `202 Accepted` with an opaque receipt identifier, or
the exact minimal acknowledgement required by the provider. It must not expose
queue state, workflow names, internal errors, stack traces, or downstream
results.

| Condition | Response contract |
| --- | --- |
| Accepted and durably queued | `202` with opaque receipt, or provider-required empty `2xx` |
| Duplicate already accepted | Same success class as the original acceptance when provider semantics require it |
| Malformed request | Generic `400` |
| Failed authentication or replay check | Generic `401` or provider-compatible failure without details |
| Unsupported method or media type | `405` or `415` |
| Rate limited | Minimal `429`, with `Retry-After` when meaningful |
| Temporary inability to accept durably | Minimal `503`; never return success before durable acceptance |

Health endpoints expose only process readiness required by infrastructure. They
must not list dependencies, versions, queue depth, or private component names.

### 7.8 WhatsApp Contract

- Use the provider's documented verification challenge on a dedicated route.
- Keep the verification token secret and return only the required challenge on
  success.
- Verify every event notification with the provider's native signature over raw
  bytes.
- Acknowledge quickly after durable acceptance; process messages asynchronously.
- Deduplicate using the provider event or message identifier.
- Treat profile, phone, message, and attachment metadata as personal data.
- Fetch media only in an isolated asynchronous worker with strict host allowlist,
  size, type, redirect, malware, and retention controls.

### 7.9 Public Form Contract

- Browser submits only to the dedicated gateway form route over HTTPS.
- Require same-origin checks, Turnstile verification, honeypot, rate limiting,
  server-side schema validation, and minimal fields.
- Do not collect passwords, payment data, government identifiers, health data,
  secrets, or confidential project material.
- Use generic success text that does not reveal account, recipient, or automation
  state.
- Apply field-level log redaction and a documented retention/deletion policy.
- Never interpolate form content into commands, templates, queries, or prompts
  without context-specific safety controls.

### 7.10 Future Integration Contract

New providers start disabled in a non-production environment. They must pass
signature, replay, schema, duplicate, oversized-body, timeout, retry-storm, and
dependency-failure tests before promotion. Provider-specific adapters terminate
at the normalized event boundary; private consumers must not depend on raw
vendor payloads.

### 7.11 Future Client Workspace And Client Portal Contract

`portal.ysworks.dev` remains nonexistent until an approved client product is
ready. Its target exposure class is `PRIVATE`, not anonymous `PUBLIC`.

- Authenticate every user and bind the session to exactly one authorized client
  context unless a separately reviewed support role requires otherwise.
- Authorize every object and operation server-side using the authenticated client
  context; never trust a client-supplied tenant identifier.
- Isolate data storage, encryption context, object identifiers, queues, exports,
  caches, logs, backups, search indexes, analytics, and rate limits by client.
- Prevent cross-client enumeration through identifiers, timing, error messages,
  pagination, search, URLs, attachments, or support tooling.
- Use `private, no-store` for authenticated and client-specific responses unless
  a reviewed tenant-keyed cache design proves isolation.
- Test horizontal and vertical authorization, cross-client cache leakage, export
  boundaries, support impersonation, account recovery, and client offboarding
  before launch.
- Keep infrastructure administration and YS AI OS panels outside the portal.

### 7.12 Public Status Contract

If promoted to `PUBLIC`, `status.ysworks.dev` reports only public customer impact,
broad product availability, incident status, and approved maintenance windows.
It must never expose architecture diagrams, IP addresses, origin details, host or
container names, regions precise enough to reveal topology, private services,
dependency versions, queue depth, logs, client names, or security-control state.

## 8. Production Security Principles

These rules are mandatory:

1. Never expose Docker, its API, or its socket.
2. Never expose Redis or PostgreSQL to the public Internet.
3. Never expose infrastructure, home-control, workflow, proxy, or tunnel editors.
4. All administrative access requires Zero Trust, MFA, least privilege, and an
   audit trail.
5. Every webhook requires cryptographic authentication and replay protection.
6. Public traffic reaches private processing only through a narrow validated
   gateway and asynchronous boundary.
7. Secrets stay outside the repository, build output, logs, screenshots, URLs,
   and documentation.
8. Production, preview, and development use separate credentials and data.
9. Origins are not directly Internet-routable and do not reveal bypass addresses.
10. Deny by default at DNS, edge, route, method, identity, schema, and egress
    boundaries.
11. Logs are structured, access-controlled, redacted, retention-limited, and
    never contain raw secrets or complete webhook bodies.
12. Dependencies and base images, if later introduced, are pinned, scanned,
    updated, and supported; no dependency is added for documentation work.
13. Backups are encrypted, access-controlled, restoration-tested, and never
    reachable through the public platform.
14. Every public capability has an owner, threat model, data contract, rollback
    or disable mechanism, monitoring, and incident procedure.
15. A `2xx` webhook response is sent only after durable acceptance.
16. Production changes require review and validation; no manual emergency change
    becomes permanent without reconciliation and review.
17. Public status information describes customer impact, not private topology.
18. Security controls are tested; a configured control is not assumed effective.
19. Administrative interfaces remain on LAN or an approved Tailscale private
    overlay and never receive public DNS or ingress.
20. Client data and access are isolated per client at every storage, processing,
    cache, log, export, backup, and authorization boundary.

## 9. Free Plan Viability

The initial foundation should use the current Cloudflare Free plan wherever its
documented limits satisfy the risk and traffic profile. The application must
enforce security controls that the edge plan cannot provide.

| Capability | Free-plan baseline | Architecture consequence |
| --- | --- | --- |
| DNS, proxied HTTPS, and managed DDoS protection | Available for the public zone | Suitable for the apex and canonical static website |
| Cloudflare Tunnel | Outbound-only connector model is suitable for the narrow gateway | No router port forwarding; gateway authentication remains mandatory |
| WAF | Free Managed Ruleset only | Do not claim paid Cloudflare Managed or OWASP rulesets; keep validation in the gateway |
| Rate limiting | One rule with Free-plan fields and 10-second periods | Reserve the edge rule for the highest-risk public route and enforce all route/provider quotas in the gateway |
| Turnstile | Free plan supports production use within documented widget and hostname limits | Suitable for browser forms; never use it for machine webhooks |
| Zero Trust and Access | Use only within the current account's documented seat and feature limits | Reconfirm limits before any private application; LAN/Tailscale remains the administration boundary |
| Advanced bot, logging, WAF, and rate-limit features | Some require paid plans | Treat as future hardening, not a prerequisite or a control falsely claimed today |

Free-plan availability is not a reason to weaken a mandatory control. If the
free edge cannot enforce a requirement, implement it at the gateway or defer the
public capability. Reassess plan limits before production and after material
traffic, client, compliance, or availability changes.

## 10. Public Platform Roadmap

No phase authorizes production changes. Each phase produces reviewed artifacts
and requires an explicit approval gate before the next phase.

### Phase 1: Foundation

Deliverables:

- approve this architecture and domain classification;
- assign owners and data classifications;
- create threat models for website, Access, and webhook gateway;
- define recovery objectives, logging retention, incident roles, and vendor plan;
- decide whether a self-hosted origin is needed at all.

Exit criteria:

- every hostname and route has an owner and exposure class;
- absolute prohibitions are accepted;
- open decisions and plan-dependent controls are recorded;
- no production state has changed.

### Phase 2: Deployment

Deliverables after separate authorization:

- deploy the static website and isolated non-production gateway;
- establish reviewed DNS, TLS, Tunnel, Access, and secret-management foundations;
- implement queue-backed webhook acceptance and provider adapters;
- create monitoring and rollback or disable procedures.

Exit criteria:

- infrastructure is reproducible and peer-reviewed;
- origins reject direct access;
- administrative surfaces fail closed;
- no production data is used in non-production.

### Phase 3: Hardening

Deliverables:

- tune WAF, rate limits, bot controls, headers, and cache policy;
- complete key rotation, access review, patching, backup, and restore exercises;
- add dependency, container, secret, and infrastructure scanning as applicable;
- test queue saturation, retry storms, and downstream isolation.

Exit criteria:

- no critical or high unresolved findings without documented risk acceptance;
- secrets and Access credentials rotate successfully;
- restore and disable procedures meet objectives;
- false positives are measured and acceptable.

### Phase 4: Validation

Deliverables:

- external attack-surface inventory and origin-bypass test;
- webhook contract, replay, duplicate, fuzz, and load tests;
- access-control, session, and service-token tests;
- accessibility, performance, DNS, TLS, headers, cache, and failure-mode review;
- incident tabletop and evidence package.

Exit criteria:

- all mandatory controls have evidence, not only configuration claims;
- exposed hosts and ports equal the approved inventory;
- rollback, alerting, and incident paths are demonstrated;
- production launch approval is recorded by accountable owners.

### Phase 5: Production

Deliverables:

- controlled launch with monitoring and explicit rollback thresholds;
- limited initial webhook providers and quotas;
- post-launch review, access recertification, and vulnerability cadence;
- public status communication only after its separate readiness gate.

Exit criteria:

- service objectives and security signals remain healthy through the observation
  window;
- no unowned public route, secret, alert, or exception exists;
- temporary launch exceptions are removed or formally accepted with expiry;
- the architecture document is updated from approved evidence without adding
  private operational details.

## 11. Documentation Change Validation Contract

For documentation-only changes to this public repository:

| Validation | Required result |
| --- | --- |
| Ruff | Not applicable when no Python file or Python configuration changes; record as `N/A`, never fabricate a pass |
| Tests | Run repository tests when a test script exists; otherwise record that no test script exists |
| Compile/type check | Run `pnpm astro check` |
| Dependency boundaries | Confirm no manifest, lockfile, source import, or runtime boundary changed |
| Markdown | Run the repository formatter/linter and a link/structure review |
| Secret scan | Run the repository's configured scanner; if absent, perform a scoped high-risk-pattern scan and record the limitation |
| Build | Documentation-only changes do not require a build under current repository rules, but CI may still run it |

The reviewer must also verify that the document contains no deployable values,
private topology, internal inventory confirmation, credentials, or workflow
details.

## 12. Open Decisions

The following must be resolved before implementation:

- Cloudflare plan and exact feature availability;
- whether any self-hosted public origin is necessary;
- gateway runtime and durable queue technology;
- identity provider, MFA, and device-posture requirements;
- public status provider and independence model;
- log destinations, retention periods, privacy requirements, and incident roles;
- recovery objectives and multi-connector availability requirements;
- final CSP allowlist based on the actual site asset inventory;
- provider-specific webhook retry windows, payload limits, and acknowledgement
  requirements;
- secret manager and signing-key rotation mechanism.

Until resolved, the safest state is no new DNS record and no new public route.

## 13. Authoritative References

- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/)
- [Cloudflare Access policies](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/)
- [Cloudflare self-hosted applications](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/)
- [Cloudflare Full (strict) TLS](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/)
- [Cloudflare managed WAF rules](https://developers.cloudflare.com/waf/managed-rules/)
- [Cloudflare rate limiting](https://developers.cloudflare.com/waf/rate-limiting-rules/)
- [Cloudflare One account limits](https://developers.cloudflare.com/cloudflare-one/account-limits/)
- [Cloudflare Turnstile plans](https://developers.cloudflare.com/turnstile/plans/)
- [Cloudflare cache control](https://developers.cloudflare.com/cache/concepts/cache-control/)
- [Caddy reverse proxy](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy)
- [Traefik providers](https://doc.traefik.io/traefik/reference/install-configuration/providers/overview/)
- [NGINX proxy module](https://nginx.org/en/docs/http/ngx_http_proxy_module.html)
- [NGINX Linux package architectures](https://nginx.org/en/linux_packages.html)

References support product capability statements only. This document remains the
YSWORKS architecture decision and must be reviewed against current vendor
documentation and the selected plan before implementation.
