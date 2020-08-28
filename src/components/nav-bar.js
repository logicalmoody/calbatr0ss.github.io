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
import PersonIcon from "@material-ui/icons/Person"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import "../styles/nav-bar.css"

const linkStyle = { color: "white" }

function NavBarButton({ mobile, title, link, icon, style, ...otherProps }) {
	if (mobile) {
		return (
			<ListItem button component="a" href={link} rel="noopener" {...otherProps}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={title} />
			</ListItem>
		)
	}
	return (
		<Button href={link} style={{ ...linkStyle, ...style }} startIcon={icon} {...otherProps}>
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
				style={{ margin: "0 16px 0 16px" }}
			/>
			<NavBarButton mobile={mobile} link="/about" title="About" icon={<PersonIcon />} />
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
