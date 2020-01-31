import React from "react"
import { render, screen } from "@testing-library/react"
import Page from "components/Page"

describe("<Page />", () => {
	it("should render a paper", () => {
		render(<Page />)
		expect(screen.getByTestId("page-paper")).toBeInTheDocument()
	})

	it("should render children", () => {
		render(
			<Page>
				<p>Test paragraph</p>
			</Page>
		)
		expect(screen.getByText(/test paragraph/i)).toBeInTheDocument()
	})
})
