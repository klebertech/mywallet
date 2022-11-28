import React from 'react';
import AddSpenseButton from '../components/AddSpenseButton';
import Header from '../components/Header';
import './home.css';

function Home() {
  return (
    <div>
      <Header />
      <AddSpenseButton />
    </div>
  );
}

export default Home;
