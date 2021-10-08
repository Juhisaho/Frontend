
import './App.css';
import React, { useState } from 'react';
import ToDo from './components/ToDo';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {

  const [value, setValue] = useState('one')
  
  const handleChange = (event, value) => setValue(value)
  
  return (
    <div className="App">
     <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
        <Tabs value={value} onChange={handleChange} 
              textColor="secondary"
               indicatorColor="secondary">
            <Tab value="one" label="Homepage"></Tab>
            <Tab value="two" label="Todo-list"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
      {value === 'one' && <h1>Welcome to homepage</h1>}
        {value === 'two' && <ToDo />}
     
    </div>
  );
}

export default App;
