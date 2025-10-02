import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../redux/usersSlice";
import { TextField, Button, Box, Typography } from "@mui/material";

function UserForm({ editingUser = null, onCancel = () => {} }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  
  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name || "");
      setEmail(editingUser.email || "");
      setError("");
    } else {
      setName("");
      setEmail("");
      setError("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Name and Email are required.");
      return;
    }

    if (editingUser) {
      const updated = { ...editingUser, name: name.trim(), email: email.trim() };
      dispatch(updateUser(updated));
      onCancel(); 
    } else {
      const newUser = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
      };
      dispatch(addUser(newUser));
      setName("");
      setEmail("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 480 }}
    >
      <Typography variant="h6">{editingUser ? "Edit User" : "Add New User"}</Typography>
      {error && <Typography color="error">{error}</Typography>}

      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <Box sx={{ display: "flex", gap: 1 }}>
        <Button type="submit" variant="contained">
          {editingUser ? "Save" : "Add User"}
        </Button>
        {editingUser && (
          <Button variant="outlined" onClick={() => onCancel()}>
            Cancel
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default UserForm;
