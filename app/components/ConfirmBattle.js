import React, { PropTypes } from 'react';

let puke = (obj) => {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <p> LOADING </p>
    : <div> Confirm Players: {puke(props)} </div>
};

export default ConfirmBattle;
