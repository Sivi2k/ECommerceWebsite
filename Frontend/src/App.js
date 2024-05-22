import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Homescreen from './screens/Homescreen';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = ()  => {
  return (
<React.Fragment>

  <Header/>
  <main className='py-3'>
    <Container>
  <h1>
☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

  </h1>


  <Outlet></Outlet>
  </Container>
  </main>


  <Footer />
</React.Fragment>
  );
}

export default App;
