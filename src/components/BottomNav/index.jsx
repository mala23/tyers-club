import React, { Component } from 'react'
import styles from './bottomnav.module.css'
import { Route, Link } from 'react-router-dom'

class BottomNav extends Component {
  render() {
    return (
      <nav className='bottomNav'>
        <ul className='bottomNav-list'>
          <li id='patterns' className='bottomNav-item'><Link to="/patterns">Patterns</Link></li>
          <li id='inventory' className='bottomNav-item'><Link to="/inventory">Inventory</Link></li>
        </ul>
      </nav>
    )
  }
}

export default BottomNav
