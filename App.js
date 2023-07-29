import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feedtop from './components/Feedtop';
// import { Widgets } from '@mui/icons-material';
import Widget from './components/Widget';


function App() {
  
  return (
    <div className="App ">
    
      <Header/>
    
       
        <div className="app_body flex  bg-gray-200 ">
             <Sidebar/>
            <Feedtop/>
             <Widget/>
        </div>

    
    </div>
  );
}

export default App;
 