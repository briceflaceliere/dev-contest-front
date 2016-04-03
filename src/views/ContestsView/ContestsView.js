import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchContestsIfNeeded} from '../../redux/modules/contests'
import Contests from '../../../src/components/Contests'

class ContestsView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchContestsIfNeeded(true));
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch} = nextProps;
    dispatch(fetchContestsIfNeeded());
  }


  render() {
    const {contests, isFetching, lastUpdated} = this.props;
    return (
      <div className="ContestsView">

        {isFetching && contests.items.length === 0 &&
        <h2>Chargement...</h2>
        }
        {!isFetching && contests.items.length === 0 &&
        <h2>Pas de concours.</h2>
        }
        {contests.items.length > 0 &&
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <Contests contests={contests}/>
        </div>
        }
      </div>
    )
  }
}

ContestsView.propTypes = {
  contests: PropTypes.object.isRequired,
  isFetching: PropTypes.bool,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  lastUpdated: state.lastUpdated,
  contests: state.contests
});

export default connect(mapStateToProps)(ContestsView)