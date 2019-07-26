import React from 'react'
import './index.css'

const Location = () => {
    return (
        <div style={{width : '85%', marginTop : '5%', display : 'flex', justifyContent : 'center', flexDirection : 'column'}}>
            <h2 style={{textAlign : 'center', margin : '10px 0 30px 0',     color: '#292F58' }} > Location </h2>

            <div style={{display : 'flex', justifyContent : 'space-between', flexDirection:'column', height : '10vh'}}>
                <h3>Location</h3>
                <input placeholder="Hamburg, Germany" style={{borderRadius: '10px', border:'1px solid lightgray', height:'30px', paddingLeft:'10px', fontWeight:'bold'}}></input>
                <input className="selectCheck" type="checkbox" value="Set Automatically"></input> Set Automatically
            </div>
            
        </div>
    )
}

export default Location
