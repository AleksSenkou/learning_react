import React, { Component } from 'react'
import styles from '../styles'

class PromptContainer extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      username: ''
    }
  }

  onUpdateUser = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div
        className='jumbotron col-sm-6 col-sm-offset-3 text-center'
        style={styles.transparentBg}>
        <h1> {this.props.route.header} </h1>
        <div className='col-sm-12'>
          <form>
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
  }
}

export default PromptContainer
