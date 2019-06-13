import React, {Component, Fragment} from 'react';
import SlideMenu from '../SlideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import soundfile from '../../../public/sounds/mic_error.mp3';
import Sound from 'react-sound';
import Menu from './Menu/Menu';
import './index.css'


export default class Main extends Component {
  constructor(props) {
    super()
    this.state = {
      closeSlide : false,
    }

    this.pressOnVoice = this.pressOnVoice.bind(this);
    this.voiceRef = React.createRef();    
    this.slideRef = React.createRef();
  }


  closeSlide(e) {
    this.setState( (prevState) => {
      return {
        closeSlide : !prevState.closeSlide
      }
    })
  }

  pressOnVoice(e) {
    let audio = new Audio(soundfile)
    audio.play()
  }  

  render(){
    return (
      <Fragment>
          <div className="burgerIcon" onClick={() => this.closeSlide()}>
              <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
          </div>

          <div className="interfaceContent">
          <SlideMenu isOpen={this.state.closeSlide}></SlideMenu>
            <h1>Home</h1>
            <Menu pressOnVoice = {this.pressOnVoice}></Menu>
          </div>

      </Fragment>
    )
  }

}
