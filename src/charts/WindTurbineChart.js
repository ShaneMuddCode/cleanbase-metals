import React from 'react'
import Plot from 'react-plotly.js'
import {
  standardMargin,
  standardChartConfig,
  largeCardStyle,
} from './chart_constants.js'

const WindTurbineChart = () => {
  const xAxisYears = ['2006', '2010', '2015', '2020', '2025', '2030']
  const trace1 = {
    x: xAxisYears,
    y: [1.2, 4.6, 15.4, 29.6, 27.8, 26.4],
    name: 'Aluminum',
    marker: {
      line: {
        width: 1.5,
      },
    },
  }

  const trace2 = {
    x: xAxisYears,
    y: [1.6, 7.4, 10.2, 20.2, 19.4, 18.5],
    name: 'Copper',
    marker: {
      //   color: "smoker",
      line: {
        width: 1.5,
      },
    },
  }

  const data = [trace1, trace2]

  const layout = {
    title: {
      text: 'Projected materials required to<br>meet wind turbine demand',
    },
    margin: standardMargin,
    yaxis: {
      title: {
        text: 'Metric Tons (Thousands)',
      },
    },
    legend: {
      x: 0.9,
      xanchor: 'right',
      y: 0.15,
      yanchor: 'bottom',
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
      style={largeCardStyle}
    />
  )
}

export default WindTurbineChart
