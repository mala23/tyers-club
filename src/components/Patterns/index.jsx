import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import styles from './patterns.module.css'

class Patterns extends Component {
  render() {
    return (
      <section className="patterns">
        <Link to="/patterns/create">
          <Button text={"Create Pattern"} />
        </Link>
      </section>
    )
  }
}

export default Patterns
