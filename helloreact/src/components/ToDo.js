import React, {useState, useRef } from 'react';
import { AgGridReact} from 'ag-grid-react';
import DateFnsUtils from '@date-io/date-fns'; 
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';


function ToDo () {
    const [todo, setTodo] = useState({description: '', date: '', priority: ''});
    const [todos, setTodos] = useState([]);
    
    const handleDateChange = (date) => {
        setTodo({...todo, date: date.toLocaleDateString('fi')})
    }

    const gridRef = useRef();

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
      }

    const addTodo = () => {
        setTodos([todo,...todos]);
    }

    const deleteTodo= () => {
        if (gridRef.current.getSelectedNodes().length> 0) {
            setTodos(todos.filter((todo,index)=> index!== gridRef.current.getSelectedNodes()[0].childIndex))
        }
    else{
        alert('Select row first');
    }
}

    const columns = [
        {field: 'date', sortable: true, filter: true, floatingFilter: true},
        {field: 'description', sortable: true, filter: true, floatingFilter: true},
        
        {field: 'priority', sortable: true, filter: true, floatingFilter: true,
        cellStyle: params => params.value === "High"  ? {color: 'red'} : {color: 'black'}}
    ]

    return(
        <div style={{marginTop: 20, marginBottom: 30 }}>
            <Stack spacing={2} direction="row" justifyContent="center"  >
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                         <DatePicker onChange={date => handleDateChange(date)} />
                    </MuiPickersUtilsProvider>
                <TextField size="small" onChange={inputChanged} label="Description" name="description" value={todo.description}/>
                <TextField size="small" onChange={inputChanged} label="Priority" name="priority" value={todo.priority}/>
                <Button variant="contained" startIcon={< AddIcon /> } onClick={addTodo}>Add</Button>
                <Tooltip title="Delete selected line">
                <Button variant="contained" color="error" startIcon={< DeleteIcon />} onClick={deleteTodo}>Delete</Button>
                </Tooltip>
            </Stack>

         

            <div className="ag-theme-material" style={{height: 600, width: 600, margin: 'auto'}}>
            <AgGridReact 
                ref={gridRef}
                onGridReady= {params => gridRef.current = params.api}
                rowSelection="single"
                rowData={todos} 
                columnDefs={columns} 
                animateRows={true}
            />
         </div>
        </div>
    );
}

export default ToDo;