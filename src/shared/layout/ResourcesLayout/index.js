import React from 'react'

import styled from 'styled-components'

import { theme } from '../../styles'

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
   padding: 20px 0 10px 0;
   color: ${theme.colors.white};
`

const InputText = styled.input`
   width: 45%;
   height: 30px;
   padding: 0 10px;
   /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   border: none; */
`

const Grid = styled.section`
   width: 100%;
   display: grid;
   text-align: center;
   padding: 10px;
   grid-template-columns: repeat(6, 1fr);
   gap: 10px;
`

const MovieCard = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const MovieImage = styled.img`
   display: flex;
   flex: 1;
   width: 100%;
`

const MovieTitle = styled.h2`
   width: 100%;
   height: 65px;
   background-color: ${theme.colors.secondary_color};
   color: ${theme.colors.white};
   display: flex;
   justify-content: center;
   align-items: center;
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


