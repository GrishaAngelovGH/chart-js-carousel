import createContext from './chart-context'
import Chart from 'chart.js/auto'

Chart.defaults.font.size = 20

const ctx = createContext('mixed-charts')

new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [{
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 40],
      borderColor: 'rgb(132, 168, 45)',
      backgroundColor: 'rgba(255, 165, 0, 0.2)'
    }, {
      type: 'line',
      label: 'Line Dataset',
      data: [30, 30, 43, 50],
      borderColor: 'rgb(54, 162, 235)'
    }],
    labels: ['January', 'February', 'March', 'April']
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    plugins: {
      title: {
        display: true,
        text: 'Mixed Charts',
        font: {
          size: 40
        }
      }
    }
  }
})