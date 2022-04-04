/* styled-components */
import styled from 'styled-components'

/* styles */
import { breakpoints as bkp } from '../../styles'

export const Input = styled.input`
   width: 80%;
   height: 30px;
   padding: 10px;

   @media ${bkp.phone_only} {
      width: 100%;
   }
`
