/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: "The CalZone",
		twitterUsername: "@calbatr0ss",
	},
	plugins: [
		`gatsby-plugin-material-ui`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Open Sans`, `Raleway`],
				display: "swap",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/content/posts`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/content/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `gallery`,
				path: `${__dirname}/content/gallery`,
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
	],
}
