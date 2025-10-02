import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateUser, deleteUser } from "./redux/usersSlice";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
import UserForm from "./components/UserForm";


function App() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");
  const[editingUser, setEditingUser]= useState(null);

  const handleEdit= (user)=> {
    setEditingUser(user);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const filteredUsers = list.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>User Management</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>

              {editingUser ?(
                <form
                onSubmit={(e) => {
      e.preventDefault();
      dispatch(updateUser(editingUser));
      setEditingUser(null);
    }}
  >
    <h2>Edit User</h2>
    <input
      type="text"
      value={editingUser.name}
      onChange={(e) =>
        setEditingUser({ ...editingUser, name: e.target.value })
      }
    />
    <input
      type="email"
      value={editingUser.email}
      onChange={(e) =>
        setEditingUser({ ...editingUser, email: e.target.value })
      }
    />
    <button type="submit">Save</button>
    <button type="button" onClick={() => setEditingUser(null)}>
      Cancel
    </button>
  {/* <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
    <option value="name">Sort by Name</option>
    <option value="email">Sort by Email</option>
  </select> */}

  </form>
) : (
  
  <UserForm />
  
)}
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                {status === "succeeded" ? (
                  <ul>
                  {/* {sortedUsers.map((user)=> */}
                    {filteredUsers.map((user) => (
                      <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                          {user.name} - {user.email}
                        </Link>
                        {" "}
                        <button onClick={()=> dispatch(deleteUser(user.id))}>Delete</button>
                        <button onClick={()=> handleEdit(user)}>Edit</button>
                      </li>
                    ))}
                 
                   </ul>
                ) : (
                  <p>Loading...</p>
                )}
              </>
            }
          />

          {/* Details route */}
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
