export const motion = {
	duration: {
		fast: 150,
		base: 300,
		slow: 600,
		overture: 1000,
		overtureMin: 900,
		overtureMax: 1200,
	},
	ease: {
		outExpo: "outExpo",
		outQuart: "outQuart",
		inQuad: "inQuad",
		inOutQuad: "inOutQuad",
	},
	stagger: {
		mobile: 40,
		normal: 60,
		emphasis: 80,
	},
	travel: {
		xs: 8,
		sm: 12,
		md: 16,
		max: 24,
	},
	interaction: {
		press: 100,
		themeOpen: 160,
		themeClose: 120,
		faqOpen: 260,
		faqClose: 200,
		faqFade: 120,
		faqAnswerDelay: 60,
		faqAnswerTravel: 6,
		faqCoordination: 80,
		copyReset: 2000,
		nodeHighlight: 800,
	},
	choreography: {
		navigationCondense: 80,
		serviceEntrance: 500,
		technologyDivider: 350,
		signatureMobileOverture: 800,
		processStepDelayDesktop: 180,
		processStepDelayMobile: 240,
		processStepStart: 120,
		pulseDash: 18,
	},
	ambient: {
		desktopPeriod: 6000,
		mobilePeriod: 8000,
		pulseDuration: 1200,
		pointerRadius: 120,
	},
	breakpoint: {
		mobileMax: 767,
		desktopMin: 1024,
		navigationDesktop: 860,
	},
} as const;

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const mobileQuery = `(max-width: ${motion.breakpoint.mobileMax}px)`;

export const prefersReducedMotion = () =>
	window.matchMedia(reducedMotionQuery).matches;

export const isMobileMotion = () => window.matchMedia(mobileQuery).matches;

export const runOncePerSession = (key: string, callback: () => void) => {
	if (prefersReducedMotion()) return false;
	try {
		if (sessionStorage.getItem(key) === "complete") return false;
		sessionStorage.setItem(key, "complete");
	} catch {
		// A blocked storage API must not block progressive enhancement.
	}
	callback();
	return true;
};

type VisibilityCallback = (entry: IntersectionObserverEntry) => void;
interface Observation {
	callback: VisibilityCallback;
	once: boolean;
}

const observed = new Map<Element, Observation[]>();
let observer: IntersectionObserver | undefined;

const getObserver = () => {
	observer ??= new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const observations = observed.get(entry.target);
				if (!observations) continue;
				for (const observation of [...observations]) {
					if (observation.once && !entry.isIntersecting) continue;
					observation.callback(entry);
					if (observation.once)
						observations.splice(observations.indexOf(observation), 1);
				}
				if (observations.length === 0) {
					observed.delete(entry.target);
					observer?.unobserve(entry.target);
				}
			}
		},
		{ rootMargin: "0px 0px -12%", threshold: 0.14 },
	);
	return observer;
};

export const observeOnce = (element: Element, callback: VisibilityCallback) => {
	if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
		callback({ target: element } as IntersectionObserverEntry);
		return () => undefined;
	}
	const observation = { callback, once: true };
	const observations = observed.get(element) ?? [];
	observations.push(observation);
	observed.set(element, observations);
	getObserver().observe(element);
	return () => {
		const current = observed.get(element);
		if (!current) return;
		const next = current.filter((candidate) => candidate !== observation);
		if (next.length > 0) observed.set(element, next);
		else {
			observed.delete(element);
			observer?.unobserve(element);
		}
	};
};

export const observeVisibility = (
	element: Element,
	callback: VisibilityCallback,
) => {
	if (!("IntersectionObserver" in window)) {
		callback({
			target: element,
			isIntersecting: true,
		} as IntersectionObserverEntry);
		return () => undefined;
	}
	const observation = { callback, once: false };
	const observations = observed.get(element) ?? [];
	observations.push(observation);
	observed.set(element, observations);
	getObserver().observe(element);
	return () => {
		const current = observed.get(element);
		if (!current) return;
		const next = current.filter((candidate) => candidate !== observation);
		if (next.length > 0) observed.set(element, next);
		else {
			observed.delete(element);
			observer?.unobserve(element);
		}
	};
};

export const scheduleFrame = (callback: () => void) => {
	let frame = 0;
	return () => {
		if (frame) return;
		frame = window.requestAnimationFrame(() => {
			frame = 0;
			callback();
		});
	};
};

interface OpenLayer {
	element: HTMLElement;
	close: () => void;
}

const openLayers: OpenLayer[] = [];
let escapeReady = false;

const installEscapeHandler = () => {
	if (escapeReady) return;
	escapeReady = true;
	document.addEventListener(
		"keydown",
		(event) => {
			if (event.key !== "Escape") return;
			const layer = openLayers.at(-1);
			if (!layer) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			layer.close();
		},
		true,
	);
};

export const registerOpenLayer = (element: HTMLElement, close: () => void) => {
	installEscapeHandler();
	const existing = openLayers.findIndex((layer) => layer.element === element);
	if (existing >= 0) openLayers.splice(existing, 1);
	openLayers.push({ element, close });
};

export const unregisterOpenLayer = (element: HTMLElement) => {
	const index = openLayers.findIndex((layer) => layer.element === element);
	if (index >= 0) openLayers.splice(index, 1);
};
