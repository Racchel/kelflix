import React from 'react'

/* react-router-dom */
import {
   Link
} from 'react-router-dom'

/* Header */
export const Header = () => {

   return (
      <>
         <nav>
            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='about'>Sobre</Link></li>
               <li><Link to='movies'>Filmes</Link></li>
               <li><Link to='shows'>Séries</Link></li>
            </ul>
         </nav>
      </>
   )
}

