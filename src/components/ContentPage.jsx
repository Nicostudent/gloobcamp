"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const ContentPage = ({ title, content, children = null }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className='w-full h-full flex flex-col gap-10 justify-between items-center'>
      <h1 className='text-center text-4xl font-bold'>{title}</h1>
      <div className='flex justify-center items-center w-full'>
        <div className='w-full pr-12 prose prose-lg text-start overflow-x-scroll md:overflow-x-hidden  '>
          <ReactMarkdown >{content}</ReactMarkdown>
        </div>
      </div>
     
      {modal ? (
        <div>
          {children}
        </div>
      ): (
        <button
        className='border rounded-lg px-6 py-2'
        onClick={() => setModal(!modal)}
      >
        Take the Quiz
      </button>
      )}
    </div>
  );
};

export default ContentPage;
