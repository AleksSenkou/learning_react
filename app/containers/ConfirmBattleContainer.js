import React, { Component, PropTypes } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

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
    // Fetch info from github
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
