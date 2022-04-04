/* styled-components */
import styled from 'styled-components'

/* styles */
import { theme, breakpoints as bkp } from '../../styles'

export const Container = styled.header`
   width: 100%;
   min-height: 60px;
   padding: 10px 0;
   display: flex;
   justify-content: center;
   background-color: ${theme.colors.header};
   color: ${theme.colors.white};
`

export const Nav = styled.header`
   width: 80%;
   display: flex;

   @media ${bkp.phone_only} {
      width: 100%;
   };
`

export const List = styled.ul`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   @media ${bkp.phone_only} {
      flex-direction: column;
   };
`

export const ListItem = styled.li`
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
