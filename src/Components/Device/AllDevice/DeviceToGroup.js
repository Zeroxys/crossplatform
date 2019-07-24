import React from 'react';
import plugImage from '../../../../public/images/devices/plug.png'

const allDevices = ['Aquarium Water Pump', 'LED Light Strip', 'Vierhaus Smart Mirror', 'Pet Food dispenser', 'Charger',]

const style = {

    devicesContent : {  
        height : '80vh',
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems : 'center',
        flexDirection : 'column'
    },

    devices : {
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems : 'center',
        border: '1px solid red',
        margin : '10px 10px',
        width : '100%'
    },

    circle : {
        width : '60px',
        height : '60px ',
        borderRadius : '100%',
        margin : '10px 10px'
    }
}

const DeviceToGroup = () => {

    let renderDevices = allDevices.map( (el, i) => {
        return(
            <div style= {style.devices} key={i}>
                <p style={{color : 'black'}}>close icon</p>
                <img style={style.circle} src={plugImage}></img>
                <p style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px'}}>{el}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>Add devices to your grop</h2>

            <div>
                <p style={{color : '#292F58', width: '100%', textAlign:'left', fontWeight:'bold'}}>All Devices</p>

                <div style={style.devicesContent}>
                    {renderDevices}
                </div>

            </div>
        </div>
    )

}
 
export default DeviceToGroup