import React from 'react';
import Menu from '../Main/Menu/Menu';
import AllDevice from './AllDevice'
import Add from './AllDevice/home.js'

import '../Main/index.css'
import './index.css'
// import FilterList from './AllDevice/FilterList';

import { Route, Link } from 'react-router-dom'



import chargericon from '../../../public/images/devices/charger.svg'
import bluetoothicon from '../../../public/images/devices/bluetooth.svg'

const Device_header = () => {
    return (
        <div className="deviceContent">
            <h3 className = "text" > Summer House </h3>
            <ul className="deviceMenu">
                <li><Link to = "/user/device/smart-home"> Smart Home </Link></li>
                <li><Link className = "active" to = "/user/device/allDevices"> All Devices </Link></li>
            </ul>
            {/* <FilterList/> */}
        </div>
    )
}

const index = () => {
    return (
        <div className="interfaceContent">
            <Device_header/>
            <Route path = "/user/device/allDevices" exact component = { AllDevice } />
            <Route path = "/user/device/smart-home" exact component = { SmartHome } />
            <Route path = "/user/device/allDevices/addDevice" exact component = { addDevice } />
            <Route path = "/user/device/allDevices/plugInDevice" exact component = { plugin_your_device } />
            <Route path = "/user/device/allDevices/turnBluetooth" exact component = { bluetooth_screen } />
            <Route path = "/user/device/allDevices/turnBluetooth" exact component = { bluetooth_screen } />
            <Route path = "/user/device/allDevices/add" exact component = { Add } />
            <Menu/>
        </div>
    );
};

const SmartHome = () => {
    return (
        <h1>Smart home</h1>
    )
}

const infomations = [
    {
        id:1,
        title: 'Gigaaa Inside Devices',
        text: <p> You can choose this device type if your device has <strong className = "text"> "gigaaa Inside" </strong> label on it. This means your device is powered by gigaaa assistant </p>,
        link: 'plugInDevice'
    },
    {
        id:2,
        title: 'Works with gigaaa Assistant',
        text: <p> You can choose this device type if your device is compatible with gigaaa Assistant. </p>,
        link: 'turnBluetooth'
    }
]

const addDevice = () => {
    return (
        <div >
            <h3 className = "text" > Add device </h3>
            <h3 className = "text" > Select your device type </h3>
            {
                infomations.map( information => <Information_div key = { information.id } title = { information.title } text = { information.text } link = { information.link } /> )
            }
        </div>
    )
}

const plugin_your_device = () => {
    return (
        <div style = { { marginTop: '25%', marginLeft: '0%', width: '75%' } } >
            <img src = { chargericon } style = { { marginLeft:'35%', width: '30%'} } />
            <h3 className = "text"> Plug-in Your device </h3>
            <p style = { { color:'#000000' } } >
                Make sure your device is plugged in and is near you. You will hear the Assistant greet you.
            </p>
        </div>
    )
}

const bluetooth_screen = () => {
    return (
        <div style = { { marginTop: '25%', marginLeft: '0%', width: '75%' } } >
            <img src = { bluetoothicon } style = { { marginLeft:'45%', width: '10%'} } />
            <h3 className = "text"> Turn on bluetooth </h3>
            <p style = { { color:'#000000' } } >
                Turned on your bluetooth is recomended for a quicked set up. Go to settings to enabled Bluetooth on your phone and return back here.
            </p>
        </div>
    )
}

const Information_div = ( { title, text, link } ) => {
    return (
        <div className = "information_div">
            <Link to = { link }>
                <h3 className = "text" > { title } </h3>
                { text }
                <p> &nbsp; </p>
            </Link>
        </div>
    )
}

export default index;