import React, { useState } from 'react';
import Menu from '../Main/Menu/Menu';
import AllDevice from './AllDevice'

import Home from './AllDevice/home'
import addHome from './AllDevice/addHome'

import { Route, Link } from 'react-router-dom'

import { CarouselProvider, Slider, Slide, ButtonNext, Dot, ButtonBack} from 'pure-react-carousel';

import chargericon from '../../../public/images/devices/charger.svg'
import bluetoothicon from '../../../public/images/devices/bluetooth.svg'

import logo from '../../../public/images/logo.png'
import nounfound from '../../../public/images/nounfound.png'
import ok from '../../../public/images/ok.png'
import nounSync from '../../../public/images/nounSync.png'
import group from '../../../public/images/group.png'

// import '../Main/index.css'
// import './index.css'

const Device_header = () => {
    return (
        <div className = "deviceContent">
            <h3 className = "text" > Summer House </h3>
            <ul className="deviceMenu">
                <li><Link to = "/user/device/smart-home"> Groups </Link></li>
                <li><Link className = "active" to = "/user/device/allDevices"> All Devices </Link></li>
            </ul>
            {/* <FilterList/> */}
        </div>
    )
}

const Index = ( props ) => {

    console.log('index params ---->', props.match)

    return (
        <div className="interfaceContent">
            <Device_header/>
            <Route path = "/user/device/allDevices" exact component = { AllDevice } />
            <Route path = "/user/device/smart-home" exact component = { SmartHome } />
            <Route path = "/user/device/allDevices/addDevice" exact component = { AddDevice } />
            
            <Route path = "/user/device/smart-home/" exac component = {  Home /*SmartHome*/ } />
            <Route path = "/user/device/addHome/" exac component = {  addHome } />
            <Menu/>
        </div>
    );
};

const SmartHome = () => {
    return (
        <h1>Smart home</h1>
    )
}

const AddDevice = () =>{
    const [ type, setType ] = useState('')

    const setInside = () => {
        console.log('set inside')
        setType( 'inside' )
    }

    const setBluetooth = () => {
        console.log('set bluetooth')
        setType( 'bluetooth' )
    }

    return (
        <CarouselProvider
            naturalSlideWidth = { 100 }
            naturalSlideHeight = { 125 }
            totalSlides = { 14 }
            // dragEnabled = { false }
            style = { { height: '80%', width: '100%' } }
        >
            <Slider style = { { height: '100%' } } >
                <Slide index = { 0 } > <InformationDiv type = { type == 'inside' ? setBluetooth : setInside } /> </Slide>
                <Slide index = { 1 } > <PluginYourDevice /> </Slide>
                <Slide index = { 2 } > <BluetoothScreen/> </Slide>

                {
                    type == 'inside' ? (
                        gigaa_inside.map( ( inside, index ) => <Slide key = { index } index = { index + 3 } >
                            <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%', justifyContent: 'center' } } >
                                { inside.img ? <img src = { inside.img } style = { { width: '25%' } } /> : null }
                                { inside.context }
                            </div>
                        </Slide> )
                    ) : (
                        // gigaa_bluetooth.map( ( inside, index ) => <Slide key = { index } index = { index + 3 } >
                        //     <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%', justifyContent: 'center' } } >
                        //         { inside.img ? <img src = { inside.img } style = { { width: '25%' } } /> : null }
                        //         { inside.context }
                        //     </div>
                        // </Slide> )
                        null
                    )
                }

            </Slider>
        </CarouselProvider>
    )
}

// Common screens

const InformationDiv = ( { type } ) => {
    return (
        <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center' } } >
            <ButtonNext style = { { width: '70%', marginTop: '5%', border:'none' } } onClick = { () => type()  } >
                <div className = "information_div">
                    <h3 className = "text" > Gigaaa Inside Devices </h3>
                    <p> You can choose this device type if your device has <strong className = "text"> "gigaaa Inside" </strong> label on it. This means your device is powered by gigaaa assistant </p>
                    <p> &nbsp; </p>
                </div>
            </ButtonNext>
            <ButtonNext style = { { width: '70%', marginTop: '5%', border:'none' } } onClick = { () => type() } >
                <div className = "information_div">
                    <h3 className = "text" > Works with gigaaa Assistant </h3>
                    <p> You can choose this device type if your device is compatible with gigaaa Assistant. </p>
                    <p> &nbsp; </p>
                </div>
            </ButtonNext>
        </div>
    )
}

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

