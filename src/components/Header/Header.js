import React from 'react';
import hpiRoverLogo from '../../images/hpiroverlogo.png';
import bdScoutLogo from '../../images/bd-scout-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container-fluid bg-danger bg-gradient text-center">
            <div className="row">
                <div className="col-md-2">
                    <img src={hpiRoverLogo} alt="" className="img-thumbnail rounded mx-auto"/>
                </div>
                <div className="col-md-8 bg-success bg-gradient">
                    <div className="text-light p-5">
                        <h2 className="text-center text-capitalize">habiganj Polytechnic Institute Rover Scout Group</h2>
                        <h6 className="text-center">"Try and leave this world a little better than you found it" - Robert Baden-Powell</h6>
                        <h3 className="text-center">Total Budget: 100 Million</h3>
                    </div>
                </div>
                <div className="col-md-2 bg-danger bg-gradient text-center">
                <img src={bdScoutLogo} alt="" className="img-thumbnail rounded mx-auto"/>
                </div>
            </div>
        </div>
    );
};

export default Header;