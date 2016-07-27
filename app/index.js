import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './avatar';
import routes from './config/routes';

const USER_DATA = {
  name: 'Aleks',
  username: 'AleksSenkou',
  imageUrl: 'https://avatars0.githubusercontent.com/u/3635774?v=3&s=460'
}

ReactDOM.render(routes, document.getElementById('app'));
