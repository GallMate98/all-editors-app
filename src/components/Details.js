import React, { useState } from 'react'

export default function Details() {
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [tel, setTel]=useState('');
  const [description, setDescription]=useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telError, setTelError] = useState('');
  

  const handleNameChange = (event) => {
    setName(event.target.value);
}

const handlEmailChange = (event) => {
    setEmail(event.target.value);
}

const handleTelChange = (event) => {
    setTel(event.target.value);
}

const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();


    // Validation
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      alert("Wrong Name!");
      isValid = false;
    } else if (name.trim().length < 4) {
        setNameError('Name must be at least 4 characters long');
        alert("Name must be at least 4 characters long");
        isValid = false;
    } else {
      setNameError('');
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError('Invalid email address');
      alert("Invalid email address");
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!/^\d{10}$/.test(tel)) {
      setTelError('Phone number must be 10 digits');
      alert("Invalid tel number");
      isValid = false;
    } else {
      setTelError('');
    }

    if (isValid) {
      alert("Name: "+name+"\n"+"Email: "+email+"\n"+"Phone: "+tel+"\n"+"Description: "+description+"\n");
}
    }

   
  return (
    <div className='flex flex-col mx-24'>
        <h2 className='text-slate-400 text-center text-3xl text-bold p-2'>You are Contact<br/>Details</h2>
        <form className='flex flex-col text-center  ml-200   pl-8 pr-8 mb-8 text-slate-500' onSubmit={handleSubmit}>
            <input className='border-b-4 mb-4' type='text' placeholder='Name' name='username' onChange={handleNameChange}  value={name}/>
            <input className='border-b-4 mb-4 ' type='email' placeholder='Email' name='email'onChange={handlEmailChange} value={email}/>
            <input className='border-b-4 mb-4' type='tel' placeholder='Phone' name='phoneNumber' onChange={handleTelChange} value={tel}/>
            <textarea className="bg-gray-200 mb-4 text-black h-24" row="12" cols="25" placeholder='Description' value={description} onChange={handleDescriptionChange}/>
            <input className='border-fuchsia-800 border-4 text-black px-20 py-3 cursor-pointer' type='submit' value='Send Details' onClick={handleSubmit}/>
        </form>
    </div>
  )
}
