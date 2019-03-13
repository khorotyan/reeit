import React from 'react';
import Header from './components/UI/Header/Header';
import Home from './components/Pages/Home/Home';

const app = props => {
  return (
    <React.Fragment>
      <Header/>
      <Home/>
    </React.Fragment>
  );
};

export default app;
