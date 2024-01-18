import React from 'react';
import UserProvider from './contexts/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </BrowserRouter>

    </UserProvider>
  );
}

export default App;

//Este é um exemplo de um componente React chamado App que é o componente raiz do aplicativo. Ele usa o React Router DOM para criar rotas para diferentes páginas em nosso aplicativo, e também usa um contexto chamado UserContext, que foi definido em outro lugar do aplicativo.