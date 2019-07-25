import React, {useState} from 'react'

const lenguages = ['english', 'esp', 'polako']
const style = {
    color: '#292F58',
    fontWeight: 'bold',
    width: '85%',
    background: 'transparent',
    border: '1px solid #292F58',
    height: '35px',
    borderRadius: '4px',
}

const ComboBox = (props) => {

    const [screen, setScreen] = useState(false)

    let options = lenguages.map( (el, i) => {
        return <option value={el} key={i}>{el}</option>
    })

    return (
        <select style= {style}>
            {options}
        </select>
    )
}

export default ComboBox


