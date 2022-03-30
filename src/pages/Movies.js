import React, { Component } from 'react'
import axios from 'axios'

const apiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=2cd78b2f3233105703d15159229667a8'
})

export default class Movies extends Component {

  state = {
    listMovies: [],
    movieFiltered: [],
    notFound: false
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const response = await apiMovies.get()

    const movies = response.data.results.map(
      (item) => {
        return {
          ...item,
          poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        }
      }
    )

    this.setState({
      listMovies: movies
    })
  }

  handleChange = (e) => {
    let { listMovies } = this.state

    const movieFiltered = listMovies.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase())
    })

    movieFiltered.length > 0

      ? this.setState({
        movieFiltered: movieFiltered,
        notFound: false
      })

      : this.setState({
        notFound: true
      })

  }

  render() {
    return (
      <>
        <h1>Movies</h1>

        <input type='text' placeholder='Digite um filme' onChange={this.handleChange} />

        <ul>
          {
            this.state.notFound

              ? // filme não encontrado
              <p>Filme não encontrado!</p>

              : // filme filtrado?
              this.state.movieFiltered.length > 0

                ? // filme filtrado encontrado
                this.state.movieFiltered.map((item, index) => (
                  <li key={index}>
                    <img src={item.poster_path} alt={item.title} />
                    {item.title}
                  </li>
                ))

                : // não há filtros
                this.state.listMovies.map((item, index) => (
                  <li key={index}>
                    <img src={item.poster_path} alt={item.title} />
                    {item.title}
                  </li>
                ))
          }
        </ul>
      </>
    )
  }
}

