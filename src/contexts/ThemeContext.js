import React, { createContext, useState } from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import light from "themes/light.json"
import dark from "themes/dark.json"

const ThemeContext = createContext()

const lightTheme = createMuiTheme(light)
const darkTheme = createMuiTheme(dark)

function ThemeWrapper({ children }) {
    const [theme, setTheme] = useState(lightTheme)

    function toggleTheme() {
        theme.palette.type === "light" ? setTheme(darkTheme) : setTheme(lightTheme)
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeWrapper, ThemeContext }
