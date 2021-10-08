
import './App.css';
import ToDo from './components/ToDo';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



function App() {
  return (
    <div className="App">
     <AppBar position="static">
        <Toolbar>
          
            
         
          
        </Toolbar>
      </AppBar>
       <ToDo />
     
    </div>
  );
}

export default App;