const gigaa_inside = 
[
    {
        id: 'Scanning',
        img: logo,
        context: <div> 
            <h3 className = "text"> Scanning for nearby devices </h3> <p style = { { color: '#000000' } } > This may take a while... </p> 
        </div>
    },
    {
        id: 'FoundDevice',
        img: nounfound,
        context: <div> 
            <h3 className = "text"> { '<device name> found' } </h3>
            <p style = { { color: '#000000' } } > Is this the device you would like to set up? </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1', width: '100%' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Yes </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'ConnectingDevice',
        img: logo,
        context: <div>
            <h3 className = "text"> Connecting to </h3>
            <h3 className = "text"> { '<device name>' } </h3>
            <p style = { { color: '#000000' } } > Your phone may disconnect from Wi-Fi during setup. </p>
        </div>
    },
    {
        id: 'ConncectedDevice',
        img: ok,
        context: <div>
            <h3 className = "text"> Connected to </h3>
            <h3 className = "text"> { '<device name>' } </h3>
            <p style = { { color: '#000000' } } > { ' You will hear a sound on <device-name> to make sure you’re connected to the right device. Didn’t hear the sound? Try again. ' } </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1',  width: '100%' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Yes </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'ChooseYourHome',
        context: <div>
            <h3 className = "text"> Choose your home </h3>
            <p style = { { color: '#000000' } } > { 'This will help you name and organize your <device name> to control it easily.' } </p>
            <label style = { { color : '#A6A8BA' } } htmlFor = "add" > Device Name </label><br/>
            <input type = "text" style = { { color: '#292F58', borderRadius: '5px', border: '1px solid black', height: '1.7em', fontZize:' 1.3em', fontWeight: '600', width: '100%' } } placeholder = "<Device Name>" /><br/>
            <label style = { { color : '#A6A8BA' } } htmlFor = "add" > Home Options </label>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1',  width: '100%' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Yes </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'SelectWifiNetwork',
        context: <div>
            <h3 className = "text"> Select your Wi-Fi network </h3>
            <p style = { { color: '#000000' } } > { 'Select the Wi-Fi network you would like to connect your device.' } </p>
            <input id = "add" type = "text" style = { { color: '#292F58' } } placeholder = "House Name" />
            <input id = "add" type = "text" style = { { color: '#292F58' } } placeholder = "House Name" />
            <h3 className = "text"> Use the same Wi-Fi network to setup other devices </h3>
            <label style = { { color : '#A6A8BA' } } htmlFor = "add" > Home Options </label>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1',  width: '100%' } } >
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Continue </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'ConnectingToYourWifi',
        img: logo,
        context: <div> 
            <h3 className = "text"> Connecting to your Wi-Fi network </h3>
            <p style = { { color: '#000000' } } > <strong className = "text"> { '<device name>' } </strong> is now connecting to <strong className = "text"> { '<Wi-Fi network name>' } </strong> </p>
        </div>
    },
    {
        id: 'ConnectedToYourWifi',
        img: ok,
        context: <div>
            <h3 className = "text"> Connected to your Wi-Fi network </h3>
            <p style = { { color: '#000000' } } > <strong className = "text"> { '<device name>' } </strong> connected to  <strong className = "text"> { '<Wi-Fi network name>' } </strong> successfully </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1',  width: '100%' } } >
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Continue </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'Sync',
        img: nounSync,
        context: <div> 
            <h3 className = "text"> Sync your Assistant </h3>
            <p style = { { color: '#000000' } } > You can use customized settings of your assistant on your device. </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1', width: '100%' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Sync </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'AssistantReady',
        img: logo,
        context: <div> 
            <h3 className = "text"> Getting your assistant ready </h3> <p style = { { color: '#000000' } } > Your assistant soon will be ready to use with your personal settings on this device. </p> 
        </div>
    },
    {
        id: 'AllDone',
        img: group,
        context: <div> 
            <h3 className = "text"> All Done! </h3>
            <p style = { { color: '#000000' } } > You can start using gigaaa Assistant on your device. Say “Hey gigaaa” to wake up your device so the Assistant can respond to your commands. </p> 

            <h3 className = "text"> Let’s ask gigaaa: </h3>
            <h5 className = "text"> “Hey gigaaa, What can you do for me?” </h5>
            <p style = { { color: '#000000' } } > You can always learn more from Tips & Tutorials on the side menu. </p> 
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1', width: '100%' } } >
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Get started </ButtonNext>
            </div>
        </div>
    },
]


