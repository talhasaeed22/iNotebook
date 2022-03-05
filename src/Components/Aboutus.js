import React from 'react'
import pic from '../images/about.jpg';
import '../App.css'
const Aboutus = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${pic})` }} className="container-fluid home-header">
                <div className="row">
                    <div className="col-lg-5 col-sm-6 col-sm-12 p-5">
                        <h1 style={{ color: 'white', fontWeight:'bold' }}  className='p-heading'>Welcome to iNotebook, We're glad and gratefull you're here</h1>
                    </div>
                    <div style={{ color: 'white', padding: '12px', fontSize:'1.2rem' }} className="col-lg-5 col-sm-6 col-sm-12 my-5">
                        <h1 className='headings p-heading' style={{ textDecoration:'underline' }}>About Us</h1>
                        <p  className='muted'>iNotebook is your personal as well as business diary where you can store your daily needs without fear of losing important notes. </p>
                        <p className='headings' style={{fontSize:'1.7rem', textDecoration:'underline'}}><strong>Our services</strong></p>
                        <ul className='muted' id='ul'>
                            <li>Full Secure Environment</li>
                            <li>Login Based Notes</li>
                            <li>Trustworthy environment</li>

                        </ul>
                        <p className='headings' style={{fontSize:'1.7rem', textDecoration:'underline'}}><strong>You can store,</strong></p>
                        <ul className='muted' id='ul'>
                            <li>Your Daily Notes</li>
                            <li>Your Plans and Events</li>
                            <li>Your Personal and Private Messages</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus