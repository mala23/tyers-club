import React, { Component } from 'react'
import styles from './createpattern.module.css'
import Submit from '../Submit'

class CreatePattern extends Component {
  render() {
    return (
      <form className="patterns-create">
        <section className="patterns-create-section">
          <h1 className="patterns-create-title">General Information</h1>
          <fieldset>
            <label for="name">Pattern Name</label>
            <input id="name" type="text" name="name" />
          </fieldset>
          <fieldset>
            <label for="variation">Variation Name</label>
            <input id="variation" type="text" name="variation" />
          </fieldset>
          <fieldset>
            <label for="type">Pattern Type</label>
            <input id="type" type="text" name="type" />
          </fieldset>
        </section>
        <section className="patterns-create-section">
          <h1 className="patterns-create-title">Materials</h1>
          <fieldset>
            <label for="hook">Hook</label>
            <input id="hook" type="text" name="hook" />
          </fieldset>
          <fieldset>
            <label for="thread">Thread</label>
            <input id="thread" type="text" name="thread" />
          </fieldset>
          <fieldset>
            <label for="bead">Bead</label>
            <input id="bead" type="text" name="bead" />
          </fieldset>
          <fieldset>
            <label for="tail">Tail</label>
            <input id="body" type="text" name="tail" />
          </fieldset>
          <fieldset>
            <label for="body">Body</label>
            <input id="body" type="text" name="body" />
          </fieldset>
          <fieldset>
            <label for="ribbing">Ribbing</label>
            <input id="ribbing" type="text" name="ribbing" />
          </fieldset>
          <fieldset>
            <label for="thorax">Thorax</label>
            <input id="thorax" type="text" name="thorax" />
          </fieldset>
          <fieldset>
            <label for="wingcase">Wing Case</label>
            <input id="wingcase" type="text" name="wingcase" />
          </fieldset>
        </section>
        <Submit submitText={"Create Pattern"} />
      </form>
    )
  }
}

export default CreatePattern
