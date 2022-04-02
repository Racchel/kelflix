import React, { Component } from 'react'

/** services */
import { api } from '../shared/services'

/** utils */
import { filterResource } from '../shared/utils'


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

    const { notFound, resourceFiltered } = filterResource({
      list: listMovies,
      value: e.target.value
    })

    this.setState({
      movieFiltered: resourceFiltered,
      notFound: notFound
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

