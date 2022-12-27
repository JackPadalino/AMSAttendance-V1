import React, { useState, useEffect } from "react";
import axios from "axios";
import { NotFoundPage } from "./";

const Admin = () => {
    const [date,setDate] = useState('');
    const [teacherAbsences,setTeacherAbsences] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    const handleDateChange =  async (event) => {
        const date = event.target.value;
        setDate(date);
        let response = await axios.get(`/api/attendance/absences/${date}`);
        const absArr = [];
        for(let absence of response.data){
            response = await axios.get(`/api/users/${absence.user.id}`);
            absArr.push(response.data);
        };
        setTeacherAbsences(absArr);
    };

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <input type="date" id="date" onChange={handleDateChange}></input>
            <h1>Attendance {date}</h1>
            <div>
                {teacherAbsences.length>0 && teacherAbsences.map((teacher) => {
                    return (
                        <div key={teacher.id}>
                            <p>{teacher.firstName} {teacher.lastName}</p>
                        </div>  
                    );
                })}
                {teacherAbsences.length===0 && <p>Looks like there is no information about this date.</p>}
            </div>
        </div>
    );
};

export default Admin;