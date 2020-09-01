import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Blog({ data }) {
	const posts = data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO
				title="Blog"
				description="The CalZone"
				// image={post.frontmatter.image.childImageSharp.sizes.src}
				pathname="/blog"
			/>
			<Typography variant="h3">The CalZone</Typography>
			<Typography variant="subtitle1" gutterBottom>
				I write about stuff I learn, projects I work on, or thoughts I feel are worth sharing.
			</Typography>
			{posts.map(({ node }) => {
				const slug = node.frontmatter.slug
				const title = node.frontmatter.title || slug
				return (
					<article key={slug} style={{ paddingBottom: 24 }}>
						<header>
							<Typography variant="h4">
								<Link href={slug}>{title}</Link>
							</Typography>
							<Typography variant="subtitle2">{node.frontmatter.date}</Typography>
						</header>
						<section>
							<Typography
								dangerouslySetInnerHTML={{
									__html: node.frontmatter.description || node.excerpt,
								}}
							/>
						</section>
					</article>
				)
			})}
		</Layout>
	)
}

export const pageQuery = graphql`
	query AllPosts {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						slug
						title
						description
					}
				}
			}
		}
	}
`
