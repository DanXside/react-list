import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsPage from './pages/PostsPage';
import About from './pages/AboutPage';
import ErrorPage from './UI/error/ErrorPage';
import PostDetail from "./PostDetail";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostDetail />}/>
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter;