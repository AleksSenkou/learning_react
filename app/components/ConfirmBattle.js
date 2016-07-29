import React, { PropTypes } from 'react';

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <p> LOADING </p>
    : <div> Confirm Players </div>
};

export default ConfirmBattle;
