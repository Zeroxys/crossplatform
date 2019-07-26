import React from 'react';

import { Link } from 'react-router-dom'

import home from '../../../../public/images/Home.png'
import office from '../../../../public/images/office.png'

import '../index.css'

const BasicInfo = () => {
    return (
        <div className = "personal_div" >
            <h3 className = "text" > Basic info </h3>
            <form className = "addGroupForm" >
                <label> Name Surname </label>
                <input type = "text" placeholder = "Jane Doe" style = { { marginBottom: '3%' } } />

                <label> Date of Birth </label>
                <div style = { { width: '70%', display: 'flex', justifyContent: 'space-between'  } } >
                    <select className = "personal_select" > <option value = "0"> 05 </option> </select>
                    <select className = "personal_select" style = { { width: '55%' } } > <option value = "September" > September </option> </select>
                    <select className = "personal_select" style = { { marginBottom: '3%' } } > <option value = "1995"> 1995 </option> </select>
                </div>

                <label> Gender </label>
                <select className = "personal_select" style = { { width: '25%', marginBottom: '3%' } } > <option value = "Female"> Female </option> </select>

                <div style = { { display: 'flex' } } >
                    <div>
                        <label> Prefix </label>
                        <select className = "personal_select" > <option value = "🇮🇹+39"> 🇮🇹+39 </option> </select>
                    </div>
                    <div>
                        <label> Mobile Number </label>
                        <input className = "" type = "text" placeholder = "Mobile Number" />
                    </div>
                </div>

                {
                    homes.map( home => <div key = { home.id } style = { { marginTop: '3%' } } >
                        <div style = { { display: 'flex' } } >
                            <img src = { home.img } style = { { width: '5%', height: '5%' } } />
                            <h5 className = "text" style = { { paddingTop: '1%', textAlign: 'initial' } } > { home.title } </h5>
                        </div>
                        <strong className = "text"> { home.body } </strong>
                    </div> )
                }

                <Link to = "/settings/personal/basic_info/addAddress" className = "button_settings"> + Add New Address </Link>

                <div style = { { display: 'flex', flexDirection: 'column', marginTop: '3%' } } >
                    <label> Occupation </label>
                    <input className = "" type = "text" placeholder = "Teacher" />
                </div>

                <div style = { { display: 'flex', flexDirection: 'column', marginTop: '3%' } }>
                    <label> Interests </label>
                </div>

                <div style = { { display: 'flex', flexDirection: 'row', marginTop: '3%', justifyContent: 'space-between' } }>
                    <input className = "" type = "text" placeholder = "Ice-Skating" />
                    <button className = "button_settings" style = { { marginTop: '0%', width: '20%' } } > Add </button>
                </div>
            </form>
        </div>
    );
};

const homes = [
    {
        id:1,
        img: home,
        title: 'Home Address',
        body: 'Corso Garibaldi, Piazza Bausan, 5720159 MI Milano Italy'
    },
    {
        id:2,
        img: office,
        title: 'Work Address',
        body: 'Corso Garibaldi, 3220159 MI Milano Italy'
    },
]

export default BasicInfo;