// gigaaa bluetooth
const gigaa_bluetooth = 
[
    {
        id: 'Scanning',
        img: logo,
        context: <div> 
            <h3 className = "text"> Continue setup without Bluetooth </h3>
            <p style = { { color: '#000000' } } > { 'Connect to your device’s <gigaaa-xxx> Wi-Fi hotspot in Wi-Fi settings. Then return to gigaaa app to proceed with the setup.' } </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Go to settings </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'ConnectingDevice',
        img: logo,
        context: <div>
            <h3 className = "text"> Connecting to </h3>
            <h3 className = "text"> { '<device name>' } </h3>
            <p style = { { color: '#000000' } } > Your phone may disconnect from Wi-Fi during setup. </p>
        </div>
    },
    {
        id: 'ConncectedDevice',
        img: ok,
        context: <div>
            <h3 className = "text"> Connected to </h3>
            <h3 className = "text"> { '<device name>' } </h3>
            <p style = { { color: '#000000' } } > { ' You will hear a sound on <device-name> to make sure you’re connected to the right device. Didn’t hear the sound? Try again. ' } </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1',  width: '100%' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Yes </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'ChooseYourHome',
        context: <div>
            <h3 className = "text"> Choose your home </h3>
            <p style = { { color: '#000000' } } > { 'This will help you name and organize your <device name> to control it easily.' } </p>
            <label style = { { color : '#A6A8BA' } } htmlFor = "add" > Device Name </label><br/>
            <input type = "text" style = { { color: '#292F58', borderRadius: '5px', border: '1px solid black', height: '1.7em', fontZize:' 1.3em', fontWeight: '600', width: '100%' } } placeholder = "<Device Name>" /><br/>
            <label style = { { color : '#A6A8BA' } } htmlFor = "add" > Home Options </label>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1',  width: '100%' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Yes </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'SelectWifiNetwork',
        context: <div>
            <h3 className = "text"> Select your Wi-Fi network </h3>
            <p style = { { color: '#000000' } } > { 'Select the Wi-Fi network you would like to connect your device.' } </p>
            <input id = "add" type = "text" style = { { color: '#292F58' } } placeholder = "House Name" />
            <input id = "add" type = "text" style = { { color: '#292F58' } } placeholder = "House Name" />
            <h3 className = "text"> Use the same Wi-Fi network to setup other devices </h3>
            <label style = { { color : '#A6A8BA' } } htmlFor = "add" > Home Options </label>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1',  width: '100%' } } >
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Continue </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'ConnectingToYourWifi',
        img: logo,
        context: <div> 
            <h3 className = "text"> Connecting to your Wi-Fi network </h3>
            <p style = { { color: '#000000' } } > <strong className = "text"> { '<device name>' } </strong> is now connecting to <strong className = "text"> { '<Wi-Fi network name>' } </strong> </p>
        </div>
    },
    {
        id: 'ConnectedToYourWifi',
        img: ok,
        context: <div>
            <h3 className = "text"> Connected to your Wi-Fi network </h3>
            <p style = { { color: '#000000' } } > <strong className = "text"> { '<device name>' } </strong> connected to  <strong className = "text"> { '<Wi-Fi network name>' } </strong> successfully </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1',  width: '100%' } } >
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Continue </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'Sync',
        img: nounSync,
        context: <div> 
            <h3 className = "text"> Sync your Assistant </h3>
            <p style = { { color: '#000000' } } > You can use customized settings of your assistant on your device. </p>
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1', width: '100%' } } >
                <ButtonBack style = { { width:'40%', border:'#707070', background: '#F4F4F6', borderRadius: '0.5em', minHeight: '30px', textAlign: 'center' } } > Cancel </ButtonBack>
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Sync </ButtonNext>
            </div>
        </div>
    },
    {
        id: 'AssistantReady',
        img: logo,
        context: <div> 
            <h3 className = "text"> Getting your assistant ready </h3> <p style = { { color: '#000000' } } > Your assistant soon will be ready to use with your personal settings on this device. </p> 
        </div>
    },
    {
        id: 'AllDone',
        img: group,
        context: <div> 
            <h3 className = "text"> All Done! </h3>
            <p style = { { color: '#000000' } } > You can start using gigaaa Assistant on your device. Say “Hey gigaaa” to wake up your device so the Assistant can respond to your commands. </p> 

            <h3 className = "text"> Let’s ask gigaaa: </h3>
            <h5 className = "text"> “Hey gigaaa, What can you do for me?” </h5>
            <p style = { { color: '#000000' } } > You can always learn more from Tips & Tutorials on the side menu. </p> 
            <div style = { { marginTop: '10%', display: 'flex', justifyContent: 'space-around', flex: '1', width: '100%' } } >
                <ButtonNext style = { { width:'40%', border:'#707070', background: '#292F58', color: '#ffffff', borderRadius: '0.5em', minHeight: '30px' } } > Get started </ButtonNext>
            </div>
        </div>
    },
]


export default Index;