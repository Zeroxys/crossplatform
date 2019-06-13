import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Tips from './Tips';
import Tips2 from './Tips2';
import Tips3 from './Tips3';
import Tips4 from './Tips4';
import Modal from '../../Components/Pages/Modal'

import { CarouselProvider, Slider, Slide, ButtonNext, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { whileStatement } from '@babel/types';


export default function TipsSwiper (props) {

  let [showModal, setModal] = useState(false)

  let dots = {
    content : {
      width: '30%',
      position: 'absolute',
      bottom: '2%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'  
    },

    circle : {
      borderRadius : '50%', 
      width:10, 
      height:10, 
      backgroundColor:'#293059', 
      border:'none'
    },

    arrowContent : {
      position: 'absolute',
      bottom : '2%',
      width : '80%',
      display : 'flex',
      justifyContent : 'flex-end',
    },

    arrow : {
      color: '#293059',
      backgroundColor: 'transparent',
      border: 'none',
    },

    skip : {
      color: '#292F58',
      position: 'absolute',
      bottom: '2%',
      display: 'flex',
      justifyContent : 'flex-start',
      width : '90%'
    }
  }


  function modal() {
    setModal(!showModal)
  }

  let viewModal = showModal ? <Modal/> : null;

  return (
    <CarouselProvider
      dragEnabled={false}
      naturalSlideWidth={800}
      naturalSlideHeight={825}
      totalSlides={4}>

        <div style={{position:'relative', display:'flex', justifyContent:'center'}}>
        <Slider>
            <Slide index={0} style={{width:'50vh', height: '100vh'}}><Tips></Tips></Slide>
            <Slide index={1}><Tips2></Tips2></Slide>
            <Slide index={2}><Tips3></Tips3></Slide>
            <Slide index={3}><Tips4></Tips4></Slide>
          </Slider>

            <div style={dots.arrowContent}>
              <ButtonNext style={dots.arrow}> <FontAwesomeIcon icon={faChevronRight} size="2x"/> </ButtonNext>
            </div>

            <div style={dots.content}>
              <Dot slide={0} style={dots.circle}> </Dot>
              <Dot slide={1} style={dots.circle}></Dot>
              <Dot slide={2} style={dots.circle}></Dot>
              <Dot slide={3} style={dots.circle}></Dot>
            </div>

            <div style={dots.skip}>
              <Link to="/user"><p style={{color : '#292F58', fontWeight:'bold'}}>SKIP</p></Link>
            </div>
        </div>

  </CarouselProvider>)
}