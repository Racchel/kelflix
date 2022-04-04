import React from 'react'

/* styled-components */
import styled from 'styled-components'

/* styles */
import { theme } from '../../styles'

/* components */
import { Title } from '../../components'

const Container = styled.main`
   display: flex;
   flex-direction: column;
   background-color: ${theme.colors.background};
`

export const BaseLayout = ({
   title,
   children
}) => {
   return (
      <Container>
         <Title title={title} />

         {children}
      </Container>
   )
}