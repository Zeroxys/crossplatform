import React, {Component} from 'react';
import background from '../public/images/LifeIsGigaaa.png';
import './App.css';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      phrases : [
        'I have something to tell you.',
        'Hi, I am gigaaa Assistant.',
        'I will be happy to become your new life companion and assist you with all kinds of tasks.',
        "All you have to do is speak to me. First, let's see what I can do for you."
      ],

      addPhrase : false
    }

    this.pharasesTimer = this.pharasesTimer.bind(this);

  }



  pharasesTimer(id) {
    let phrasesWrapper = document.getElementById(id);
    let phrasesContent = phrasesWrapper.innerHTML;
    let counter = 0;
    
    setInterval(() => {
      
      if(phrasesContent.length > 0 && !this.state.addPhrase) {
        phrasesWrapper.innerHTML =  ''
        phrasesContent = phrasesWrapper.innerHTML
        console.log(phrasesContent)
      }else {
        this.setState({
          addPhrase : true
        })
      }

      if(this.state.addPhrase) {
        console.log('agregar una frase')

        if(phrasesContent.length < this.state.phrases.length) {

          phrasesWrapper.innerHTML = this.state.phrases[counter]
          console.log('valor --> ', phrasesWrapper.length)
          phrasesContent = phrasesWrapper.innerHTML

        }else {
          if(counter < this.state.phrases.length) {
            counter++
          }

          this.setState({
            addPhrase : false
          })
        }


        if(counter === this.state.phrases.length) {
          counter = 0
        }


      }

    }, 1200);

  }

  componentDidMount() {
    this.pharasesTimer("word")
  }


  render() {
  
  
    return (
      <div className="mainContent">

        <span >
          <p id="word"></p>
        </span>


        <img src={background} className="logoGigaaa" alt=""></img> 
        <p>Tap anywhere on the screen if you're not available to listen</p>
      </div>
    );
  }

}


