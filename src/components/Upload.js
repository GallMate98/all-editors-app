import React from 'react'
import { useState } from 'react';
export default function Upload() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [imageURL, setImageURL] = useState(null);

    const handleFileChange = (event) => {
      const newSelectedFile = event.target.files[0];
      setSelectedFile(newSelectedFile);
  
      // Reset imageURL when a new file is selected
      setImageURL(null);
  
      if (newSelectedFile && newSelectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageURL(reader.result);
        };
        reader.readAsDataURL(newSelectedFile);
      } else {
        console.log('Please select an image file.');
      }
    };
    
    const handleDragOver = (event) => {
      event.preventDefault();
      setIsDragging(true);
    };
    
    const handleDragLeave = (event) => {
      event.preventDefault();
      setIsDragging(false);
    };
    
    const handleDrop = (event) => {
      event.preventDefault();
      setIsDragging(false);
    
      const droppedFile = event.dataTransfer.files[0];

      
      if (droppedFile && droppedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageURL(reader.result);
        };
        reader.readAsDataURL(droppedFile);
      } else {
        console.log('Please drop an image file.');
      }
    
      setSelectedFile(droppedFile);
    };

  
    const handleUploadButtonClick = () => {
      // Handle the image upload here, e.g., send it to a server.
      if (selectedFile) {
        // You can send the selectedFile to your server or perform other actions here.
        console.log('Uploading image:', selectedFile);
      } else {
        console.log('Please select a file before uploading.');
      }
    };

    return (
      <div
        className={`flex flex-col items-center w-1/2 h-auto p-4 text-slate-400 my-10 border-r-2 ${
          isDragging ? 'border-fuchsia-600' : ''
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <h2 className='text-slate-400 text-center text-3xl text-bold mb-6 p-2'>File Upload</h2>
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit libero. Pellentesque habitant morbi
          tristique senectus.
        </p>
        <img className='w-32 h-32 rounded-full my-2' src='https://seekicon.com/free-icon-download/upload_2.svg' alt='upload' />
        <p className='my-4'> Drag Files to Upload</p>
        <label htmlFor='fileInput' className='text-white bg-fuchsia-600 hover:bg-fuchsia-300 border-4 px-20 py-3 cursor-pointer' onClick={handleUploadButtonClick}>
          <span>BROWSE FILES</span>
        </label>
        <input id='fileInput' type='file' className='hidden' onChange={handleFileChange} />
        {selectedFile && (
        <div>
            <p className='text-black'>Selected File: {selectedFile.name}</p>
            {imageURL && <img src={imageURL} alt='Dropped' className='w-64 h-64 mx-auto' />}
        </div>
        )}

      </div>
    );
    
  
}
