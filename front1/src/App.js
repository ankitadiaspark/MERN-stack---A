import './App.css';
import React from 'react';
import ServiceList from './components/serviceList';
import { Routes, Route } from 'react-router-dom';
import ServiceDetail from './components/serviceDetail';
import ServiceBooking from './components/serviceBooking';
import Nav1 from './components/nav';
function App() {
  return (
    <div className="App">
      <Nav1/>
      <Routes>
        <Route path = {'/'} element = {<ServiceList/>}/>
        <Route path = {'service-detail/*'} element = {<ServiceDetail/>}/>
        <Route path = {'service-booking'} element = {<ServiceBooking/>}/>
      </Routes>

    </div>
  );
}

export default App;
