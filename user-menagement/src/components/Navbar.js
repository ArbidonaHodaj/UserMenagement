import React  from "react";
import {AppBar, Toolbar, Button} from "@mui/material";   
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";


function Navbar(){
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    User Menagement
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/add">Add User</Button>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar