import React from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import {HashRouter} from 'react-router-dom'
import router from './router'


function App() {
  return (
    <div className="App">
      <Landing/>
      <HashRouter>
        {router}
      </HashRouter>
    </div>
  );
}

export default App;
