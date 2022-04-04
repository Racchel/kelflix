import React from 'react'

/* react-router-dom */
import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom'

/* components */
import { Header } from '../shared/components'

/* components */
import { routes } from './routes'

/* AppRoutes */
export const AppRoutes = () => {

   return (
      <Router>
         <Header routes={routes} />
         <Routes>
            {routes.map(route => (
               <Route
                  path={route.path}
                  element={route.element}
               />
            ))}
         </Routes>
      </Router>
   )
}

