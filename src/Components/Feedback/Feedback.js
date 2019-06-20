import React, {Component} from 'react';
import Sliders from './Sliders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import voice from '../../../public/images/mic.png';
import voiceTill from '../../../public/images/mic_till.png';
import './feedback.css'
import Menu from '../Main/Menu/Menu';
import { throwStatement } from '@babel/types';

export default function ( { closefeedback, feedbackClass } ){

        // let animate = this.state.close ? "feedbackUp" : "asd"
        let animate = this.state.close ? "feedbackUp" : "asd"
        let micImage = this.state.micListen ? <img src={voiceTill} className="voiceImage" onClick={ (e) => this.setMic(e)}/> : <img src={voice} className="voiceImage2" />
        return (
            <div className={`feedbackContainer ${feedbackClass}`}>
                <div onClick={ closefeedback } className="closeFeedback">
                    <FontAwesomeIcon icon={faTimes} color="#292F58" size="1x"/>
                </div>

                <div className="feedbackInstructions">
                    <h3>Give Feedback</h3>
                    <p>Your opinion is important to us. This way, we can keep
                        improving our app
                    </p>
                    <p>Please select your feedback category below.</p>
                </div>

                <div className="checkboxMainContent">

                    <Sliders title="I´ve encountered a technical issue..."
                        checkContent={[
                            'The Service crashed',
                            'A Wrong service was triggered',
                            'The functionality is not working as it should',
                            'other'
                        ]}/>

                    <Sliders title="I´ve encountered a content issue..."
                        checkContent={[
                            'Content is missing',
                            'Wrong content is displayed',
                            'Report false information',
                            'Report copyrigth infrigement',
                            'other'
                        ]}/>

                    <Sliders title="I´ve got a question about..."
                        checkContent={[
                            'the gigaaa Assistant',
                            'Services',
                            'Verticals',
                            'Forms',
                            'Other'
                        ]}/>

                    <Sliders title="I´ve got a question about..."
                        checkContent={[
                            'Features & Functions',
                            'UX/UI Design',
                            'Services',
                            'Verticals',
                            'Forms',
                            'Other'
                        ]}/>

                </div>    

                <p>Please elaborate your feedback by commenting below! <span className="required">*required</span></p>    
                    
                <div className="voiceCommand">
                    <div className="voiceInstructions">
                        {micImage}
                        <p>Give feedback via voice-command</p>
                    </div>

                    <div className="commentsContent">
                        <textarea className="comments" name="textarea" placeholder="Or Type here..."/>
                        <input className="commentSubmit" type="submit" value="Submit"></input>
                    </div>
                </div>
            </div>
        )
    }