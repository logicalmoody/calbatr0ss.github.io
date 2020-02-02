import { createMuiTheme } from "@material-ui/core/styles"

const fonts = ["sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"']

const theme = {
	overrides: {
		MuiTooltip: {
			tooltip: {
				fontFamily: ["'Open Sans'", ...fonts].join(",")
			}
		}
	},
	typography: {
		body1: {
			fontFamily: ["'Open Sans'", ...fonts].join(",")
		},
		body2: {
			fontFamily: ["'Open Sans'", ...fonts].join(",")
		},
		button: {
			fontFamily: ["'Open Sans'", ...fonts].join(",")
		},
		fontFamily: ["'Fjalla One'", "'Open Sans'", ...fonts].join(",")
	}
}

const light = {
	...theme,
	palette: {
		type: "light",
		background: {
			paper: "#fff",
			default: "#fafafa"
		},
		primary: {
			main: "#607d8b"
		},
		secondary: {
			main: "#448aff"
		}
	}
}

const dark = {
	...theme,
	palette: {
		type: "dark",
		background: {
			paper: "#263238",
			default: "#282c34"
		},
		primary: {
			main: "#607d8b"
		},
		secondary: {
			main: "#448aff"
		}
	}
}

export const lightTheme = createMuiTheme(light)
export const darkTheme = createMuiTheme(dark)
