import React, {Component} from 'react';
import Sliders from './Sliders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import voice from '../../../public/images/mic.png'
import './feedback.css'

export default class Feedback extends Component {

    constructor(props) {
        super()
    }

    render () {
        return (
            <div className="feedbackContainer">
                <FontAwesomeIcon icon={faTimes} color="#292F58" size="1x"/>
                <div className="feedbackInstructions">
                    <h3>Give Feedback</h3>
                    <p>Your opinion is important to us. This way, we can keep
                        improving our app
                    </p>
                    <p>Please select your feedback category below</p>
                </div>

                <div>

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

                <p>Please elaborate your feedback by commenting below! <span>*required</span></p>    
                    
                <div className="voiceCommand">
                    <img src={voice} className="voiceImage"/>
                    <p>Give feedback via voice-command</p>
                    <textarea className="comments" name="textarea"></textarea>
                    <input type="submit" value="Submit"></input>
                </div>
            </div>
        )
    }
}
