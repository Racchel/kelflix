import React from 'react'

/* styled-components */
import styled from 'styled-components'

/* styles */
import { theme } from '../../styles'

/* components */
import { Title, Grid } from '../../components'

const Container = styled.main`
   display: flex;
   flex-direction: column;
   background-color: ${theme.colors.background};
`

export const ResourcesLayout = ({
   title,
   notFound,
   handleChange,
   list
}) => {
   return (
      <Container>
         <Title title={title} onChange={handleChange} />

         <Grid notFound={notFound} list={list} />
      </Container>
   )
}