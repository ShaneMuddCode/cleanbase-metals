import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NickelChart from '../charts/NickelChart'
import LithiumChart from '../charts/LithiumChart'
import CobaltChart from '../charts/CobaltChart'

const HomeScreen = () => {
  let cardWidthStyle = { width: 'auto' }
  let cardHeightStyle = { height: '250px' }

  return (
    <>
      {/* <NavbarTop></NavbarTop> */}

      {/* <!-- Section indexMainGrid--> */}
      <section className='indexMainGrid'>
        <div className='container grid'>
          {/* <!-- indexMainGrid left top / cell 1 --> */}
          <div className='indexMainGrid-text'>
            <h1>Energy Metals Data</h1>
            <p>
              Energy metals are the base of the clean energy revolution, whether
              building infrastructure for wind and solar, providing battery
              storage, or connecting the grid of the future.
              <br />
              <br />
              CleanBase is a demo website using real metals data. Contact Shane
              Mudd for details.
            </p>
            <Link to='/about' className='btn btn-outline'>
              About CleanBase
            </Link>
          </div>

          {/* <!-- indexMainGrid right top  / cell 2--> */}
          <div className='card chart-text'>
            <NickelChart style={{ ...cardWidthStyle, ...cardHeightStyle }} />
            <p>Source: USGS Mineral Commodity Summaries 2021</p>
          </div>

          {/* <!-- indexMainGrid left bottom  / cell 3--> */}
          <div className='card chart-text'>
            <LithiumChart style={{ ...cardWidthStyle, ...cardHeightStyle }} />
            <p>Source: USGS Mineral Commodity Summaries 2021</p>
          </div>

          {/* <!-- indexMainGrid right bottom  / cell 4--> */}
          <div className='card chart-text'>
            <CobaltChart style={{ ...cardWidthStyle, ...cardHeightStyle }} />
            <p>Source: USGS Mineral Commodity Summaries 2021</p>
          </div>
        </div>
      </section>
      {/* <!-- Section STATS --> */}
      <section className='stats'>
        <div className='container'>
          <h3 className='stats-heading text-center my-1'>
            Annual global Lithium-ion battery demand is projected to pass 2
            Terawatt-hours (TWh) by 2030. BloombergNEF estimates for battery
            driven demand increase between 2021 and 2030:
          </h3>
          <div className='grid grid-3 text-center my-3'>
            <div>
              <i className='fas fa-bolt fa-3x'></i>
              <h3>5.3x</h3>
              <p className='text-secondary'>Lithium</p>
            </div>
            <div>
              <i className='fas fa-charging-station fa-3x'></i>
              <h3>5.2x</h3>
              <p className='text-secondary'>Nickel</p>
            </div>
            <div>
              <i className='fas fa-battery-full fa-3x'></i>
              <h3>1.5x</h3>
              <p className='text-secondary'>Cobalt</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- mine-photo-row --> */}
      <section className='mine-photo-row'>
        <div className='container grid'>
          <img
            id='lithiumMine_pic'
            src='images/lithiumMine.JPG'
            alt='Lithium mine'
          />
          <div className='card'>
            <h3>Lithium mine at Bolivia's Uyuni Salt Flat.</h3>
            <p>
              <em>
                Source:
                <a
                  href='https://commons.wikimedia.org/wiki/File:Lithium_mine_at_Bolivia%C2%B4s_Uyuni_Salt_Flat,_on_a_CBERS4_MUX_yesterday%C2%B4s_image.jpg'
                  className='href'
                  target='_blank'
                  rel='noreferrer'
                >
                  Wikimedia Commons
                </a>
              </em>
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default HomeScreen
