import React, { useState, useEffect } from "react";
import axios from "axios";
import { NotFoundPage } from "./";

const Admin = () => {
    const [date,setDate] = useState('');
    const [userAbsences,setUserAbsences] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    const handleDateChange =  async (event) => {
        const date = event.target.value;
        setDate(date);
        const absences = await axios.get(`/api/attendance/absences/${date}`);
        const absArr = [];
        for(let absence of absences.data){
            const user = await axios.get(`/api/users/${absence.user.id}`);
            absArr.push(user.data);
        };
        setUserAbsences(absArr);
    };

    // look at teach class that needs to be covered
    // find what period that class occurs
    // loop through all teachers and find out who is free that period

    //console.log(userAbsences);

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <input type="date" id="date" onChange={handleDateChange}></input>
            <h1>Attendance {date}</h1>
            <div>
                {userAbsences.length>0 && userAbsences.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.firstName} {user.lastName}</p>
                            <ul>
                                {user.classes.map((eachClass) => {
                                    return (
                                        !eachClass.isFreePeriod && <li key={eachClass.id}>{eachClass.name} - P{eachClass.period}</li>
                                    )
                                })}
                            </ul>
                        </div>  
                    );
                })}
                {userAbsences.length===0 && <p>Looks like there is no information about this date.</p>}
            </div>
        </div>
    );
};

export default Admin;