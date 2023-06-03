export const toDegrees = (radians: number) => {
	return Math.floor(radians * (180 / Math.PI));
};

export const sleep = (ms = 1000) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const normalize = (n: number, max = 1, min = 0) => {
	return (n - min) / (max - min);
};

export const getElementCenter = (el: Element): { x: number; y: number } => {
	const rect = el.getBoundingClientRect();
	const r = (rect.bottom - rect.top) / 2;
	const x = rect.left + r;
	const y = rect.top + r;
	return { x, y };
};

