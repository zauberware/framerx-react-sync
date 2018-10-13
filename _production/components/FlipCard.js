import React, { Component } from 'react'

import {
  Card,
} from '../styled'


export default class FlipCard extends Component {
  state = {
    flipped: false,
  }

  flip = () => {
    const { flipped } = this.state
    this.setState({ flipped: !flipped })
  }

  render() {
    const {
      title,
      subtitle,
      excerpt,
      link,
      background
    } = this.props

    const { flipped } = this.state

    return (
      <Card flippable flipped={flipped}>
        <Card.Content front backgroundColor={background} flipped={flipped}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <a onClick={this.flip}>flip me!</a>
        </Card.Content>
        <Card.Content back black flipped={flipped}>
          <p>{excerpt}</p>
          <Card.ReadMore href={link}>Read more</Card.ReadMore>
        </Card.Content>
      </Card>
    )
  }
}

