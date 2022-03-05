import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const ReadNote = () => {
    const location = useLocation();
    return (
        <>
            <div className="container my-3" style={{ border: '1px solid orangered', borderRadius: '23px', padding: '23px' }}>
                <div  className="header mb-4">
                    <Link style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }} to="/Notes"> <i style={{ fontSize: '1.9rem' }} className="fa fa-chevron-left mx-1" aria-hidden="true"></i> Back </Link>
                </div>
                    <div>

                        <h1 style={{ textAlign: 'center' }}>{location.state.title}</h1>
                        <hr />
                        <h4 className='mx-3'> <strong>Category: </strong> {location.state.category} </h4>
                        <p className='mx-3'>{location.state.description}</p>
                    </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div style={{ border: '1px solid black' }} className="col-md-3 p-3 mx-5">
                        <h1 style={{ color: 'orangered', textDecoration: 'underline', textAlign: 'center' }}>Easily Managed</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem ullam ea repellat fugiat debitis non quaerat sint sapiente provident, nesciunt, incidunt molestiae. Voluptates sunt sed similique cum reprehenderit accusantium officia vero?</p>
                    </div>
                    <div style={{ border: '1px solid black' }} className="col-md-3 p-3 mx-5">
                        <h1 style={{ color: 'orangered', textDecoration: 'underline', textAlign: 'center' }}>Fully Secured</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem ullam ea repellat fugiat debitis non quaerat sint sapiente provident, nesciunt, incidunt molestiae. Voluptates sunt sed similique cum reprehenderit accusantium officia vero?</p>
                    </div>
                    <div style={{ border: '1px solid black' }} className="col-md-3 p-3 mx-5">
                        <h1 style={{ color: 'orangered', textDecoration: 'underline', textAlign: 'center' }}>Never Lost</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem ullam ea repellat fugiat debitis non quaerat sint sapiente provident, nesciunt, incidunt molestiae. Voluptates sunt sed similique cum reprehenderit accusantium officia vero?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadNote