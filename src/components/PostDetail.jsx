import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "./hooks/useFetching";
import PostService from "./API/PostService";

const PostDetail = () => {
    const postId = useParams();
    const [post, setPost] = useState({});
    const [comment, setCom] = useState([]);
    const [fetchingById, isLoading, error] = useFetching( async () => {
        const response = await PostService.getById(postId.id);
        setPost(response.data);
    });

    const [fetchingCom, isComLoading, comError] = useFetching( async () => {
        const response = await PostService.getComments(postId.id);
        setCom(response.data);
    });

    useEffect(() => {
        fetchingById(postId.id);
        fetchingCom(postId.id);
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
            {
                isComLoading
                ?
                <h2>Loading comments...</h2>
                :
                <div>
                    <h2 style={{marginTop: '30px'}}>Comments:</h2>
                    <div>
                        {comment.map(comm => 
                            <div style={{marginTop: '30px'}}>
                                <h3>{comm.email}</h3>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    );
}

export default PostDetail;