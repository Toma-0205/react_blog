import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const login = () => {
        signInWithPopup(auth, provider).then((result)=>{
            // console.log(result)
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };
    return (
    <div>
        <p>ログインして始める</p>
        <button onClick={login}>Googleでログイン</button>
    </div>
  )
}

export default Login