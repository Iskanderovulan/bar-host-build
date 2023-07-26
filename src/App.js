import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main'
import Search from './components/Search/Search';
import Layout from './components/Layout/Layout';
import Details from './components/Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/search' element={<Search />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/search/details/:id' element={<Details />} />
        </Route>
      </Routes>
    </>

  );
};

export default App;