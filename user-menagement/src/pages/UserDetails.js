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
        <h2>{user.name}</h2>
        <p><strong>Email: </strong>{user.email}</p>
        <p><strong>Phone:</strong>{user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
      <p>
        <strong>Address:</strong> {user.address?.street}, {user.address?.city}
      </p>

      <Link to="/">⬅ Back to list</Link>
    </div>
  );
}

export default UserDetails;
