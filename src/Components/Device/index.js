import React from 'react';
import Menu from '../Main/Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import '../Main/index.css'
import './index.css'

const index = ( props ) => {
    return (
        <div className="interfaceContent">
            <ul id="title_smart">
                <li className = "active" ><a>Smart Home</a></li>
                <li className = "" ><a>All devices</a></li>
            </ul>

            <div className = "icon_add_device">
                <FontAwesomeIcon icon={faHome} size = "9x" />
                <button className = "button_add_home" > + Add Home </button>
            </div>
            <Menu/>
        </div>
    );
};


export default index;