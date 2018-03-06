import React, { Component } from 'react'
import styles from './button.module.css'

class Button extends Component {

  render() {
    return (
      <button className="button">{ this.props.text }</button>
    )
  }
}

export default Button
