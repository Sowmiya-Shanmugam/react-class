import React, { useState } from 'react';

const Aboutpage = ({ onAddStudent = () => {} }) => {
  const [student, setStudent] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(student);
    setStudent({ name: '', phone: '', email: '' });
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', color: 'black' }}>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
     
          style={{
            width: '95%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        />
        <input
          type="text"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          placeholder="Phone"
        
          style={{
            width: '95%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
      
          style={{
            width: '95%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#df2505ff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Aboutpage;