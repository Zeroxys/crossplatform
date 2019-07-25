import React from 'react';
import Menu from '../Main/Menu/Menu';
import AllDevice from './AllDevice'

import Home from './AllDevice/home'
import addHome from './AllDevice/addHome'
import AddDeviceGroup from './AllDevice/adDeviceGroup'

import { Route, Link } from 'react-router-dom'

import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack} from 'pure-react-carousel';

import chargericon from '../../../public/images/devices/charger.svg'
import bluetoothicon from '../../../public/images/devices/bluetooth.svg'

import logo from '../../../public/images/logo.png'
import nounfound from '../../../public/images/nounfound.png'
import ok from '../../../public/images/ok.png'

import DeviceGroups from './AllDevice/deviceGroups'


import '../Main/index.css'
import './index.css'
import AddGroup from './AllDevice/addGroup';
import DeviceToGroup from './AllDevice/DeviceToGroup';
import GroupCreated from './AllDevice/groupCreated';

const DeviceHeader = (props) => {

    let params = new URLSearchParams(window.location.search)
    let myGroup = params.get('group')
    let show = "hide";

    if (myGroup ) {
        console.log('get Paramms !!!!', myGroup)
        show = ""
    }else {
        console.log('not params')
    }

    return (
        <div className = {`deviceContent ${show}`}>
            <h3 className = "text" > Summer House </h3>
            <ul className="deviceMenu">
                <li><Link to = "/user/device/smart-home"> Groups </Link></li>
                <li><Link className = "active" to = "/user/device/allDevices"> All Devices </Link></li>
            </ul>
            {/* <FilterList/> */}
        </div>
    )
}

const index = ({location}) => {

    return (
        <div className="interfaceContent">
            <DeviceHeader/>
            <Route path = "/user/device/allDevices" exact component = { AllDevice } />
            <Route path = "/user/device/allDevices/addDevice" exact component = { addDevice } />
            <Route path = "/user/device/allDevices/add-device-Group" exact component = { AddDeviceGroup } />

            <Route path = "/user/device/allDevices/add-group" exact component = { AddGroup } />
            <Route path = "/user/device/allDevices/add-device-to-group" exact component = { DeviceToGroup } />
            <Route path = "/user/device/allDevices/group-created" exact component = { GroupCreated } />

            <Route path='/user/device/deviceGroups' exac component={DeviceGroups} />
            <Route path = "/user/device/smart-home/" exac component = {  Home /*SmartHome*/ } />
            <Route path = "/user/device/addHome/" exac component = {  addHome } />
            <Menu/>
        </div>
    );
};

const addDevice = () => {
    return (
        <CarouselProvider
            naturalSlideWidth = { 100 }
            naturalSlideHeight = { 125 }
            totalSlides = { 14 }
            dragEnabled = { false }
            style = { { height: '80%', width: '100%' } }
        >
            <Slider style = { { height: '100%' } } >
                {/* <Slide index = { 0 } > <InformationDiv/> </Slide>
                <Slide index = { 1 } > <PluginYourDevice /> </Slide>
                <Slide index = { 2 } > <BluetoothScreen/> </Slide>
                <Slide index = { 3 } > <Scanning/> </Slide> */}
                <Slide index = { 4 } > <FoundDevice/> </Slide>
                {/* <Slide index = { 5 } > <ConnectingDevice/> </Slide> */}
                <Slide index = { 6 } > <ConncectedDevice/> </Slide>
            </Slider>
        </CarouselProvider>
    )
}

// Common screens

const PluginYourDevice = () => {
    return (
        <div style = { { width: '70%' } } >
            <img src = { chargericon } style = { { marginLeft:'35%', width: '30%'} } />
            <h3 className = "text"> Plug-in Your device </h3>
            <p style = { { color:'#000000' } } >
                Make sure your device is plugged in and is near you. You will hear the Assistant greet you.
            </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } >Continue</ButtonNext>
            </div>
        </div>
    )
}

const BluetoothScreen = () => {
    return (
        <div style = { { width: '70%' } } >
            <img src = { bluetoothicon } style = { { marginLeft:'45%', width: '10%'} } />
            <h3 className = "text"> Turn on bluetooth </h3>
            <p style = { { color:'#000000' } } >
                Turned on your bluetooth is recomended for a quicked set up. Go to settings to enabled Bluetooth on your phone and return back here.
            </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } >Continue</ButtonNext>
            </div>
        </div>
    )
}

const InformationDiv = () => {
    return (
        <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center' } } >
            <ButtonNext style = { { width: '70%', marginTop: '5%', border:'none' } } >
                <div className = "information_div">
                    <h3 className = "text" > Gigaaa Inside Devices </h3>
                    <p> You can choose this device type if your device has <strong className = "text"> "gigaaa Inside" </strong> label on it. This means your device is powered by gigaaa assistant </p>
                    <p> &nbsp; </p>
                </div>
            </ButtonNext>
            <ButtonNext style = { { width: '70%', marginTop: '5%', border:'none' } } >
                <div className = "information_div">
                    <h3 className = "text" > Works with gigaaa Assistant </h3>
                    <p> You can choose this device type if your device is compatible with gigaaa Assistant. </p>
                    <p> &nbsp; </p>
                </div>
            </ButtonNext>
        </div>
    )
}

// gigaaa inside
const Scanning = () => {
    return (
        <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%' } } >
            <img src = { logo } style = { { width: '25%' } } />
            <h3 className = "text"> Scanning for nearby devices </h3>
            <p style = { { color: '#000000' } } > This may take a while... </p>
        </div>
    )
}

const FoundDevice = () => {
    return (
        <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%' } } >
            <img src = { nounfound } style = { { width: '25%' } } />
            <h3 className = "text"> { '<device name> found' } </h3>
            <p style = { { color: '#000000' } } > Is this the device you would like to set up? </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1', width: '100%' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Yes </ButtonNext>
            </div>
        </div>
    )
}

const ConnectingDevice = () => {
    return (
        <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%' } } >
            <img src = { logo } style = { { width: '25%' } } />
            <h3 className = "text"> Connecting to </h3>
            <h3 className = "text"> { '<device name>' } </h3>
            <p style = { { color: '#000000' } } > Your phone may disconnect from Wi-Fi during setup. </p>
        </div>
    )
}

const ConncectedDevice = () => {
    return (
        <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%' } } >
            <img src = { ok } style = { { width: '25%' } } />
            <h3 className = "text"> Connected to </h3>
            <h3 className = "text"> { '<device name>' } </h3>
            <p style = { { color: '#000000' } } > { ' You will hear a sound on <device-name> to make sure you’re connected to the right device. Didn’t hear the sound? Try again. ' } </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1',  width: '100%' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Yes </ButtonNext>
            </div>
        </div>
    )
}

export default index;
