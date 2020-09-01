import { createMuiTheme } from "@material-ui/core/styles"

const fonts = ["sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"']

const theme = {
	overrides: {
		MuiTooltip: {
			tooltip: {
				fontFamily: ["'Open Sans'", ...fonts].join(","),
			},
		},
	},
	typography: {
		body1: {
			fontFamily: ["'Open Sans'", ...fonts].join(","),
		},
		body2: {
			fontFamily: ["'Open Sans'", ...fonts].join(","),
		},
		h6: {
			fontWeight: 600,
		},
		button: {
			fontFamily: ["'Open Sans'", ...fonts].join(","),
			fontWeight: 600,
			textTransform: "none",
		},
		fontFamily: ["'Open Sans'", ...fonts].join(","),
	},
	palette: {
		type: "light",
		background: {
			paper: "#fff",
			default: "#fafafa",
		},
		primary: {
			main: "#607d8b",
		},
		secondary: {
			main: "#448aff",
		},
	},
}

const t = createMuiTheme(theme)
export default t
