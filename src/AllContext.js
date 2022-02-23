import React, { useState, useEffect, createContext } from 'react';

export const AllContext = createContext();

export const ContextProvider = (props) => {
  const [name, setName] = useState(() => localStorage.getItem('name'));
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  return <AllContext.Provider value={[name, setName]}>{props.children}</AllContext.Provider>;
};
