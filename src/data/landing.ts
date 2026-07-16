export type LandingLocale = "es" | "en";

type LandingIcon =
	| "automation"
	| "cloud"
	| "code"
	| "infrastructure"
	| "intelligence"
	| "security"
	| "support"
	| "web"
	| "workflow";

interface LandingContent {
	language: LandingLocale;
	canonicalPath: string;
	alternatePath: string;
	seo: {
		description: string;
	};
	accessibility: {
		skipLink: string;
		navigation: string;
		menu: string;
		close: string;
		home: string;
		lightTheme: string;
		darkTheme: string;
		systemTheme: string;
		localeLabel: string;
		footerNavigation: string;
	};
	navigation: {
		items: Array<{ label: string; href: string }>;
		cta: string;
		localeShort: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		description: string;
		primaryCta: string;
		secondaryCta: string;
		diagramCaption: string;
		diagram: Array<{ title: string; description: string; icon: LandingIcon }>;
	};
	services: {
		eyebrow: string;
		title: string;
		description: string;
		items: Array<{
			number: string;
			title: string;
			description: string;
			icon: LandingIcon;
		}>;
	};
	process: {
		eyebrow: string;
		title: string;
		description: string;
		steps: Array<{ step: string; title: string; description: string }>;
	};
	technology: {
		eyebrow: string;
		title: string;
		description: string;
		items: Array<{
			name: string;
			category: string;
			description: string;
			icon: LandingIcon;
		}>;
	};
	trust: {
		eyebrow: string;
		title: string;
		body: string;
		points: string[];
	};
	faq: {
		eyebrow: string;
		title: string;
		description: string;
		items: Array<{ question: string; answer: string }>;
	};
	contact: {
		eyebrow: string;
		title: string;
		description: string;
		emailLabel: string;
		copyLabel: string;
		copiedLabel: string;
		copyErrorLabel: string;
	};
	footer: {
		description: string;
		privacy: string;
		statement: string;
	};
}

