import "./transaction.css"
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from "../../../Agency/Components/dummyData";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export default function Transaction() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'UserName', headerName: 'UserName', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
          
        },
        {
          field: "action",
          headerName:"Action",
          width: 150,
          renderCell: (params) =>{
            return(
              <>
             
              <button className="userListEdit">Delete</button>
             
              <DeleteIcon  className="userListDelete"  onClick= {() => handleDelete(params.row.id) }/>
              
              </>
            )
          }

        }
      ];
      
    


  return (
    <div className="transaction">
    <DataGrid
        rows={data}disableSelectionOnClick
        columns={columns}
        pageSize={5}
      
        checkboxSelection
      />
    </div>
  )
}
