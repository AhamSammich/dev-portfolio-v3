function getComplement(hueValue: number): number {
	const complementaryHue = (hueValue + 180) % 360;
	return complementaryHue;
}

export function getColorPalette(hueValue: number) {
	return {
		primary: `hsl(${hueValue} 25% 70%)`,
		secondary: `hsl(${hueValue} 60% 30%)`,
		accent: `hsl(${getComplement(hueValue)} 75% 50%)`,
	};
}

const INITIAL_HUE = 214;
const INITIAL_PALETTE = getColorPalette(INITIAL_HUE);
const WHITE = "#EEE";
const BLACK = "#333";

export const usePrimaryColor = () =>
	useState("primary", () => INITIAL_PALETTE.primary);
export const useSecondaryColor = () =>
	useState("secondary", () => INITIAL_PALETTE.secondary);
export const useAccentColor = () =>
	useState("accent", () => INITIAL_PALETTE.accent);

export const useColorStyle = () => ({
	primary: () => ({
		backgroundColor: usePrimaryColor().value,
		color: BLACK,
	}),
	secondary: () => ({
		backgroundColor: useSecondaryColor().value,
		color: WHITE,
	}),
	light: () => ({
		backgroundColor: usePrimaryColor().value,
		color: BLACK,
	}),
	dark: () => ({
		backgroundColor: useSecondaryColor().value,
		color: WHITE,
	}),
});
