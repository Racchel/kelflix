import React from 'react'

/* styled-components */
import styled from 'styled-components'

/* styles */
import { breakpoints as bkp } from '../../styles'

/* components */
import { MovieCard } from '../../components'

const Container = styled.section`
   width: 100%;
   display: grid;
   text-align: center;
   padding: 20px;
   gap: 15px;

   @media ${bkp.phone_only} {
      grid-template-columns: repeat(1, 1fr);
   }

   @media ${bkp.tablet_portrait_up} {
      grid-template-columns: repeat(3, 1fr);
   }

   @media ${bkp.tablet_landscape_up} {
      grid-template-columns: repeat(5, 1fr);
   }
`

export const Grid = ({
   notFound,
   list
}) => {
   return (
      <Container>
         {
            notFound

               ? // filme não encontrado
               <p>Filme não encontrado!</p>

               : // filmes filtrados
               list.map((item, index) => (
                  <MovieCard item={item} index={index} />
               ))
         }
      </Container>
   )
}


