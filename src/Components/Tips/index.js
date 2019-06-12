import React from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import Tips from './Tips'
import Tips2 from './Tips2'
import Tips3 from './Tips3'
import Tips4 from './Tips4'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default function TipsSwiper () {

  const params = {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  }

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
      width:15, 
      height:15, 
      backgroundColor:'#293059', 
      border:'none'
    },

    arrow : {
      position: 'absolute',
      bottom : '2%',
      width : '80%',
      display : 'flex',
      justifyContent : 'flex-end',
    }
  }



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

          <div style={dots.arrow}>
            <ButtonNext>Next</ButtonNext>
          </div>

          <div style={dots.content}>
            <Dot slide={0} style={dots.circle}> </Dot>
            <Dot slide={1} style={dots.circle}></Dot>
            <Dot slide={2} style={dots.circle}></Dot>
            <Dot slide={3} style={dots.circle}></Dot>
          </div>
        </div>

  </CarouselProvider>)
}