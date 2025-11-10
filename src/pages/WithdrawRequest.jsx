
import React, { useEffect, useState } from "react";
import { getAllWithdrawRequests, updateWithdrawRequestStatus } from "../services/apiService";
import { Card, Table, Badge, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const WithdrawRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  // ✅ Fetch all withdraw requests
  const loadRequests = async () => {
    try {
      setLoading(true);
      const data = await getAllWithdrawRequests();
      setRequests(data);
    } catch (error) {
      toast.error("Failed to load requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  // ✅ Update status (PATCH)
  const handleStatusUpdate = async (id) => {
    try {
      setUpdatingId(id);

      const result = await updateWithdrawRequestStatus(id, "approved");
      toast.success(result.message || "Request Approved");

      // ✅ Update UI immediately
      setRequests(prev =>
        prev.map(req =>
          req._id === id ? { ...req, status: "approved" } : req
        )
      );
    } catch (error) {
      toast.error("Failed to update");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <Card className="p-3 shadow-sm">
      <h4 className="mb-3">Withdraw Requests</h4>

      {loading ? (
        <div className="text-center py-4">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Amount</th>
              <th>Account No</th>
              <th>IFSC</th>
              <th>Date</th>
              <th>Status</th> {/* ✅ Action removed */}
            </tr>
          </thead>

          <tbody>
            {requests.map(req => (
              <tr key={req._id}>
                <td>{req.userName}</td>
                <td>₹{req.amount}</td>
                <td>{req.accountNumber}</td>
                <td>{req.ifscCode}</td>
                <td>{req.date}</td>

                <td>
                  {req.status === "approved" ? (
                    <Badge bg="success" pill>Approved</Badge>
                  ) : req.status === "rejected" ? (
                    <Badge bg="danger" pill>Rejected</Badge>
                  ) : (
                    <Badge
                      bg="warning"
                      pill
                      style={{ cursor: "pointer" }}
                      onClick={() => handleStatusUpdate(req._id)}
                    >
                      {updatingId === req._id ? "Updating..." : "Pending"}
                    </Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Card>
  );
};

export default WithdrawRequest;
