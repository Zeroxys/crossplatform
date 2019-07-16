import React, {Component} from 'react';
import Sliders from './Sliders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import voice from '../../../public/images/mic.png';
import voiceTill from '../../../public/images/mic_till.png';
import './feedback.css'
import Menu from '../Main/Menu/Menu';

export default class Feedback extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            close : false,
            micListen : true
        }

        this.setClose = this.setClose.bind(this);
        this.setMic = this.setMic.bind(this);
    }

    setClose() {
        console.log('se cierra')
        this.setState(prevState => {
            return {
                close : prevState.close = true
             }
        })
    }

    setMic(e) {
        console.log('click')
        this.setState( prevState => {
            return  {
                micListen : prevState.micListen = false
            }
        })

        this.handleListen()
        console.log(this.state.micListen)
    }

    handleListen(){
        

        const SpeechRecognition = window.webkitSpeechRecognition || SpeechRecognition 
        const recognition = new SpeechRecognition()
    
        recognition.continous = true
        recognition.interimResults = true
        recognition.lang = 'en-US'
        
    
        recognition.start()
    
        let finalTranscript = ''
    
        recognition.onresult = e => {
          console.log(e.resultIndex)
          console.log(e.results)
    
          let interimTranscript = ''
    
          for (let i = e.resultIndex; i < e.results.length; i++) {
            const transcript = e.results[i][0].transcript;
            
            console.log(transcript)
    
            this.setState( prevState => {
              return {
                chatText : prevState.chatText = transcript
              }
            })
    
            if (e.results[i].isFinal) finalTranscript += transcript + ' ';
            else interimTranscript += transcript;
          }
    
    
        }
      }

    render () {

        let animate = this.state.close ? "feedbackUp" : "asd"
        let micImage = this.state.micListen ? <img src={voiceTill} className="voiceImage" onClick={ (e) => this.setMic(e)}/> : <img src={voice} className="voiceImage2" />

        return (
            <div className={`feedbackContainer ${animate}`}>
                <div onClick={() => this.setClose()} className="closeFeedback">
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
}
