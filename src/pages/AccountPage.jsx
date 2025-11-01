

// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
// import { createAccount, getAllAccounts, updateAccount, deleteAccount } from "../services/apiService"; // path check karo

// const AccountPage = () => {
//   const [accountNumber, setAccountNumber] = useState("");
//   const [ifscCode, setIfscCode] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [accounts, setAccounts] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [updateLoading, setUpdateLoading] = useState(false);

//   // Fetch all accounts on load
//   useEffect(() => {
//     fetchAccounts();
//   }, []);

//   const fetchAccounts = async () => {
//     try {
//       const data = await getAllAccounts();
//       setAccounts(data.accounts || []); // backend ka structure
//     } catch (err) {
//       alert(err.message || "Error fetching accounts");
//       setAccounts([]);
//     }
//   };

//   // Create Account
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await createAccount({ accountNumber, ifscCode });
//       alert(res.message || "Account created successfully!");
//       setAccountNumber("");
//       setIfscCode("");
//       fetchAccounts();
//     } catch (err) {
//       alert(err.message || "Error creating account");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Start editing
//   const startEditing = (account) => {
//     setEditingId(account._id);
//     setAccountNumber(account.accountNumber);
//     setIfscCode(account.ifscCode);
//   };

//   // Update Account
//   const handleUpdate = async () => {
//     setUpdateLoading(true);
//     try {
//       const res = await updateAccount(editingId, { accountNumber, ifscCode });
//       alert(res.message || "Account updated successfully!");
//       setEditingId(null);
//       setAccountNumber("");
//       setIfscCode("");
//       fetchAccounts();
//     } catch (err) {
//       alert(err.message || "Error updating account");
//     } finally {
//       setUpdateLoading(false);
//     }
//   };

//   // Delete Account
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this account?")) return;

//     try {
//       const res = await deleteAccount(id);
//       alert(res.message || "Account deleted successfully!");
//       fetchAccounts();
//     } catch (err) {
//       alert(err.message || "Error deleting account");
//     }
//   };

//   return (
//     <Container fluid style={{ padding: "50px", minHeight: "100vh", background: "#f0f4f7" }}>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card
//             style={{
//               padding: "30px",
//               borderRadius: "15px",
//               boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
//               background: "linear-gradient(to bottom, #ffffff, #e6f0ff)",
//             }}
//           >
//             <h2 className="mb-4 text-center" style={{ color: "#1565c0" }}>
//               {editingId ? "Update Account" : "Add Account"}
//             </h2>
//             <Form
//               onSubmit={(e) => {
//                 if (editingId) {
//                   e.preventDefault();
//                   handleUpdate();
//                 } else handleSubmit(e);
//               }}
//             >
//               <Form.Group className="mb-3" controlId="formAccountNumber">
//                 <Form.Label>Account Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter account number"
//                   value={accountNumber}
//                   onChange={(e) => setAccountNumber(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-4" controlId="formIFSC">
//                 <Form.Label>IFSC Code</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter IFSC code"
//                   value={ifscCode}
//                   onChange={(e) => setIfscCode(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Button type="submit" className="w-100" disabled={loading || updateLoading}>
//                 {(loading || updateLoading)
//                   ? "Processing..."
//                   : editingId
//                   ? "Update"
//                   : "Submit"}
//               </Button>
//               {editingId && (
//                 <Button
//                   className="w-100 mt-2"
//                   variant="secondary"
//                   onClick={() => {
//                     setEditingId(null);
//                     setAccountNumber("");
//                     setIfscCode("");
//                   }}
//                 >
//                   Cancel
//                 </Button>
//               )}
//             </Form>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="justify-content-center mt-5">
//         <Col md={8}>
//           <h3 className="mb-3 text-center" style={{ color: "#1565c0" }}>
//             Accounts List
//           </h3>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Account Number</th>
//                 <th>IFSC Code</th>
//                 <th>Created At</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.isArray(accounts) && accounts.length > 0 ? (
//                 accounts.map((acc, index) => (
//                   <tr key={acc._id}>
//                     <td>{index + 1}</td>
//                     <td>{acc.accountNumber}</td>
//                     <td>{acc.ifscCode}</td>
//                     <td>{new Date(acc.createdAt).toLocaleString()}</td>
//                     <td>
//                       <Button size="sm" onClick={() => startEditing(acc)} className="me-2">
//                         Edit
//                       </Button>
//                       <Button size="sm" variant="danger" onClick={() => handleDelete(acc._id)}>
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center">
//                     No accounts found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AccountPage;


// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
// import { createAccount, getAllAccounts, updateAccount, deleteAccount } from "../services/apiService";

// const AccountPage = () => {
//   const [accountNumber, setAccountNumber] = useState("");
//   const [ifscCode, setIfscCode] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [accounts, setAccounts] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [updateLoading, setUpdateLoading] = useState(false);

//   useEffect(() => {
//     fetchAccounts();
//   }, []);

//   const fetchAccounts = async () => {
//     try {
//       const data = await getAllAccounts();
//       setAccounts(data.accounts || []);
//     } catch (err) {
//       alert(err.message || "Error fetching accounts");
//       setAccounts([]);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await createAccount({ accountNumber, ifscCode });
//       alert(res.message || "Account created successfully!");
//       setAccountNumber("");
//       setIfscCode("");
//       fetchAccounts();
//     } catch (err) {
//       alert(err.message || "Error creating account");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const startEditing = (account) => {
//     setEditingId(account._id);
//     setAccountNumber(account.accountNumber);
//     setIfscCode(account.ifscCode);
//   };

//   const handleUpdate = async () => {
//     setUpdateLoading(true);
//     try {
//       const res = await updateAccount(editingId, { accountNumber, ifscCode });
//       alert(res.message || "Account updated successfully!");
//       setEditingId(null);
//       setAccountNumber("");
//       setIfscCode("");
//       fetchAccounts();
//     } catch (err) {
//       alert(err.message || "Error updating account");
//     } finally {
//       setUpdateLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this account?")) return;

//     try {
//       const res = await deleteAccount(id);
//       alert(res.message || "Account deleted successfully!");
//       fetchAccounts();
//     } catch (err) {
//       alert(err.message || "Error deleting account");
//     }
//   };

//   return (
//     <Container
//       fluid
//       style={{
//         padding: "50px",
//         minHeight: "100vh",
//         background: "linear-gradient(to bottom right, #e8f0ff, #ffffff)",
//       }}
//     >
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card
//             style={{
//               padding: "30px",
//               borderRadius: "12px",
//               boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//               background: "#fff",
//             }}
//           >
//             <h2 className="mb-4 text-center" style={{ color: "#0d47a1", fontWeight: 600 }}>
//               {editingId ? "Update Account" : "Add New Account"}
//             </h2>

//             <Form
//               onSubmit={(e) => {
//                 if (editingId) {
//                   e.preventDefault();
//                   handleUpdate();
//                 } else handleSubmit(e);
//               }}
//             >
//               <Form.Group className="mb-3" controlId="formAccountNumber">
//                 <Form.Label>Account Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter account number"
//                   value={accountNumber}
//                   onChange={(e) => setAccountNumber(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-4" controlId="formIFSC">
//                 <Form.Label>IFSC Code</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter IFSC code"
//                   value={ifscCode}
//                   onChange={(e) => setIfscCode(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Button
//                 type="submit"
//                 className="w-100"
//                 disabled={loading || updateLoading}
//                 style={{
//                   backgroundColor: "#1565c0",
//                   border: "none",
//                   fontWeight: 500,
//                   padding: "10px",
//                 }}
//               >
//                 {(loading || updateLoading)
//                   ? "Processing..."
//                   : editingId
//                   ? "Update Account"
//                   : "Create Account"}
//               </Button>

//               {editingId && (
//                 <Button
//                   className="w-100 mt-2"
//                   variant="secondary"
//                   onClick={() => {
//                     setEditingId(null);
//                     setAccountNumber("");
//                     setIfscCode("");
//                   }}
//                 >
//                   Cancel
//                 </Button>
//               )}
//             </Form>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="justify-content-center mt-5">
//         <Col md={9}>
//           <Card
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//               background: "#fff",
//               padding: "20px",
//             }}
//           >
//             <h3
//               className="mb-3 text-center"
//               style={{ color: "#0d47a1", fontWeight: 600 }}
//             >
//               Accounts List
//             </h3>
//             <Table striped bordered hover responsive>
//               <thead style={{ background: "#1565c0", color: "#fff" }}>
//                 <tr>
//                   <th>#</th>
//                   <th>Account Number</th>
//                   <th>IFSC Code</th>
//                   <th>Created At</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Array.isArray(accounts) && accounts.length > 0 ? (
//                   accounts.map((acc, index) => (
//                     <tr key={acc._id}>
//                       <td>{index + 1}</td>
//                       <td>{acc.accountNumber}</td>
//                       <td>{acc.ifscCode}</td>
//                       <td>{new Date(acc.createdAt).toLocaleString()}</td>
//                       <td>
//                         <Button
//                           size="sm"
//                           onClick={() => startEditing(acc)}
//                           className="me-2"
//                           style={{
//                             backgroundColor: "#1976d2",
//                             border: "none",
//                           }}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="danger"
//                           onClick={() => handleDelete(acc._id)}
//                         >
//                           Delete
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="text-center text-muted">
//                       No accounts found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </Table>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AccountPage;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import { createAccount, getAllAccounts, updateAccount, deleteAccount } from "../services/apiService";

