import React, { Component } from 'react'
import SongForm from './SongForm'
import SongList from './SongList'

class SongOverview extends Component {
  constructor () {
    super()
    this.state = {
      songs: [
        {
          title: 'Really Happy',
          artist: 'Pharell',
          genre: 'pop',
          rating: '1',
          id: 1
        },
        {
          title: 'Super Happy',
          artist: 'Pharell',
          genre: 'rock',
          rating: '5',
          id: 2
        },
        {
          title: 'Mega Happy',
          artist: 'APharell',
          genre: 'jazz',
          rating: '4',
          id: 3
        },
        {
          title: 'Uber Happy',
          artist: 'BPharell',
          genre: 'rock',
          rating: '3',
          id: 4
        }
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = event => {
    event.preventDefault()
    const newTitle = event.target[0].value
    const newArtist = event.target[1].value
    const newGenre = event.target[2].value
    const newRating = event.target[3].value
    const newId = this.state.songs.length + 1
    const obj = {
      title: newTitle,
      artist: newArtist,
      genre: newGenre,
      rating: newRating,
      id: newId
    }
    this.setState(prevState => {
      const newSongList = [...prevState.songs]
      newSongList.push(obj)
      const newState = { ...prevState, songs: newSongList }
      console.log(newState)
      return newState
    })
  }

  deleteList () {
    this.setState(prevState => {
      const newSongList = []
      const newState = { ...prevState, songs: newSongList }
      return newState
    })
  }

  sortTitle (arr, prop) {
    const sortedOnTitle = arr.sort(function (a, b) {
      if (a[prop] < b[prop]) {
        return -1
      } else if (a[prop] > b[prop]) {
        return 1
      } else {
        return 0
      }
    })
    this.setState(prevState => {
      const newState = { ...prevState, songs: sortedOnTitle }
      return newState
    })
  }

  sortArtist (arr, prop) {
    const sortedOnArtist = arr.sort(function (a, b) {
      if (a[prop] < b[prop]) {
        return -1
      } else if (a[prop] > b[prop]) {
        return 1
      } else {
        return 0
      }
    })
    this.setState(prevState => {
      const newState = { ...prevState, songs: sortedOnArtist }
      return newState
    })
  }

  sortRating (arr, prop) {
    const sortedOnRating = arr.sort(function (a, b) {
      if (b[prop] < a[prop]) {
        return -1
      } else if (b[prop] > a[prop]) {
        return 1
      } else {
        return 0
      }
    })
    this.setState(prevState => {
      const newState = { ...prevState, songs: sortedOnRating }
      return newState
    })
  }

  sortGenre (arr, prop) {
    const sortedOnGenre = arr.sort(function (a, b) {
      if (a[prop] < b[prop]) {
        return -1
      } else if (a[prop] > b[prop]) {
        return 1
      } else {
        return 0
      }
    })
    this.setState(prevState => {
      const newState = { ...prevState, songs: sortedOnGenre }
      return newState
    })
  }

  render () {
    return (
      <div>
        <SongForm handleSubmit={this.handleSubmit} />
        <div>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <th scope='col' className='song-title'>
                  Song
                </th>
                <th scope='col' className='song-title'>
                  Artist
                </th>
                <th scope='col' className='song-title'>
                  Genre
                </th>
                <th scope='col' className='song-title'>
                  Rating
                </th>
              </tr>

              {this.state.songs.map(items => (
                <SongList
                  key={items.id}
                  id={items.id}
                  title={items.title}
                  artist={items.artist}
                  genre={items.genre}
                  rating={items.rating}
                />
              ))}
            </tbody>
          </table>
          <button onClick={() => this.sortTitle(this.state.songs, 'title')}>
            Sort list on title (A-Z)
          </button>
          <button onClick={() => this.sortArtist(this.state.songs, 'artist')}>
            Sort list on artist name (A-Z)
          </button>
          <button onClick={() => this.sortRating(this.state.songs, 'rating')}>
            Sort list on rating (High to low)
          </button>
          <button onClick={() => this.sortRating(this.state.songs, 'genre')}>
            Sort list on genre
          </button>
          <button onClick={() => this.deleteList()}>Delete list</button>
        </div>
      </div>
    )
  }
}

export default SongOverview
