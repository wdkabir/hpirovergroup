import React from 'react';
import Members from '../Members/Members';
import './Person.css';

const Person = (props) => {
    const {person} = props;
    let total = 0;
    for(const member of person){
        total = total + member.salary;

    const totalSalary = total;
    }
    return (
        <div className="card text-white bg-success mb-3 sticky-top">
                <div className="card-header fw-bold">
                                Person Information
                </div>
                            <div className="card-body py-5">
                                <h4 className="card-text">Person Added: {props.person.length}</h4>
                                <h4 className="card-text">Total Salary: $ {total.toFixed(2)}</h4>
                                <button type="button" class="btn btn-warning fw-bold mt-3">Hire Now</button>
                            </div>
                        </div>
    );
};

export default Person;