const es: LandingContent = {
	language: "es",
	canonicalPath: "/",
	alternatePath: "/en/",
	seo: {
		description:
			"Diseñamos, desarrollamos, automatizamos y protegemos soluciones digitales para que tu negocio trabaje mejor y escale con seguridad.",
	},
	accessibility: {
		skipLink: "Saltar al contenido",
		navigation: "Navegación principal",
		menu: "Menú",
		close: "Cerrar",
		home: "YSWORKS, inicio",
		lightTheme: "Usar tema claro",
		darkTheme: "Usar tema oscuro",
		systemTheme: "Usar tema del sistema",
		localeLabel: "View this page in English",
		footerNavigation: "Navegación del pie",
	},
	navigation: {
		items: [
			{ label: "Servicios", href: "/services" },
			{ label: "Proceso", href: "/#process" },
			{ label: "Nosotros", href: "/about" },
			{ label: "Contacto", href: "/contact" },
		],
		cta: "Cuéntanos tu proyecto",
		localeShort: "EN",
	},
	hero: {
		eyebrow: "Ingeniería tecnológica y sistemas digitales",
		title: "Tecnología que hace avanzar tu empresa.",
		description:
			"Diseñamos, desarrollamos, automatizamos y protegemos soluciones digitales para que tu negocio trabaje mejor, escale con seguridad y dependa menos de tareas manuales.",
		primaryCta: "Cuéntanos tu proyecto",
		secondaryCta: "Explorar servicios",
		diagramCaption:
			"De una necesidad concreta a un sistema útil, controlado y preparado para evolucionar.",
		diagram: [
			{
				title: "Necesidad",
				description: "Contexto y objetivo",
				icon: "intelligence",
			},
			{ title: "Sistema", description: "Diseño y ejecución", icon: "workflow" },
			{
				title: "Evolución",
				description: "Soporte con criterio",
				icon: "support",
			},
		],
	},
	services: {
		eyebrow: "Servicios",
		title: "Sistemas útiles para problemas concretos.",
		description:
			"Definimos la intervención adecuada para cada contexto y construimos una base comprensible, segura y mantenible.",
		items: [
			{
				number: "01",
				title: "Automatización de procesos",
				description:
					"Reducimos tareas repetitivas y conectamos operaciones mediante flujos supervisables y mantenibles.",
				icon: "automation",
			},
			{
				number: "02",
				title: "Desarrollo web y plataformas",
				description:
					"Construimos experiencias rápidas, accesibles y preparadas para evolucionar sin complejidad innecesaria.",
				icon: "web",
			},
			{
				number: "03",
				title: "Sistemas inteligentes",
				description:
					"Aplicamos IA cuando aporta una mejora concreta, con límites claros, revisión humana y cuidado de los datos.",
				icon: "intelligence",
			},
			{
				number: "04",
				title: "Infraestructura, sistemas y hardware",
				description:
					"Diseñamos bases técnicas estables y ofrecemos trabajo físico principalmente en Madrid y Lanzarote.",
				icon: "infrastructure",
			},
			{
				number: "05",
				title: "Ciberseguridad práctica",
				description:
					"Revisamos exposición y configuraciones para aplicar medidas proporcionadas ante riesgos web y operativos habituales.",
				icon: "security",
			},
			{
				number: "06",
				title: "Soporte y evolución",
				description:
					"Mantenemos y mejoramos sistemas con diagnóstico, documentación y prioridades acordadas.",
				icon: "support",
			},
		],
	},
	process: {
		eyebrow: "Proceso",
		title: "Del problema a una solución que se puede verificar y mantener.",
		description:
			"El alcance, los riesgos y los criterios de aceptación se hacen visibles antes de construir.",
		steps: [
			{
				step: "01",
				title: "Entender",
				description:
					"Aclaramos el problema, el contexto, los riesgos y el resultado útil.",
			},
			{
				step: "02",
				title: "Diseñar",
				description:
					"Definimos alcance, decisiones, límites y una ruta de entrega realista.",
			},
			{
				step: "03",
				title: "Construir",
				description:
					"Entregamos por pasos verificables, con seguridad y mantenimiento desde el inicio.",
			},
			{
				step: "04",
				title: "Evolucionar",
				description:
					"Documentamos y mejoramos el sistema según evidencia y nuevas necesidades.",
			},
		],
	},
	technology: {
		eyebrow: "Tecnología",
		title: "La tecnología correcta para cada sistema.",
		description:
			"Seleccionamos tecnología según el problema, la seguridad, el rendimiento y la capacidad real de mantenerla.",
		items: [
			{
				name: "Ingeniería web",
				category: "Interfaces",
				description:
					"Experiencias accesibles, rápidas y basadas en estándares abiertos.",
				icon: "code",
			},
			{
				name: "Integraciones controladas",
				category: "Sistemas",
				description:
					"Conexiones con límites explícitos, validación y trazabilidad.",
				icon: "workflow",
			},
			{
				name: "Automatización responsable",
				category: "Operaciones",
				description:
					"Flujos supervisables que reducen trabajo manual sin ocultar decisiones.",
				icon: "automation",
			},
			{
				name: "Entrega segura",
				category: "Continuidad",
				description:
					"Despliegues y mantenimiento con exposición mínima y controles proporcionados.",
				icon: "cloud",
			},
		],
	},
	trust: {
		eyebrow: "Criterio humano",
		title: "Automatización con criterio y responsabilidad humana.",
		body: "Entendemos el negocio antes de elegir la tecnología. Automatizamos lo repetitivo, documentamos las decisiones y mantenemos supervisión humana donde realmente importa.",
		points: [
			"Primero entendemos el contexto y el resultado útil.",
			"La automatización reduce fricción sin ocultar límites.",
			"Las decisiones importantes mantienen una persona responsable.",
		],
	},
	faq: {
		eyebrow: "Preguntas frecuentes",
		title: "Respuestas claras antes de empezar.",
		description: "Respuestas directas sobre alcance, colaboración y soporte.",
		items: [
			{
				question: "¿Qué tipo de proyectos estudia YSWORKS?",
				answer:
					"Automatización, sistemas web, integraciones, infraestructura y hardware profesional, seguridad práctica y evolución de sistemas existentes.",
			},
			{
				question: "¿Cómo se prepara un presupuesto?",
				answer:
					"Cada proyecto se estudia según alcance, complejidad, tiempos, integraciones, soporte y mantenimiento. No usamos una tarifa pública única para contextos distintos.",
			},
			{
				question: "¿Trabajáis en remoto y de forma presencial?",
				answer:
					"El trabajo digital puede realizarse en remoto de forma amplia. Los servicios físicos y de hardware se concentran principalmente en Madrid y Lanzarote.",
			},
			{
				question: "¿Utilizáis inteligencia artificial?",
				answer:
					"Sí, cuando mejora un proceso o sistema de forma verificable. Definimos límites, revisión humana y tratamiento de datos antes de incorporarla.",
			},
			{
				question: "¿Ofrecéis mantenimiento después de la entrega?",
				answer:
					"Sí. Essential Care, Growth Care y Continuous Operations son marcos adaptables de continuidad, no paquetes rígidos. El alcance, la disponibilidad y las responsabilidades se acuerdan según las necesidades reales de cada sistema.",
			},
			{
				question: "¿Quién conserva la propiedad del trabajo entregado?",
				answer:
					"La propuesta define con claridad la titularidad y las licencias aplicables. Como principio, el cliente recibe el trabajo y el código acordados, junto con la información necesaria para utilizarlos sin dependencia artificial.",
			},
			{
				question: "¿YSWORKS es una empresa dirigida por personas?",
				answer:
					"Sí. YSWORKS es una empresa pequeña dirigida por personas. Utilizamos automatización para apoyar el trabajo, pero las decisiones, la relación con el cliente y la responsabilidad permanecen bajo supervisión humana.",
			},
		],
	},
	contact: {
		eyebrow: "Contacto",
		title: "Cuéntanos qué debe mejorar en tu negocio.",
		description:
			"Comparte el contexto, el problema y el resultado que buscas. Empezaremos por valorar si podemos aportar una solución adecuada.",
		emailLabel: "Escribir a contact@ysworks.dev",
		copyLabel: "Copiar correo",
		copiedLabel: "Correo copiado",
		copyErrorLabel: "No se pudo copiar",
	},
	footer: {
		description:
			"Ingeniería tecnológica para sistemas claros, seguros y mantenibles.",
		privacy: "Privacidad",
		statement: "Tecnología útil. Decisiones claras. Evolución responsable.",
	},
};

