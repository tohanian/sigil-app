import React from 'react';

const styles = {
  padding: '20px',
  border: '1px solid #b7b7b7',
  backgroundColor: '#c4c4c4',
  fontSize: '106%'
};

const ShareMenuItem = props => {
  return <li style={styles}>{props.children}</li>;
};

export default ShareMenuItem;
