import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = ()=>{
    return(
        <nav>
            <div className="container nav__container">
                <Link className="nav__logo" to="/">
                    <img src="/images/logo.png" alt="" />
                </Link>
                <ul className="nav__menu">
                    <li><Link to="/profile">Akuna Joshua</Link></li>
                    <li><Link to="/create">Create Post</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
                <button className="nav__toggle-btn"><AiOutlineClose/></button>
            </div>
            <div className="nav__categories">
                <ul className="categories">
                    <li><Link to="posts/categories/Agriculture">Agriculture</Link></li>
                    <li><Link to="posts/categories/Art">Art</Link></li>
                    <li><Link to="posts/categories/Business">Business</Link></li>
                    <li><Link to="posts/categories/Education">Education</Link></li>
                    <li><Link to="posts/categories/Entertainment">Entertainment</Link></li>
                    <li><Link to="posts/categories/Romance">Romance</Link></li>
                    <li><Link to="posts/categories/Investment">Investment</Link></li>
                    <li><Link to="posts/categories/Uncategorized">Uncategorized</Link></li>
                    <li><Link to="posts/categories/Weather">Weather</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header