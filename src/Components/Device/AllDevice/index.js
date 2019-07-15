import React, { Component } from 'react';
import devicesImage from '../../../../public/images/all-devices-gray.png';

class AllDevice extends Component {
    render() {
        return (
            <div style = { styles.main } >
                <img src = { devicesImage } style = { styles.image } />
                <button style = { styles.button } > + Add Device </button>
            </div>
        );
    }
}

const styles = ({
    main:{
        width:'100%',
        height:'78vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    image:{
        filter:'grayscale(0%)',
        width: '15%',
        marginBottom: '2%',
    },
    button:{
        textDecoration: 'none',
        padding: '10px',
        fontWeight: '600',
        fontZize: '20px',
        color: '#ffffff',
        backgroundColor: '#292F58',
        borderRadius:' 6px',
        border: '1px solid #292F58',
        width: '35%',
    }
})

export default AllDevice;