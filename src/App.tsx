import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Todo from './pages/Todo';
import Login from './pages/Login';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo');
    } else {
      navigate('/');
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
