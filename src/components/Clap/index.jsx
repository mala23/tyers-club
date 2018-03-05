import React, { Component } from 'react'
import styles from './clap.module.css'

class Clap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 23,
    }
  }

  render() {
    return (
      <article className={styles.text}>
        <p>{this.state.count}</p>
        <section className="clap-buttons">
          <button>Clap</button>
        </section>
      </article>
    )
  }
}

export default Clap
