import React from 'react';
import '../../App.css';

export default function chatInput (props) {
    return (
        <form className="chatInput">
            <div className="formTypeHere">

                <input className="typeHere" placeholder="Type here..." defaultValue={props.text}/>
                <input className="typeHereSubmit" type="submit" value=">" onClick={ e => props.sendAudio(e) } ></input>

            </div>
        </form>
    )
}

