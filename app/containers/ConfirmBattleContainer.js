import React, { Component, PropTypes } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

export default class ConfirmBattleContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }

  componentDidMount() {
    let query = this.props.location.query
    githubHelpers.getPalyersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: players
        })
      })
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
};
