import React from 'react';
import noInternet from '../../../public/images/nointernet.png'

const styles = {
    container :{
        backgroundColor : '#FF155A',
        display: 'flex',
        alignItems : 'center',
        flexDirection : 'column',
        justifyContent : 'center',
        width: '100%',
        height : '10%'
    }
}

export default function internetStatus() {
    return (
        <div style={styles.container}>
            <img src={noInternet} style={{width : '10%'}} ></img>
            <p>Oops. Looks like there´s no internet connection...</p>
        </div>
    )
}
