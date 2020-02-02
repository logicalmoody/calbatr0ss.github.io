import React from "react"
import { render } from "@testing-library/react"
import Page from "components/Page"

describe("<Page />", () => {
	let c
	it("should render a paper", () => {
		c = render(<Page />)
		expect(c.getByTestId("page-paper")).toBeInTheDocument()
	})

	it("should render children", () => {
		render(
			<Page>
				<p>Test paragraph</p>
			</Page>
		)
		expect(c.getByText(/test paragraph/i)).toBeInTheDocument()
	})
})
