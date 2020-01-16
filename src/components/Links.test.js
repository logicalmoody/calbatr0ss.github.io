import React from "react"
import { render, screen } from "@testing-library/react"
import Links from "components/Links"

it("should render a GitHub link", () => {
    render(<Links />)
    expect(screen.getByTestId("github")).toBeInTheDocument()
})
