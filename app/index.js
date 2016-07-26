import React from 'react'
import ReactDOM from 'react-dom'

const USER_DATA = {
  name: 'Aleks',
  username: 'AleksSenkou',
  imageUrl: 'https://avatars0.githubusercontent.com/u/3635774?v=3&s=460'
}

let ProfilePic = React.createClass({
  render() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
})

let ProfileLink = React.createClass({
  render() {
    return (
      <div>
        <a href={'http://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
})

let ProfileName = React.createClass({
  render() {
    return <div> {this.props.name} </div>
  }
})

let Avatar = React.createClass({
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.imageUrl} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
)
