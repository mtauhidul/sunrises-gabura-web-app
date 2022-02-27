import React, { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import MainRouter from './utils/MainRouter';

export const GlobalContext = createContext();

const App = () => {
  const [auth, setAuth] = useState({});
  return (
    <GlobalContext.Provider value={[auth, setAuth]}>
      <Toaster />
      <MainRouter />
    </GlobalContext.Provider>
  );
};

export default App;
