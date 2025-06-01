import React from 'react';

function Footer({ message }) {
  return (
    <footer style={{ background: '#333', color: '#fff', padding: '15px', textAlign: 'center' }}>
      <p>{message}</p>
    </footer>
  );
}

export default Footer;
