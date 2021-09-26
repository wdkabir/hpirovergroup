import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Person from '../Person/Person';

const Members = () => {
    const [members , setMembers] = useState([]);
    const [person, setPerson] = useState([]);

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])

    const handleAddPerson = (member) =>{
        const newPerson = [...person, member];
        setPerson(newPerson);
    }
    return (
        <div>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-md-9">
                    <div className="row  row-cols-md-3 g-4 gy-5">
                        {
                            members.map(member => <Main key={member.key} member={member}
                            handleAddPerson = {handleAddPerson}
                            >
                            </Main>)
                        }
                    </div>
                    </div>
            
                    <div className="col-md-3">
                        <Person person={person}></Person>
                    </div>
                </div>
        
            </div>
        </div>
    );
};

export default Members;