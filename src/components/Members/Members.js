import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Person from '../Person/Person';

const Members = () => {
    const [members , setMembers] = useState([]);
    const [person, setPerson] = useState([]);
    // Load data from JSON file
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])
    // Handle Select Button
    const handleAddPerson = (member) =>{
        const newPerson = [...person, member];
        setPerson(newPerson);
    }
    return (
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row  row-cols-md-3 g-4 gy-5">
                            {/* Display Data In UI */}
                            {
                                members.map(member => <Main key={member.key} members={member}
                                handleAddPerson = {handleAddPerson}
                                >
                                </Main>)
                            }
                        </div>
                    </div>
                    {/* Person Section */}
                    <div className="col-md-3">
                        <Person person={person}></Person>
                    </div>
                </div>
            </div>
    );
};

export default Members;