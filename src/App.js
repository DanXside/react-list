import './styles/App.css';

import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/UI/navbar/navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './components/context/context';
import { useState } from 'react';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, setAuth, isLoading}}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App;
