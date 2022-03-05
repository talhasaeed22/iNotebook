import React from 'react';
import './Footer.css'
function Footer(props) {
    return (
        <>
            <footer className="text-center text-lg-start bg-dark text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a rel="noreferrer"  target='_blank' href="https://www.facebook.com/talha.saeed.1023" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a rel="noreferrer" target='_blank'  href="https://twitter.com/?lang=en" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a rel="noreferrer" target='_blank'  href="https://support.google.com/answer/2451065?hl=en" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a rel="noreferrer"  target='_blank' href="https://www.instagram.com/talha_saeed2.2/" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a rel="noreferrer"  target='_blank' href="https://www.linkedin.com/login" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a rel="noreferrer"  target='_blank' href="https://github.com/talhasaeed22" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>
                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>About iNotebook.
                                </h6>
                                <p>
                                iNotebook is your personal as well as business diary where you can store your daily needs without fear of losing important notes.
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact Us
                                </h6>
                                <p><i className="fas fa-home me-3"></i>Soan Gardens, Islamabad, PK</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    talhasaeed100@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i>+923319838411</p>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </footer>

        </>
    );
}

export default Footer;
