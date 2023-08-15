import React, { useContext } from "react";
import MyInput from "./UI/input/Input";
import MyButton from "./UI/button/Button";
import { AuthContext } from "./context/context";

const Login = () => {
    const {isAuth, setAuth} = useContext(AuthContext);

    function login (e) {
        e.preventDefault();
        localStorage.setItem('auth', 'true');
        setAuth(true);
    };

    return (
        <div>
            <form onSubmit={login} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', margin: '0 auto', width: '600px', marginTop: '80px'}}>
                <MyInput type="text" placeholder="Type your login"/>
                <MyInput type="password" placeholder="Type password"/>
                <MyButton type="submit">Log In</MyButton>
            </form>
        </div>
    );
};

export default Login;