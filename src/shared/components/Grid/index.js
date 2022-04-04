/* components */
import { MovieCard } from '../../components'

/* style */
import { Container } from './style'

/* Grid */
export const Grid = ({
   notFound,
   list
}) => {
   return (
      <Container>
         {
            notFound

               ? // filme não encontrado
               <p>Filme não encontrado!</p>

               : // filmes filtrados
               list.map((item, index) => (
                  <MovieCard item={item} index={index} />
               ))
         }
      </Container>
   )
}


