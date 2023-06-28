const WHITE = "#ffffff";
const BLACK = "#222222";
const INITIAL_HUE = 263;
const INITIAL_PALETTE = getColorPalette(INITIAL_HUE);

export interface ThemePalette {
	[key: string]: string | undefined;
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
	const complementaryHue = (Number(hueValue) + 180) % 360;
	return complementaryHue;
}

function getTriad(hueValue: number) {
	const nextHue = (n: number) => (n + 120) % 360;
	const h1 = Number(hueValue);
	const h2 = nextHue(h1);
	const h3 = nextHue(h2);

	return [h1, h2, h3];
}

function getSplitComplementTriad(hueValue: number) {
	const complement = getComplement(hueValue);
	const offset = 30;
	const h1 = Number(hueValue);
	const h2 = complement - offset;
	const h3 = complement + offset;

	return [h1, h2, h3];
}

function getAnalagous(hueValue: number) {
	const offset = 30;
	const h1 = Number(hueValue);
	const h2 = h1 - offset;
	const h3 = h1 + offset;

	return [h1, h2, h3];
}

type ColorRelationship = "complement" | "triad" | "split" | "analagous";

function generateHueValues(
	baseHue: number,
	rel: ColorRelationship
): [number, number, number] {
	let [h1, h2, h3] = [baseHue, baseHue, baseHue];
	switch (rel) {
		case "complement":
			h3 = getComplement(baseHue);
			break;

		case "triad":
			[h1, h2, h3] = getTriad(baseHue);
			break;
			
			case "split":
			[h1, h2, h3] = getSplitComplementTriad(baseHue);
			break;
			
			case "analagous":
			[h1, h2, h3] = getAnalagous(baseHue);
			break;
			
			default:
			break;
	}

	return [
		h1, h2, h3
	]

}

export function getColorPalette(
	h: number,
	s?: number,
	l?: number,
	options = { rel: "complement" as ColorRelationship }
): ThemePalette {
	let ps = s ?? 25,
		pl = l ?? 85;
	let ss = (ps + 45) % 100,
		sl = (pl + (100 - 50)) % 100;
	let as = (ps + 50) % 100,
		al = (pl + (100 - 45)) % 100;
	let isDark = pl < 60;

	const hues = generateHueValues(h, options.rel);

	const palette: ThemePalette = {
		primary: `hsl(${hues[0]} ${ps}% ${pl}%)`,
		secondary: `hsl(${hues[1]} ${ss}% ${sl}%)`,
		accent: `hsl(${hues[2]} ${as}% ${al}%)`,
		base: isDark ? WHITE : BLACK,
	};

	const hexPalette: ThemePalette = {
		primary: hslToHex(hues[0], ps, pl),
		secondary: hslToHex(hues[1], ss, sl),
		accent: hslToHex(hues[2], as, al),
		base: palette.base,
	};

	return hexPalette;
}
