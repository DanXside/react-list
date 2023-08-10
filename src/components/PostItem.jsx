import React from "react";
import MyButton from "./UI/button/Button";

import '../styles/post-item.css';
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className="postItem">
            <div className="postItem-text">
                <h3>{props.post.id}. {props.post.title}</h3>
                <p>{props.post.body}</p>
            </div>
            <div className="postItem-btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Open</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
            </div>
            
        </div>
    );
};

export default PostItem;