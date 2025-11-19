
// import React, { useState, useEffect } from "react";
// import {
//   Container, Row, Col, Card, Button, Table, Spinner,
//   Alert, Tabs, Tab, Modal
// } from "react-bootstrap";
// import {
//   getPendingUsers,
//   approveUser,
//   rejectUser,
//   getAllUsers
// } from "../services/apiService";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// const AdminUserManagement = () => {
//   const [pendingUsers, setPendingUsers] = useState([]);
//   const [historyUsers, setHistoryUsers] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // POPUP STATE
//   const [popup, setPopup] = useState({
//     show: false,
//     type: "",     // "approved" or "rejected"
//     message: ""
//   });

//   // FETCH PENDING
//   const fetchPendingUsers = async () => {
//     try {
//       const data = await getPendingUsers();
//       setPendingUsers(data);
//     } catch (err) {
//       setError("Failed to load pending users.");
//     }
//   };

//   // FETCH HISTORY
//   const fetchHistoryUsers = async () => {
//     try {
//       const data = await getAllUsers();
//       setHistoryUsers(data);
//     } catch (err) {
//       setError("Failed to load history.");
//     }
//   };

//   useEffect(() => {
//     const load = async () => {
//       setLoading(true);
//       await fetchPendingUsers();
//       await fetchHistoryUsers();
//       setLoading(false);
//     };
//     load();
//   }, []);

//   // APPROVE
//   const handleApprove = async (userId) => {
//     setLoading(true);

//     try {
//       const res = await approveUser(userId);

//       // Pending से हटाओ
//       setPendingUsers(prev => prev.filter(u => u._id !== userId));

//       // Popup खोलो
//       setPopup({
//         show: true,
//         type: "approved",
//         message: res.message
//       });

//       fetchHistoryUsers();
//     } catch (err) {
//       setError("Failed to approve user.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // REJECT
//   const handleReject = async (userId) => {
//     const reason = prompt("Reject reason (optional):") || "";
//     setLoading(true);

//     try {
//       const res = await rejectUser(userId, reason);

//       setPendingUsers(prev => prev.filter(u => u._id !== userId));

//       setPopup({
//         show: true,
//         type: "rejected",
//         message: res.message
//       });

//       fetchHistoryUsers();
//     } catch (err) {
//       setError("Failed to reject user.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-4">
//       <h2 className="text-center mb-4">Admin User Management</h2>

//       {loading && (
//         <div className="text-center mb-3">
//           <Spinner animation="border" /> Loading...
//         </div>
//       )}

//       {error && <Alert variant="danger">{error}</Alert>}

//       <Tabs defaultActiveKey="pending" className="mb-3" justify>
//         {/* PENDING TAB */}
//         <Tab eventKey="pending" title="Pending Users">
//           <Card className="shadow">
//             <Card.Body>

//               {pendingUsers.length === 0 ? (
//                 <Alert variant="info" className="text-center">
//                   No pending registrations.
//                 </Alert>
//               ) : (
//                 <Table striped bordered hover responsive>
//                   <thead>
//                     <tr>
//                       <th>#</th>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Mobile</th>
//                       <th>Date</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {pendingUsers.map((user, index) => (
//                       <tr key={user._id}>
//                         <td>{index + 1}</td>
//                         <td>{user.fullName}</td>
//                         <td>{user.email}</td>
//                         <td>{user.mobileNumber}</td>
//                         <td>{new Date(user.createdAt).toLocaleDateString()}</td>

//                         <td>
//                           <Button
//                             variant="success"
//                             size="sm"
//                             className="me-2"
//                             disabled={loading}
//                             onClick={() => handleApprove(user._id)}
//                           >
//                             Approve
//                           </Button>

//                           <Button
//                             variant="danger"
//                             size="sm"
//                             disabled={loading}
//                             onClick={() => handleReject(user._id)}
//                           >
//                             Reject
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>

//                 </Table>
//               )}
//             </Card.Body>
//           </Card>
//         </Tab>

//         {/* HISTORY TAB */}
//         <Tab eventKey="history" title="History">
//           <Card className="shadow">
//             <Card.Body>

//               {historyUsers.length === 0 ? (
//                 <Alert variant="info">No history available.</Alert>
//               ) : (
//                 <Table striped bordered hover responsive>
//                   <thead>
//                     <tr>
//                       <th>#</th>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Mobile</th>
//                       <th>Date</th>
//                       <th>Status</th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {historyUsers.map((user, index) => (
//                       <tr key={user._id}>
//                         <td>{index + 1}</td>
//                         <td>{user.fullName}</td>
//                         <td>{user.email}</td>
//                         <td>{user.mobileNumber}</td>
//                         <td>{new Date(user.createdAt).toLocaleDateString()}</td>

