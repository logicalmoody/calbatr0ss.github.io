import React, { useState } from "react"
import { makeStyles, ThemeProvider } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import { lightTheme, darkTheme } from "themes/theme"
import Bio from "components/Bio"
import Hero from "components/Hero"
import Links from "components/Links"
import Page from "components/Page"
import NavBar from "components/NavBar"

const useStyles = makeStyles({
	root: {
		textAlign: "center"
	},
	header: {
		backgroundColor: theme => theme.palette.background.default,
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: theme => theme.palette.text.primary
	},
	cal: {
		height: "20vmin",
		borderRadius: "25%"
	},
	hero: {
		padding: "10vw",
		display: "flex",
		justifyContent: "space-between"
	}
})

// TODO: favicon?
export default function App() {
	const [theme, setTheme] = useState(lightTheme)
	const classes = useStyles(theme)

	const toggleTheme = () =>
		theme.palette.type === "light" ? setTheme(darkTheme) : setTheme(lightTheme)

	return (
		<ThemeProvider theme={theme}>
			<NavBar toggleTheme={toggleTheme} />
			<div className={classes.root}>
				<header className={classes.header}>
					<Container style={{ maxWidth: 800 }}>
						<Hero />
						<Box style={{ padding: "3vw" }}>
							<Page>
								<Bio />
								<Links />
							</Page>
						</Box>
					</Container>
				</header>
			</div>
		</ThemeProvider>
	)
}
