import React, { useEffect, useState } from 'react'
import "./Editpost.css"
import { useLocation, useNavigate } from 'react-router-dom'
import UseFetch from '../../hooks/UseFetch'

const Editpost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [valitation, setValitation] = useState("");
    const [modify, setModify] = useState({})

    const location = useLocation()
    const navigate = useNavigate()
    const { state: post } = location

    const { data, error, optionData } = UseFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, "PATCH")


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            setValitation("Title Is Empty")
            return
        }
        else if (!description) {
            setValitation("Description is Empty")
            return
        }

        console.log(modify)
        optionData(modify)
    }



    useEffect(() => {
        setTitle(post.title)
        setDescription(post.body)
        if (data.length !== 0) {
            const timer = setTimeout(() =>
                navigate("/"), 3000)


            return () => clearTimeout(timer)

        }
    }, [data, navigate, post.title, post.body])

    const onHandleTitleChnage = (e) => {
        setTitle(e.target.value)
        setModify({ ...modify, title: e.target.value })

    }

    const onhandleDescripitionChange = (e) => {
        setDescription(e.target.value)
        setModify({ ...modify, body: e.target.value })
    }


    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Title" value={title} onChange={onHandleTitleChnage} />
                </div>


                <div className="form-group mt-3">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={onhandleDescripitionChange} />
                </div>
                {valitation && (
                    <div className="alert alert-danger" role="alert">
                        {valitation}
                    </div>
                )
                }

                {data.length !== 0 && <div className="alert alert-success" role="alert">
                    Data Edited Sucessfully
                </div>}

                {error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>}


                <button type="submit" className="btn btn-primary mt-3">Edit</button>
            </form>
        </div>
    )
}

export default Editpost
