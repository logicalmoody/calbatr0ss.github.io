import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import ImageGallery from "@browniebroke/gatsby-image-gallery"

export default function Gallery({ data }) {
	const images = data.images.edges.map(({ node }) => node.childImageSharp)

	return (
		<Layout>
			<Typography variant="h3">Welcome to the photo gallery!</Typography>
			<ImageGallery images={images} />
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
