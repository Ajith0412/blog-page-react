import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <Link to="/"><h1>Blog</h1></Link>
                    <nav>
                        <Link to="/" ><h4>Home</h4></Link>
                        <Link to="/create"><h4>Create Post</h4></Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar