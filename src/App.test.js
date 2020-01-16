import React from "react"
import { render, screen } from "@testing-library/react"
import App from "App"

it("should render my full name in the header", () => {
    render(<App />)
    expect(screen.getByText("Calvin McLean Moody")).toBeInTheDocument()
})
