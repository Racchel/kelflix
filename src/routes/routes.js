/* pages */
import {
   Home,
   About,
   Movies,
   Shows
} from '../pages'

export const routes = [
   {
      path: '/',
      name: 'Home',
      element: < Home />
   },
   {
      path: '/about',
      name: 'Sobre',
      element: < About />
   },
   {
      path: '/movies',
      name: 'Filmes',
      element: <Movies />
   },
   {
      path: '/shows',
      name: 'Séries',
      element: < Shows />
   }
]