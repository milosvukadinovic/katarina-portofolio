import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Body from './components/Body'
import QUote from './components/Quote'
import 'bootstrap/dist/css/bootstrap.min.css';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Body></Body>
      <Quote></Quote>
    </div>
  );
}

export default App;
