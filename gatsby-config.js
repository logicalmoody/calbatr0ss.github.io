module.exports = {
	siteMetadata: {
		title: "Calvin Moody",
		description: "Calvin Moody's personal website",
		url: "calbatr0ss.github.io",
		titleTemplate: `%s | Calvin Moody`,
		twitterUsername: "@calbatr0ss",
	},
	plugins: [
		`gatsby-plugin-top-layout`,
		`gatsby-plugin-material-ui`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Open Sans`, `Fira Code`, `Zilla Slab`],
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
