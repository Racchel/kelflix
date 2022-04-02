export const filterResource = ({ list, value }) => {
   let notFound

   const resourceFiltered = list.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase())
   })

   resourceFiltered.length > 0
      ? notFound = false
      : notFound = true

   return {
      resourceFiltered,
      notFound
   }
}

