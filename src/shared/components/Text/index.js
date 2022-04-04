/* components */
import { Box } from '..'

/* style*/
import { Paragraph } from './style'

export const Text = ({
   children
}) => {
   return (
      <Box>
         <Paragraph>{children}</Paragraph>
      </Box>
   )
}


