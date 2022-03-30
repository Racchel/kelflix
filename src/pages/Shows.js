import React, { Component } from 'react'
import axios from 'axios'

const apiShows = axios.create({
  baseURL:'https://api.themoviedb.org/3/tv/popular?api_key=2cd78b2f3233105703d15159229667a8'
})

export default class Shows extends Component {

  state = {
    listShows: []
  }

  async componentDidMount() {
    const response = await apiShows.get()
    console.log(response)

    const shows = response.data.results.map(
      (item) => {
        return {
          ...item,
          poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        }
      }
    )

    console.log(shows)

    this.setState({
      listShows: shows
    })
  }

  render () {
    return (
      <>
        <h1>Shows</h1>

        <ul>
        {
          this.state.listShows.map((item, index) => (
            <li key={index}>
              <img src={item.poster_path} alt={item.name} />
              {item.name}
            </li>
          ))
        }
        </ul>
      </>
   )
  }
}

