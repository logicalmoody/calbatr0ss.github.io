import React from "react"
import { render } from "@testing-library/react"
import Links from "components/Links"

describe("<Links />", () => {
	let c
	beforeEach(() => {
		c = render(<Links />)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it("should render a Resume link", () => {
		expect(c.getByText(/resume/i)).toBeInTheDocument()
	})

	it.todo("should link to my resume")
})
