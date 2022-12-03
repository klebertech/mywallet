import React from 'react';
import AddSpenseButton from '../components/AddSpenseButton';
import Header from '../components/Header';
import SpensesList from '../components/SpensesList';
import './styles/home.css';

function Home() {
  return (
    <div>
      <Header />
      <AddSpenseButton />
      <SpensesList />
    </div>
  );
}

export default Home;
