import React, { useState } from "react"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import MessageIcon from "@material-ui/icons/Message"
import CameraIcon from "@material-ui/icons/PhotoCamera"
import DescriptionIcon from "@material-ui/icons/Description"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { resumeUrl } from "../constants"
import "../styles/nav-bar.css"

const linkStyle = { color: "white" }

function NavBarButton({ mobile, title, link, newTab, icon, style, ...otherProps }) {
	const target = newTab ? "_blank" : undefined
	if (mobile) {
		return (
			<ListItem button component="a" href={link} target={target} {...otherProps}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={title} />
			</ListItem>
		)
	}
	return (
		<Button
			href={link}
			target={target}
			style={{ ...linkStyle, ...style }}
			startIcon={icon}
			{...otherProps}
		>
			{title}
		</Button>
	)
}

export default function NavBar() {
	const mobile = useMediaQuery("(max-width: 400px)")
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleDrawer = (state) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return
		}
		setMenuOpen(state)
	}

	const buttons = (
		<>
			<NavBarButton mobile={mobile} link="/blog" title="Blog" icon={<MessageIcon />} />
			<NavBarButton
				mobile={mobile}
				link="/gallery"
				title="Photo Gallery"
				icon={<CameraIcon />}
				style={{ marginLeft: 16 }}
			/>
			<NavBarButton
				mobile={mobile}
				link={resumeUrl}
				newTab
				title="Resume"
				icon={<DescriptionIcon />}
				style={{ marginLeft: 16 }}
			/>
		</>
	)

	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography
					variant="h6"
					component="h1"
					onClick={() => {
						window.location.assign("/")
					}}
					style={{ cursor: "pointer" }}
				>
					Calvin Moody
				</Typography>
				<span className="spacer" />
				{mobile ? (
					<>
						<IconButton onClick={toggleDrawer(true)} aria-label="menu" data-testid="menu">
							<MenuIcon style={linkStyle} />
						</IconButton>
						<Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
							<div
								role="presentation"
								onClick={toggleDrawer(false)}
								onKeyDown={toggleDrawer(false)}
							>
								<List>{buttons}</List>
							</div>
						</Drawer>
					</>
				) : (
					buttons
				)}
			</Toolbar>
		</AppBar>
	)
}
