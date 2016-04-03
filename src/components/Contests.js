import React, {PropTypes, Component} from 'react';
import ContestShort from './ContestShort';

export default class Contests extends Component {


  render() {
    return (
      <div>
        {this.props.contests.items.map((contest, i) =>
          <ContestShort contest={contest} key={contest._id}/>
        )}
      </div>
    )
  }
}

Contests.propTypes = {
  contests: PropTypes.object.isRequired
}