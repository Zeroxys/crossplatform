import React from 'react';

import { Link } from 'react-router-dom'

import '../index.css'

const BasicInfo = () => {
    return (
        <div className = "personal_div" >
            <h3 className = "text" > Basic info </h3>
            <form className = "addGroupForm" >
                <label> Name Surname </label>
                <input className = "" type = "text" placeholder = "Jane Doe"  />

                <label> Date of Birth </label>
                <select className = "personal_select" > <option value = "0"> 05 </option> </select>
            </form>
        </div>
    );
};

export default BasicInfo;