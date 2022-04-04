import React from 'react'

/* styled-components */
import styled from 'styled-components'

/* styles */
import { theme, breakpoints as bkp } from '../../styles'

/* react-router-dom */
import {
   Link
} from 'react-router-dom'

const Container = styled.header`
   width: 100%;
   min-height: 60px;
   padding: 10px 0;
   display: flex;
   justify-content: center;
   background-color: ${theme.colors.header};
   color: ${theme.colors.white};
`

const Nav = styled.header`
   width: 80%;
   display: flex;

   @media ${bkp.phone_only} {
      width: 100%;
   };
`

const List = styled.ul`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   @media ${bkp.phone_only} {
      flex-direction: column;
   };
`

const ListItem = styled.li`
   width: 100px;
   min-height: 60px;
   display: flex;
   align-items: center;
   justify-content: center;
      
   &:hover {
   background-color: ${theme.colors.main_color};
   font-weight: bold;

   @media ${bkp.phone_only} {
      width: 100%;
   };
}
`

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

