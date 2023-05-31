export const usePrimaryColor = () => useState("primary", () => "#000");
export const useSecondaryColor = () => useState("secondary", () => "#FFF");

export const useColor = () => ({
	primary: () => `hsl(${usePrimaryColor().value})`,
	secondary: () => `hsl(${useSecondaryColor().value})`,
});

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
		color: "#333",
		"border-color": useSecondaryColor().value,
	}),
	dark: () => ({
		"background-color": "#333",
		color: "#EEE",
		"border-color": usePrimaryColor().value,
	}),
});
