import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../Header'
import BottomNav from '../BottomNav'
import Home from '../Home'
import CreatePattern from '../CreatePattern'

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/create-pattern' component={CreatePattern} />
        <BottomNav />
      </section>
    )
  }
}

export default App
