import React, { useEffect, useState } from "react";
import { getUsersAmount, updateUseTotalAmount } from "../services/apiService";

const AdminAmountManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null); // Track which user is updating
  const [amountInputs, setAmountInputs] = useState({}); // Track input per user

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsersAmount();
      setUsers(data.data);

      // Initialize amount inputs
      const inputs = {};
      data.data.forEach((user) => {
        inputs[user._id] = user.totalAmount;
      });
      setAmountInputs(inputs);
    } catch (err) {
      console.error("Error fetching users:", err);
      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Update totalAmount
  const handleUpdate = async (userId) => {
    const newAmount = amountInputs[userId];
    if (newAmount === "" || isNaN(newAmount)) return alert("Enter valid amount");

    setUpdatingId(userId);
    try {
      const data = await updateUseTotalAmount(userId, Number(newAmount));
      // Update local state
      setUsers((prev) =>
        prev.map((u) => (u._id === userId ? { ...u, totalAmount: data.totalAmount } : u))
      );
      alert("Amount updated successfully!");
    } catch (err) {
      console.error("Error updating amount:", err);
      alert("Failed to update amount");
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="container my-4">
      <h2 className="mb-3">Admin Panel - Users Total Amount</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Current Total Amount</th>
            <th>Update Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>₹{user.totalAmount}</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={amountInputs[user._id]}
                  onChange={(e) =>
                    setAmountInputs((prev) => ({ ...prev, [user._id]: e.target.value }))
                  }
                />
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdate(user._id)}
                  disabled={updatingId === user._id}
                >
                  {updatingId === user._id ? "Updating..." : "Update"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAmountManager;
