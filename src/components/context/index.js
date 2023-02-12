import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
  return (
    <UserContext.Provider value={{ contacts, setContacts }}>
      {children}
    </UserContext.Provider>
  );
};
