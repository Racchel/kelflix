import React from 'react'

import { BaseLayout } from '../shared/layouts'

import { ImagesCarousel, FlashingParagraph } from '../shared/components'

export default function Home() {
   const welcome = 'Sejam bem-vind@s ao melhor cinema da internet!'

   return (
      <BaseLayout title='Kelflix'>
         <ImagesCarousel />
         <FlashingParagraph>
            {welcome}
         </FlashingParagraph>
      </BaseLayout>
   )
}