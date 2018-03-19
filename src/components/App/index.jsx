import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import styles from '../../styles/reset.css'
import Header from '../Header'
import BottomNav from '../BottomNav'
import Home from '../Home'
import Patterns from '../Patterns'
import CreatePattern from '../CreatePattern'
import Inventory from '../Inventory'
import Pattern from '../Pattern'

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/patterns' component={Patterns} />
        <Route exact path='/patterns/create' component={CreatePattern} />
        <Route exact path='/inventory' component={Inventory} />
        <Route exact path='/pattern' component={Pattern} />
        <BottomNav />
      </section>
    )
  }
}

export default App
