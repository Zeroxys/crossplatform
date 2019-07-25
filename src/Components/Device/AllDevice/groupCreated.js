import React from 'react'
import Toggle from 'react-toggle'
import plugImage from '../../../../public/images/devices/plug.png'
import addGroup from '../../../../public/images/addGroup.png'
import cancelGroup from '../../../../public/images/cancelGroup.png'
import "react-toggle/style.css"

const style = {

    content : {
        width : '80%',
        border: '2px solid lightgray',
        borderRadius : '8px',
        minHeight : '30vh',
        display : 'flex',
        justifyContent : 'flex-start',
        flexDirection : 'column',
    }
    ,
    devices : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        margin : '10px 0 0 0',
        width : '85%',
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

const GroupCreated = () => {

    return(

        <div style={style.content}>

            <div style = {{marginTop:'10px',marginLeft : '30px', display : 'flex', justifyContent:'space-between', width : '85%'}}>
                <div style={{display:'flex', width:'40%', justifyContent:'space-around', alignItems : 'center'}}>
                    <h2>Lights</h2> <span style={{color : 'lightgray'}}>4 devices</span>
                </div>
                <Toggle className="toggleColor" icons={false}/>
            </div>


            <div style= { {...style.devices, ...{marginLeft : '30px'}} }>
                <div style={{display:'flex', alignItems : 'center',}}>
                    <img style={style.circle} src={plugImage}></img>
                    <p style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px'}}>Ceiling Light</p>
                </div>
                <Toggle className="toggleColor" icons={false}/>
            </div>

            <div style= { {...style.devices, ...{marginLeft : '30px'}} }>
                <div style={{display:'flex', alignItems : 'center'}}>
                    <img style={style.circle} src={plugImage}></img>
                    <p style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px'}}>Ceiling Light</p>
                </div>
                <Toggle className="toggleColor" icons={false}/>
            </div>

            <div style= { {...style.devices, ...{marginLeft : '30px'}} }>
                <div style={{display:'flex', alignItems : 'center'}}>
                    <img style={style.circle} src={plugImage}></img>
                    <p style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px'}}>Ceiling Light</p>
                </div>
                <Toggle className="toggleColor" icons={false}/>
            </div>

            <div style= { {...style.devices, ...{marginLeft : '30px'}} }>
                <div style={{display:'flex', alignItems : 'center'}}>
                    <img style={style.circle} src={plugImage}></img>
                    <p style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px'}}>Ceiling Light</p>
                </div>
                <Toggle className="toggleColor" icons={false}/>
            </div>
        </div>
    ) 

};

export default GroupCreated;
