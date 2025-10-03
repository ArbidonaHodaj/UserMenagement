import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
import { deleteUser } from "../redux/usersSlice";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


function Home(){
    const dispatch = useDispatch();
    // const{listClasses, status } = useSelector((state)=> state.users);
    const {list, status}= useSelector((state)=> state.users);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortKey, setSortKey] = useState("name");
    const [editingUser, setEditingUser] = useState(null);
  
    const filteredUsers = list.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const sortedUsers = [...filteredUsers].sort((a,b)=>
    a[sortKey].localeCompare(b[sortKey])
);
const handleEdit = (user) => setEditingUser(user);
  const handleCancelEdit = () => setEditingUser(null);

  return (
    <div>
      <h2>Users</h2>

      {editingUser ? (
        <UserForm editingUser={editingUser} onCancel={handleCancelEdit} />
      ) : (
        <Link to="/add">
          <Button variant="contained" sx={{ mb: 2 }}>Add User</Button>
        </Link>
      )}

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
      </select>

      {status === "succeeded" ? (
        <UserTable
          users={sortedUsers}
          onDelete={(id) => dispatch(deleteUser(id))}
          onEdit={(u) => handleEdit(u)}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
