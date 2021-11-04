import './App.css'
import addReminder from '../src/components/addReminder'
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={addReminder} />
            <Route path="/aa" exact component={addReminder} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
