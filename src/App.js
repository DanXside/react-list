import './styles/App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/UI/navbar/navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './components/context/context';
import { useState } from 'react';

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{isAuth, setAuth}}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App;
