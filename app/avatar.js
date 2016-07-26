import React, { Component } from 'react'

class ProfilePic extends Component {
  render() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
}

class ProfileLink extends Component {
  render() {
    return (
      <div>
        <a href={'http://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
}

class ProfileName extends Component {
  render() {
    return <div> {this.props.name} </div>
  }
}

export default class Avatar extends Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.imageUrl} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}
