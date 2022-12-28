import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleClass = () => {
    const { classId } = useParams();
    const [thisClass,setThisClass] = useState({});
    const [availableTeachers,setAvailableTeachers] = useState([]);

    const fetchClass = async()=>{
        let response = await axios.get(`/api/classes/${classId}`);
        setThisClass(response.data);
        response = await axios.get(`/api/classes/coverages/${response.data.period}`);
        setAvailableTeachers(response.data.users);
      };
    
    useEffect(() => {
        fetchClass();
    }, []);

    if(!Object.keys(thisClass).length) return <p>Loading...</p>;
    return (
        <div>
            <h1>{thisClass.name} - P{thisClass.period}</h1>
            <ul>
            {availableTeachers.map((teacher) => {
                return (
                    <li key={teacher.id}>{teacher.firstName} {teacher.lastName}</li>
                )
            })}
            </ul>
        </div>
    );
};

export default SingleClass;