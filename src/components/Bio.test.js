import React from "react"
import { render, screen } from "@testing-library/react"
import Bio from "components/Bio"

it("should render my name in the bio", () => {
    render(<Bio />)
    expect(screen.getByText(/Calvin/)).toBeInTheDocument()
})
