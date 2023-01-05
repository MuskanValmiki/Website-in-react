import './App.css';
import './components/About';
import './components/Dashboard';
import './components/Home'
import React from 'react';
import {Link,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
     <Link to="/Home">Home Page</Link><br></br>
      <Link to="/About">About Page</Link><br></br>
      <Link to="/Dashboard">Dashboard Page</Link><br></br>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