//                         <td style={{ fontWeight: "bold" }}>
//                           {user.status === "approved" ? (
//                             <span style={{ color: "green" }}>Approved</span>
//                           ) : (
//                             <span style={{ color: "red" }}>Rejected</span>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               )}

//             </Card.Body>
//           </Card>
//         </Tab>
//       </Tabs>

//       {/* ---------- POPUP MODAL ---------- */}
//       <Modal show={popup.show} centered onHide={() => setPopup({ ...popup, show: false })}>
//         <Modal.Body className="text-center py-4">

//           {popup.type === "approved" ? (
//             <FaCheckCircle size={70} color="green" />
//           ) : (
//             <FaTimesCircle size={70} color="red" />
//           )}

//           <h4 className="mt-3">
//             {popup.type === "approved" ? "User Approved!" : "User Rejected!"}
//           </h4>

//           <p className="text-muted">{popup.message}</p>

//           <Button
//             variant="primary"
//             className="mt-3"
//             onClick={() => setPopup({ ...popup, show: false })}
//           >
//             OK
//           </Button>
//         </Modal.Body>
//       </Modal>

//     </Container>
//   );
// };

// export default AdminUserManagement;



// import React, { useState, useEffect } from "react";
// import {
//   Container, Card, Button, Table, Spinner,
//   Alert, Modal
// } from "react-bootstrap";
// import {
//   getAllUsers,
//   approveUser,
//   rejectUser
// } from "../services/apiService";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // POPUP STATE
//   const [popup, setPopup] = useState({
//     show: false,
//     type: "",
//     message: ""
//   });

//   // FETCH ALL USERS
//   const fetchUsers = async () => {
//     try {
//       const data = await getAllUsers(); // ← SAB USERS AAYENGE
//       setUsers(data);
//     } catch (err) {
//       setError("Failed to load users.");
//     }
//   };

//   useEffect(() => {
//     const load = async () => {
//       setLoading(true);
//       await fetchUsers();
//       setLoading(false);
//     };
//     load();
//   }, []);

//   // APPROVE
//   const handleApprove = async (userId) => {
//     setLoading(true);

//     try {
//       const res = await approveUser(userId);

//       setUsers(prev =>
//         prev.map(u =>
//           u._id === userId ? { ...u, status: "approved" } : u
//         )
//       );

//       setPopup({
//         show: true,
//         type: "approved",
//         message: res.message
//       });

//     } catch (err) {
//       setError("Failed to approve user.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // REJECT
//   const handleReject = async (userId) => {
//     const reason = prompt("Reject reason (optional):") || "";
//     setLoading(true);

//     try {
//       const res = await rejectUser(userId, reason);

//       setUsers(prev =>
//         prev.map(u =>
//           u._id === userId ? { ...u, status: "rejected" } : u
//         )
//       );

//       setPopup({
//         show: true,
//         type: "rejected",
//         message: res.message
//       });

//     } catch (err) {
//       setError("Failed to reject user.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-4">
//       <h2 className="text-center mb-4">Admin User Management</h2>

//       {loading && (
//         <div className="text-center mb-3">
//           <Spinner animation="border" /> Loading...
//         </div>
//       )}

//       {error && <Alert variant="danger">{error}</Alert>}

//       <Card className="shadow">
//         <Card.Body>

//           {users.length === 0 ? (
//             <Alert variant="info" className="text-center">
//               No users found.
//             </Alert>
//           ) : (
//             <Table striped bordered hover responsive>
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                    <th>User Id</th>
//                       <th>password</th>
                   
//                   <th>Mobile</th>
//                   <th>Date</th>
                   
//                   <th>Status / Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {users.map((user, index) => (
//                   <tr key={user._id}>
//                     <td>{index + 1}</td>
//                     <td>{user.fullName}</td>
//                     <td>{user.email}</td>
//                       <td>{user.uniqueLoginCode}</td>
//                            <td>{user.passwordShow}</td>
                      
//                     <td>{user.mobileNumber}</td>
//                     <td>{new Date(user.createdAt).toLocaleDateString()}</td>

//                     <td>
//                       {/* -------------- STATUS BASED UI -------------- */}

