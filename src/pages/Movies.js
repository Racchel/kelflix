import React, { Component } from 'react'

import { api } from '../shared/services'

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
    const movies = await api.getMovies()

    this.setState({
      listMovies: movies,
      movieFiltered: movies
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

              : // filmes filtrados
              this.state.movieFiltered.map((item, index) => (
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

