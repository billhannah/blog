module.exports = {
	siteMetadata: {
		title: 'Bill Hannah\'s Blog',
		description: 'Thoughts and reflections of a senior Frontend developer',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				defaultLayouts: {
					default: `${__dirname}/src/components/layout`,
				}
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: 'posts'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'fonts',
				path: 'fonts'
			}
		},
		{
			resolve: 'gatsby-plugin-jss',
			options: {
				theme: require('./blog-theme').blogTheme,
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: 'images',
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
 	],
};
