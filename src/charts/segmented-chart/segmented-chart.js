import Chart from 'chart.js/auto'

Chart.defaults.font.size = 20

const createSegmentedChart = (title, type, ctx) => {
  new Chart(ctx, {
    type,
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      plugins: {
        title: {
          display: true,
          text: title,
          font: {
            size: 40
          }
        }
      }
    }
  })
}

export default createSegmentedChart