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

  handleRefreshClick(e) {
    e.preventDefault();

    const {dispatch} = this.props;
    dispatch(fetchContestsIfNeeded());
  }

  render() {
    const {contests, isFetching, lastUpdated} = this.props;
    return (
      <div>
        <p>
          {lastUpdated &&
          <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            {' '}
            </span>
          }
          {!isFetching &&
          <a href='#'
             onClick={this.handleRefreshClick}>
            Refresh
          </a>
          }
        </p>
        {isFetching && contests.length === 0 &&
        <h2>Loading...</h2>
        }
        {!isFetching && contests.length === 0 &&
        <h2>Empty.</h2>
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