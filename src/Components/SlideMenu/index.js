import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './slideMenu.css';



export default function(props) {

    console.log('is open', props.isOpen)

    let id = 0;
    const menu = [
        { id:id++, text: 'Routines', to: '/user' },
        { id:id++, text: 'gigaaa Service Store', to: '/user' },
        { id:id++, text: 'Wallet', to: '/user' },
        { id:id++, text: 'Tips & Tutorials', to: '/Tips', line:true },
        { id:id++, text: 'Activity', to: '/user' },
        { id:id++, text: 'Settings', to: '/settings' },
        { id:id++, text: 'Help & Feedback', to: '/user', action: props.openfeedback },
        { id:id++, text: 'About', to: '/user' },
        { id:id++, text: 'Log Out', to: '/', action: props.logout },
    ]

    let slider = props.isOpen ? (
        <div ref={props.slideRef} className={props.isOpen ? "slideAnimation":"sliderContent"}>
            <section className="slideMenuContent">
                Add Device <FontAwesomeIcon icon={faPlusCircle}/>
            </section>
            <section className="linksContainer">
                    <span className="Line"> </span>
                    {
                        menu.map( item => <Link key = { item.id } to = { item.to } style = { { color: '#FFFFFF' } } onClick = { item.action ? e => item.action(e) : null } > { item.text } { item.line ? <span className = "Line"/> : '' } </Link> )
                    }
                    {/* <Link to = "/user" onClick = { props.openfeedback } >custom</Link> */}
            </section>
        </div>) : null

    return <Fragment>{slider}</Fragment>

}
