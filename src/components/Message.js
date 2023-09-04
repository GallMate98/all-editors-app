import React, { useState } from 'react'
import axios from "axios";

export default function Message() {
 
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange=() => (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };



const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (query.name.trim() === '') {
     
      isValid = false;
    } else if (query.name.trim().length < 4) {
        
        alert("Name must be at least 4 characters long");
        isValid = false;
    } 

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(query.email)) {
       alert("Wrong email format!")
      isValid = false;
    } 

    if (isValid) {

        if (loading) return;
        setLoading(true);
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
          formData.append(key, value);
        });
    
        axios
          .post(
            "https://getform.io/f/0d87dd65-2c5b-4a1d-afaa-ffda00b91a31",
            formData,
            { headers: { Accept: "application/json" } }
          )
          .then(function (response) {
            setFormStatus(true);
            setQuery({
              name: "",
              email: "",
              message:""
            });
            setLoading(false);
          })
          .catch(function (error) {
            setLoading(false);
          });
      
}
    }

   
  return (
    <div className='flex flex-col mr-20  items-center '>
        <form className='flex flex-col text-center px-8 mb-8 text-white ml-10' onSubmit={handleSubmit}>
            <input className='border-b-2 mb-4 bg-gray-500 placeholder-white' type='text' placeholder='Name' name='name' onChange={handleChange()} value={query.name}/>
            <input className='border-b-2 mb-4 bg-gray-500 placeholder-white' type='email' placeholder='Email' name='email'onChange={handleChange()} value={query.email}/>
            <textarea className="bg-gray-100 mb-4 text-black h-24" row="12" cols="25" placeholder='Message' name='message' value={query.message} onChange={handleChange()}/>
            <input className=' bg-emerald-800  text-white px-20 py-3 cursor-pointer' type='submit' value='Send Message' />
            {formStatus && alert("Message sent")}
        </form>
    </div>
  )
}
