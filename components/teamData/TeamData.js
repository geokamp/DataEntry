"use client"

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";



const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: " Name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "salary",
    headerName: "Salary",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "days",
    headerName: "Days of Work",
    type: "string",
    width: 110,
    editable: true,
  },
];



export default function TeamData() {
    
  useEffect(()=>{
    const fetsusers = async() =>{
      try{
        const res = await fetch("/api");
        const data = await res.json();
        const formatedUser = data.map((user, index) => ({
          id: index + 1,
          name: user.name,
          email: user.email,
          salary: user.salary,
          days: user.days,
        }));
        setUser(formatedUser);
      }catch(err){
        console.log(err);
      }
    };

    fetsusers();
  },[]);

  const [user,setUser] = useState();


  





  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={user}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
