/* react-router-dom */
import {
   Link
} from 'react-router-dom'

/* style */
import { Container, Nav, List, ListItem } from './style'

/* Header */
export const Header = () => {

   return (
      <>
         <Container>
            <Nav>
               <List>
                  <ListItem><Link to='/'>Home</Link></ListItem>
                  <ListItem><Link to='about'>Sobre</Link></ListItem>
                  <ListItem><Link to='movies'>Filmes</Link></ListItem>
                  <ListItem><Link to='shows'>Séries</Link></ListItem>
               </List>
            </Nav>
         </Container>
      </>
   )
}

