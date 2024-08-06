"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const ContentPage = ({ title, content, children = null }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className='w-full h-full flex flex-col md:gap-10 justify-between items-center'>
      <h1 className='text-center text-2xl md:text-4xl font-bold'>{title}</h1>
      <div className='flex justify-center items-center w-full'>
        <div className='w-full  prose md:prose-lg text-left markdown-content'>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <button
        className='border rounded-lg px-4 py-2 md:px-6 md:py-3'
        onClick={() => setModal(!modal)}
      >
        Take the Quiz
      </button>
      {modal && (
        <div className='w-full mt-4'>
          {children}
        </div>
      )}
    </div>
  );
};

export default ContentPage;
