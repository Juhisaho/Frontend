import React from 'react';

import Carlist from './component/Carlist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
   

   return (
       <div className="App">
         <AppBar>
            <Toolbar>
              <Typography variant="h6">
                  Car Shop
              </Typography>
            </Toolbar>
          </AppBar>
           <Carlist />
       </div>
   );
};

export default App;