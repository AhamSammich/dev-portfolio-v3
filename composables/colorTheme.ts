const WHITE = "#ffffff";
const BLACK = "#222222";
const INITIAL_HUE = 208;
const INITIAL_PALETTE = getColorPalette(INITIAL_HUE);

export type RGB = { r: number; g: number; b: number };
export type HSL = { h: number; s: number; l: number };
export type ThemePalette = {
	primary: string;
	secondary?: string;
	accent?: string;
	base?: string;
}

export const usePrimaryColor = () =>
	useState("primary", () => INITIAL_PALETTE.primary);
export const useSecondaryColor = () =>
	useState("secondary", () => INITIAL_PALETTE.secondary);
export const useAccentColor = () =>
	useState("accent", () => INITIAL_PALETTE.accent);
export const useBaseColor = () => useState("base", () => INITIAL_PALETTE.base);

export const useColors = () => ({
	primaryColor: usePrimaryColor(),
	secondaryColor: useSecondaryColor(),
	accentColor: useAccentColor(),
	baseColor: useBaseColor(),
});

function getComplement(hueValue: number): number {
	const complementaryHue = (hueValue + 180) % 360;
	return complementaryHue;
}

function parseHSL(color: string) {
	let result = /^hsl\(([\d]{1,3})[^\d]+([\d]{1,3})[^\d]+([\d]{1,3})%\)$/i.exec(
		color
	);
	if (!result) return;
	let hsl = {
		h: Number(result[1]),
		s: Number(result[2]),
		l: Number(result[3]),
	};
	return hsl;
}

function parseRGB(color: string) {
	let result = /^rgb\(([\d]{1,3})[\D]+([\d]{1,3})[\D]+([\d]{1,3})\)$/i.exec(
		color
	);
	if (!result) return;
	let rgb = {
		r: Number(result[1]),
		g: Number(result[2]),
		b: Number(result[3]),
	};
	return rgb;
}

function parseHex(hex: string) {
	let rgb = hexToRGB(hex);
	let hsl = hexToHSL(hex);
	return {
		hex,
		rgb,
		hsl,
	};
}

export function getColorValues(color: string) {
	color = color.toLowerCase();
	if (color.startsWith("#")) {
		return parseHex(color);
	} else if (color.startsWith("rgb")) {
		return parseRGB(color);
	} else if (color.startsWith("hsl")) {
		return parseHSL(color);
	} else return;
}

export function isDarkColor(color: string) {
	// @ts-ignore
	const { l } = getColorValues(color);
	return l < 60;
}

export function getColorPalette(h: number, s?: number, l?: number): ThemePalette {
	let ps = s ?? 25,
		pl = l ?? 85;
	let ss = (ps + 35) % 100,
		sl = (pl + (100 - 45)) % 100;
	let as = (ps + 50) % 100,
		al = (pl + (100 - 40)) % 100;
	let isDark = pl < 60;

	const palette = {
		primary: `hsl(${h} ${ps}% ${pl}%)`,
		secondary: `hsl(${h} ${ss}% ${sl}%)`,
		accent: `hsl(${getComplement(h)} ${as}% ${al}%)`,
		base: isDark ? WHITE : BLACK,
	};

	const hexPalette = {
		primary: hslToHex(h, ps, pl),
		secondary: hslToHex(h, ss, sl),
		accent: hslToHex(getComplement(h), as, al),
	};

	console.log(hexPalette);

	return palette;
}

// https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
function hslToHex(h: number, s: number, l: number) {
	l /= 100;
	const a = (s * Math.min(l, 1 - l)) / 100;
	const f = (n: number) => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, "0"); // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}

// Modified from snippet by user AJ_
// https://stackoverflow.com/questions/62390243/java-script-how-can-i-pull-the-hsl-value-when-a-colour-is-selected-from-input-t
export function hexToRGB(hex: string): RGB {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (!result) {
		console.error(new Error(`INVALID FORMAT. Received: ${hex}`));
		return { r: 0, g: 0, b: 0 };
	}

	const r = parseInt(result[1], 16);
	const g = parseInt(result[2], 16);
	const b = parseInt(result[3], 16);

	return { r, g, b };
}

// Modified from snippet by user AJ_
// https://stackoverflow.com/questions/62390243/java-script-how-can-i-pull-the-hsl-value-when-a-colour-is-selected-from-input-t
export function rgbToHSL(rgb: RGB | string): HSL {
	if (typeof rgb === "string") {
		rgb = parseRGB(rgb) as RGB;
	}
	let { r, g, b } = rgb;

	let max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h = 0,
		s,
		l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}

		h /= 6;
	}

	h = Math.round(h * 360);
	s = Math.round(s * 100);
	l = Math.round(l * 100);

	return { h, s, l };
}

// Modified from snippet by user AJ_
// https://stackoverflow.com/questions/62390243/java-script-how-can-i-pull-the-hsl-value-when-a-colour-is-selected-from-input-t
export function hexToHSL(hex: string) {
	let { r, g, b } = hexToRGB(hex);

	(r /= 255), (g /= 255), (b /= 255);

	return rgbToHSL({ r, g, b });
}
