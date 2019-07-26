import React, {useState} from 'react'

const lenguages = ['English', 'Spanish']
const style = {
    color: '#292F58',
    fontWeight: 'bold',
    width: '100%',
    background: 'transparent',
    border: '1px solid #292F58',
    height: '35px',
    borderRadius: '10px',
    fontSize : '20px',
    textAlign : 'center'
}

const ComboBox = (props) => {

    const [screen, setScreen] = useState(false)

    let options = lenguages.map( (el, i) => {
        return <option value={el} key={i}>{el}</option>
    })

    return (
        <div style={{width : '85%', marginTop : '5%', display : 'flex', justifyContent : 'center', flexDirection : 'column'}}>
            <h2 style={{textAlign : 'center', margin : '10px 0 30px 0',     color: '#292F58',}}>Language</h2>
            <select style= {style}>
                {options}
            </select>
        </div>
    )
}

export default ComboBox


