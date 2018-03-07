import React, { Component } from 'react'
import styles from './submit.module.css'

class Submit extends Component {
  render() {
    return (
      <input className="submit" type="submit" value={ this.props.submitText } />
    )
  }
}

export default Submit
