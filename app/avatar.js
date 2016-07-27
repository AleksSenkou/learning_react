import React, { Component } from 'react';

class ProfilePic extends Component {
  render() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
  }
}

let Link = React.createClass({
  changeUrl() {
    window.location.replace(this.props.href)
  },

  render() {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeUrl}>
        {this.props.children}
      </span>
    )
  }
})

class ProfileLink extends Component {
  render() {
    return (
      <div>
        <Link href={'http://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
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
        <ProfilePic imageUrl={this.props.user.imageUrl}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    )
  }
}
