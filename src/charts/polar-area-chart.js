import createContext from './chart-context'
import Chart from 'chart.js/auto'

Chart.defaults.font.size = 20

const ctx = createContext('polar-area-chart')

const actions = [
  {
    name: 'Change Arc',
    handler: (chart) => {
      chart.options.elements.arc.circular = !chart.options.elements.arc.circular
      chart.update()
    }
  }
]

const chart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    plugins: {
      title: {
        display: true,
        text: 'Polar Area Chart',
        font: {
          size: 40
        }
      }
    }
  }
})

actions.forEach((a, i) => {
  const button = document.createElement('button')
  button.id = 'button' + i
  button.innerText = a.name
  button.onclick = () => a.handler(chart)
  const buttonsDivId = '#buttons-polar-area-chart'
  document.querySelector(buttonsDivId).appendChild(button)
})