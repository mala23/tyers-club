import React, { Component } from 'react'
import styles from './pattern.module.css'

class Pattern extends Component {
  render() {
    return (
      <article className='pattern'>
        <figure>
          <img className="pattern-image" src="https://s3-eu-west-1.amazonaws.com/tyersclub/images/egansrainbowwarrior.jpg" alt="Egan's Rainbow Warrior" />
        <figcaption>Ean's Rainbow Warrior –<wbr /> Copyright Charlie's FlyBox.</figcaption>
        </figure>
        <header className='pattern-header'>
          <h2>Egan's Rainbow Warrior</h2> 
        </header>
        <section className="pattern-description">
          <h3>Description</h3>
          <p className="pattern-text">The Rainbow Warrior is a colorful nymph that catches fish on most rivers and streams. It was developed by Fly Fishing Team USA’s Lance Egan and has since become a favorite of many anglers. This fly works great year round, and I always make sure there are a few in the fly box before I go out. If your not familiar with this pattern, take my word, its amazing!</p>
        </section>
        <section className='pattern-recipe' className="pattern-text">
          <h3>Recipe</h3>
          <table>
            <tr>
              <th>Hook</th>
              <td>Tiemco 2457 <wbr />Size 16</td>
            </tr>
            <tr>
              <th>Thread</th>
              <td>Red 8/0</td>
            </tr>
            <tr>
              <th>Bead</th>
              <td>Tungsten Silver <wbr />2.3mm</td>
            </tr>
            <tr>
              <th>Tail</th>
              <td>4 – 6 Pheasant tail fibers</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>Large pearl tinsel for 16 and 18, and medium for 20 and 22</td>
            </tr>
            <tr>
              <th>Thorax</th>
              <td>Wapsi Sow Scud Dubbing Rainbow</td>
            </tr>
            <tr>
              <th>Wing Case</th>
              <td>Same pearl tinsel as body</td>
            </tr>
          </table>
        </section>
      </article>
    )
  }
}

export default Pattern
