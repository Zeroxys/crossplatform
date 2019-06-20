import React from 'react';
import Menu from '../Main/Menu/Menu';
import '../Main/index.css'
import './index.css'

const index = ( props ) => {
    return (
        <div className="interfaceContent">

            <div className="deviceContent">
                <ul className="deviceMenu">
                    <li><a>Smart Home</a></li>
                    <li><a>All devices</a></li>
                </ul>
            </div>


            <Menu/>
        </div>
    );
};


export default index;