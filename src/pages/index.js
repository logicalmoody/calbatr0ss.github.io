import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Typography } from "@material-ui/core"
import Layout from "../components/layout"
import "../styles/home.css"
import SEO from "../components/seo"

export default function Home({ data }) {
	const heroImage = data.image.childImageSharp.fluid
	return (
		<Layout>
			<SEO
				title="Home"
				description="Calvin Moody home page"
				image={heroImage.sizes.src}
				pathname="/"
			/>
			<Image fluid={heroImage} className="hero" alt="Cal Moody" data-testid="hero-image" />
			<div style={{ textAlign: "center" }}>
				<Typography variant="h3" gutterBottom>
					Hey, I'm Cal.
				</Typography>
				<Typography variant="h4" gutterBottom>
					Full stack software engineer, game maker, and photographer.
				</Typography>
			</div>
			<Typography>
				I'm a Full Stack Engineer at Facet Wealth with a focus on test-driven, quality code. I
				specialize in UI design because I believe that interfaces are the most important bridge
				between users and technology. I graduated from Clemson University with a B.S. in Computer
				Science in 2017. I've participated in hackathons for Code for Atlanta and enjoy game
				development and 3D printing.
			</Typography>
		</Layout>
	)
}

export const heroImageQuery = graphql`
	query HeroImage {
		image: file(name: { eq: "cal_moody" }, sourceInstanceName: { eq: "images" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
