import React, { Component, PropTypes } from 'react'
import styles from '../styles'

export default class PromptContainer extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      username: ''
    }
  };

  onUpdateUser = (e) => {
    this.setState({ username: e.target.value })
  };

  onSubmitUser = (e) => {
    e.preventDefault()

    // let username = this.state.username
    this.setState({ username: '' })

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/ballte',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`)
    }
  };

  render() {
    return (
      <div
        className='jumbotron col-sm-6 col-sm-offset-3 text-center'
        style={styles.transparentBg}>
        <h1> {this.props.route.header} </h1>
        <div className='col-sm-12'>
          <form onSubmit={this.onSubmitUser}>
            <div className='form-group'>
              <input
                className='form-control'
                placeholder='Github username'
                onChange={this.onUpdateUser}
                value={this.state.username}
                type='text'/>
            </div>
            <div className='form-group col-sm-4 col-sm-offset-4'>
              <button
                className='btn btn-block btn-success'
                type='submit'>
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  };
}

PromptContainer.contextTypes = {
  router: PropTypes.object.isRequired
};
