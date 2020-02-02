import React from "react"
import { render } from "@testing-library/react"
import Hero from "components/Hero"

describe("<Hero />", () => {
	let c
	beforeEach(() => {
		c = render(<Hero />)
	})

	it("should render my name", () => {
		expect(c.getByText(/Cal/)).toBeInTheDocument()
	})

	it("should render a hero image with alt text", () => {
		expect(c.getByTestId("hero-image")).toBeInTheDocument()
		expect(c.getByTestId("hero-image")).toHaveAttribute("alt", "Calvin Moody")
	})
})
