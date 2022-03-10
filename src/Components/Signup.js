import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import login from '../images/login.jpg'
import '../App.css'
const Signup = () => {
    let nevigate = useNavigate();
    const [signupCred, setSignupCred] = useState({name:"", email:"", password:"", age:"", gender:""});
    const url = 'https://inotebook-project.herokuapp.com';
    const handleSignup = async (e)=>{
        e.preventDefault();
        const response = await fetch(`${url}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:signupCred.name,email:signupCred.email, password:signupCred.password, age:signupCred.age, gender:signupCred.gender})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //SAVE THE AUTH TOKEN AND REDIRECT
            localStorage.setItem('token', json.token);
            nevigate('/Notes')
        }else{
            alert("Invalid Credintials");
        }
    }
    const onChange = (e) => {
        setSignupCred({ ...signupCred, [e.target.name]: e.target.value })
    }
  return (
    <>
         <>
            <div className="container-fluid" id="login-container">
                <div style={{height: '665px'}}  className="box" id="left_box">
                    <h1 style={{textDecoration:'underline'}}>SignUp</h1>
                    <p style={{padding:'23px'}} className="text-muted">Login to your account for the access of your notes.</p>
                    <div className="login-content">
                    <form action="">
                      <fieldset>
                            <legend style={{fontSize:'1.3rem'}} >Name:</legend>
                            <input onChange={onChange} value={signupCred.name} className='inp' type="text" name="name" id="name" placeholder='Enter Your Name' />
                        </fieldset>
                        <fieldset>
                            <legend style={{fontSize:'1.3rem'}} >Email:</legend>
                            <input required="true" onChange={onChange} value={signupCred.email} className='inp' type="email" name="email" id="email" placeholder='Enter Your Email' />
                        </fieldset>
                        <fieldset>
                            <legend style={{fontSize:'1.3rem'}} >Password:</legend>
                            <input required="true"  onChange={onChange} value={signupCred.password} className='inp' type="password" name="password" id="password" placeholder='Enter Your Password' />
                        </fieldset>
                        <fieldset>
                            <legend style={{fontSize:'1.3rem'}} >Age:</legend>
                            <input required="true" onChange={onChange} value={signupCred.age} className='inp' type="number" name="age" id="age" placeholder='Enter Your Age' />
                        </fieldset>
                        <fieldset>
                            <legend style={{fontSize:'1.3rem'}} >Gender:</legend>
                            <input required="true" onChange={onChange} value={signupCred.gender} className='inp' type="text" name="gender" id="gender" placeholder='Enter Your Gender' />
                        </fieldset>
                        <input type="button" onClick={handleSignup} className="welcome-btn" value="SignUp" />
                    </form>
                    <label htmlFor="create_acc">Already Have An Account? <strong> <Link id="create_aacount" to="/Login">Login</Link> </strong></label>
                    </div>
                </div>
                <div style={{height: '665px', backgroundImage: `url(${login})`,color: 'white',backgroundPosition: 'center', backgroundSize: "cover" }} id="right_box" className=" box d-flex flex-column justify-content-center align-items-center ">
                <h1 style={{textAlign:'center'}}>
                        Welcome to iNotebook,
                    </h1>
                    <h1 style={{textAlign:'center'}}>Save Your Notes Now</h1>
                    <h4 style={{textAlign:'center'}}><i>Your Daily Notes and Plans</i></h4>
                </div>

            </div>
        </>
    </>
  )
}

export default Signup