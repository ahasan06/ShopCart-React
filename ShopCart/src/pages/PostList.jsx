
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';





const PostList = () => {

    const [ post,setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
           setPosts(data)
        })

    },[])



    return (
        <div>
        
            <h1>All Post </h1>
            <ul>
                {post.map(post=>(
                    <Link key={post.id} to={`/post/${post.id}`}><li >{post.title}</li></Link>
                ))}
            </ul>
        </div>
    );
};

export default PostList;