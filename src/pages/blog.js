import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import {
	Typography,
	TextField,
	Card,
	CardContent,
	Chip,
	Link,
	InputAdornment,
} from "@material-ui/core"
import { FilterList as FilterListIcon } from "@material-ui/icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/blog.css"

export default function Blog({ data }) {
	const allPosts = data.allMarkdownRemark.edges
	const [allTags, setAllTags] = useState(new Set())
	const [posts, setPosts] = useState(allPosts)
	const [filters, setFilters] = useState(new Set())
	const [filterText, setFilterText] = useState("")

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
		let filteredPosts = allPosts

		// Filter by tags
		if (filters.size > 0) {
			filteredPosts = filteredPosts.filter(({ node: { frontmatter: { tags } } }) =>
				tags.split(",").some((tag) => filters.has(tag))
			)
		}

		// Filter by search text
		if (filterText) {
			const cleanFilterText = filterText.toLowerCase().trim()
			filteredPosts = filteredPosts.filter(
				({
					node: {
						frontmatter: { title, description },
					},
				}) =>
					title.toLowerCase().includes(cleanFilterText) ||
					description.toLowerCase().includes(cleanFilterText)
			)
		}

		setPosts(filteredPosts)
	}, [filters, filterText, allPosts])

	return (
		<Layout>
			<SEO title="Blog" description="The CalZone" pathname="/blog" />
			<Typography variant="h3" align="center">
				The CalZone
			</Typography>
			<Typography variant="subtitle1" align="center">
				I write about stuff I learn, projects I work on, or thoughts I feel are worth sharing.
			</Typography>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: 16,
				}}
			>
				<TextField
					variant="outlined"
					size="small"
					placeholder="Search blog posts"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<FilterListIcon />
							</InputAdornment>
						),
					}}
					onChange={(event) => {
						setFilterText(event.target.value)
					}}
				/>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
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
			</div>

			<div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
				{posts.length ? (
					posts.map(({ node }) => {
						const { slug, title, description } = node.frontmatter
						const image = node.frontmatter.image?.childImageSharp?.fluid
						return (
							<Card key={slug} className="card">
								<CardContent>
									<Typography variant="h5">
										<Link href={slug}>{title}</Link>
									</Typography>
									<Typography
										gutterBottom
										dangerouslySetInnerHTML={{
											__html: description || node.excerpt,
										}}
									/>
									{image?.src && <Image fluid={image} alt="A branching tree." />}
								</CardContent>
							</Card>
						)
					})
				) : (
					<Typography variant="subtitle1">
						<em>No blog posts match selected filters</em>
					</Typography>
				)}
			</div>
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
		allMarkdownRemark(
			filter: { frontmatter: { slug: { regex: "//blog//" } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					excerpt
					frontmatter {
						slug
						title
						description
						tags
						image {
							childImageSharp {
								fluid(maxWidth: 256) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`
