import React from 'react';
// Imported Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Main.css';
// Destructuring Part
const Main = (props) => {
    const {img, name, age, technology, designation, salary, country} = props.member;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const socialIconFacebook = <FontAwesomeIcon icon={faFacebook} />
    const socialIconInstagram = <FontAwesomeIcon icon={faInstagram} />
    const socialIconGithub = <FontAwesomeIcon icon={faGithub} />
    return (
        // Person Card Section 
            <div className="col">
                <div className="card p-3 bg-light bg-gradient shadow mb-5 bg-body rounded">
                        <img src={img} alt="" className="card-img-top img-thumbnail rounded-circle img-size mx-auto"/>
                    
                    <div className="card-body">
                        <h5 className="card-title">Name: {name} </h5>
                        <p className="card-text">Age: {age} </p>
                        <p className="card-text">Technology: {technology} </p>
                        <p className="card-text">Designation: {designation} </p>
                        <p className="card-text">Country: {country} </p>
                        <p className="card-text">Salary: <span className="fw-bold">${salary}</span> </p>
                        <p className="card-text text-center">
                            <a href="https://www.facebook.com/wdkabirhossain" className="social-icons">{socialIconFacebook}</a> 
                            <a href="https://www.instagram.com/wdkabir/" className="social-icons">{socialIconInstagram}</a>
                            <a href="https://github.com/wdkabir" className="social-icons">{socialIconGithub}</a>
                        </p>
                        <button onClick={() => props.handleAddPerson(props.member)} type="button" className="btn btn-success bg-gradient w-100"><span>{cartIcon}</span> Add Person</button> 
                    </div>
                </div>
            </div>
    );
};

export default Main;