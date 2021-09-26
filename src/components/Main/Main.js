import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Main.css';

const Main = (props) => {
    const {img, name, age, technology, designation, salary, country} = props.member;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const socialIconFacebook = <FontAwesomeIcon icon={faFacebook} />
    const socialIconInstagram = <FontAwesomeIcon icon={faInstagram} />
    const socialIconGithub = <FontAwesomeIcon icon={faGithub} />
    return (
        
            <div className="col">
                <div className="card h-100 p-3 bg-light bg-gradient shadow p-3 mb-5 bg-body rounded">
                        <img src={img} alt="" className="card-img-top img-thumbnail rounded-circle img-size mx-auto"/>
                    
                    <div className="card-body">
                        <h5 className="card-title">Name: {name} </h5>
                        <p className="card-text">Age: {age} </p>
                        <p className="card-text">Technology: {technology} </p>
                        <p className="card-text">Designation: {designation} </p>
                        <p className="card-text">Country: {country} </p>
                        <p className="card-text">Salary: ${salary} </p>
                        <p className="card-text text-center">
                            <a href="" className="social-icons">{socialIconFacebook}</a> 
                            <a href="" className="social-icons">{socialIconInstagram}</a>
                            <a href="" className="social-icons">{socialIconGithub}</a>
                        </p>
                        <button onClick={() => props.handleAddPerson(props.member)} type="button" className="btn btn-success bg-gradient w-100"><span>{cartIcon}</span> Add Person</button> 
                    </div>
                </div>
            </div>
    );
};

export default Main;