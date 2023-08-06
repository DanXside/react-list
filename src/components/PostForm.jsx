import React from "react";
import { useState } from "react";
import MyButton from './UI/button/Button';
import MyInput from './UI/input/Input';


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', descr: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({title: '', descr: ''});
    };
    return (
        <form className='form'>
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Type title"
            />
            <MyInput 
                value={post.descr}
                onChange={e => setPost({...post, descr: e.target.value})}
                type="text" 
                placeholder="Type body" 
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
}

export default PostForm;