//                       {user.status === "approved" ? (
//                         <span style={{ color: "green", fontWeight: "bold" }}>
//                           ✔ Approved
//                         </span>
//                       ) : user.status === "rejected" ? (
//                         <span style={{ color: "red", fontWeight: "bold" }}>
//                           ✘ Rejected
//                         </span>
//                       ) : (
//                         <>
//                           {/* pending users → action buttons */}
//                           <Button
//                             variant="success"
//                             size="sm"
//                             className="me-2"
//                             disabled={loading}
//                             onClick={() => handleApprove(user._id)}
//                           >
//                             Approve
//                           </Button>

//                           <Button
//                             variant="danger"
//                             size="sm"
//                             disabled={loading}
//                             onClick={() => handleReject(user._id)}
//                           >
//                             Reject
//                           </Button>
//                         </>
//                       )}
//                     </td>

//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}
//         </Card.Body>
//       </Card>

//       {/* ---------- POPUP MODAL ---------- */}
//       <Modal show={popup.show} centered onHide={() => setPopup({ ...popup, show: false })}>
//         <Modal.Body className="text-center py-4">

//           {popup.type === "approved" ? (
//             <FaCheckCircle size={70} color="green" />
//           ) : (
//             <FaTimesCircle size={70} color="red" />
//           )}

//           <h4 className="mt-3">
//             {popup.type === "approved" ? "User Approved!" : "User Rejected!"}
//           </h4>

//           <p className="text-muted">{popup.message}</p>

//           <Button
//             variant="primary"
//             className="mt-3"
//             onClick={() => setPopup({ ...popup, show: false })}
//           >
//             OK
//           </Button>
//         </Modal.Body>
//       </Modal>

//     </Container>
//   );
// };

// export default AdminUserManagement;

import React, { useState, useEffect } from "react";
import { Container, Card, Button, Table, Spinner, Alert, Modal } from "react-bootstrap";
import { approveUser, rejectUser, getAllUsers } from "../services/apiService"; // Updated APIs
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchUsers();
  }, []);

  // Approve / Reject user
  const handleStatusChange = async (userId, newStatus) => {
    setLoading(true);
    try {
      let res;
      if (newStatus === "approved") {
        res = await approveUser(userId);
      } else if (newStatus === "rejected") {
        res = await rejectUser(userId);
      }

      // Update local state
      setUsers(prev =>
        prev.map(u => (u._id === userId ? { ...u, status: newStatus } : u))
      );

      setPopup({
        show: true,
        type: newStatus === "approved" ? "approved" : "rejected",
        message: res.message || `User ${newStatus} successfully`,
      });
    } catch (err) {
      setError(err.message || `Failed to ${newStatus} user.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Admin User Management</h2>

      {loading && (
        <div className="text-center mb-3">
          <Spinner animation="border" /> Loading...
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}

      <Card className="shadow">
        <Card.Body>
          {users.length === 0 ? (
            <Alert variant="info" className="text-center">
              No users found.
            </Alert>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Id</th>
                  <th>Password</th>
                  <th>Mobile</th>
                  <th>Date</th>
                  <th>Status / Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.uniqueLoginCode}</td>
                    <td>{user.passwordShow}</td>
                    <td>{user.mobileNumber}</td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td>
                      {user.status === "approved" ? (
                        <>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            ✔ Approved
                          </span>
                          <Button
                            variant="danger"
                            size="sm"
                            className="ms-2"
                            disabled={loading}
                            onClick={() => handleStatusChange(user._id, "rejected")}
                          >
                            Reject
                          </Button>
                        </>
                      ) : user.status === "rejected" ? (
                        <>
                          <span style={{ color: "red", fontWeight: "bold" }}>
                            ✘ Rejected
                          </span>
                          <Button
                            variant="success"
                            size="sm"
                            className="ms-2"
                            disabled={loading}
                            onClick={() => handleStatusChange(user._id, "approved")}
                          >
                            Approve
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="success"
                            size="sm"
                            className="me-2"
                            disabled={loading}
                            onClick={() => handleStatusChange(user._id, "approved")}
                          >
                            Approve
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            disabled={loading}
                            onClick={() => handleStatusChange(user._id, "rejected")}
                          >
                            Reject
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* Popup Modal */}
      <Modal
        show={popup.show}
        centered
        onHide={() => setPopup({ ...popup, show: false })}
      >
        <Modal.Body className="text-center py-4">
          {popup.type === "approved" ? (
            <FaCheckCircle size={70} color="green" />
          ) : (
            <FaTimesCircle size={70} color="red" />
          )}
          <h4 className="mt-3">
            {popup.type === "approved" ? "User Approved!" : "User Rejected!"}
          </h4>
          <p className="text-muted">{popup.message}</p>
          <Button
            variant="primary"
            className="mt-3"
            onClick={() => setPopup({ ...popup, show: false })}
          >
            OK
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminUserManagement;
  