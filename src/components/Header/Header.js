import React from 'react';
import hpiRoverLogo from '../../images/hpiroverlogo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* Navbar Section */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient text-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">
                        <img className="logo" src={hpiRoverLogo} alt={hpiRoverLogo} />   <span className="logo-text">HPI Rover Group</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/gallery">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Header Part */}
            <div className="container-fluid">
            <div className="row">
                <div className="col bg-success bg-gradient">
                    <div className="text-light p-5">
                        <h1 className="text-center text-capitalize">habiganj Polytechnic Institute Rover Scout Group</h1>
                        <h6 className="text-center">"Try and leave this world a little better than you found it" - Robert Baden-Powell</h6>
                        <h3 className="text-center">Total Budget: 100 Million</h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;