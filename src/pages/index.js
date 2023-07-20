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
					Software engineer, photographer, maker.
				</Typography>
			</div>
			<Typography gutterBottom>
				I'm a Senior Software Engineer with 6+ years of experience, currently building the future of
				financial planning at Facet. I focus on the quality code, reliable testing, and the
				intersection of humans and technology because I believe that good interfaces are the most
				important bridge between users and technology. I graduated from Clemson University with a
				B.S. in Computer Science in 2017.
			</Typography>
			<Typography>
				I pursue tons of hobbies and projects outside of work such as photography, 3D printing,
				modifying/riding my Onewheel, and loads of DIY home renovations.
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
