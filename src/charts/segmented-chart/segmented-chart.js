import Chart from 'chart.js/auto'

Chart.defaults.font.size = 20

const createSegmentedChart = (title, type, cutout, ctx) => {
  ctx.canvas.parentNode.style.width = '45%'
  const labelId = `${title.toLowerCase().split(' ').join('-')}-label`

  const actions = [
    {
      name: 'Slide',
      handler: (chart, { target: { value } }) => {
        chart.options.cutout = value
        document.querySelector(`#${labelId}`).innerText = `Slide to change cutout: ${value}%`
        chart.update()
      }
    }
  ]

  const chart = new Chart(ctx, {
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

  actions.forEach((a, i) => {
    const h3 = document.createElement('h3')
    h3.id = labelId
    h3.innerText = `Slide to change cutout: ${cutout}%`

    const slider = document.createElement('input')
    slider.type = 'range'
    slider.min = 0
    slider.max = 100
    slider.value = cutout
    slider.id = 'button' + i
    slider.onchange = (e) => a.handler(chart, e)
    const buttonsDivId = `#buttons-${title.toLowerCase().split(' ').join('-')}`
    document.querySelector(buttonsDivId).appendChild(h3)
    document.querySelector(buttonsDivId).appendChild(slider)
  })

  return chart
}

export default createSegmentedChart