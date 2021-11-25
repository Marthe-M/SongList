import React, { Component } from 'react'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'

class SongForm extends Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <th className='song-title' scope='col'>
                  Song Title
                </th>
                <th className='song-title' scope='col'>
                  Artist Name
                </th>
                <th className='song-title' scope='col'>
                  Song Genre
                </th>
                <th className='song-title' scope='col'>
                  Song Rating
                </th>
              </tr>

              <tr>
                <th scope='row'>
                  <input
                    type='text'
                    id='song'
                    name='title'
                    placeholder='Song Title..'
                  ></input>
                </th>
                <th scope='row'>
                  <input
                    type='text'
                    id='artist'
                    name='artist'
                    placeholder='Artist Name..'
                  ></input>
                </th>
                <th scope='row'>
                  <select id='genre' name='genre'>
                    <option value='rock'>Rock</option>
                    <option value='pop'>Pop</option>
                    <option value='jazz'>Jazz</option>
                  </select>
                </th>
                <th scope='row'>
                  <select id='rating' name='rating'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </select>
                </th>
                <th scope='row'>
                  <button type='submit'>
                    Add new song! <BsFillFileEarmarkMusicFill />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
        <hr></hr>
      </div>
    )
  }
}

export default SongForm
