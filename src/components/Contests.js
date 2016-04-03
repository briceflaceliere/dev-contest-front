import React, { PropTypes, Component } from 'react'

export default class Contests extends Component {
  render() {
    return (
      <ul>
        {this.props.contests.items.map((contest, i) =>
          <li key={i}>{contest._id}</li>
        )}
      </ul>
    )
  }
}

Contests.propTypes = {
  contests: PropTypes.object.isRequired
}