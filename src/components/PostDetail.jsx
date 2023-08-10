import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "./hooks/useFetching";
import PostService from "./API/PostService";

const PostDetail = () => {
    const postId = useParams();
    const [post, setPost] = useState({});
    const [fetchingById, isLoading, error] = useFetching( async () => {
        const response = await PostService.getById(postId.id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchingById(postId.id);
    }, []);


    return (
        <div style={{width: '800px',margin: '0 auto', marginTop: '60px'}}>
            <h1>Detail page of post no. {postId.id}</h1>
            {
                isLoading
                ? 
                <h1>Loading...</h1>
                : 
                <div className="post-detail" style={{marginTop: '40px'}}>
                    <h2>{post.id}. {post.title}</h2>
                </div>
            }
        </div>
    );
}

export default PostDetail;