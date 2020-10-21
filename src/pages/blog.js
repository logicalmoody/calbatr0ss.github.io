import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Chip from "@material-ui/core/Chip"
import Link from "@material-ui/core/Link"
import FilterListIcon from "@material-ui/icons/FilterList"
import InputAdornment from "@material-ui/core/InputAdornment"
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
					placeholder="Search posts"
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

			<div style={{ display: "flex", justifyContent: "center" }}>
				{posts.map(({ node }) => {
					const { slug, title, description } = node.frontmatter
					const image = node.frontmatter.image?.childImageSharp?.fluid
					return (
						<Card key={slug} className="card">
							<article>
								<CardContent>
									<header>
										<Typography variant="h5">
											<Link href={slug}>{title}</Link>
										</Typography>
									</header>
									<section>
										<Typography
											gutterBottom
											dangerouslySetInnerHTML={{
												__html: description || node.excerpt,
											}}
										/>
										{image?.src && <Image fluid={image} alt="A branching tree." />}
									</section>
								</CardContent>
							</article>
						</Card>
					)
				})}
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
