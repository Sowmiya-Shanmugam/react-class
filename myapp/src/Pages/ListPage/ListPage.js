import React from 'react';

const ListPage = ({ students = [] }) => {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: 'black',
        marginBottom: '20px'
      }}>Student List</h2>

      {students.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'black' }}>
          No students registered....
        </p>
      ) : (
        <ul style={{
          listStyleType: 'none',
          padding: 0
        }}>
          {students.map((student, index) => (
            <li key={index} style={{
              backgroundColor: '#fff',
              marginBottom: '15px',
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Phone:</strong> {student.phone}</p>
              <p><strong>Email:</strong> {student.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPage;