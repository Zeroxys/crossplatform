import React, {Fragment} from 'react'
import InputGroup from '../../Pages/inputGroup'


let groupNames = ['Kitchen', 'Bedroom', 'Living Room', 'Downstairs', 'Office', 'Bathroom', 'Garage', 'Upstairs']
let style = {
    content : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        width : '100%'

    },
    box : {
        border: '2px solid lightgray',
        borderRadius : 8,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : '25%',
        height : '80'
    },

    groupsContent : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection  : 'column',
        width : '100%',
        height :'25%'
    }
}

const AddGroup = () => {

    let groups = groupNames.map( (el, i) => {
        return (
            <div id={i} key={i} style={style.box}>
                <p style={{color : 'black'}}>{el}</p>
            </div>
        )
    })

    return (
        <InputGroup>

            <div style={style.content}>
                <h2>Add Group</h2>
                <h3>Suggested Group Names</h3>
                <div style={ style.groupsContent }>
                    {groups}
                </div>
            </div>

        </InputGroup>
    )
}

export default AddGroup
