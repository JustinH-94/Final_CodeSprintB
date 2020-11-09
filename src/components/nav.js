import React from 'react'
import { Link } from 'react-router-dom'
import Plus from "../img/Plus.png";
import "./nav.css"

function Nav() {
    return (
        <nav>
            <Link className="add_link" to="/add" style={{textDecoration:'none'}}>
                <img src={Plus}/>
            </Link>
            <Link className="logo" to="/" style={{textDecoration:'none'}}>M4G</Link>
            <Link className="reviews" to="/reviews" style={{textDecoration:'none'}}>Reviews</Link>
            <Link className="login" to="/" style={{textDecoration:'none'}}>Login</Link>
        </nav>
    )
}

export default Nav;
