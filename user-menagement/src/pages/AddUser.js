import React from "react";
import UserForm from "../components/UserForm";

function AddUser(){
    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2>Add  User</h2>
            <UserForm/>
        </div>
    );
}
export default AddUser;