import React, { useState } from 'react'
import Spinner from '../images/Spinner.gif'
import login from '../images/login.jpg'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
    const [loading, setLoading] = useState('false');
    const [loginCred, setLoginCred] = useState({email:"", password:""});
    const url = 'https://inotebook-project.herokuapp.com';
    let nevigate = useNavigate();
    const handleLogin = async (e)=>{
        if(loginCred.password.length < 5 || loginCred.email.length === 0){
            alert("please Enter Valid Email and Password")
            e.preventDefault();
        }else{

            e.preventDefault();
            setLoading('true');
            const response = await fetch(`${url}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email:loginCred.email, password:loginCred.password})
            });
            const json = await response.json();
            setLoading('false');
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
                    <p className="text-muted" style={{padding:'0px 32px'} }>Login to your account for the access of your notes.</p>
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
                        { <div >{loading === 'true'? <img style={{width:'40px', display:'block', margin:'auto', marginBottom:'23px'}} className='thumbnail' src={Spinner} alt='Loading' /> : ""}</div> }
                    </form>
                    <label htmlFor="create_acc">New to our app? <strong> <Link id="create_aacount" to="/Signup">Create Account</Link> </strong></label>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${login})`,color: 'white',backgroundPosition: 'center', backgroundSize: "cover" }} id="right_box" className=" box  ">
                    <h1 style={{textAlign:'center'}}>
                        Welcome to iNotebook,
                    </h1>
                    <h1 style={{textAlign:'center'}}>Save Your Notes Now</h1>
                    <h4 style={{textAlign:'center'}}><i>Your Daily Notes and Plans</i></h4>
                </div>

            </div>
        </>
    )
}

export default Login