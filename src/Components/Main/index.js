import React, {Component, Fragment} from 'react';
import SlideMenu from '../SlideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import soundfile from '../../../public/sounds/mic_error.mp3';
import ChatInput from '../Pages/chatInput'
import Menu from './Menu/Menu';
import SpeechRecognition from "react-speech-recognition";
import './index.css'


// https://medium.com/@amanda.k.hussey/a-basic-tutorial-on-how-to-incorporate-speech-recognition-with-react-6dff9763cea5 --> speech check


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

    const SpeechRecognition = window.webkitSpeechRecognition || SpeechRecognition 
    const recognition = new SpeechRecognition()

    recognition.continous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.start()

    recognition.onresult = e => {
      console.log(e)

      console.log('asdsadsad')
  }

    e.target.classList.add('iconGigaaaAnimation')
    /*recognition.continous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'*/

    //recognition.start()
    this.setState(prevState => {
      return {
        textInput : prevState.textInput = true
      }
    })


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
          
          <div>
            {chatInput}
          </div>  
            <Menu pressOnVoice={this.pressOnVoice}></Menu>
          </div>

      </Fragment>
    )
  }

}
