import React, { useEffect } from 'react'
import "./Postdetails.css"
import { useLocation, useNavigate } from 'react-router-dom'
import UseFetch from '../../hooks/UseFetch'

const Postdetails = () => {


    const location = useLocation()
    const navigate = useNavigate()

    const { state: post } = location

    const { data, error, optionData } = UseFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, "DELETE")

    const handleEdit = () => {
        navigate(`/edit/${post.id}`, { state: post })

    }

    const handleDelete = () => {
        if (window.confirm("Are you sure to delete this post?")) {
            optionData()
        }
    }

    useEffect(() => {
        if (data.length !== 0) {
            const timer = setTimeout(() => navigate("/"), 3000)
            return () => clearTimeout(timer)
        }

    }, [data, navigate])

    return (
        <div className="container mt-5 bg-dark">
            <div className="jumbotron">
                <h5 className='pt-3'>{post.title}</h5>
                <p className="lead card-text">{post.body}</p>


                {data.length !== 0 && <div className="alert alert-success" role="alert">
                    Data Deleted Sucessfully
                </div>}

                {error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>}

                <div className="float-end">
                    <button type="button" className="btn btn-primary me-3" onClick={handleEdit}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default Postdetails