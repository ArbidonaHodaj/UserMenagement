import  React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UserDetails() {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.list.find((u) => u.id === parseInt(id))
  );

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div>
        <h2>User Details{user.name}</h2>
        <p><strong>Name: </strong>{user.name}</p>
        <p><strong>Email:</strong>{user.email}</p>
      <Link to="/">⬅ Back to list</Link>
    </div>
  );
}

export default UserDetails;
