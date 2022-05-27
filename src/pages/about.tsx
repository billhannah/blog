import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => {
	return (
		<Layout>
		<h1>About me</h1>
		<p><Link to="/">Home</Link></p>
	</Layout>);
};
