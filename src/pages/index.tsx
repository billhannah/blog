import React from 'react';
import { Link } from 'gatsby';
import {createUseStyles} from 'react-jss';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { blogTheme } from '../../blog-theme';

const useStyles = createUseStyles( (theme: typeof blogTheme) => ({
    headingWrapper: {
        position: 'relative',
        maxWidth: '1080px',
        width: '100%',
        height: '250px',

        '& h1': {
            position: 'absolute',
            top: 'calc(50%)',
            width: '100%',
            textAlign: 'center',
            color: theme.color.dark.text,
        },
        '& picture': {
            width: '100%',
            height: '100%'
        }
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: ,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
    }
}));

export default () => {
    const classes = useStyles();
    const posts = usePosts();
    const imgData = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "main-bg.png" }) {
                childImageSharp {
                   fluid(maxHeight: 250) {
                        base64
                        src
                        srcSet
                        sizes
                    }
                }
            }
        }
    `);
  return (
    <Layout>
        <div className={classes.headingWrapper}>
            <Img fluid={imgData.file.childImageSharp.fluid} style={{height: '250px'}} />
            <div className={classes.overlay} />
            <h1>Welcome to Gatsby</h1>
        </div>
        <p><Link to="/about">About</Link></p>

        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
    </Layout>
  );
};
