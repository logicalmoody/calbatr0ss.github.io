import React from "react"
import { makeStyles } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
	paper: {
		padding: 35,
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	}
}))

export default function Page({ children }) {
	const classes = useStyles()

	return (
		<Paper className={classes.paper} data-testid="page-paper">
			{children}
		</Paper>
	)
}
