/* react-router-dom */
import {
   Link
} from 'react-router-dom'

/* style */
import { Container, Nav, List, ListItem } from './style'

/* Header */
export const Header = ({ routes }) => {

   return (
      <Container>
         <Nav>
            <List>
               {routes.map(route => (
                  <ListItem>
                     <Link to={route.path}>
                        {route.name}
                     </Link>
                  </ListItem>
               )
               )}
            </List>
         </Nav>
      </Container >
   )
}

