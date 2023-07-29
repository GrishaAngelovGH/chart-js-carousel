import createContext from './chart-context'
import Chart from 'chart.js/auto'

Chart.defaults.font.size = 20

const ctx = createContext('radar-chart')

const actions = [
  {
    name: 'Clear Fill',
    handler: (chart) => {
      chart.data.datasets.forEach(dataset => {
        dataset.fill = false
      })
      chart.update()
    }
  },
  {
    name: 'Toggle angle lines',
    handler: (chart) => {
      chart.options.scales.r.angleLines.display = !chart.options.scales.r.angleLines.display
      chart.update()
    }
  }
]

const chart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [
      'Label 1',
      'Label 2',
      'Label 3',
      'Label 4',
      'Label 5',
      'Label 6',
      'Label 7'
    ],
    datasets: [{
      label: 'Dataset 1',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 206, 0, 0.2)',
      borderColor: 'rgb(255, 206, 0)',
      pointBackgroundColor: 'rgb(255, 206, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 206, 0)'
    }, {
      label: 'Dataset 2',
      data: [78, 48, 80, 19, 96, 51, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    plugins: {
      title: {
        display: true,
        text: 'Radar Chart',
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
  const buttonsDivId = '#buttons-radar-chart'
  document.querySelector(buttonsDivId).appendChild(button)
})