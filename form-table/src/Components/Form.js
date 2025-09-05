import React,{useState} from 'react'

const FormC=({functionToGetArray})=>{
    const [formData,setFormData]=useState({
        myName:'',
        age:''

    })
    const handleChange=(e)=>{
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value }))
    }
    const handleClick=(e)=>{
        e.preventDefault();
        functionToGetArray(formData);
    }
    const{myName,age}=formData;
    return(
        <div>
            <form>
                <input type='text' value={myName} onChange={handleChange} name='myName'/>
                 <input type='text' value={age} onChange={handleChange} name='age'/>
                <button onClick={handleClick}>click</button>
            </form>
        </div>
    )
}
export default FormC;