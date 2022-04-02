import React, { Component } from 'react'

/** layout */
import { ResourcesLayout } from '../shared/layout'

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
        <ResourcesLayout
          title='Filmes'
          notFound={this.state.notFound}
          handleChange={this.handleChange}
          list={this.state.movieFiltered}
        />
      </>
    )
  }
}

