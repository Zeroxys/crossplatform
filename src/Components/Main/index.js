import React, {Component, Fragment} from 'react';
import SlideMenu from '../SlideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import soundfile from '../../../public/sounds/mic_error.mp3';
import SpeechRecognition from "react-speech-recognition";
import ChatInput from '../Pages/chatInput'
import Menu from './Menu/Menu';
import Speech from 'react-speech';
import './index.css'


export default class Main extends Component {
  constructor(props) {
    super()
    this.state = {
      closeSlide : false,
    }

    this.pressOnVoice = this.pressOnVoice.bind(this);
    this.textInput =  false;
  }


  closeSlide(e) {
    this.setState( (prevState) => {
      return {
        closeSlide : !prevState.closeSlide
      }
    })
  }

  pressOnVoice(e) {
    e.target.classList.add('iconGigaaaAnimation')

    console.log(Speech)

    this.setState(prevState => {
      return {
        textInput : prevState.textInput = true
      }
    })

    console.log('must show a text input')

    let audio = new Audio(soundfile)
    audio.play()
  }  

  render(){

    let chatInput = this.state.textInput ? <ChatInput/> : null;

    return (
      <Fragment>
          <div className="burgerIcon" onClick={() => this.closeSlide()}>
              <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
          </div>

          <div className="interfaceContent">
          <SlideMenu isOpen={this.state.closeSlide}></SlideMenu>
            <h1>Home</h1>
          

            <Speech text="I have the default settings" />,
          <div>
            {chatInput}
          </div>  
            <Menu pressOnVoice={this.pressOnVoice}></Menu>
          </div>

      </Fragment>
    )
  }

}
