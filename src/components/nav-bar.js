import React, { useState } from "react"
import {
	IconButton,
	Typography,
	AppBar,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	useMediaQuery,
} from "@material-ui/core"
import {
	Menu as MenuIcon,
	Message as MessageIcon,
	PhotoCamera as CameraIcon,
	Description as DescriptionIcon,
} from "@material-ui/icons"
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
			{/* <NavBarButton
				mobile={mobile}
				link={resumeUrl}
				newTab
				title="Resume"
				icon={<DescriptionIcon />}
				style={{ marginLeft: 16 }}
			/> */}
		</>
	)

	return (
		<nav>
			{/* z-index is set manually so it doesn't interfere with the photo gallery lightbox */}
			<AppBar position="static" style={{ zIndex: 999 }}>
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
		</nav>
	)
}
