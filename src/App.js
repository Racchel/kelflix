import React, { Component } from 'react'

import { 
  Home, 
  About, 
  Movies, 
  Shows 
} from './pages'

import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
} from 'react-router-dom'
 

class App extends Component {

  render () {
    return (
      <>
      <Router>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>Sobre</Link></li>
            <li><Link to='movies'>Filmes</Link></li>
            <li><Link to='shows'>Séries</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/shows' element={<Shows />}/>
        </Routes>
      </Router>
      </>
    )
  }
}

export default App;
