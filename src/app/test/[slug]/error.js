// app/test/[slug]/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center' 
    }}>
      <h2>Something went wrong!</h2>
      <button 
        onClick={() => reset()}
        style={{
          padding: '10px 20px',
          marginTop: '10px',
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  );
}