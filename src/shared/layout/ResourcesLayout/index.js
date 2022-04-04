import React from 'react'

/* styled-components */
import styled from 'styled-components'

/* styles */
import { theme } from '../../styles'

/* components */
import { InputSearch, Grid } from '../../components'

/* layout */
import { BaseLayout } from '../../layout'

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