import React from 'react'
import Plot from 'react-plotly.js'
import {
  standardMargin,
  standardChartConfig,
  smallCardStyle,
  lightGreenVar,
} from './chart_constants.js'

const LithiumChart = () => {
  const layout = {
    title: {
      text: 'Price, Lithium Carbonate 2016-2020',
    },
    margin: standardMargin,
    yaxis: {
      title: {
        text: 'Lithium Price (USD)',
      },
    },
    modebar: {
      orientation: 'v',
    },
  }

  const dataGreenTrace = {
    x: [2016, 2017, 2018, 2019, 2020],
    y: [8650, 15000, 17000, 12700, 8000],
    marker: {
      color: lightGreenVar,
    },
  }

  return (
    <Plot
      data={[dataGreenTrace]}
      layout={layout}
      config={standardChartConfig}
      style={smallCardStyle}
    />
  )
}

export default LithiumChart
