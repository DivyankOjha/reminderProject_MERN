import React, { Component } from 'react'
import StickyFooter from './StickyFooter'

export default class addReminder extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <div>
          <a>Learn React</a>
          <StickyFooter />
        </div>
      </>
    )
  }
}
