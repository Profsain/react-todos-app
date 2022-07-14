import React from 'react';

export default function Header() {
  return (
    <div>
      <h1
        style={{
          fontSize: '4rem',
          fontWeight: '800',
          marginBottom: '2rem',
          lineHeight: '1em',
          color: '#e6e4e4',
          textTransform: 'upperCase',
          textAlign: 'center',
        }}
      >
        Daily Todos App
      </h1>
    </div>
  );
}
