import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TwitterIcon from "@material-ui/icons/Twitter"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { twitterIntentUrl, twitterHandle } from "../constants"

export default function BlogPost({ data, location }) {
	const post = data.markdownRemark
	const { title, description, slug, date } = post.frontmatter
	const image = post.frontmatter.image?.childImageSharp?.fluid
	const url = data.site.siteMetadata.siteUrl + location.pathname

	return (
		<Layout>
			<SEO
				title={title}
				description={description || post.excerpt}
				image={image?.src}
				pathname={slug}
				article
			/>
			<Typography variant="h3" align="center" gutterBottom>
				{title}
			</Typography>
			{image?.src && <Image fluid={image} alt="A branching tree." />}
			<div style={{ padding: "16px 0" }}>
				<Typography variant="h5" align="center">
					<em>{description}</em>
				</Typography>
			</div>
			<hr />
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
			<hr />
			<div style={{ display: "flex" }}>
				<div style={{ flexGrow: 1 }}>
					<Button
						href={`${twitterIntentUrl}?text=${title}&url=${url}&via=${twitterHandle}`}
						target="_blank"
						startIcon={<TwitterIcon style={{ color: "#1DA1F2" }} />}
						style={{ color: "#1DA1F2" }}
					>
						Share on Twitter
					</Button>
				</div>
				<Typography variant="subtitle2" align="right">
					Last updated: {date}
				</Typography>
			</div>
		</Layout>
	)
}

export const blogPostQuery = graphql`
	query PostBySlug($slug: String!) {
		site {
			siteMetadata {
				siteUrl
			}
		}
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
