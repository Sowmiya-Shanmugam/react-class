import React, {useEffect, useState } from 'react';
import FormC from '../../Components/Form';
import {useLocation,useNavigate} from 'react-router-dom';
const HomePage=()=>{
  const navigate=useNavigate();
  const[data,setData]=useState([]);
  const pushArray=(childData)=>{
    setData((prev)=>([...prev,childData]));
  }
const locationDetail=useLocation();
console.log(locationDetail);
const handleNavigate=(data)=>{
  navigate('/about',{state:{data:data}})
}


return(
  <div>
    <FormC functionToGetArray={pushArray}/>
    <table border={'1'}>
    <thead>
      <tr>
        <td>name:</td>
          <td>age:</td>
            <td>view</td>
      </tr>
    </thead>
     <tbody>
      {data.map(value=>{
        const{myName,age}=value;
        return(
          <tr>
            <td>{myName}</td>
            <td>{age}</td>
            <td onClick={()=>handleNavigate(value)}>view</td>
          </tr>
        )
      })}
     </tbody>
    </table>
  </div>
)
}
export default HomePage;
