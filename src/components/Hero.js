import React from "react"
import cal from "assets/cal.jpg"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
	cal: {
		height: "25vmin",
		width: "25vmin",
		minHeight: "175px",
		minWidth: "175px",
		borderRadius: "25%"
	},
	hero: {
		margin: "50px 0",
		display: "flex",
		justifyContent: "space-between"
	}
}))

export default function Hero() {
	const classes = useStyles()
	return (
		<Box display="flex" flexDirection="column" className={classes.hero}>
			<Box>
				<img src={cal} className={classes.cal} alt="Calvin Moody" data-testid="hero-image" />
			</Box>
			<Box display="flex" alignItems="center" pt={3}>
				<Typography variant="h3">
					Hi, I'm Cal. I'm a software engineer with a focus user interfaces as well as an amateur
					photographer.
				</Typography>
			</Box>
		</Box>
	)
}
