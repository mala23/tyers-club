import React, { Component } from 'react'
import styles from './home.module.css'
import Clap from '../Clap'

class Home extends Component {
  render() {
    return (
      <section className='home'>
        <p className='home-intro'>
          A smart Web App that allows fly tyers and fly fishermen to hold an 
      effortless inventory of their materials, browse and share patterns and 
      see possible patterns based on their inventory. Might even hold 
      information for what fly works for what species at what location and at 
      which times.
        </p>
        <Clap />
      </section>
    )
  }
}

export default Home
