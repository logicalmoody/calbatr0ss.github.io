import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Chip from "@material-ui/core/Chip"
import Link from "@material-ui/core/Link"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Blog({ data }) {
	const allPosts = data.allMarkdownRemark.edges
	const [allTags, setAllTags] = useState(new Set())
	const [posts, setPosts] = useState(allPosts)
	const [filters, setFilters] = useState(new Set())

	const handleClick = (filterName) => () => {
		const newSet = new Set(filters)
		if (newSet.has(filterName)) {
			newSet.delete(filterName)
		} else {
			newSet.add(filterName)
		}
		setFilters(newSet)
	}

	useEffect(() => {
		const newSet = new Set()
		allPosts.forEach(
			({
				node: {
					frontmatter: { tags },
				},
			}) => {
				tags.split(",").forEach((tag) => {
					newSet.add(tag)
				})
			}
		)
		setAllTags(newSet)
	}, [allPosts])

	useEffect(() => {
		if (filters.size > 0) {
			const filteredPosts = allPosts.filter(({ node: { frontmatter: { tags } } }) =>
				tags.split(",").some((tag) => filters.has(tag))
			)
			setPosts(filteredPosts)
		} else {
			setPosts(allPosts)
		}
	}, [filters, allPosts])

	return (
		<Layout>
			<SEO
				title="Blog"
				description="The CalZone"
				// image={post.frontmatter.image.childImageSharp.sizes.src}
				pathname="/blog"
			/>
			<Typography variant="h3">The CalZone</Typography>
			<Typography variant="subtitle1">
				I write about stuff I learn, projects I work on, or thoughts I feel are worth sharing.
			</Typography>

			{[...allTags].map((tag) => (
				<Chip
					key={`filter-chip-${tag}`}
					label={tag}
					clickable
					color={filters.has(tag) ? "primary" : undefined}
					onClick={handleClick(tag)}
					style={{ margin: "16px 8px" }}
				/>
			))}

			{/* <div style={{ display: "flex" }}> */}
			{posts.map(({ node }) => {
				const slug = node.frontmatter.slug
				const title = node.frontmatter.title || slug
				return (
					// <Card style={{ width: 300, margin: 8 }}>
					// 	<article>
					// 		<CardContent>
					// 			<header>
					// 				<Typography variant="h5">
					// 					<Link href={slug}>{title}</Link>
					// 				</Typography>
					// 				<Typography variant="subtitle2" gutterBottom>
					// 					{node.frontmatter.date}
					// 				</Typography>
					// 			</header>
					// 			<section>
					// 				<Typography
					// 					dangerouslySetInnerHTML={{
					// 						__html: node.frontmatter.description || node.excerpt,
					// 					}}
					// 				/>
					// 			</section>
					// 		</CardContent>
					// 	</article>
					// </Card>
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
			{/* </div> */}
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
						tags
					}
				}
			}
		}
	}
`
