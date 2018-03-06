import React, {Component } from 'react'
import styles from './header.module.css'
import logo from '../../logo.svg'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <section className='header-section'>
          <img src={ logo } className='header-logo' alt="Tyers Club Logo" />
          <h1 className='header-title'>Tyers Club</h1>
        </section>
      </header>
    )
  }
}

export default Header
