import React from 'react'
import "./Post.css"
import { useNavigate } from 'react-router-dom'

const Post = ({ post }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/post/${post.id}`, { state: post })


    }

    return (
        <div className="card m-3" onClick={handleClick}>
            <div className="card-header">
                <h4>{post.title}</h4>
            </div>
            <div className="card-body">
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )
}

export default Post