import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ value, edit, deleteData }) => {
  const { avatar, productTitle, productDescription, price, id } = value;

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
        <p>${price}</p>
        <Link to={`/product/${id}`}>View</Link>
        <button className='startbtn'>Cart</button>
        <button className='startbtn' onClick={() => edit(id)}>
          Edit
        </button>
        <button
          className='startbtn'
          onClick={() => {
            console.log('Delete clicked for id:', id);
            deleteData(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
