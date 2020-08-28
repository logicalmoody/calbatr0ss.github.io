import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import "../styles/about.css"

export default function About({ data }) {
	const calHero = data.images.edges.map(({ node }) => node.childImageSharp.fluid)
	return (
		<Layout>
			<Image fluid={calHero} className="hero" alt="Calvin Moody" data-testid="hero-image" />
			<div style={{ textAlign: "center" }}>
				<Typography variant="h3" gutterBottom>
					Hey, I'm Cal.
				</Typography>
				<Typography variant="h4" gutterBottom>
					Full stack software engineer, game maker, and photographer.
				</Typography>
			</div>
			<Typography>
				I'm a Senior Software Engineer at The Home Depot with a focus on test-driven, quality code.
				I specialize in UI design because I believe that interfaces are the most important bridge
				between users and technology. I gradutated from Clemson University with a B.S. in Computer
				Science in 2017. I've participated in hackathons for Code for Atlanta and enjoy game
				development and 3D printing.
			</Typography>
		</Layout>
	)
}

export const heroImageQuery = graphql`
	query HeroImage {
		images: allFile(filter: { sourceInstanceName: { eq: "images" }, name: { eq: "cal" } }) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 500) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
