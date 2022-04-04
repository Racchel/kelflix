/* style */
import { Container, MovieImage, MovieTitle } from './style'

export const MovieCard = ({
   index,
   item
}) => {
   return (
      <Container key={index}>
         <MovieImage src={item.poster_path} alt={item.title} />
         <MovieTitle>{item.title || item.name}</MovieTitle>
      </Container>
   )
}


