import React, { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setError("Failed to load users. Make sure backend is running."));
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h2>Registered Users</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>ID</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Name</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.id}</td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.name}</td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>No registered users yet.</p>
      )}
    </div>
  );
};

export default Admin;
