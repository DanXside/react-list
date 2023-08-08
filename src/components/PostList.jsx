import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import '../styles/post-list.css';

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return <div style={{textAlign: 'center', fontSize: '20px'}}>Posts not found</div>;
    }
    
    return (
        <div>
            <h2 className="post-list-title">{title}</h2>
            <div className="postList">
                <TransitionGroup>
                    {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    > 
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default PostList;