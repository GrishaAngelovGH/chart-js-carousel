import createContext from './chart-context'
import Chart from 'chart.js/auto'

Chart.defaults.font.size = 20

const ctx = createContext('bubble-chart')

new Chart(ctx, {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'Label 1',
      data: Array.from({ length: 50 }, () => ({
        x: Math.random() * 10,
        y: Math.random() * 20,
        r: Math.random() * 30
      })),
      backgroundColor: 'rgba(255, 103, 20, 0.5)'
    },
    {
      label: 'Label 2',
      data: Array.from({ length: 50 }, () => ({
        x: Math.random() * 10,
        y: Math.random() * 20,
        r: Math.random() * 30
      })),
      backgroundColor: 'rgba(53, 242, 135, 0.5)'
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    plugins: {
      title: {
        display: true,
        text: 'Bubble Chart',
        font: {
          size: 40
        }
      }
    }
  }
})