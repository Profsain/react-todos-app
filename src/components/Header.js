import React from 'react';

export default function Header() {
  return (
    <div>
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: '1em',
          color: '#e6e4e4',
          textTransform: 'upperCase',
          textAlign: 'center',
        }}
      >
        Hello Daily Todos App
      </h1>
    </div>
  )
}
