import React from "react";  
import { TextField } from "@mui/material";

function SearchBar({searchTerm,setSearchTerm}){
    return(
        <TextField
        type="text"
        placeholder="Search by name or email.."
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        style={{padding:"8px", width: "300px", marginBottom:"20px"}}
        />
    );
}
export default SearchBar