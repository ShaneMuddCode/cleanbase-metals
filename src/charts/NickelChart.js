import React from 'react'
import Plot from 'react-plotly.js'
import {
  standardMargin,
  standardChartConfig,
  smallCardStyle,
} from './chart_constants.js'

const layout = {
  title: {
    text: 'US Nickel Production 2016-2020',
  },
  margin: standardMargin,
  yaxis: {
    title: {
      text: 'Nickel (Tons)',
    },
  },
  modebar: {
    orientation: 'v',
  },
}

const data = [
  {
    x: [2016, 2017, 2018, 2019, 2020],
    y: [24100, 22100, 17600, 13500, 16000],
  },
]

const NickelChart = () => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={standardChartConfig}
      style={smallCardStyle}
    />
  )
}

export default NickelChart
