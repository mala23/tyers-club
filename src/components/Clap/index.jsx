import React, { Component } from 'react'
import styles from './clap.module.css'

class Clap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 23,
    }
  }

  add = () => {
    console.log('click')
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <section className='clap'>
        <p className='clap-count'>{ this.state.count }</p>
        <section className='clap-buttons'>
          <button onClick={ this.add } className='clap-button'>Clap</button>
        </section>
        <p className='clap-text'>Applause is a designers pay.</p>
      </section>
    )
  }
}

export default Clap
