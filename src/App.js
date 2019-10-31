import React from "react"
import Home from "components/Home"
import { ThemeWrapper } from "contexts/ThemeContext"

// TODO: favicon?
export default function App() {
    return (
        <ThemeWrapper>
            <Home />
        </ThemeWrapper>
    )
}
