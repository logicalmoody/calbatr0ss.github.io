exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions

	// Build blog pages
	const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)
	const blogResult = await graphql(`
		{
			allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)
	if (blogResult.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	blogResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: blogPostTemplate,
			context: {
				// additional data can be passed via context
				slug: node.frontmatter.slug,
			},
		})
	})

	// Build photo pages
	const photoTemplate = require.resolve(`./src/templates/photo.js`)
	const photoResult = await graphql(`
		{
			allMarkdownRemark(
				filter: { frontmatter: { slug: { regex: "/gallery/" } } }
				sort: { order: DESC, fields: frontmatter___date }
				limit: 100
			) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)
	if (photoResult.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	photoResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: photoTemplate,
			context: {
				// additional data can be passed via context
				slug: node.frontmatter.slug,
			},
		})
	})
}
