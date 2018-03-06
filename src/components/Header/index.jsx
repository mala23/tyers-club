import React, {Component } from 'react'
import styles from './header.module.css'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Link to="/">
        <section className='header-section'>
          <img src={ logo } className='header-logo' alt="Tyers Club Logo" />
          <h1 className='header-title'>Tyers Club</h1>
        </section>
        </Link>
      </header>
    )
  }
}

export default Header
