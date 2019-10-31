import React from 'react';

export default function Post({ post }) {
    // const { title, contents } = props;
    return (
        <div className="card-div">
            <div className="card">
                <p>{post.title}</p>
                <p>{post.contents}</p>
            </div>
        </div>
    )
}