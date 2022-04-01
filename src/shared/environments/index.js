export const environments = (resource) => {
   let API_KEY = '2cd78b2f3233105703d15159229667a8'

   return {
      /**
       * Url base de consulta dos dados dessa aplicaçãos
       */
      BASE_URL: `https://api.themoviedb.org/3/${resource}/popular?api_key=${API_KEY}`
   }
}