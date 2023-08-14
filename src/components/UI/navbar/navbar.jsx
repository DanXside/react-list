import React, { useContext } from "react";
import { Link } from "react-router-dom";

import './navbar.css';
import MyButton from "../button/Button";
import { AuthContext } from "../../context/context";


export const Navbar = () => {
    const {isAuth, setAuth} = useContext(AuthContext);

    return (
        <div className="navbar">
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
            <MyButton onClick={() => setAuth(false)}>Log Out</MyButton>
        </div>   
    )
};