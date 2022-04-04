import React from 'react'

/* styled-components */
import styled from 'styled-components'

/* styles */
const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
`

export const Box = ({
   children
}) => {
   return (
      <Container>
         {children}
      </Container>
   )
}


