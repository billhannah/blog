import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { blogTheme } from '../../../blog-theme';

const useStyles = createUseStyles((theme: typeof blogTheme) => ({
		root: {
			position: 'sticky',
		},
	}
));

export type HeaderProps = {
	title: string;
}

const Header: FC<HeaderProps> = ({title}) => {
	const classes = useStyles();

	return (
		<header className={classes.root}>
			{title}
			<nav className={classes.navBar}>
				<a href="#" className={classes.active}>Link 1</a>
				<a href="#" className={classes.link}>Link 2</a>
				<a href="#" className={classes.link}>Link 3</a>
			</nav>
		</header>
	);
}

export default Header;
