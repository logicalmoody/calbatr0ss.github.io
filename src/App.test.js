import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import App from "App"

describe("<App />", () => {
	beforeEach(() => {
		render(<App />)
	})
	it("should render my full name in the header", () => {
		expect(screen.getByText("Calvin McLean Moody")).toBeInTheDocument()
	})

	it("should toggle themes on button click", () => {
		const themeButton = screen.getByTestId("toggle-theme")
		fireEvent.click(themeButton)
		expect(screen.queryByTitle("Light Theme")).toBeInTheDocument()
		expect(screen.queryByTitle("Dark Theme")).not.toBeInTheDocument()
		fireEvent.click(themeButton)
		expect(screen.queryByTitle("Dark Theme")).toBeInTheDocument()
		expect(screen.queryByTitle("Light Theme")).not.toBeInTheDocument()
	})
})
