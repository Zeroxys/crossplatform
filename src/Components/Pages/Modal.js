import React from 'react';

let styles = {
    modalContant : {
        borderRadius: '40px',
        width : '90%',
        color : 'white',
        backgroundColor : '#292F58',
        display: 'flex',
        justifyContent : 'center',
        alignItems :'center',
        position:'absolute',
        top: '25%',
        height : '50vh',
        animation : 'slideUp 2s forwards'
    }
}

export default function Modal() {
    return (<div style={styles.modalContant}>
        modal
    </div>)
}
