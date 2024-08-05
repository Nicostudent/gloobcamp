"use client"; 

import React, { useState } from 'react';

const ContentPage = ({ title, content, children = null }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className='w-full h-full gap-10 flex flex-col justify-between items-center'>
      <h1 className='text-center text-4xl'>{title}</h1>
      <div className='flex justify-center items-center'>
        <p className='text-center w-1/2'>{content}</p>
      </div>
      <button className='border rounded-lg px-2 p-6' onClick={() => setModal(!modal)}>
        Take the Quiz
      </button>
      {modal && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default ContentPage;