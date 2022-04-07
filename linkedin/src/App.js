import React from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
         
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* App body */}
     <Sidebar />
     <Feed />
      {/* widgets (right) */}
      </div>
      
    </div>
  );
}

export default App;
