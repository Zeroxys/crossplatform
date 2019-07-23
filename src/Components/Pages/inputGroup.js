import React from 'react'

let style = {
    content : {
        width : '100%'
    }
}

const InputGroup = ({children}) => {

    return(
        <form className="addGroupForm">
            <label style={{color : '#A6A8BA'}} htmlFor="add">Name</label>
            <input id="add" placeholder="House Name"></input>

            {children}

            <div className="buttonsContent">
            <input className="groupButtons" type="submit" value="Cancel"></input>
            
            {/*<Link to={{pathname: "/user/device/deviceGroups", search: `?group=${switcher}`}}>
                <input className="groupButtonsConfirm" 
                    type="submit" 
                    style={{color: switcher ? '#fefefe': '#A6A8BA', background: switcher ? '#292F58' : '#F4F4F6'}} 
                    disabled={!switcher}
                    value="Continue"
                    onClick={ (e) => getHistory(e)} >
                </input>
            </Link>*/}

            </div>
         </form>
    )

}


export default InputGroup

