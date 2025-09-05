import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ value, edit, deleteData }) => {
  const { avatar, productTitle, productDescription, productPrice, id } = value;

  return (
    <div className='card'>
      <div className='card-img'>
        <img src={avatar} alt={productTitle} />
      </div>

      <div className='card-title'>
        <p>{productTitle}</p>
        <p>{productDescription}</p>
      </div>

      <div className='card-price-cart'>
        <p>${productPrice}</p> 
           
        <Link to={`/product/${id}`}>View</Link>
        <button className='startbtn1'>Cart</button>
        <button className='startbtn2' onClick={() => edit(id)}>
          Edit
        </button>
        <button className='startbtn3' onClick={() => {
            console.log('Delete clicked for id:', id);
            deleteData(id);
          }}
        >Delete</button>
      </div>
    </div>
  );
};

export default Card;
