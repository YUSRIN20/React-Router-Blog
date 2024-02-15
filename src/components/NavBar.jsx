import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavBar.css'

const NavBar = () => {
    return (
        <div>
            {/* <div className="container-fluid"> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="navbar-collapse collapse show" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id="ul-texts" style={{ margin: 'auto' }}>
                            <li className="nav-item mx-1"><Link to="/" className="nav-link active texts" aria-current="page">All</Link></li>
                            <li className="nav-item mx-1"><Link to="/fullstack" className="nav-link active" aria-current="page">Full Stack Development</Link></li>
                            <li className="nav-item mx-1"><Link to="/datascience" className="nav-link active" aria-current="page">Data Science</Link></li>
                            <li className="nav-item mx-1"><Link to="/cybersecurity" className="nav-link active" aria-current="page">Cyber Security</Link></li>
                            <li className="nav-item mx-1"><Link to="/career" className="nav-link active" aria-current="page">Career</Link></li>
                        </ul>
                    </div>
                </nav>
            {/* </div> */}
        </div>
    );
};

export default NavBar;
