import React, { useState } from "react"
import { makeStyles, ThemeProvider } from "@material-ui/styles"
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
	container: { maxWidth: 800, margin: 24 }
})

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
					<Container className={classes.container}>
						<Hero />
						<Page>
							<Bio />
							<Links />
						</Page>
					</Container>
				</header>
			</div>
		</ThemeProvider>
	)
}
