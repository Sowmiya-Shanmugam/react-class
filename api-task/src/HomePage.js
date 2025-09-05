import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get('https://68919b86447ff4f11fbd0f3c.mockapi.io/ecommerce');
      setData(response.data);
    } catch (error) {
      toast.error('Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const editData = (id) => {
    navigate(`/product/${id}`, { state: { isEdit: true } });
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`https://68919b86447ff4f11fbd0f3c.mockapi.io/ecommerce/${id}`);
      toast.success('Deleted successfully');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  return (
    <div className='card-wrapper'>
      {data.map((value) => (
        <Card
          key={value.id}
          value={value}
          edit={editData}
          deleteData={deleteData} 
        />
      ))}
    </div>
  );
};

export default HomePage;
