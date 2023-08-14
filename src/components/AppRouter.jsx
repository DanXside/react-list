import React from "react";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { privateRouter, publicRouter } from "./router/router";
import { AuthContext } from "./context/context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    console.log(isAuth);

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