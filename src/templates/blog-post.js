import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
	const post = data.markdownRemark
	const { title, description, slug, date } = post.frontmatter
	const image = post.frontmatter.image?.childImageSharp?.fluid

	return (
		<Layout>
			<SEO
				title={title}
				description={description || post.excerpt}
				image={image?.src}
				pathname={slug}
				article
			/>
			<div style={{ textAlign: "center" }}>
				<Typography variant="h3">{title}</Typography>
			</div>
			{image?.src && <Image fluid={image} alt="A branching tree." />}
			<Typography variant="subtitle1">{description}</Typography>
			<Typography variant="subtitle2" gutterBottom>
				Last updated: {date}
			</Typography>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</Layout>
	)
}

export const blogPostQuery = graphql`
	query PostBySlug($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				description
				image {
					childImageSharp {
						fluid(maxWidth: 2048) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
