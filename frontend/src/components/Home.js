import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import * as actions from '../state/actionCreators';

// Import components
import Post from './Post';
import loadingImage from '../images/Preloader_2.gif'
// 
export function Home(props) {
    // console.log(props);
    const { getPosts } = props;
    const { posts } = props;
    const { isFetching } = props.posts;
    // console.log(posts);
    useEffect(() => {
        getPosts();
    }, []);

    if(!posts.posts) {
        return (
            <div className="loading-img">Page is loading..</div>
        )
    }
    return (
        <div className="background">
            <div className="surronding-div">
                <ul className="post-list">
                    {posts.posts.map(post =>  (
                        <Post key={post.id} post={post} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      posts: state.posts,
    };
};
  
  export default connect(
      mapStateToProps, 
      actions
    )(Home);