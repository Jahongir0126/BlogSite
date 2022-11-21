import React from 'react'
import { useState } from 'react'
import './Login.scss'
import Logo from '../../img/Logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')

    async function handleForm(e){
        e.preventDefault()
        const res=await fetch ("https://n36-blog.herokuapp.com/login?login=" + login + "&password=" + password)
        const {token} = await res.json();

        if(token){
            localStorage.setItem("token",token)
            toast.success("Success login",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                setLogin("");
                setPassword("");
        }else{
            toast.error("Login or password is wrong",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }
    }

    return (
        <>
        <ToastContainer/>
            <section className="container">
                <img src={Logo} alt="logotip" />
                <div className="wrapper mx-auto">
                    <h3>LOGIN</h3>
                    <form className="form" onSubmit={handleForm}>
                        <input type="text" value={login} name="login" className='form-control' placeholder='Username' 
                        onChange={(e)=>setLogin(e.target.value)}/>
                        <input type="password" value={password} name="password" className='form-control ' placeholder='Password' 
                        onChange={(e)=>setPassword(e.target.value)}/>
                        <button className="btn btn-dark w-100">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}
