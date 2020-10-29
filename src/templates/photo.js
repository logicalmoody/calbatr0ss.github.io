import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Typography } from "@material-ui/core"
import Layout from "../components/layout"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import SEO from "../components/seo"

export default function Photo({ data }) {
	const { title, caption, slug, date, photo } = data.markdownRemark.frontmatter
	const image = photo.childImageSharp.full

	return (
		<Layout>
			<SEO title={title} description={caption} image={image.sizes.src} pathname={slug} />
			<Image fluid={image} alt={title} />
			<Typography variant="h4">{title}</Typography>
			<Typography variant="subtitle1">{caption}</Typography>
			<Typography variant="subtitle2" gutterBottom>
				{date}
			</Typography>
		</Layout>
	)
}

export const photoPostQuery = graphql`
	query PhotoBySlug($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				caption
				photo {
					childImageSharp {
						full: fluid(maxWidth: 2048) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
