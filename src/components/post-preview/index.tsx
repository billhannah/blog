import React, { FC } from 'react';
import { Link } from 'gatsby';
import { PostData } from '../../hooks/use-posts';

const PostPreview:FC<{post: PostData}> = ({post}) => (
	<article>
		<h3><Link to={post.slug}>{post.title}</Link></h3>
		<p>{post.excerpt}</p>
		<Link to={post.slug}>Read more &rarr;</Link>
	</article>
)

export default PostPreview;
