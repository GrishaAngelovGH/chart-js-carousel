import Chart from 'chart.js/auto'

Chart.defaults.font.size = 20

const createBarChart = (title, ctx, isVertical = true) => {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(204, 0, 204, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(204, 0, 204)'
        ],
        borderWidth: 2,
        borderRadius: 5
      }]
    },
    options: {
      indexAxis: isVertical ? 'x' : 'y',
      scales: {
        y: {
          beginAtZero: true
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

export default createBarChart