import { Carousel } from '3d-react-carousal'

import { images } from './images'

import { Image } from './style'

/* ImagesCarousel */
export const ImagesCarousel = () => {
   return (
      <Carousel
         slides={
            images.map(image => (
               <Image src={image.url} alt={image.alt} />
            ))
         }
         autoplay={true}
         interval={3000}
      />
   )
}


