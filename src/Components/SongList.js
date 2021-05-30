import React, { Component } from 'react'

class SongList extends Component {
  render () {
    return (
      <tr>
        <td style={{ textAlign: 'center' }}>
          <p>{this.props.title}</p>
        </td>
        <td style={{ textAlign: 'center' }}>
          <p>{this.props.artist}</p>
        </td>
        <td style={{ textAlign: 'center' }}>
          <p> {this.props.genre}</p>
        </td>
        <td style={{ textAlign: 'center' }}>
          <p>{this.props.rating}</p>
        </td>
      </tr>
    )
  }
}

export default SongList
