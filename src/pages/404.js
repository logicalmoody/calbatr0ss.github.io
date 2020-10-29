import React from "react"
import { Typography } from "@material-ui/core"
import Layout from "../components/layout"

export default function Lost() {
	return (
		<Layout>
			<Typography variant="h2" gutterBottom>
				404
			</Typography>
			<Typography variant="h4">This isn't the page you're looking for...</Typography>
		</Layout>
	)
}
