// Get css colors

export const lightBlueVar = getComputedStyle(
  document.documentElement
).getPropertyValue('--light-color')

export const mediumGreenVar = getComputedStyle(
  document.documentElement
).getPropertyValue('--palette-green')

export const lightGreenVar = getComputedStyle(
  document.documentElement
).getPropertyValue('--palette-lightGreen')

/* -------------------------
All Plots
------------------------- */

export const standardMargin = {
  l: 50,
  r: 10,
  b: 30,
  t: 35,
  pad: 7,
}

export const standardChartConfig = {
  modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'autoScale2d'],
  responsive: true,
}

export const smallCardStyle = { width: '100%', height: '250px' }

export const largeCardStyle = { width: '100%' }
