import React, {useState} from 'react'
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

    groupsContent : {
        display : 'flex',
        justifyContent : 'center',
        flexDirection  : 'column',
        width : '100%',
        height :'43vh',
    },

    box : {
        border: '2px solid lightgray',
        borderRadius : 8,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : '40%',
        height : '30px'
    }
}

const AddGroup = () => {

    let [value, setValue] = useState('')



    let groups = groupNames.map( (el, i) => {
        return (
            <div id={i} key={i} style={style.box} onClick = {() => setValue(value = el)}>
                <p style={{color : 'black', fontWeigsht:'bold'}}>{el}</p>
            </div>
        )
    })

    console.log(value)

    return (
        <InputGroup newValue={value}>

            <div style={style.content}>
                <div style={ style.groupsContent }>
                <p style={{color : 'black', textAlign : 'left', fontWeight:'bold', color:'lightgray', margin:' 0 0 15px 36px'}}>Suggested Group Names</p>
                    <div style={
                        {
                        display : 'flex',
                        justifyContent : 'space-around',
                        flexWrap : 'wrap',
                        height : '25vh'
                    }}>
                        {groups}
                    </div>
                </div>
            </div>

        </InputGroup>
    )
}

export default AddGroup
