import React from 'react'
import {Link} from 'react-router-dom'

let style = {
    content : {
        width : '100%'
    },

    input : {
        border:'2px solid lightgray',
        borderRadius : '8px',
        height : '32px',
        fontWeight : 'bold',
        letterSpacing : '2'
    }
}

const InputGroup = ({children}) => {

    return(
        <form className="addGroupForm">
            <label style={{color : '#A6A8BA', marginBottom:'10px'}} htmlFor="add">Name</label>
            <input style={style.input} id="add" placeholder="House Name"></input>

            {children}

            <div className="buttonsContent">
            <input className="groupButtons" type="submit" value="Cancel"></input>
            
            <Link to={{pathname: "/user/device/deviceGroups", search: `?group=${'test'}`}}>
                <input className="groupButtonsConfirm" 
                    type="submit" 
                    //style={{color: switcher ? '#fefefe': '#A6A8BA', background: switcher ? '#292F58' : '#F4F4F6'}} 
                    //disabled={!switcher}
                    value="Continue"
                    //onClick={ (e) => getHistory(e)} 
                    >
                </input>
            </Link>

            </div>
         </form>
    )

}


export default InputGroup

