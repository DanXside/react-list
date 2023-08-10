import React from "react";
import { Link } from "react-router-dom";

import './navbar.css';


export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
        </div>
    )
};