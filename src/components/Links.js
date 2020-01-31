import React from "react"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import { gitHubUrl, twitterUrl, resumeUrl } from "constants/constants"

export default function Links() {
	return (
		<Container>
			<Box display="flex" flexDirection="row" justifyContent="space-evenly" pb={3}>
				<Link href={resumeUrl} target="_blank" rel="noopener">
					<Button variant="contained" color="primary">
						Resume
					</Button>
				</Link>
				<Link href={gitHubUrl} target="_blank" rel="noopener">
					<Button variant="outlined" color="primary">
						GitHub
					</Button>
				</Link>
				<Link href={twitterUrl} target="_blank" rel="noopener">
					<Button>Twitter</Button>
				</Link>
			</Box>
		</Container>
	)
}
