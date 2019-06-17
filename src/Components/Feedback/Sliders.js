import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './feedback.css'

export default function Sliders (props) {

    let [showArrow, setArrow] = useState(false)
    
    let chekboxs = props.checkContent.map(el => {
        return (
            <div>
                <input type="checkbox" value="asd" />
                <label>{el}</label>
            </div>
        )
    }) 

    let content = showArrow ?  <FontAwesomeIcon icon={faAngleUp} color="#292F58" size="1x"/> : <FontAwesomeIcon icon={faAngleDown} color="#292F58" size="1x"/> 

    return (
        <div>
            <h4>{props.title}</h4>
            <div onClick={() =>  setArrow(true) } >
                {content}
            </div>
            {chekboxs}
        </div>
    )
} 
