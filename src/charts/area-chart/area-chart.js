import Chart from 'chart.js/auto'

Chart.defaults.font.size = 20

const createAreaChart = (title, type, ctx) => {
  return new Chart(ctx, {
    type: type,
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
      layout: {
        padding: {
          bottom: 25
        }
      },
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

export default createAreaChart