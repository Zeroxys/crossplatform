import React, {Component, Fragment} from 'react';
import SlideMenu from '../SlideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import soundfile from '../../../public/sounds/mic_error.mp3';
import Chat from './ChatRoom/Chat'
import ChatInput from '../Pages/chatInput'
import Menu from './Menu/Menu';
import InternetStatus from '../internetStatus/internetStatus'
import { Offline, Online } from "react-detect-offline";
import Feedback from '../Feedback/Feedback';
import './index.css'


// https://medium.com/@amanda.k.hussey/a-basic-tutorial-on-how-to-incorporate-speech-recognition-with-react-6dff9763cea5 --> speech check


export default class Main extends Component {
  constructor(props) {
    super()
    this.state = {
      closeSlide : false,
      listening : false,
      chatText : '', 
      internetOff : 'false'
    }


    // == Methods == //
    this.pressOnVoice = this.pressOnVoice.bind(this);
    this.sendAudio =  this.sendAudio.bind(this);
  }


  closeSlide(e) {
    this.setState( (prevState) => {
      return {
        closeSlide : !prevState.closeSlide
      }
    })
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

  pressOnVoice(e) {

    this.setState(prevState => {
      return {
        listening : prevState.listening = true,
        textInput : prevState.textInput = true
      }
    })

    e.target.classList.add('iconGigaaaAnimation')
    let audio = new Audio(soundfile)
    audio.play()
    this.handleListen()
  }  

  sendAudio(e) {
    e.preventDefault()

    console.log(e)

  }

  render(){

    let chatInput = this.state.textInput ? <ChatInput text={this.state.chatText} sendAudio={this.sendAudio} /> : null;

    return (
      <Fragment>
          <div className="burgerIcon" onClick={() => this.closeSlide()}>
              <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
          </div>

          <div className="interfaceContent">
          <SlideMenu isOpen={this.state.closeSlide}></SlideMenu>
          
          <Online>

            {/* <Feedback></Feedback> */}

          </Online>
          <Offline><InternetStatus/></Offline>

            <Chat></Chat>
          <div>
            {chatInput}
          </div>  
            <Menu pressOnVoice={this.pressOnVoice}></Menu>
          </div>

      </Fragment>
    )
  }

}
