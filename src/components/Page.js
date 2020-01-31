import React from "react"
import { makeStyles } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper"
import Bio from "components/Bio"
import Links from "components/Links"

const useStyles = makeStyles(theme => ({
	paper: {
		padding: "5vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	}
}))

export default function Page() {
	const classes = useStyles()

	return (
		<Paper className={classes.paper}>
			<Links />
			<Bio />
		</Paper>
	)
}
