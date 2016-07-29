import React, { Component } from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className='main-container'>
        <div>
          <Link to='/'>
            <button className='btn btn-default'> Home </button>
          </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
})
