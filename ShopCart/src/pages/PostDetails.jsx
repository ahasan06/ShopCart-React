
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PostDetails = () => {
    const [post, setPosts] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        // Only fetch data if postId changes
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, [postId]); // Dependencies array with postId

    return (
        <div>
       
            <p><strong>Post Details of: </strong>{post?.title}</p>
            <p><strong>Description: </strong>{post?.body}</p>
        </div>
    );
};

export default PostDetails;
