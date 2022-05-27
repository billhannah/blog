import {graphql, useStaticQuery} from 'gatsby';

type Post = {
	frontmatter: Frontmatter,
	excerpt: string;
};

type Frontmatter = {
	title: string;
	author: string;
	slug: string;
}

type Posts = {
	allMdx: {
		nodes: Post[]
	};
}

export type PostData = {
	title: string;
	author: string;
	slug: string;
	excerpt: string;
};

const usePosts = (): Array<PostData> => {
	const data: Posts = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        title
                        author
                        slug
                    }
                    excerpt
                }
            }
        }
	`);

	return data.allMdx.nodes.map( post => ({
		title: post.frontmatter.title,
		author: post.frontmatter.author,
		slug: post.frontmatter.slug,
		excerpt: post.excerpt,
	}));
}

export default usePosts;
