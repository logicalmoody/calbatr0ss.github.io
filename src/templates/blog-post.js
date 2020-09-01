import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
	const post = data.markdownRemark
	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
				// image={post.frontmatter.image.childImageSharp.sizes.src}
				pathname={post.frontmatter.slug}
				article
			/>
			<Typography variant="h3">{post.frontmatter.title}</Typography>
			<Typography variant="subtitle1">{post.frontmatter.description}</Typography>
			<Typography variant="subtitle2" gutterBottom>
				{post.frontmatter.date}
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
			}
		}
	}
`
