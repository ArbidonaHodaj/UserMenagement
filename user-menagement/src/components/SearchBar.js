import React from "react";  
import { TextField } from "@mui/material";

function SearchBar({searchTerm,setSearchTerm}){
    return(
        <TextField
        // type="text"
        // placeholder="Search by name or email.."
        // value={searchTerm}
        // onChange={(e)=> setSearchTerm(e.target.value)}
        // style={{padding:"8px", width: "300px", marginBottom:"20px"}}
        label="Search by name or email"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{marginBottom:2 , width: "300px"}}
        />
    );
}
export default SearchBar