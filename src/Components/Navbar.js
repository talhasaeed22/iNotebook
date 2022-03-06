import React from 'react'
import '../App.css'
import { useLocation,  Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const signup = () => {
        let path = `/Signup`;
        navigate(path);
    }
    const login = () => {
        let path = `/Login`;
        navigate(path);
    }
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/Login');
    }
    return (
        <>
            <nav style={{position:'sticky', top:'0px', zIndex:'1' , backgroundColor:'#f1f1f1'}} className="navbar navbar-expand-lg navbar-light bg-">
                <div className="container-fluid">
                    <Link style={{padding:'0px', fontWeight:'bolder', fontSize:"2rem", fontFamily: "'Akaya Telivigala', cursive"}} className="navbar-brand me-5" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? "active" : " "}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link ${location.pathname === '/Notes' ? "active" : location.pathname === '/NotesItem'? "active": location.pathname === '/ReadNote'? "active": "" }`} to="/Notes">Notes</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link ${location.pathname === '/About' ? "active" : " "}`} to="/About">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link ${location.pathname === '/Contact' ? "active" : " "}`} to="/Contact">Contact</Link>
                            </li>
                            
                        </ul>
                        {!localStorage.getItem('token')?<div className="d-flex">
                            <button onClick={login} id='login' className="nav-btn mx-2">Login</button>
                            <button onClick={signup} id='signup' className="nav-btn mx-2">Sign Up</button>
                        </div>:<label style={{fontSize:'1.2rem'}}> Hello, {localStorage.getItem('name')} <button style={{padding:'9px 9px'}} onClick={handleLogout} className="nav-btn mx-2" id="signup">Logout</button> </label>}
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar