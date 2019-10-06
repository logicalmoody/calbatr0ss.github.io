import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Bio from "components/Bio"

it("should render my name in the bio", () => {
    const { getByText } = render(<Bio />)
    expect(getByText(/Calvin/)).toBeInTheDocument()
})
