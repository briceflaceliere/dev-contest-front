import React, {PropTypes, Component} from 'react'

export default class ContestShort extends Component {

  static renderLanguageIcon(language) {
    const iconClassName = 'devicon-' + language + '-plain';
    return (
      <i className={iconClassName}> / {language} </i>
    )
  }

  render() {
    const contest = this.props.contest;
    return (


      <div className="panel panel-default">

        <div className="panel-heading">
          {contest.name}
          <span className="label label-danger">
            {contest.level}
          </span>
          {contest.language.map(ContestShort.renderLanguageIcon)}
          <div className="pull-right">
            Start : {contest.startDate}
          </div>
        </div>

        <div className="panel-body">

          <div className="pull-right">
            <img src={contest.picture}
                 style={{width: 100, height: 100}}/>
          </div>

          <p>
            {contest.description}
          </p>

          <div className="clearfix"></div>

          <div className="pull-right nav">
            <a className="btn btn-default" href="#" role="button">+ d'info</a>
            <a className="btn btn-danger" href="#" role="button">Commencer</a>
          </div>

        </div>
      </div>
    )
  }
}

ContestShort.propTypes = {
  contest: PropTypes.array.isRequired
};