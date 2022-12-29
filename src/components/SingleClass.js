import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NotFoundPage } from "./";

const SingleClass = () => {
    const { dateStr,classId } = useParams();
    //const { date,allAbsences } = useSelector((state) => state.admin);
    const [day,setDay] = useState({});
    const [coverages,setCoverages] = useState([]);
    const [thisClass,setThisClass] = useState({});
    const [availableTeachers,setAvailableTeachers] = useState([]);

    const fetchData = async()=>{
        const day = await axios.get(`/api/day/${dateStr}`);
        setDay(day.data);
        const classInfo = await axios.get(`/api/classes/${classId}`);
        setThisClass(classInfo.data);
        const freePeriod = await axios.get(`/api/classes/coverages/${classInfo.data.period}`);
        setAvailableTeachers(freePeriod.data.users);
    };

    const updateCoverage =()=>{
        console.log('Button clicked!');
    };
    
    const updateCoverageArray = (event) =>{
        console.log('Checkbox checked!');
    };

    useEffect(() => {
        fetchData();
    }, []);

    if(!Object.keys(thisClass).length) return <NotFoundPage/>;
    return (
        <div>
            <h1>{thisClass.name} - P{thisClass.period}</h1>
            <ul>
            {availableTeachers.map((teacher) => {
                return (
                    <li key={teacher.id}>{teacher.firstName} {teacher.lastName} <input value={teacher.id} type="checkbox" onChange={updateCoverageArray}/></li>
                )
            })}
            </ul>
            <button onClick={updateCoverage}>Update coverage</button>
        </div>
    );
};

export default SingleClass;