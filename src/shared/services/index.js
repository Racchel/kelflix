import axios from 'axios'

/** environments */
import { POSTER_PATH } from '../environments'

/** utils */
import { generateBaseUrl } from '../utils'


/** Retorna uma lista dos recursos que forem enviados como parâmetro. 
 * Valores aceitos: { resource: 'movies' || 'tv' }
 */
const getResource = async ({ resource }) => {
  const { URL } = generateBaseUrl({ resource: resource })

  const apiMovies = axios.create({
    baseURL: URL
  })

  const response = await apiMovies.get()
  const movies = response.data.results.map(
    (item) => {
      return {
        ...item,
        poster_path: `${POSTER_PATH}/${item.poster_path}`
      }
    }
  )

  return movies
}

/** Retorna uma lista filmes */
const getMovies = async () => {
  return await getResource({ resource: 'movie' })
}

/** Retorna uma lista séries */
const getShows = async () => {
  return await getResource({ resource: 'tv' })
}


export const api = {
  getMovies,
  getShows
}