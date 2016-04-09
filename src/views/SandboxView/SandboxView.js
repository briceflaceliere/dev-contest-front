import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class SandboxView extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="Sandbox">
        Ici : tous les tests.
      </div>
    )
  }
}

SandboxView.propTypes = {

};

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(SandboxView)