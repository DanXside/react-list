import React from "react";
import MyButton from "./UI/button/Button";

import '../styles/post-item.css';

const PostItem = (props) => {
    return (
        <div className="postItem">
            <div className="postItem-text">
                <h3>{props.number}. {props.post.title}</h3>
                <p>{props.post.descr}</p>
            </div>
            <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
        </div>
    );
};

export default PostItem;