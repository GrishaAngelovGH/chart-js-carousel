const createContext = id => {
  const swiperDiv = document.querySelector('.swiper-wrapper')

  const slideDiv = document.createElement('div')
  slideDiv.classList = 'swiper-slide'

  const buttonsDiv = document.createElement('div')
  buttonsDiv.id = `buttons-${id}`

  const canvasDiv = document.createElement('div')
  canvasDiv.style.width = '90%'
  canvasDiv.style.height = '100%'

  const canvas = document.createElement('canvas')
  canvas.id = id

  canvasDiv.append(canvas)
  slideDiv.append(canvasDiv)
  slideDiv.append(buttonsDiv)
  swiperDiv.append(slideDiv)

  return canvas.getContext('2d')
}

export default createContext