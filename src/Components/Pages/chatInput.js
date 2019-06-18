import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../../App.css';


const styles = {
    backgroundColor : 'transparent'
}

export default function chatInput (props) {
    return (
        <form className="chatInput">
            <div className="formTypeHere">

                <input placeholder="Type here..." defaultValue={props.text}/>
                <input style={styles} type="submit" value=">" onClick={ e => props.sendAudio(e) } ></input>

            </div>
        </form>
    )
}

