import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import ImageGallery from "@browniebroke/gatsby-image-gallery"
import SEO from "../components/seo"

export default function Gallery({ data }) {
	const images = data.images.edges.map(({ node }) => node.childImageSharp)

	return (
		<Layout>
			<SEO
				title="Photo Gallery"
				description="Calvin Moody's photo gallery"
				// image={post.frontmatter.image.childImageSharp.sizes.src}
				pathname="/gallery"
			/>
			<div style={{ textAlign: "center" }}>
				<Typography variant="h3" gutterBottom>
					Photo Gallery
				</Typography>
				<div>
					<ImageGallery images={images} />
				</div>
			</div>
		</Layout>
	)
}

export const imagesQuery = graphql`
	query ImagesForGallery {
		images: allFile(filter: { sourceInstanceName: { eq: "gallery" } }, sort: { fields: name }) {
			edges {
				node {
					childImageSharp {
						thumb: fluid(maxWidth: 270, maxHeight: 270) {
							...GatsbyImageSharpFluid
						}
						full: fluid(maxWidth: 2048) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
