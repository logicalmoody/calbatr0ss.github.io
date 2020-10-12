import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme, foucFonts } from "../../src/theme"

export default function TopLayout({ children }) {
	return (
		<>
			<Helmet>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<link href={foucFonts} rel="stylesheet" />
			</Helmet>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</>
	)
}
