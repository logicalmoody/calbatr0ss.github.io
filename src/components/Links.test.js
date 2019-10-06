import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Links from "components/Links"

it("should render a GitHub link", () => {
    const { getByTestId } = render(<Links />)
    expect(getByTestId("github")).toBeInTheDocument()
})
