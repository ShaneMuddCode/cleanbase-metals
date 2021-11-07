import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWind,
  faPlug,
  faBolt,
  faBatteryThreeQuarters,
} from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import SupplyChainMap from '../components/SupplyChainMap'

const MapScreen = () => {
  return (
    <>
      {/* <NavbarTop /> */}

      {/* <!-- Head --> */}
      <section className='focus-head bg-primary py-1'>
        <div className='container grid'>
          <div>
            <h1 className='lg'>Map | Lithium-ion</h1>
            <p className='lead'>
              Top 25 battery supply chain rankings
              <br />
              BloombergNEF, 2020
            </p>
          </div>
          <FontAwesomeIcon
            icon={faBatteryThreeQuarters}
            className={'topRightIcon'}
            size={'6x'}
          />
        </div>
      </section>

      {/* <!-- Section mapMainChart--> */}
      <section className='mapMainChartDiv'>
        <div className='container'>
          <div className='card chart-text'>
            <SupplyChainMap />
          </div>
        </div>
      </section>

      {/* <!-- Feature main --> */}
      <section className='focus-sub-main'>
        <div className='container grid grid-3'>
          <div className='card flex'>
            <FontAwesomeIcon
              icon={faWind}
              style={{ paddingRight: '10px' }}
              size={'4x'}
            />
            <p className='quote sm'>
              BloombergNEF launched its inaugural 'Global Lithium-Ion Battery
              Supply Chain Ranking’ in 2020. China took the #1 spot with control
              of 80% of global raw material refining, 77% of cell capacity and
              60% of the world’s component manufacturing.
            </p>
          </div>
          <div className='card flex'>
            <FontAwesomeIcon
              icon={faPlug}
              style={{ paddingRight: '10px' }}
              size={'4x'}
            />
            <p className='quote sm'>
              The supply chain ranking reviews five supply chain themes: raw
              materials, cell & component manufacturing, environment, RII and
              end demand.
            </p>
          </div>

          <div className='card flex'>
            <FontAwesomeIcon
              icon={faBolt}
              style={{ paddingRight: '10px' }}
              size={'4x'}
            />
            <p className='source sm'>
              Source:
              https://about.bnef.com/blog/china-dominates-the-lithium-ion-battery-supply-chain-but-europe-is-on-the-rise/
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default MapScreen
