import React from 'react';

function Header({ title }) {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '15px', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
