import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './slideMenu.css';



export default function(props) {

    console.log('is open', props.isOpen)

    const list_1 = [
        'Routines',
        'gigaaa Service Store',
        'Wallet'
    ]

    const list_2 = [
        'Activity',
        'Settings',
        'Help & Feedback',
        'About'
    ]

    let slider = props.isOpen ? (
        <div ref={props.slideRef} className={props.isOpen ? "slideAnimation":"sliderContent"}>
            <section className="slideMenuContent">
                Add Device <FontAwesomeIcon icon={faPlusCircle}/>
            </section>
            <section className="linksContainer">
                    <span className="Line"> </span>
                    {
                        list_1.map( item => <p key = { item } > { item } </p> )
                    }
                    <Link to="/Tips"><p>Tips & Tutorials</p></Link>
                    <span className="Line"></span>
                    {
                        list_2.map( item => <p key = { item } > { item } </p> )
                    }
                    <Link to="/" onClick={(e) => props.logout(e)}><p>Log Out</p></Link>
            </section>
        </div>) : null

    return <Fragment>{slider}</Fragment>

}
