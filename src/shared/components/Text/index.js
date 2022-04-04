/* components */
import { Box } from '..'

/* style*/
import { Paragraph } from './style'

export const Text = ({
   text
}) => {
   return (
      <Box>
         <Paragraph>{text}</Paragraph>
      </Box>
   )
}


