import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './slideMenu.css';



export default function(props) {

    console.log('is open', props.isOpen)

    let slideMenu = props.isOpen ? (<div ref={props.slideRef} className={props.isOpen ? "slideAnimation":"sliderContent"}>
                                        <section className="slideMenuContent">
                                            Add Device <FontAwesomeIcon icon={faPlusCircle}/>
                                        </section>
                                        <section className="linksContainer">
                                            <span className="Line"> </span>
                                            <p>Routines</p>
                                            <p>gigaaa Service Store</p>
                                            <p>Wallet</p>
                                            <p>Tips & Tutorials</p>
                                            <span className="Line"></span>
                                            <p>Activity</p>
                                            <p>Settings</p>
                                            <p>Help & Feedback</p>
                                            <p>About</p>
                                        </section>
                                    </div>) : ''


    return (<Fragment>{slideMenu}</Fragment>)

}