const AccountPage = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const data = await getAllAccounts();
      setAccounts(data.accounts || []);
    } catch (err) {
      alert(err.message || "Error fetching accounts");
      setAccounts([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createAccount({ accountNumber, ifscCode });
      alert(res.message || "Account created successfully!");
      setAccountNumber("");
      setIfscCode("");
      fetchAccounts();
    } catch (err) {
      alert(err.message || "Error creating account");
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (account) => {
    setEditingId(account._id);
    setAccountNumber(account.accountNumber);
    setIfscCode(account.ifscCode);
  };

  const handleUpdate = async () => {
    setUpdateLoading(true);
    try {
      const res = await updateAccount(editingId, { accountNumber, ifscCode });
      alert(res.message || "Account updated successfully!");
      setEditingId(null);
      setAccountNumber("");
      setIfscCode("");
      fetchAccounts();
    } catch (err) {
      alert(err.message || "Error updating account");
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this account?")) return;
    try {
      const res = await deleteAccount(id);
      alert(res.message || "Account deleted successfully!");
      fetchAccounts();
    } catch (err) {
      alert(err.message || "Error deleting account");
    }
  };

  return (
    <Container
      fluid
      style={{
        padding: "50px",
        minHeight: "100vh",
        background: "transparent", // 🔹 Background removed
      }}
    >
      {/* --- Form Card --- */}
      <Row className="justify-content-center">
        <Col md={6}>
          <Card
            style={{
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <h2 className="mb-4 text-center" style={{ color: "#0d47a1", fontWeight: 600 }}>
              {editingId ? "Update Account" : "Add New Account"}
            </h2>

            <Form
              onSubmit={(e) => {
                if (editingId) {
                  e.preventDefault();
                  handleUpdate();
                } else handleSubmit(e);
              }}
            >
              <Form.Group className="mb-3" controlId="formAccountNumber">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formIFSC">
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter IFSC code"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value)}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100"
                disabled={loading || updateLoading}
                style={{
                  backgroundColor: "#1565c0",
                  border: "none",
                  fontWeight: 500,
                  padding: "10px",
                }}
              >
                {(loading || updateLoading)
                  ? "Processing..."
                  : editingId
                  ? "Update Account"
                  : "Create Account"}
              </Button>

              {editingId && (
                <Button
                  className="w-100 mt-2"
                  variant="secondary"
                  onClick={() => {
                    setEditingId(null);
                    setAccountNumber("");
                    setIfscCode("");
                  }}
                >
                  Cancel
                </Button>
              )}
            </Form>
          </Card>
        </Col>
      </Row>

      {/* --- Table Card --- */}
      <Row className="justify-content-center mt-5">
        <Col md={9}>
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              background: "#fff",
              padding: "20px",
            }}
          >
            <h3
              className="mb-3 text-center"
              style={{ color: "#0d47a1", fontWeight: 600 }}
            >
              Accounts List
            </h3>
            <Table striped bordered hover responsive>
              <thead style={{ background: "#1565c0", color: "#fff" }}>
                <tr>
                  <th>#</th>
                  <th>Account Number</th>
                  <th>IFSC Code</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(accounts) && accounts.length > 0 ? (
                  accounts.map((acc, index) => (
                    <tr key={acc._id}>
                      <td>{index + 1}</td>
                      <td>{acc.accountNumber}</td>
                      <td>{acc.ifscCode}</td>
                      <td>{new Date(acc.createdAt).toLocaleString()}</td>
                      <td>
                        <Button
                          size="sm"
                          onClick={() => startEditing(acc)}
                          className="me-2"
                          style={{
                            backgroundColor: "#1976d2",
                            border: "none",
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => handleDelete(acc._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">
                      No accounts found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountPage;
