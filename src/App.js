import React, { useState } from "react"
import { makeStyles, ThemeProvider } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import cal from "assets/cal.jpg"
import Page from "components/Page"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Tooltip from "@material-ui/core/Tooltip"
import { createMuiTheme } from "@material-ui/core/styles"
import light from "themes/light.json"
import dark from "themes/dark.json"
import Brightness4 from "@material-ui/icons/Brightness4"

const lightTheme = createMuiTheme(light)
const darkTheme = createMuiTheme(dark)

const useStyles = makeStyles({
    root: {
        textAlign: "center"
    },
    header: {
        backgroundColor: theme => theme.palette.background.default,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme => theme.palette.text.primary
    },
    cal: {
        height: "20vmin",
        borderRadius: "25%"
    },
    title: {
        flex: "1 0 auto"
    },
    hero: {
        padding: "10vw",
        display: "flex",
        justifyContent: "space-between"
    }
})

// TODO: favicon?
export default function App() {
    const [theme, setTheme] = useState(lightTheme)
    const classes = useStyles(theme)

    function toggleTheme() {
        theme.palette.type === "light" ? setTheme(darkTheme) : setTheme(lightTheme)
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky">
                <Toolbar>
                    <Box className={classes.title}>
                        <Typography>Calvin Moody</Typography>
                    </Box>
                    <Tooltip title={theme.palette.type === "light" ? "Dark Theme" : "Light Theme"} enterDelay={300}>
                        <IconButton onClick={toggleTheme} aria-label="toggle theme" data-testid="toggle-theme">
                            <Brightness4 />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                <header className={classes.header}>
                    <Box display="flex" flexDirection="row" className={classes.hero}>
                        <Typography variant="h3">Calvin McLean Moody</Typography>
                        <img src={cal} className={classes.cal} alt="Calvin Moody" />
                    </Box>
                    <Box padding="5vw">
                        <Page />
                    </Box>
                </header>
            </div>
        </ThemeProvider>
    )
}
