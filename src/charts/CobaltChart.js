import React from 'react'
import Plot from 'react-plotly.js'
import {
  standardMargin,
  standardChartConfig,
  smallCardStyle,
} from './chart_constants.js'

const CobaltChart = () => {
  const data = [
    {
      type: 'bar',
      x: ['Congo', 'Australia', 'Cuba', 'Philippines', 'Russia'],
      y: [3600000, 1400000, 500000, 260000, 250000],
      width: [0.65, 0.65, 0.65, 0.65, 0.65],
      marker: {
        color: 'light_colorvar',
        line: {
          width: 0,
        },
      },
    },
  ]

  const layout = {
    title: {
      text: 'Cobalt Mine Reserves 2021,<br>Top 5 Countries',
    },
    margin: standardMargin,
    yaxis: {
      title: {
        text: 'Cobalt (Metric Tons)',
      },
    },
    modebar: {
      orientation: 'v',
    },
  }

  return (
    <Plot
      data={data}
      layout={layout}
      config={standardChartConfig}
      style={smallCardStyle}
    />
  )
}

export default CobaltChart
