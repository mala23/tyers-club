import React, {Component } from 'react'
import styles from './header.module.css'
import logo from '../../logo.svg'

class Header extends Component {
  render() {
    return (
      <header className={styles.text}>
        <section>
          <img src={logo} className="app-logo" alt="Tyers Club Logo" />
          <h1 className="app-title">Tyers Club</h1>
        </section>
      </header>
    )
  }
}

export default Header
