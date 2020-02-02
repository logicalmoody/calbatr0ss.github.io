import React from "react"
import cases from "jest-in-case"
import { render, fireEvent } from "@testing-library/react"
import { ThemeProvider } from "@material-ui/styles"
import NavBar from "components/NavBar"
import { lightTheme } from "themes/theme"
import { gitHubLink, instagramLink, twitterLink } from "constants/constants"

describe("<NavBar />", () => {
	let c, mockToggleTheme
	beforeEach(() => {
		mockToggleTheme = jest.fn()
		c = render(
			<ThemeProvider theme={lightTheme}>
				<NavBar toggleTheme={mockToggleTheme} />
			</ThemeProvider>
		)
	})

	it("should render my full name", () => {
		expect(c.getByText("Calvin McLean Moody")).toBeInTheDocument()
	})

	it("should call theme handler on click", () => {
		fireEvent.click(c.getByTestId("toggle-theme"))
		expect(mockToggleTheme).toHaveBeenCalledTimes(1)
		fireEvent.click(c.getByTestId("toggle-theme"))
		expect(mockToggleTheme).toHaveBeenCalledTimes(2)
	})

	cases(
		"should have links",
		({ testId, href }) => {
			expect(c.getByTestId(testId)).toHaveAttribute("href", href)
		},
		{
			instagram: { testId: "nav-instagram-link", href: instagramLink },
			twitter: { testId: "nav-twitter-link", href: twitterLink },
			gitHub: { testId: "nav-github-link", href: gitHubLink }
		}
	)
})
