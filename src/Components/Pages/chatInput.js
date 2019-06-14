import React, {Fragment} from 'react';
import '../../App.css';
import { NONAME } from 'dns';



export default function chatInput () {
    return (
        <form className="chatInput">
            <div className="formTypeHere">
                <input placeholder="Type here..."/>
                <input style={{backgroundColor : 'transparent'}} type="submit" value=">"></input>
            </div>
        </form>
    )
}

