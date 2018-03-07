import React, { Component } from 'react'
import styles from './bottomnav.module.css'
import { Route, Link } from 'react-router-dom'

class BottomNav extends Component {
  render() {
    return (
      <nav className='bottomNav'>
        <ul className='bottomNav-list'>
          <Link className='bottomNav-link' to="/patterns">
            <li id='patterns' className='bottomNav-item'>Patterns</li>
          </Link>
          <Link className='bottomNav-link' to="/inventory">
            <li id='inventory' className='bottomNav-item'>Inventory</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default BottomNav
