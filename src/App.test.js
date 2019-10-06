import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "App"

it("should render my full name in the header", () => {
    const { getByText } = render(<App />)
    expect(getByText("Calvin McLean Moody")).toBeInTheDocument()
})
