import React from 'react';
import favorite from '../../../../public/images/devices/favorite.png'
import light from '../../../../public/images/devices/light.png'
import mirror from '../../../../public/images/devices/mirror.png'
import plug from '../../../../public/images/devices/plug.png'
import sensor from '../../../../public/images/devices/sensor.png'
import smartTv from '../../../../public/images/devices/smartTv.png'
import thermo from '../../../../public/images/devices/thermo.png'

const list = [
    { id:1, text:'Favorite',image:favorite},
    { id:2, text:'Ligth',image:light},
    { id:3, text:'Mirror',image:mirror},
    { id:4, text:'Plug',image:plug},
    { id:5, text:'Sensor',image:sensor},
    { id:6, text:'SmartTV',image:smartTv},
    { id:7, text:'Thermo',image:thermo},
]

const filterList = props => {
    return (
        <div>
            <ul style = { styles.ul } >
            {
                list.map( item => <li key = { item.id } style = { styles.li } >
                    <img src = { item.image } style = { styles.image } />
                    <p style = { styles.text } > { item.text } </p>
                </li> )
            }
            </ul>
        </div>
    );
};

const styles = ({
    image:{
        width:'100%',
        marginRight:'5%'
    },
    li:{
        width: '10%',
        padding:'9px'
    },
    text:{
        color:'#000',
        fontSize: '10%'
    },
    ul:{
        marginTop:'0px'
    }
})

export default filterList;