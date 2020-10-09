import React from "react"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import ControllerIcon from "@material-ui/icons/VideogameAsset"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { gitHubUrl, instagramUrl, twitterUrl, linkedInUrl, itchUrl } from "../constants"
import "../styles/footer.css"

function FooterIconButton({ title, link, icon }) {
	return (
		<Tooltip key={title} title={title} enterDelay={500}>
			<Link
				href={link}
				target="_blank"
				rel="noopener"
				data-testid={`footer-${title.toLowerCase()}-link`}
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
					<FooterIconButton title="Twitter" link={twitterUrl} icon={<TwitterIcon />} />
					<FooterIconButton title="Instagram" link={instagramUrl} icon={<InstagramIcon />} />
					<FooterIconButton title="Games" link={itchUrl} icon={<ControllerIcon />} />
				</div>
			</div>
		</footer>
	)
}
