import React, { Component } from 'react'
import styles from './clap.module.css'

class Clap extends Component {
  render() {
    return (
      <article className={styles.text}>
        <p>23</p>
        <section className="clap-buttons">
          <button>Clap</button>
        </section>
      </article>
    )
  }
}

export default Clap
