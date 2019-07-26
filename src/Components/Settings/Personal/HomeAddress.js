import React from 'react';

import '../index.css'

const HomeAddress = () => {
    return (
        <div className = "personal_div">
            <h3 className = "text" > Home address </h3>
            <form className = "addGroupForm" >
                <div style = { { display: 'flex', flexDirection: 'column' } } >
                    <label> Address Name </label>
                    <input type = "text" placeholder = "Address Name" style = { { marginBottom: '3%' } } />
                </div>
                <div style = { { display: 'flex', justifyContent: 'space-between' } } >
                    <div style = { { width: '30%' } } >
                        <label> Postal Codee </label>
                        <input type = "text" placeholder = "Postal Code" style = { { marginBottom: '3%', width: '100%' } } />
                    </div>
                    <div style = { { width: '30%' } } >
                        <label> City </label>
                        <input type = "text" placeholder = "City" style = { { marginBottom: '3%', width: '100%' } } />
                    </div>
                    <div style = { { width: '30%' } } >
                        <label> Province </label>
                        <input type = "text" placeholder = "Province" style = { { marginBottom: '3%', width: '100%' } } />
                    </div>
                </div>
                <div style = { { display: 'flex', flexDirection: 'column' } } >
                    <label> Country </label>
                    <select className = "personal_select" > <option value = "🇮🇹+39"> Select a Country </option> </select>
                </div>
            </form>
        </div>
    );
};

export default HomeAddress;