import React, { Component } from 'react'

/** layouts */
import { ResourcesLayout } from '../shared/layouts'

/** services */
import { api } from '../shared/services'

/** utils */
import { filterResource } from '../shared/utils'


export default class Shows extends Component {

  state = {
    listShows: [],
    showsFiltered: [],
    notFound: false
  }

  componentDidMount() {
    this.getShows()
  }

  getShows = async () => {
    const shows = await api.getShows()

    this.setState({
      listShows: shows,
      showsFiltered: shows
    })
  }

  handleChange = (e) => {
    let { listShows } = this.state

    const { notFound, resourceFiltered } = filterResource({
      list: listShows,
      value: e.target.value
    })

    this.setState({
      showsFiltered: resourceFiltered,
      notFound: notFound
    })
  }

  render() {
    return (
      <>
        <ResourcesLayout
          title='Séries'
          notFound={this.state.notFound}
          handleChange={this.handleChange}
          list={this.state.showsFiltered}
        />
      </>
    )
  }
}