const en: LandingContent = {
	language: "en",
	canonicalPath: "/en/",
	alternatePath: "/",
	seo: {
		description:
			"We design, build, automate and secure digital solutions that help businesses operate better and scale safely.",
	},
	accessibility: {
		skipLink: "Skip to content",
		navigation: "Primary navigation",
		menu: "Menu",
		close: "Close",
		home: "YSWORKS, home",
		lightTheme: "Use light theme",
		darkTheme: "Use dark theme",
		systemTheme: "Use system theme",
		localeLabel: "Ver esta página en español",
		footerNavigation: "Footer navigation",
	},
	navigation: {
		items: [
			{ label: "Services", href: "/en/services/" },
			{ label: "Process", href: "/en/#process" },
			{ label: "About", href: "/en/about/" },
			{ label: "Contact", href: "/en/contact/" },
		],
		cta: "Tell us about your project",
		localeShort: "ES",
	},
	hero: {
		eyebrow: "Technology engineering and digital systems",
		title: "Technology that moves your business forward.",
		description:
			"We design, build, automate and secure digital solutions that help your business operate better, scale safely and rely less on manual work.",
		primaryCta: "Tell us about your project",
		secondaryCta: "Explore services",
		diagramCaption:
			"From a defined need to a useful, controlled system that is ready to evolve.",
		diagram: [
			{
				title: "Need",
				description: "Context and outcome",
				icon: "intelligence",
			},
			{ title: "System", description: "Design and delivery", icon: "workflow" },
			{
				title: "Evolution",
				description: "Support with purpose",
				icon: "support",
			},
		],
	},
	services: {
		eyebrow: "Services",
		title: "Useful systems for specific problems.",
		description:
			"We define the right intervention for each context and build a foundation that remains understandable, secure and maintainable.",
		items: [
			{
				number: "01",
				title: "Process automation",
				description:
					"We reduce repetitive work and connect operations through observable, maintainable workflows.",
				icon: "automation",
			},
			{
				number: "02",
				title: "Web and platform development",
				description:
					"We build fast, accessible experiences that can evolve without unnecessary complexity.",
				icon: "web",
			},
			{
				number: "03",
				title: "Intelligent systems",
				description:
					"We apply AI where it creates a concrete improvement, with clear limits, human review and careful data handling.",
				icon: "intelligence",
			},
			{
				number: "04",
				title: "Infrastructure, systems and hardware",
				description:
					"We design stable technical foundations and provide physical work primarily in Madrid and Lanzarote.",
				icon: "infrastructure",
			},
			{
				number: "05",
				title: "Practical cybersecurity",
				description:
					"We review exposure and configuration to apply proportionate controls for common web and operational risks.",
				icon: "security",
			},
			{
				number: "06",
				title: "Support and evolution",
				description:
					"We maintain and improve systems through diagnosis, documentation and agreed priorities.",
				icon: "support",
			},
		],
	},
	process: {
		eyebrow: "Process",
		title:
			"From the problem to a solution that can be verified and maintained.",
		description:
			"Scope, risks and acceptance criteria become visible before implementation begins.",
		steps: [
			{
				step: "01",
				title: "Understand",
				description:
					"We clarify the problem, context, risks and useful outcome.",
			},
			{
				step: "02",
				title: "Design",
				description:
					"We define scope, decisions, boundaries and a realistic delivery path.",
			},
			{
				step: "03",
				title: "Build",
				description:
					"We deliver in verifiable steps, with security and maintenance in mind.",
			},
			{
				step: "04",
				title: "Evolve",
				description:
					"We document and improve the system using evidence and new needs.",
			},
		],
	},
	technology: {
		eyebrow: "Technology",
		title: "The right technology for each system.",
		description:
			"We select technology based on the problem, security, performance and the real ability to maintain it.",
		items: [
			{
				name: "Web engineering",
				category: "Interfaces",
				description: "Accessible, fast experiences built on open standards.",
				icon: "code",
			},
			{
				name: "Controlled integrations",
				category: "Systems",
				description:
					"Connections with explicit boundaries, validation and traceability.",
				icon: "workflow",
			},
			{
				name: "Responsible automation",
				category: "Operations",
				description:
					"Observable workflows that reduce manual work without hiding decisions.",
				icon: "automation",
			},
			{
				name: "Secure delivery",
				category: "Continuity",
				description:
					"Deployment and maintenance with minimal exposure and proportionate controls.",
				icon: "cloud",
			},
		],
	},
	trust: {
		eyebrow: "Human judgment",
		title: "Automation with judgment and human accountability.",
		body: "We understand the business before choosing the technology. We automate repetitive work, document decisions and retain human oversight where it matters.",
		points: [
			"We first understand the context and useful outcome.",
			"Automation reduces friction without hiding boundaries.",
			"Important decisions retain an accountable person.",
		],
	},
	faq: {
		eyebrow: "Frequently asked questions",
		title: "Clear answers before we start.",
		description: "Direct answers about scope, collaboration and support.",
		items: [
			{
				question: "What types of projects does YSWORKS consider?",
				answer:
					"Automation, web systems, integrations, professional infrastructure and hardware, practical security, and the evolution of existing systems.",
			},
			{
				question: "How do you prepare a proposal?",
				answer:
					"Each project is assessed by scope, complexity, timing, integrations, support and maintenance. We do not apply one public rate to different contexts.",
			},
			{
				question: "Do you work remotely and on site?",
				answer:
					"Digital work can be delivered remotely across a broad area. Physical and hardware services are focused primarily on Madrid and Lanzarote.",
			},
			{
				question: "Do you use artificial intelligence?",
				answer:
					"Yes, when it improves a process or system in a verifiable way. We define boundaries, human review and data handling before introducing it.",
			},
			{
				question: "Do you provide maintenance after delivery?",
				answer:
					"Yes. Essential Care, Growth Care and Continuous Operations are adaptable continuity frameworks, not fixed packages. Scope, availability and responsibilities are agreed around each system's actual needs.",
			},
			{
				question: "Who owns the delivered work and code?",
				answer:
					"The proposal clearly defines ownership and any applicable licences. As a principle, the client receives the agreed work and code, together with the information needed to use it without artificial dependency.",
			},
			{
				question: "Is YSWORKS a human-led company?",
				answer:
					"Yes. YSWORKS is a small human-led company. We use automation to support the work, while decisions, client relationships and accountability remain under human supervision.",
			},
		],
	},
	contact: {
		eyebrow: "Contact",
		title: "Tell us what needs to improve in your business.",
		description:
			"Share the context, the problem and the outcome you need. We will begin by assessing whether we can provide the right solution.",
		emailLabel: "Email contact@ysworks.dev",
		copyLabel: "Copy email",
		copiedLabel: "Email copied",
		copyErrorLabel: "Could not copy",
	},
	footer: {
		description:
			"Technology engineering for clear, secure and maintainable systems.",
		privacy: "Privacy",
		statement: "Useful technology. Clear decisions. Responsible evolution.",
	},
};

export const landingContent: Record<LandingLocale, LandingContent> = { es, en };
