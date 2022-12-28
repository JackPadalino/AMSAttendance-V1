import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPage } from "./";
import { setDate } from "../store/dateSlice";
import { useSelector, useDispatch } from "react-redux";

const Admin = () => {
    //const [date,setDate] = useState('');
    const dispatch = useDispatch();
    const { date } = useSelector((state) => state.date);
    const [userAbsences,setUserAbsences] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    const handleDateChange =  async (event) => {
        const date = event.target.value;
        dispatch(setDate(date));
        const absences = await axios.get(`/api/attendance/absences/${date}`);
        // new code - using Promise.all to make a single API call to fetch all the user details in one go
        const userPromises = absences.data.map(absence => axios.get(`/api/users/${absence.user.id}`));
        const userResponses = await Promise.all(userPromises);
        const userAbsences = userResponses.map(response => response.data);
        setUserAbsences(userAbsences);
        // old code - using a for loop to make a separate API call for each absence object
        // const absArr = [];
        // for(let absence of absences.data){
        //     const user = await axios.get(`/api/users/${absence.user.id}`);
        //     absArr.push(user.data);
        // };
        // setUserAbsences(absArr);
    };

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <input type="date" id="date" value={date} onChange={handleDateChange}></input>
            <h1>Attendance {date}</h1>
            <div>
                {userAbsences.length>0 && userAbsences.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.firstName} {user.lastName}</p>
                            <ul>
                                {user.classes.map((eachClass) => {
                                    return (
                                        !eachClass.isFreePeriod && <li key={eachClass.id}><Link to={`/${eachClass.id}`}>{eachClass.name} - P{eachClass.period}</Link></li>
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