const createContext = id => {
  const swiperDiv = document.querySelector('.swiper-wrapper')

  const slideDiv = document.createElement('div')
  slideDiv.classList = 'swiper-slide'

  const canvas = document.createElement('canvas')
  canvas.id = id

  slideDiv.append(canvas)
  swiperDiv.append(slideDiv)

  return document.querySelector(`#${id}`).getContext('2d')
}

export default createContext