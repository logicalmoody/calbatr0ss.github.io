import React from "react"
import { makeStyles, useTheme } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Link from "@material-ui/core/Link"
import Toolbar from "@material-ui/core/Toolbar"
import Tooltip from "@material-ui/core/Tooltip"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import Brightness7Icon from "@material-ui/icons/Brightness7"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
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

	const isLightTheme = () => theme.palette.type === "light"

	return (
		<AppBar position="sticky">
			<Toolbar>
				<Box className={classes.title}>
					<Typography variant="h6" component="h1">
						Calvin McLean Moody
					</Typography>
				</Box>
				<Tooltip
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
				</Tooltip>
				<Tooltip title="Instagram" enterDelay={300}>
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
				</Tooltip>
				<Tooltip title="Twitter" enterDelay={300}>
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
				</Tooltip>
				<Tooltip title="GitHub" enterDelay={300}>
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
			</Toolbar>
		</AppBar>
	)
}
