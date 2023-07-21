import Chart from 'chart.js/auto'

const swiperDiv = document.querySelector('.swiper-wrapper')
const slideDiv = document.createElement('div')
slideDiv.classList = 'swiper-slide'
const canvas = document.createElement('canvas')
canvas.id = 'area-chart'
slideDiv.append(canvas)
swiperDiv.append(slideDiv)

const ctx = document.querySelector('#area-chart').getContext('2d')

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Tokyo', 'Mumbai', 'Mexico City', 'Shanghai', 'Sao Paulo', 'New York'],
    datasets: [{
      label: 'Series 1', // Name the series
      data: [500, 50, 2424, 14040, 14141, 4111], // Specify the data values array
      fill: true,
      borderColor: '#2196f3', // Add custom color border (Line)
      backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    },
    {
      label: 'Series 2', // Name the series
      data: [1288, 88942, 44545, 7588, 99, 242], // Specify the data values array
      fill: true,
      borderColor: '#4CAF50', // Add custom color border (Line)
      backgroundColor: '#4CAF50', // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    plugins: {
      title: {
        display: true,
        text: 'Line Area Chart',
        font: {
          size: 40
        }
      }
    }
  }
})