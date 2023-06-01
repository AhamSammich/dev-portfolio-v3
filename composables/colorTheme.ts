function getComplement(hueValue: number): number {
	const complementaryHue = (hueValue + 180) % 360;
	return complementaryHue;
}

export function getColorPalette(hueValue: number) {
	return {
		primary: `hsl(${hueValue} 25% 80%)`,
		secondary: `hsl(${hueValue} 75% 30%)`,
		accent: `hsl(${getComplement(hueValue)} 50% 50%)`,
	};
}

const INITIAL_HUE = 226;
const INITIAL_PALETTE = getColorPalette(INITIAL_HUE);

export const usePrimaryColor = () =>
	useState("primary", () => INITIAL_PALETTE.primary);
export const useSecondaryColor = () =>
	useState("secondary", () => INITIAL_PALETTE.secondary);
export const useAccentColor = () =>
	useState("accent", () => INITIAL_PALETTE.accent);

export const useColorStyle = () => ({
	primary: () => ({
		"background-color": usePrimaryColor().value,
		color: "#333",
		"border-color": useSecondaryColor().value,
	}),
	secondary: () => ({
		"background-color": useSecondaryColor().value,
		color: "#EEE",
		"border-color": usePrimaryColor().value,
	}),
	light: () => ({
		"background-color": "#EEE",
		color: useAccentColor().value,
		"border-color": useSecondaryColor().value,
	}),
	dark: () => ({
		"background-color": useAccentColor().value,
		color: "#EEE",
		"border-color": usePrimaryColor().value,
	}),
});
