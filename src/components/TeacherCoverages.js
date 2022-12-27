import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";

const TeacherCoverages = ({teacher}) => {
    const [teacherClasses,setTeacherClasses] = useState([]);
    const { allClasses } = useSelector((state) => state.class);

    const getTeacherClasses = async () => {
        const filteredClasses = allClasses.filter(
          (eachClass) => eachClass.users.includes(teacher)
        );
        setTeacherClasses(filteredClasses);
      };
    
    useEffect(() => {
        getTeacherClasses();
    }, []);
    
    return (
        <div>
            <h1>The following classes will need coverages:</h1>
            {teacherClasses.map((eachClass) => {
                    return (
                        <div key={eachClass.id}>
                            <p>{eachClass.name}, {eachClass.period}</p>
                        </div>
                    );
            })}
            {/* <p>{teacher.firstName} {teacher.lastName}</p> */}
        </div>
    );
};

export default TeacherCoverages;