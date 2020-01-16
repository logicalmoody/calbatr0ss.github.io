import React, { useState } from "react"
import { makeStyles, ThemeProvider } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
// import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import cal from "assets/cal.jpg"
import Bio from "components/Bio"
import Links from "components/Links"
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
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: theme => theme.palette.text.primary
    },
    cal: {
        height: "20vmin",
        borderRadius: "25%"
    },
    title: {
        flex: "1 0 auto"
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
            <AppBar>
                <Toolbar>
                    <Box className={classes.title}>
                        <Typography>Calvin Moody</Typography>
                    </Box>
                    <Tooltip title="Toggle Theme" enterDelay={300}>
                        <IconButton color="inherit" onClick={toggleTheme} aria-label="toggle theme">
                            <Brightness4 />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
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
        </ThemeProvider>
    )
}
