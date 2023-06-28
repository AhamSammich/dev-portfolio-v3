export const toDegrees = (radians: number) => Math.floor(radians * (180 / Math.PI));

export const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export const range = (n: number) => [...Array(n).keys()];

export const normalize = (n: number, max = 1, min = 0) => (n - min) / (max - min);

export const getElementCenter = (el: Element): { x: number; y: number } => {
	const rect = el.getBoundingClientRect();
	const r = (rect.bottom - rect.top) / 2;
	const x = rect.left + r;
	const y = rect.top + r;
	return { x, y };
};

