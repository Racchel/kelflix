/* styled-components */
import styled from 'styled-components'

/* styles */
import { theme } from '../../styles'

const br_mc = '15px';   // border-radius_movie_card

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border-radius: ${br_mc};
   box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
`

export const MovieImage = styled.img`
   display: flex;
   flex: 1;
   width: 100%;
   border-radius: ${br_mc} ${br_mc} 0 0;
`

export const MovieTitle = styled.button`
   width: 100%;
   height: 65px;
   background-color: ${theme.colors.secondary_color};
   color: ${theme.colors.white};
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius:  0 0 ${br_mc} ${br_mc};
   border: none;
`
