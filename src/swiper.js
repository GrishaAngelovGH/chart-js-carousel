import Swiper from 'swiper'
import { Navigation, Keyboard } from 'swiper/modules'
import 'swiper/modules/navigation.css'
import 'swiper/swiper.css'

new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  loop: true,
  keyboard: {
    enabled: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})