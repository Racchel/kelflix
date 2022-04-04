/* components */
import { Box } from '..'

/* style */
import { Input } from './style'

/* InputSearch */
export const InputSearch = ({
   title,
   onChange
}) => {
   return (
      <Box>
         <Input
            type='text'
            placeholder={`Pesquise por ${title}...`}
            onChange={onChange}
         />
      </Box>
   )
}


