import React from 'react'

/* styled-components */
import styled from 'styled-components'

/* styles */
import { breakpoints as bkp } from '../../styles'

/* components */
import { Box } from '..'

const InputText = styled.input`
   width: 80%;
   height: 30px;
   padding: 10px;

   @media ${bkp.phone_only} {
      width: 100%;
   }
`

export const InputSearch = ({
   title,
   onChange
}) => {
   return (
      <Box>
         <InputText
            type='text'
            placeholder={`Pesquise por ${title}...`}
            onChange={onChange}
         />
      </Box>
   )
}


