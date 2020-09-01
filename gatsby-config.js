/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: "Calvin Moody",
		description: "Calvin Moody's personal website",
		url: "calbatr0ss.github.io",
		titleTemplate: `%s | Calvin Moody`,
		twitterUsername: "@calbatr0ss",
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-material-ui`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Open Sans`],
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
