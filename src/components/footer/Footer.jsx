import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
              <p>&copy; {new Date().getFullYear()} StubHub Ltd</p>
              <ul>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Twitter</a></li>
                <li><a href='#'>Facebook</a></li>
              </ul>
    </footer>
  )
}

export default Footer