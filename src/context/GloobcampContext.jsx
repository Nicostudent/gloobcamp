"use client"
import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const GloobcampContext = createContext();

export const GloobcampProvider = ({ children }) => {
  const [name, setName] = useLocalStorage('name', 'Gaston');
  const [surname, setSurname] = useLocalStorage('surname', 'Zappulla');

  return (
    <GloobcampContext.Provider value={{ name, setName, surname, setSurname }}>
      {children}
    </GloobcampContext.Provider>
  );
};

export const useGloobcamp = () => {
  return useContext(GloobcampContext);
};