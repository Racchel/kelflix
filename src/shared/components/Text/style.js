/* styled-components */
import styled from 'styled-components'

/* styles */
import { theme } from '../../styles'

export const Paragraph = styled.p`
   width: 100%;
   padding: 20px 0 0 0;
   font-weight: bold;
   animation: flasher 7s infinite;
   font-size: 18px;
   text-align: center;

   @keyframes flasher {
      0% { color: ${theme.colors.white} }
      25% { color: ${theme.colors.gray} }
      50% { color: ${theme.colors.secondary_color};}
      75% { color: ${theme.colors.gray} }
      100% { color: ${theme.colors.white} }
   }
`
