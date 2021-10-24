import React, { useState, useEffect } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react/lib/agGridReact';

function Carlist() {
    const [cars, setCars] = useState([]);

        useEffect(() => {
        fetch('http://carrestapi.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err))
        }, []);

const columns = [
    {field: 'brand', sortable: true, filter: true},
    {field: 'model', sortable: true, filter: true},
    {field: 'color', sortable: true, filter: true},
    {field: 'fuel', sortable: true, filter: true},
    {field: 'year', sortable: true, filter: true},
    {field: 'price', sortable: true, filter: true}
]

    return(
        <div className="ag-theme-material" style={{marginTop: 100, height: 600, width: '80%', margin: 'auto'}}>
        <AgGridReact
            rowData={cars}
            columnDefs={columns}
            pagination={true}
            paginationPageSize={10}
        />
        </div>
    );
}

export default Carlist;