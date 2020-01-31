import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Links from "components/Links"

describe("<Links />", () => {
	beforeEach(() => {
		render(<Links />)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it("should render a GitHub link", () => {
		expect(screen.getByText(/github/i)).toBeInTheDocument()
	})

	it("should render a Twitter link", () => {
		expect(screen.getByText(/twitter/i)).toBeInTheDocument()
	})

	it("should render a Resume link", () => {
		expect(screen.getByText(/resume/i)).toBeInTheDocument()
	})

	it.todo("should open new links")
	// use jest-in-case!
	// it("should ", () => {
	// 	const spy = jest.spyOn(window, "open")
	// 	fireEvent.click(screen.getByText(/resume/i))
	// 	expect(spy).toHaveBeenCalledTimes(1)
	// })
})
