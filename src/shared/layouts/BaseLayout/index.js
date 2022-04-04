/* components */
import { Title } from '../../components'

/* style */
import { Container } from './style'

export const BaseLayout = ({
   title,
   children
}) => {
   return (
      <Container>
         <Title title={title} />
         {children}
      </Container>
   )
}