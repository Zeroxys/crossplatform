import React from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import Tips from './Tips'
import Tips2 from './Tips2'
import Tips3 from './Tips3'
import Tips4 from './Tips4'


export default function TipsSwiper () {

  const params = {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  return <Swiper {...params}>
    <div><Tips></Tips></div>
    <div><Tips2></Tips2></div>
    <div><Tips3></Tips3></div>
    <div><Tips4></Tips4></div>
  </Swiper>
}