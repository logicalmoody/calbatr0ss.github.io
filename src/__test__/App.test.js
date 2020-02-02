import React from "react"
import { render, fireEvent } from "@testing-library/react"
import App from "App"

describe("<App />", () => {
	let c
	beforeEach(() => {
		c = render(<App />)
	})

	it("should render my full name in the header", () => {
		expect(c.getByText("Calvin McLean Moody")).toBeInTheDocument()
	})

	it("should toggle themes on button click", () => {
		const themeButton = c.getByTestId("toggle-theme")
		fireEvent.click(themeButton)
		expect(c.queryByTitle(/light theme/i)).toBeInTheDocument()
		expect(c.queryByTitle(/dark theme/i)).not.toBeInTheDocument()
		fireEvent.click(themeButton)
		expect(c.queryByTitle(/dark theme/i)).toBeInTheDocument()
		expect(c.queryByTitle(/light theme/i)).not.toBeInTheDocument()
	})
})
