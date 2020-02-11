import React, { useState } from "react"
import { makeStyles, useTheme } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Link from "@material-ui/core/Link"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Toolbar from "@material-ui/core/Toolbar"
import Tooltip from "@material-ui/core/Tooltip"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import Brightness7Icon from "@material-ui/icons/Brightness7"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import MenuIcon from "@material-ui/icons/Menu"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { gitHubUrl, instagramUrl, twitterUrl } from "constants/constants"

const useStyles = makeStyles(theme => ({
	title: {
		flex: "1 0 auto"
	},
	icon: {
		color: "unset"
	},
	link: {
		color: "unset"
	}
}))

export default function NavBar({ toggleTheme }) {
	const classes = useStyles()
	const theme = useTheme()
	const smallScreen = useMediaQuery("(max-width: 400px)")
	const [menuOpen, setMenuOpen] = useState(false)

	const isLightTheme = () => theme.palette.type === "light"

	const toggleDrawer = state => event => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return
		}
		setMenuOpen(state)
	}

	return (
		<AppBar position="sticky">
			<Toolbar>
				<Box className={classes.title}>
					<Typography variant="h6" component="h1">
						Calvin McLean Moody
					</Typography>
				</Box>
				{smallScreen ? (
					<>
						<IconButton
							onClick={toggleDrawer(true)}
							aria-label="menu"
							data-testid="menu"
							className={classes.icon}
						>
							<MenuIcon />
						</IconButton>
						<Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
							<div
								className={classes.list}
								role="presentation"
								onClick={toggleDrawer(false)}
								onKeyDown={toggleDrawer(false)}
							>
								<List>
									<ListItem button onClick={toggleTheme}>
										<ListItemIcon>
											{isLightTheme() ? <Brightness4Icon /> : <Brightness7Icon />}
										</ListItemIcon>
										<ListItemText
											primary={isLightTheme() ? "Toggle Dark Theme" : "Toggle Light Theme"}
										/>
									</ListItem>
								</List>
								<List>
									<ListItem button component="a" href={instagramUrl} target="_blank" rel="noopener">
										<ListItemIcon>
											<InstagramIcon />
										</ListItemIcon>
										<ListItemText primary="Instagram" />
									</ListItem>
								</List>
								<List>
									<ListItem button component="a" href={twitterUrl} target="_blank" rel="noopener">
										<ListItemIcon>
											<TwitterIcon />
										</ListItemIcon>
										<ListItemText primary="Twitter" />
									</ListItem>
								</List>
								<List>
									<ListItem button component="a" href={gitHubUrl} target="_blank" rel="noopener">
										<ListItemIcon>
											<GitHubIcon />
										</ListItemIcon>
										<ListItemText primary="GitHub" />
									</ListItem>
								</List>
							</div>
						</Drawer>
					</>
				) : (
					[
						<Tooltip
							key={isLightTheme() ? "Toggle Dark Theme" : "Toggle Light Theme"}
							title={isLightTheme() ? "Toggle Dark Theme" : "Toggle Light Theme"}
							enterDelay={300}
						>
							<IconButton
								onClick={toggleTheme}
								aria-label="toggle theme"
								data-testid="toggle-theme"
								className={classes.icon}
							>
								{isLightTheme() ? <Brightness4Icon /> : <Brightness7Icon />}
							</IconButton>
						</Tooltip>,
						<Tooltip key="Instagram" title="Instagram" enterDelay={300}>
							<Link
								href={instagramUrl}
								target="_blank"
								rel="noopener"
								className={classes.link}
								data-testid="nav-instagram-link"
							>
								<IconButton className={classes.icon}>
									<InstagramIcon />
								</IconButton>
							</Link>
						</Tooltip>,
						<Tooltip key="Twitter" title="Twitter" enterDelay={300}>
							<Link
								href={twitterUrl}
								target="_blank"
								rel="noopener"
								className={classes.link}
								data-testid="nav-twitter-link"
							>
								<IconButton className={classes.icon}>
									<TwitterIcon />
								</IconButton>
							</Link>
						</Tooltip>,
						<Tooltip key="GitHub" title="GitHub" enterDelay={300}>
							<Link
								href={gitHubUrl}
								target="_blank"
								rel="noopener"
								className={classes.link}
								data-testid="nav-github-link"
							>
								<IconButton className={classes.icon}>
									<GitHubIcon />
								</IconButton>
							</Link>
						</Tooltip>
					]
				)}
			</Toolbar>
		</AppBar>
	)
}
