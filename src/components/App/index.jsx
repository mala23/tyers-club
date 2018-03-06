import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styles from './app.module.css'
import Home from '../Home'
import CreatePattern from '../CreatePattern'

class App extends Component {
  render() {
    return (
      <section className={styles.text}>
        <Route exact path='/' component={Home} />
        <Route path='/create-pattern' component={CreatePattern} />
      </section>
    )
  }
}

export default App
