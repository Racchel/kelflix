import React from 'react'

/* styled-components */
import styled from 'styled-components'

/* styles */
import { theme, breakpoints as bkp } from '../../styles'

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

export const Title = ({
   title,
   onChange
}) => {
   return (
      <Box>
         <h1>{title}</h1>
         <InputText
            type='text'
            placeholder={`Pesquise por ${title}...`}
            onChange={onChange}
         />
      </Box>
   )
}


