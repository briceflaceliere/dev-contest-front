import React, { PropTypes, Component } from 'react'

export default class ContestShort extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((contest, i) =>
          <li key={i}>{contest}</li>
        )}
      </ul>
    )
  }
}

ContestShort.propTypes = {
  posts: PropTypes.array.isRequired
}