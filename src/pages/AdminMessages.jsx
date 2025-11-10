import React, { useEffect, useState } from "react";
import { getAllMessages } from "../services/apiService"; // API to fetch messages
import "bootstrap/dist/css/bootstrap.min.css";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch messages on mount
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const data = await getAllMessages();
      setMessages(data);
    } catch (err) {
      setError(err.message || "Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">All Contact Messages</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Date</th>
              
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center">
                  No messages found
                </td>
              </tr>
            )}
            {messages.map((msg, index) => (
              <tr key={msg._id}>
                <td>{index + 1}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.phone}</td>
                <td>{msg.message}</td>
                <td>{new Date(msg.createdAt).toLocaleString()}</td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMessages;
