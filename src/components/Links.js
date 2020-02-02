import React from "react"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"
import { resumeUrl } from "constants/constants"
import DescriptionIcon from "@material-ui/icons/Description"

export default function Links() {
	return (
		<Box display="flex" flexDirection="row" justifyContent="space-evenly" pt={3}>
			<Link href={resumeUrl} target="_blank" rel="noopener">
				<Button variant="contained" color="primary" startIcon={<DescriptionIcon />}>
					Resume
				</Button>
			</Link>
		</Box>
	)
}
