import React, { useState } from "react";
import { DataGrid} from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

import {productData} from "../../../src/dataFile/ProductData"
import './productlist.css'

export default function ProductList() {

    
  const [data, setData] = useState(productData)
  const handleDelete = (id)=>{
    setData(data.filter((item)=> item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              src={params.row.img}
              alt="no internet conection"
              className="productListImg"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "stock", headerName: "stock", width: 200 },
    {
      field: "status",
      headerName: "status",
      width: 90,
    },
    {
      field: "price",
      headerName: "price",
      width: 160,
    },
    {
      field: "action",
      headerName: "action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="actionContainer">
            <Link to={"/user/" + params.row.id}>
            <button className="productListEdit">Edit</button>
            </Link>
            
            <DeleteOutline className="productDelete" 
            onClick={()=> handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className='productListContainer'>
        <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
      />
    </div>
  )
}
