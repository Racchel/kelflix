import React from 'react'

import { BaseLayout } from '../shared/layouts'

import { ImagesCarousel } from '../shared/components'

export default function Home() {
   return (
      <BaseLayout title='KelFlix'>
         <ImagesCarousel />
      </BaseLayout>
   )
}