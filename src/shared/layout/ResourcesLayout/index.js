import React from 'react'

import styled from 'styled-components'

import { theme, breakpoints as bkp } from '../../styles'

const br_mc = '15px';   // border-radius_movie_card

const Container = styled.main`
   display: flex;
   flex-direction: column;
   background-color: ${theme.colors.background};
`

const Box = styled.div`
   width: 100%;
   height: 130px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   padding: 20px;
   color: ${theme.colors.white};
`

const InputText = styled.input`
   width: 80%;
   height: 30px;
   padding: 10px;

   @media ${bkp.phone_only} {
      width: 100%;
   }
`

const Grid = styled.section`
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

const MovieCard = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border-radius: ${br_mc};
   box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
`

const MovieImage = styled.img`
   display: flex;
   flex: 1;
   width: 100%;
   border-radius: ${br_mc} ${br_mc} 0 0;
`

const MovieTitle = styled.button`
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

export const ResourcesLayout = ({
   title,
   notFound,
   handleChange,
   list
}) => {
   return (
      <Container>

         <Box>
            <h1>{title}</h1>
            <InputText type='text' placeholder={`Pesquise por ${title}...`} onChange={handleChange} />
         </Box>

         <Grid>
            {
               notFound

                  ? // filme não encontrado
                  <p>Filme não encontrado!</p>

                  : // filmes filtrados
                  list.map((item, index) => (
                     <MovieCard key={index}>
                        <MovieImage src={item.poster_path} alt={item.title} />
                        <MovieTitle>{item.title || item.name}</MovieTitle>
                     </MovieCard>
                  ))
            }
         </Grid>
      </Container>
   )
}


