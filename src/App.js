import React from 'react';

//ApiKey
import apiKey from '../config'

//Components
import SearchForm from './components/SearchForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className = "container">

      <SearchForm />
      <NavBar />

    </div>
  );
}

export default App;
