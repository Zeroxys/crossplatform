import React from 'react';
import Menu from '../Main/Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import AllDevice from './AllDevice'

import '../Main/index.css'
import './index.css'
import FilterList from './AllDevice/FilterList';

const Device_header = () => {
    return (
        <div className="deviceContent">
            <ul className="deviceMenu">
                <li><Link className = "active" to = "/user/device/smart-home"> Smart Home </Link></li>
                <li><Link to = "/user/device/allDevices"> All Devices </Link></li>
            </ul>
            <FilterList/>
        </div>
    )
}

const index = () => {
    return (
        <div className="interfaceContent">
            <Device_header/>
            <Route path = "/user/device/allDevices" exact component = { AllDevice } />
            <Route path = "/user/device/smart-home" exact component = { SmartHome } />
            <Menu/>
        </div>
    );
};

const SmartHome = () => {
    return (
        <h1>Smart home</h1>
    )
}

export default index;