import React from "react";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { privateRouter, publicRouter } from "./router/router";
import { AuthContext } from "./context/context";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <h1>Loading...</h1>;
    };

    return (
        isAuth
        ?
        <Routes>
            {privateRouter.map(route => 
                <Route key={route.path} path={route.path} element={route.element}/>
            )}
        </Routes>
        :
        <Routes>
            {publicRouter.map(route => 
                <Route key={route.path} path={route.path} element={route.element}/>
            )}
        </Routes>
    )
}

export default AppRouter;