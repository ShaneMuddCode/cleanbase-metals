import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
/* Mobile */
// @media (max-width: 500px)

/* Tablets and under */
// @media (max-width: 768px)

const isMobileDevice = useMediaQuery({
  query: '(max-width: 500px)',
})

const isTabletDevice = useMediaQuery({
  query: '(max-width: 768px)',
})

const cardWidthStyle = { width: 'auto' }
let cardHeightStyle
if (isMobileDevice) {
  cardHeightStyle = { height: '250px' }
  console.log('isMobileDevice')
}
if (isTabletDevice) {
  cardHeightStyle = { height: '500px' }
  console.log('isTabletDevice')
}

const StyledDiv = styled.div`
  display: 'flex';
  flex-direction: 'row';
  justify-content: 'center';
  align-content: 'center';
`
