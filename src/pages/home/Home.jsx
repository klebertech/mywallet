import React from 'react';
import AddSpense from '../../components/AddSpense';
import Header from '../../components/Header';
import SpensesList from '../../components/SpensesList';
import './home.css';

function Home() {
  return (
    <div>
      <Header />
      <AddSpense />
      <SpensesList />
    </div>
  );
}

export default Home;
