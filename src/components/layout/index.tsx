import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../hooks/use-site-metadata';
import { blogTheme } from '../../../blog-theme';
import { createUseStyles, useTheme } from 'react-jss';
import Header from './header';

const useStyles = createUseStyles( (theme: typeof blogTheme) => ( {
		'@global': {
			'html, body': {
				margin: 0,
				height: '100%',
				maxHeight: '100%',
			},

			body: {
				background: theme.color.light.background,
				color: theme.color.light.text,
			},

			'@media(prefers-color-scheme: dark)': {
				body: {
					background: theme.color.dark.background,
					color: theme.color.dark.text,
				}
			},
		},
		wrapper: {
			margin: '0 auto',
			width: '100%',
			maxWidth: '1080px',
			height: '100%',
			display: 'grid',
			gridTemplateRows: '120px auto',
			overflow: 'auto',
		},

		darkTheme: {
			background: theme.colors.dark,
			color: theme.color.dark.text,
		},

		lightTheme: {
			background: theme.color.light.background,
			color: theme.color.light.text,
		},
	}
));


const Layout: FC = ({ children, ...props }) => {
	const { title, description} = useSiteMetadata();
	const classes =  useStyles();
	return (
		<>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description}/>
				<body className={classes.darkTheme} />
			</Helmet>
			<div className={classes.wrapper}>
			<Header title={title} />
			<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;

