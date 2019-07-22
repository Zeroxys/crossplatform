import React, {Fragment, useState} from 'react'
import homeDevices from '../../../../public/images/homeGroup.png'
import configDevices from '../../../../public/images/configCircle.png'
import plusDevices from '../../../../public/images/plus.png'

const style = {
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : '40px',
        width : '85%'
    },
    
    buttonsContent :{
        textAlign : 'center'
    },

    imgConfig : {
        width: '17%',
        marginRight : '15px'
    },

    favDevices : {
        border: '1px solid lightgray',
        borderRadius : '10px',
        height : '25%',
        marginTop : '40px'
    },

    buttons : {
        display:'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : '10px',
        color : '#fefefe',
        backgroundColor : '#292F58',
        height : '18%',
        width : '60%',
        margin : '40px 0 0 45px'
    },

    text : {
        fontSize:'18px',
        letterSpacing: '1px',
        display:'flex', 
        justifyContent:'space-between', 
        width:'62%',
        textAlign:'initial',
        color : '#292F58', 
        fontWeight: 'bold', 
        margin : '10px 0  10px 35px'
    }

}


const deviceGroup = (props) => {

    return (
        <Fragment>

            <div style={style.container}>

                <div style={style.buttonsContent}>
                    <img style={style.imgConfig} src={homeDevices}></img>
                    <img style={style.imgConfig} src={configDevices}></img>
                </div>

                <div style={style.favDevices}>
                    <p style={style.text} > Favorite Devices <span style={{color : 'lightgray'}}>No Devices</span></p>

                    <div style={style.buttons}>
                       <img style={ {width : '18px', marginRight:'10px'}} src={plusDevices}></img>
                        <p style={{fontWeight : 'bold'}}> Add Favorite Devices</p>
                    </div>

                </div>

                <div style={style.favDevices}>
                    <p style={style.text}>Groups <span style={{color : 'lightgray'}}>No Groups</span></p>
                    
                    <div style={style.buttons}>
                        <img style={ {width : '18px', marginRight:'10px'}} src={plusDevices}></img>
                        <p style={{fontWeight : 'bold', color : '#fefefe'}}> Add Device Group</p>
                    </div>

                </div>

            </div>

        </Fragment>
    )
}
    

export default deviceGroup