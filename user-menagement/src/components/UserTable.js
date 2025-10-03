import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from "@mui/material"
import {Link} from "react-router-dom"

function UserTable({ users, onDelete, onEdit }) {
    return (
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
      {/* {sortedUsers.map((user) => ( */}
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>
            <Button color="error" onClick={() => onDelete(user.id)}>
              Delete
            </Button>
            <Button onClick={() => onEdit && onEdit(user)}>Edit</Button>
            <Button component={Link} to={`/users/${user.id}`} >Details</Button>       
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    )}

export default UserTable;
