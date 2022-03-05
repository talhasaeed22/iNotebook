import React from 'react'
import background from '../images/image.jpg'
import '../App.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    let nevigate = useNavigate();
    const routeChange = ()=>{
        let path = '/Notes'
        nevigate(path);
    }
    return (
        <>
            <div style={{ backgroundImage: `url(${background})` }} className="home-header container-fluid" >
                <div className="content d-flex flex-column " style={{color:'white'}}>
                    <h1 className='home-heading' style={{fontWeight: 'bold', }}>iNotebook</h1>
                    <h1 className='home-heading' style={{fontWeight: 'bold', }}>Your Personal Diary</h1>
                    <p>Add any notes, remainders and your daily plans with full security.</p>
                    <button onClick={routeChange} className="home-btn">Access Now!</button>
                    

                </div>
            </div>
        </>
    )
}

export default Home