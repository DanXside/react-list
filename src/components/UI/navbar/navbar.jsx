import React, { useContext } from "react";
import { Link } from "react-router-dom";

import './navbar.css';
import MyButton from "../button/Button";
import { AuthContext } from "../../context/context";


export const Navbar = () => {
    const {isAuth, setAuth} = useContext(AuthContext);

    const logout = () => {
        setAuth(false);
        localStorage.removeItem('auth');
    };

    return (
        <div className="navbar">
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
            <MyButton onClick={logout}>Log Out</MyButton>
        </div>   
    )
};