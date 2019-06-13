import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './slideMenu.css';



export default function(props) {

    console.log('is open', props.isOpen)

    let slider = props.isOpen ? (
        <div ref={props.slideRef} className={props.isOpen ? "slideAnimation":"sliderContent"}>
            <section className="slideMenuContent">
                Add Device <FontAwesomeIcon icon={faPlusCircle}/>
            </section>
            <section className="linksContainer">
                    <span className="Line"> </span>
                    <p>Routines</p>
                    <p>gigaaa Service Store</p>
                    <p>Wallet</p>
                    <Link to="/Tips"><p>Tips & Tutorials</p></Link>
                    <span className="Line"></span>
                    <p>Activity</p>
                    <p>Settings</p>
                    <p>Help & Feedback</p>
                    <p>About</p>
                    <Link to="/"><p>Log Out</p></Link>
            </section>
        </div>) : null

    return <Fragment>{slider}</Fragment>

}
