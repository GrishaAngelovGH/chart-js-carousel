import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/modules/navigation.css'
import 'swiper/swiper.css'

new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})