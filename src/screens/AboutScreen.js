import React from 'react'
import Footer from '../components/Footer'
import graphBackground from '../img/graphbackground.JPG'

const AboutScreen = () => {
  const backgroundDivStyle = {
    backgroundImage: `url(${graphBackground})`,
    backgroundSize: 'cover',
    padding: '45px',
  }

  return (
    <>
      {/* <NavbarTop></NavbarTop> */}
      {/* <!-- About Head --> */}
      <section className='about-head bg-primary'>
        <div className='container grid'>
          {/* <!-- About Head - about-background --> */}
          <div className='about-background card'>
            <h2 className='lead'>Background</h2>
            <h3>
              <ul className='lead'>
                <li>Advanced Geospatial Data Processing</li>
                <li>Python | Pandas | ArcPy | ArcGIS | JavaScript</li>
                <li>WordPress website management</li>
                <li>HTML | CSS | React | Plotly | Mapbox</li>
                <li>
                  10+ years federal IT program and project management experience
                </li>
                <li className='final'>
                  Specialized experience in environmental management, disaster
                  preparedness, response & recovery
                </li>
              </ul>
            </h3>
          </div>
          {/* <!-- About Head - about-para --> */}
          <div className='about-para'>
            <h1 className='xl'>About CleanBase</h1>
            <p className='lead'>
              CleanBase is a demo website exploring JavaScript data tools and
              responsive HTML/CSS with energy metals as a theme. Site by Shane
              Mudd, a developer in the Washington, DC area. Design elements
              adapted from Traversy Media.
              <br />
              <br />
              <a
                href='https://www.linkedin.com/in/shane-mudd-87912930/'
                target='_blank'
                rel='noreferrer'
                className='btn btn-outline'
              >
                Contact Me on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* <!-- about main --> */}

      <div style={backgroundDivStyle}></div>

      <Footer></Footer>
    </>
  )
}

export default AboutScreen
