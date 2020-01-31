import React from "react"
import { render, screen } from "@testing-library/react"
import Hero from "components/Hero"

describe("<Hero />", () => {
	beforeEach(() => {
		render(<Hero />)
	})

	it("should render my full name", () => {
		expect(screen.getByText("Calvin McLean Moody")).toBeInTheDocument()
	})

	it("should render a hero image with alt text", () => {
		expect(screen.getByTestId("hero-image")).toBeInTheDocument()
		expect(screen.getByTestId("hero-image")).toHaveAttribute("alt", "Calvin Moody")
	})
})
