import React, {Fragment, useState, useCallback} from 'react'
import whiteHouse from '../../../../public/images/whiteHouse.png'
import blueHouse from '../../../../public/images/blueHouse.png'
import office from '../../../../public/images/office.png'

const style = {
    groupsContainer : {
        width : '80%',
        display : 'flex',
        flex : .7,  
        justifyContent : 'space-around', 
        flexDirection : 'column',
        //border: '1px solid red'
    },

    groupsContent : {
        display: 'flex',
        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center',
        border: '2px solid lightgray',
        borderRadius : '8px',
        height : '15%'
    },

    buttonsContent : {
        display:'flex', 
        justifyContent: 'space-around', 
        flexDirection:'row',
        width : '90%'
    },

    buttons : {
        width : '30%', 
        height : '50px', 
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor : '#F4F4F6',
        borderRadius : '10px',
        color : '#292F58', 
        fontWeight : 'bold', 
        fontSize : '18px',
    }

}


function AddDeviceGroup (props)  {

    const [checked, setCheck] = useState(false);

    const _handleEvent = useCallback( (e) => {
        setCheck( !checked)

        console.log(checked)
    })

    let isCheked = checked ? {backgroundColor : '#292F58', border:'transparet', color:'white'} : '';
    let isChekedImg = checked ? whiteHouse : blueHouse;
    let isCheckedText = checked ?  'white' : '#292F58';

    return(
        <Fragment>
            <div style={{width : '50%', textAlign : 'center', marginTop:30}}>
                <h1 style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px'}}>Add Group</h1>
                <h2 style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px', margin:'50px 0 50px 0'}}>Choose a home to create your device group</h2>
            </div>

            <div style={style.groupsContainer}>

                <div style={ {...style.groupsContent, ...isCheked} } onClick={() => _handleEvent() }>
                    <img style={{width : '7%'}} src={isChekedImg}></img>
                    <p style={{color : isCheckedText, fontWeight : 'bold', fontSize : '18px'}}>Summer House</p>
                </div>

                <div style={style.groupsContent}>
                    <img style={{width : '7%'}} src={blueHouse}></img>
                    <p style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px'}}>Home1</p>
                </div>

                <div style={style.groupsContent}>
                    <img style={{width : '7%'}} src={office}></img>
                    <p style={{color : '#292F58', fontWeight : 'bold', fontSize : '18px'}}>Office</p>  
                </div>

                <div style={ {...style.groupsContent, ...{backgroundColor: '#F4F4F6', border:'none', color : '#292F58', fontWeight : 'bold', } } } >
                   + Add Home
                </div>

            </div>

            <div style={style.buttonsContent}>
                <div style={ style.buttons }>Cancel</div>
                <div style={ {...style.buttons, ...isCheked} }>Continue</div>
            </div>
        </Fragment>
    )
}

export default AddDeviceGroup
