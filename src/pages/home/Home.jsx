import React from 'react';
import AddSpense from '../../components/AddSpense';
import Header from '../../components/Header';
import List from '../../components/List';
import './home.css';

function Home() {
  return (
    <div>
      <Header />
      <AddSpense />
      <List />
    </div>
  );
}

export default Home;
