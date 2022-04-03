import React from 'react'

/* react-router-dom */
import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom'

/* pages */
import {
   Home,
   About,
   Movies,
   Shows
} from '../pages'

/* components */
import { Header } from '../shared/components'

/* AppRoutes */
export const AppRoutes = () => {

   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/movies' element={<Movies />} />
               <Route path='/shows' element={<Shows />} />
            </Routes>
         </Router>
      </>
   )
}

