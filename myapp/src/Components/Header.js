import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{
      backgroundColor: '#333',
      padding: '15px',
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }}>
      <Link
        to="/home"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '5px',
          backgroundColor:'orange'
        }}
      >
        Home Page
      </Link>
      <Link
        to="/about"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '5px',
          backgroundColor: 'lightpink'
        }}
      >
        Register Form
      </Link>
      <Link
        to="/ListPage"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '5px',
          backgroundColor: '#cde20eff'
        }}
      >
        List Page
      </Link>
    </div>
  );
};

export default Header;