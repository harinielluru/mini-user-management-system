import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const activate = async (id) => {
    await API.put(`/users/${id}/activate`);
    loadUsers();
  };

  const deactivate = async (id) => {
    await API.put(`/users/${id}/deactivate`);
    loadUsers();
  };
    const deleteUser = async (id) => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;

  try {
    await API.delete(`/users/${id}`);

    setUsers((prev) => prev.filter((u) => u._id !== id));
    alert("User deleted successfully");
  } catch (error) {
    console.error(error);
    alert("Failed to delete user");
  }
};

  return (
  <div className="dashboard-card">
    <h2>Admin Dashboard</h2>

    <table className="user-table">
      <thead>
        <tr>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u._id}>
            <td>{u.email}</td>
            <td>
              <span className={`role-badge ${u.role}`}>
                {u.role}
              </span>
            </td>
            <td>
              <span className={`status-badge ${u.status}`}>
                {u.status}
              </span>
            </td>
            <td>
              <button
                className="action-btn activate"
                onClick={() => activate(u._id)}
              >
                Activate
              </button>
              <button
                  className="action-btn deactivate"
                  onClick={() => deactivate(u._id)}
              >
                  Deactivate
              </button>

              <button
                  className="action-btn delete"
                  onClick={() => deleteUser(u._id)}
              >
                  Delete
              </button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

};

export default Dashboard;
