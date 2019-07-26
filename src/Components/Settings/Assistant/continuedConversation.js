import React from 'react'
import ReactToggle from 'react-toggle'

const continuedConversation = () => {

    return (
        <div style={{width : '85%', marginTop : '5%', display : 'flex', justifyContent : 'center', flexDirection : 'column'}} >
            <h2 style={{textAlign : 'center', margin : '10px 0 30px 0',     color: '#292F58' }}>Continued Conversation</h2>
            
            <div style={{display : 'flex', justifyContent : 'space-between',}}>
                <div>
                    <h3 style={{color: '#292F58' }}>Continued Conversation</h3>
                    <span style={{color: 'lightgray' }}>We should prepare an explanation here</span>
                </div>
                <ReactToggle className="toggleColor" icons={false}></ReactToggle>
            </div>
        </div>
    )

}

export default continuedConversation
