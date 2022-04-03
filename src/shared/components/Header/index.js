import React from 'react'

/* styled-components */
import styled from 'styled-components'

/* styles */
import { theme } from '../../styles'

/* react-router-dom */
import {
   Link
} from 'react-router-dom'

const Container = styled.header`
   width: 100%;
   height: 60px;
   display: flex;
   justify-content: center;
   background-color: ${theme.colors.header};
   color: ${theme.colors.white};
`

const Nav = styled.header`
   width: 80%;
   height: 60px;
   display: flex;
   `

const List = styled.ul`
   width: 100%;
   display: flex;
   justify-content: center;
   `

const ListItem = styled.li`
   width: 100px;
   display: flex;
   align-items: center;
   justify-content: center;
   
   &:hover {
      background-color: ${theme.colors.main_color};
      font-weight: bold;
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

