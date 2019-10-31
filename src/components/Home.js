import React, { useContext } from "react"
import { makeStyles, createStyles, ThemeProvider } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import cal from "assets/cal.jpg"
import Bio from "components/Bio"
import Links from "components/Links"
import { ThemeContext } from "contexts/ThemeContext"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

export default function Home() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                textAlign: "center"
            },
            header: {
                backgroundColor: theme.palette.background.default,
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "calc(10px + 2vmin)",
                color: theme.palette.text.primary
            },
            cal: {
                height: "20vmin",
                borderRadius: "25%"
            }
        })
    )
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <header className={classes.header}>
                    <AppBar>
                        <Toolbar>
                            <Typography>Yeet</Typography>
                        </Toolbar>
                    </AppBar>
                    <Box display="flex" flexDirection="row">
                        <Typography variant="h3">Calvin McLean Moody</Typography>
                        <Box>
                            <img src={cal} className={classes.cal} alt="Calvin Moody" />
                        </Box>
                    </Box>
                    <Links />
                    <Bio />
                    <Button color="secondary" variant="contained" onClick={toggleTheme}>
                        Here
                    </Button>
                </header>
            </div>
        </ThemeProvider>
    )
}
