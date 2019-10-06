import React from "react"
import { makeStyles, createStyles } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import cal from "assets/cal.jpg"
import Bio from "components/Bio"
import Links from "components/Links"

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            textAlign: "center"
        },
        header: {
            backgroundColor: "#282c34",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "calc(10px + 2vmin)",
            color: "white"
        },
        cal: {
            height: "20vmin"
        }
    })
)

//TODO favicon?
//TODO pass theme as prop
//TODO theme from material?
export default function App() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <Box display="flex" flexDirection="row">
                    <Typography variant="h3">Calvin McLean Moody</Typography>
                    <Box>
                        <img src={cal} className={classes.cal} alt="Calvin Moody" />
                    </Box>
                </Box>
                <Links />
                <Bio />
            </header>
        </div>
    )
}
