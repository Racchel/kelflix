import { API_KEY, BASE_URL } from '../../environments'

export const generateBaseUrl = ({ resource }) => {
   let URL = `${BASE_URL}/${resource}/popular?api_key=${API_KEY}`

   return { URL }
}