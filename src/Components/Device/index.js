import React from 'react';
import Menu from '../Main/Menu/Menu';
import '../Main/index.css'
import './index.css'

const index = ( props ) => {
    return (
        <div className="interfaceContent">
            <ul id="ejm2">
                <li><a>Smart Home</a></li>
                <li><a>All devices</a></li>
            </ul>
            <Menu/>
        </div>
    );
};


export default index;