/* components */
import { Box } from '..'

/* style*/
import { Paragraph } from './style'

export const FlashingParagraph = ({
   children
}) => {
   return (
      <Box>
         <Paragraph>{children}</Paragraph>
      </Box>
   )
}


