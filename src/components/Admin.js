import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
    const [date,setDate] = useState('');
    const [absences,setAbsences] = useState([]);

    const handleDateChange =  async (event) => {
        //console.log(typeof(event.target.value));
        //setDate(event.target.value);
        const date = event.target.value;
        setDate(date);
        const response = await axios.get(`/api/attendance/absences/${date}`);
        setAbsences(response.data);
    };

    return (
        <div>
            <input type="date" id="date" onChange={handleDateChange}></input>
            <h1>Attendance {date}</h1>
            <div>
                {absences.length>0 && absences.map((absence) => {
                    return (
                        <div key={absence.id}>
                            <p>{absence.user.firstName} {absence.user.lastName}</p>
                        </div>
                    );
                })}
                {absences.length===0 && <p>Looks like there is no information about this date.</p>}
            </div>
        </div>
    );
};

export default Admin;