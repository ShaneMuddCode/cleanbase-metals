import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faWind, faPlug, faBolt } from '@fortawesome/free-solid-svg-icons'
// import NavbarTop from '../components/NavbarTop'
import Footer from '../components/Footer'
import WindTurbineChart from '../charts/WindTurbineChart'

const FocusScreen = () => {
  return (
    <>
      {/* <!-- Section indexMainGrid--> */}
      <section className='focus-head bg-primary py-1'>
        <div className='container grid'>
          <div>
            <h1 className='lg'>Focus | Wind Turbines</h1>
            <p className='lead'>
              A closer look at the data driving clean energy
            </p>
          </div>
          {/* <img src='images/server.png' alt='' /> */}
          {/* <i className='far fa-lightbulb fa-5x'></i> */}
          <FontAwesomeIcon
            icon={faLightbulb}
            className={'topRightIcon'}
            size={'6x'}
          />
        </div>
      </section>

      {/* <!-- Section indexMainGrid--> */}
      <section className='focusMainChartDiv'>
        <div className='container'>
          <div className='card chart-text'>
            {/* <div id='copper'></div> */}
            <WindTurbineChart id={'copper'} />
            <p>
              Source: USGS Wind Energy in the United States and Materials
              Required for the Land-Based Wind Turbine Industry From 2010
              Through 2030
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Feature main --> */}
      <section className='focus-sub-main'>
        <div className='container grid grid-3'>
          <div className='card flex'>
            {/* <i className='fas fa-wind fa-3x'></i> */}
            <FontAwesomeIcon
              icon={faWind}
              style={{ paddingRight: '10px' }}
              size={'4x'}
            />
            <p className='quote sm'>
              “Although use of permanent magnets may reduce the copper in wind
              turbine generators, this decrease is offset by an increase in
              copper use in electronic components and the copper wiring
              necessary to connect wind turbines within the wind powerplant and
              to connect the powerplant to the utility grid.”
            </p>
          </div>
          <div className='card flex'>
            {/* <i className='fas fa-plug fa-3x'></i> */}
            <FontAwesomeIcon
              icon={faPlug}
              style={{ paddingRight: '10px' }}
              size={'4x'}
            />
            <p className='quote sm'>
              "Wind powerplants are often located in areas distant from
              consumers, and large amounts of copper wire are necessary to
              provide power connections."
            </p>
          </div>

          <div className='card flex'>
            {/* <i className='fas fa-bolt fa-3x'></i> */}
            <FontAwesomeIcon
              icon={faBolt}
              style={{ paddingRight: '10px' }}
              size={'4x'}
            />
            <p className='source sm'>
              Source: USGS Wind Energy in the United States and Materials
              Required for the Land-Based Wind Turbine Industry From 2010
              Through 2030
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export default FocusScreen
