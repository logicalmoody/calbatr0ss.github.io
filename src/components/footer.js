import React from "react"
import { IconButton, Link, Tooltip, Typography } from "@material-ui/core"
import {
	GitHub as GitHubIcon,
	Instagram as InstagramIcon,
	VideogameAsset as ControllerIcon,
	LinkedIn as LinkedInIcon,
} from "@material-ui/icons"
import MastodonIcon from "../assets/icons/mastodon"
import { gitHubUrl, instagramUrl, mastodonUrl, linkedInUrl, itchUrl } from "../constants"
import "../styles/footer.css"

function FooterIconButton({ title, link, icon, ...rest }) {
	return (
		<Tooltip key={title} title={title} enterDelay={500}>
			<Link
				href={link}
				target="_blank"
				rel="noopener"
				data-testid={`footer-${title.toLowerCase()}-link`}
				{...rest}
			>
				<IconButton>{icon}</IconButton>
			</Link>
		</Tooltip>
	)
}

export default function Footer() {
	return (
		<footer>
			<div className="footer-content">
				<div className="footer-block">
					<Typography variant="h6">Contact Me</Typography>
					<Typography>Calvin McLean Moody</Typography>
					<Typography>
						<Link href="mailto:calvinmcm@gmail.com">calvinmcm@gmail.com</Link>
					</Typography>
					<Typography variant="body2">© All Rights Reserved</Typography>
				</div>
				<div className="footer-block">
					<Typography variant="h6">Find me on the web</Typography>
					<FooterIconButton title="LinkedIn" link={linkedInUrl} icon={<LinkedInIcon />} />
					<FooterIconButton title="GitHub" link={gitHubUrl} icon={<GitHubIcon />} />
					<FooterIconButton title="Mastodon" link={mastodonUrl} rel="me" icon={<MastodonIcon />} />
					<FooterIconButton title="Instagram" link={instagramUrl} icon={<InstagramIcon />} />
					<FooterIconButton title="Games" link={itchUrl} icon={<ControllerIcon />} />
				</div>
			</div>
		</footer>
	)
}
