import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <footer className='footer bg-dark py-5'>
        <div className='container grid grid-3'>
          <div>
            <h1>CleanBase</h1>
            <p>Copyright &copy; 2021</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/focus'>Focus</Link>
              </li>
              <li>
                <Link to='/map'>Map</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>
          <div className='social'>
            <Link
              to={{
                pathname: 'https://github.com/ShaneMuddCode',
              }}
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} size={'2x'} />
            </Link>
            <Link
              to={{
                pathname: 'https://www.linkedin.com/in/shane-mudd-87912930/',
              }}
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} size={'2x'} />
            </Link>
            <Link
              to={{
                pathname: 'https://twitter.com/ShaneMuddCode',
              }}
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faTwitter} size={'2x'} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
