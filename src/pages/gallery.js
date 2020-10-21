import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import ImageGallery from "@browniebroke/gatsby-image-gallery"
import SEO from "../components/seo"
import "../styles/gallery.css"

export default function Gallery({ data }) {
	const images = data.images.edges.map(({ node: { frontmatter } }) => ({
		title: frontmatter.title,
		caption: frontmatter.caption,
		thumbAlt: frontmatter.title,
		...frontmatter.photo.childImageSharp,
	}))

	return (
		<Layout>
			<SEO
				title="Photo Gallery"
				description="Calvin Moody photo gallery"
				// image={post.frontmatter.image.childImageSharp.sizes.src}
				pathname="/gallery"
			/>
			<div style={{ textAlign: "center" }}>
				<Typography variant="h3" gutterBottom>
					Photo Gallery
				</Typography>
				<div>
					<ImageGallery
						images={images}
						lightboxOptions={{ enableZoom: false, imagePadding: 50 }}
						imgClass="thumb-image"
					/>
				</div>
			</div>
		</Layout>
	)
}

export const imagesQuery = graphql`
	query ImagesForGallery {
		images: allMarkdownRemark(
			filter: { frontmatter: { slug: { regex: "//gallery//" } } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			edges {
				node {
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						slug
						title
						caption
						photo {
							childImageSharp {
								thumb: fluid(maxHeight: 270) {
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
		}
	}
`
