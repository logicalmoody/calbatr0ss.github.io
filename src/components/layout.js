import React from "react"
import Container from "@material-ui/core/Container"
import NavBar from "./nav-bar"
import Footer from "./footer"
import "../styles/layout.css"

export default function Layout({ children }) {
	return (
		<div className="page-container">
			<NavBar />
			<Container className="page-content" maxWidth="lg">
				{children}
			</Container>
			<Footer />
		</div>
	)
}
