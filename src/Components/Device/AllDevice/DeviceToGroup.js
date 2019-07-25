import React from 'react';
import plugImage from '../../../../public/images/devices/plug.png'
import addGroup from '../../../../public/images/addGroup.png'
import cancelGroup from '../../../../public/images/cancelGroup.png'

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
        margin : '10px 10px',
        width : '100%'
    },

    circle : {
        width : '60px',
        height : '60px ',
        borderRadius : '100%',
        margin : '10px 10px'
    },

    miniCircle : {
        width : '30px',
        height : '30px ',
        borderRadius : '100%',
        margin : '10px 10px'
    }
}

const DeviceToGroup = () => {

    let renderDevices = allDevices.map( (el, i) => {
        return(
            <div style= {style.devices} key={i}>
                <img style={style.miniCircle} src={addGroup}></img>
                <img style={style.circle} src={plugImage}></img>
                <p style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px'}}>{el}</p>
            </div>
        )
    })

    return (
        <div style={ {width:'90%', marginTop:'50px'} } >
            <h2 style={{textAlign : 'center', color : '#292F58', margin:'15px 15px '}}>Add devices to your group</h2>

            <div>
                <p style={{color : '#292F58', width: '100%', textAlign:'left', fontWeight:'bold', marginLeft:'60px'}}>All Devices</p>

                <div style={style.devicesContent}>
                    {renderDevices}
                </div>

            </div>
        </div>
    )

}
 
export default DeviceToGroup