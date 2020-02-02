import React from "react"
import cal from "assets/cal.jpg"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
	cal: {
		height: "20vmin",
		borderRadius: "25%"
	},
	hero: {
		padding: "10vw",
		display: "flex",
		justifyContent: "space-between"
	}
}))

export default function Hero() {
	const classes = useStyles()
	return (
		<Box display="flex" flexDirection="row" className={classes.hero}>
			<Box display="flex" alignItems="center">
				<Typography variant="h3">
					Hi, I'm Cal. I'm a software engineer with a focus user interfaces as well as an amateur
					photographer.
				</Typography>
			</Box>
			<img src={cal} className={classes.cal} alt="Calvin Moody" data-testid="hero-image" />
		</Box>
	)
}
