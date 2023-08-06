import React from "react";
import PostItem from "./PostItem";

import '../styles/post-list.css';

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return <div style={{textAlign: 'center', fontSize: '20px'}}>Posts not found</div>;
    }
    
    return (
        <div>
            <h2 className="post-list-title">{title}</h2>
            <div className="postList">
                {posts.map((post, index) => <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>)}
            </div>
        </div>
    );
};

export default PostList;