/* components */
import { InputSearch, Grid } from '../../components'

/* layout */
import { BaseLayout } from '..'

export const ResourcesLayout = ({
   title,
   notFound,
   handleChange,
   list
}) => {
   return (
      <BaseLayout title={title}>
         <InputSearch title={title} onChange={handleChange} />
         <Grid notFound={notFound} list={list} />
      </BaseLayout>
   )
}