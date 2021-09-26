import React, { useEffect, useState } from 'react';
import './Members.css';

const Members = () => {
    const {members, setMembers} = useState([]);
    useEffect (() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
<div className="container p-5">
    <div className="row">
        <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="" alt="" className="card-img-top"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name: </h5>
                        <p className="card-text">Age: </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <h3>Person Added: </h3>
            <h3>Total Salary: </h3>
        </div>
    </div>
</div>
    );
};

export default Members;