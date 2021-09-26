import React from 'react';
import './Person.css';

const Person = (props) => {
    const {person} = props;
    let total = 0;
    for(const member of person){
        total = total + member.salary;
    }
    return (
        // Selected Person Area
        <div className="card text-white bg-success mb-3 sticky-top">
                <div className="card-header fw-bold">
                                Person Information
                </div>
                            <div className="card-body py-5">
                                <h4 className="card-text">Person Added: {props.person.length}</h4>
                                <h4 className="card-text">Total Salary: $ {total}</h4>
                                <h4 className="card-text">Selected Person: </h4>
                {/* Displayed Selected Person Name and Image On Cart Area */}
                                {
                                    person.map(addedPerson => <small>

                            <div className="mb-2">
                                <div className="card text-dark bg-ligh">
                                        <div className="card-body">
                                        <p>
                                        {addedPerson.name}
                                        <img className="ms-3" style={{ height: "30px", width: "30px", borderRadius: "50px" }} src={addedPerson.img} alt="" />
                                        </p>
                                        </div>
                                </div>
                                    
                            </div>

                            </small>)
                                }
                                <button type="button" className="btn btn-warning fw-bold mt-3">Hire Now</button>
                            </div>
                        </div>
    );
};

export default Person;