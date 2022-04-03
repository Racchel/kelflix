import React, { Component } from 'react'

import { AppRoutes } from './routes'

import { GlobalStyle } from './shared/styles'

class App extends Component {

  render() {
    return (
      <>
        <GlobalStyle />
        <AppRoutes />
      </>
    )
  }
}

export default App
