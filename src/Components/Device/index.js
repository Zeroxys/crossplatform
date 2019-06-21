import React from 'react';
import Menu from '../Main/Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AllDevice from './AllDevice'

import '../Main/index.css'
import './index.css'

const Device_header = () => {
    return (
        <div className="deviceContent">
            <ul className="deviceMenu">
                <li><a className = "active" >Smart Home</a></li>
                <li><a>All devices</a></li>
            </ul>
        </div>
    )
}

const index = () => {
    return (
        <div className="interfaceContent">
            <Device_header/>
            <BrowserRouter>
                <Switch>
                    <Route path = "/user/device/allDevice" component = { AllDevice } />
                </Switch>
            </BrowserRouter>
            <Menu/>
        </div>
    );
};


export default index;