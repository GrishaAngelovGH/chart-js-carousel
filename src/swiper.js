import Swiper from 'swiper'
import { Navigation, Keyboard, Pagination } from 'swiper/modules'
import 'swiper/modules/navigation.css'
import 'swiper/modules/pagination.css'
import 'swiper/swiper.css'

new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Pagination],
  loop: true,
  keyboard: {
    enabled: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})