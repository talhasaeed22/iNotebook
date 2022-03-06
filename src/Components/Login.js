import React, { useState } from 'react'
import login from '../images/login.jpg';
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
    
    const [loginCred, setLoginCred] = useState({email:"", password:""});
    const url = 'http://localhost:5000';
    let nevigate = useNavigate();
    const handleLogin = async (e)=>{
        if(loginCred.password.length < 5 || loginCred.email.length === 0){
            alert("please Enter Valid Email and Password")
            e.preventDefault();
        }else{

            e.preventDefault();
            const response = await fetch(`${url}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email:loginCred.email, password:loginCred.password})
            });
            const json = await response.json();
            console.log(json);
            if(json.success){
                //SAVE THE AUTH TOKEN AND REDIRECT
                localStorage.setItem('token', json.token);
                localStorage.setItem('name', json.name);
                nevigate('/Notes')
            }else{
                alert("Invalid Credintials");
            }
        }
    }

    const onChange = (e) => {
        setLoginCred({ ...loginCred, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container-fluid" id="login-container">

                <div className="box" id="left_box">
                    <h1 style={{textDecoration:'underline'}}>Login</h1>
                    <p className="text-muted">Login to your account for the access of your notes.</p>
                    <div className="login-content">
                    <form>
                        <fieldset>
                            <legend style={{fontSize:'1.3rem'}} >Email:</legend>
                            <input value={loginCred.email} onChange={onChange} className='inp' type="email" name="email" id="email" placeholder='Enter Your Email' />
                        </fieldset>
                        <fieldset>
                            <legend style={{fontSize:'1.3rem'}} >Password:</legend>
                            <input value={loginCred.password} onChange={onChange} className='inp' type="password" name="password" id="password" placeholder='Enter Your Password' />
                        </fieldset>
                        <input type="button" onClick={handleLogin} className="welcome-btn" value="Login" />
                    </form>
                    <label htmlFor="create_acc">New to our app? <strong> <Link id="create_aacount" to="/Signup">Create Account</Link> </strong></label>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${login})`,color: 'white',backgroundPosition: 'center', backgroundSize: "cover" }} id="right_box" className=" box d-flex flex-column justify-content-center align-items-center ">
                    <h1 >
                        Welcome to iNotebook,
                    </h1>
                    <h1>Save Your Notes Now</h1>
                    <h4><i>Your Daily Notes and Plans</i></h4>
                </div>

            </div>
        </>
    )
}

export default Login