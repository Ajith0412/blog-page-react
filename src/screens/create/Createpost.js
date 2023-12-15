import React, { useEffect, useState } from 'react'
import "./Createpost.css"
import UseFetch from '../../hooks/UseFetch';
import { useNavigate } from 'react-router-dom';

const Createpost = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [valitation, setValitation] = useState("")

    const navigate = useNavigate()


    const { data, error, optionData } = UseFetch("https://jsonplaceholder.typicode.com/posts", "POST")
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            setValitation("Title is required")
            return

        } if (!description) {
            setValitation("Description is empty ")
            return
        }
        // console.log({ title, body: description, userid: 1 })

        optionData({ title, body: description, userid: 1 })

    }

    useEffect(() => {
        if (data.length !== 0) {
            const timer = setTimeout(() =>
                navigate("/"), 3000

            )
            return () => clearTimeout(timer)
        }
    }, [data, navigate])
    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>


                <div className="form-group mt-3">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                {valitation && (
                    <div className="alert alert-danger" role="alert">
                        {valitation}
                    </div>
                )
                }

                {data.length !== 0 && <div className="alert alert-success" role="alert">
                    Data Added Sucessfully
                </div>}

                {error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>}


                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}

export default Createpost
