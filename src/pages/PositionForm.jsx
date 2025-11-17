

// import React, { useEffect, useState } from "react";
// import { Container, Form, Button, Card, Alert, Table } from "react-bootstrap";
// import { addPosition, getAllUsers, getAllPositions } from "../services/apiService";

// const AddPositionForm = () => {
//   const [formData, setFormData] = useState({
//     user: "",
//     companyName: "",
//     buy: "",
//     sell: "",
//     quantity: "",
//     gain: "",
//     tradeType: "intraday",
//   });

//   const [users, setUsers] = useState([]);
//   const [positions, setPositions] = useState([]);
//   const [userSearch, setUserSearch] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   // ✅ Load users + positions on start
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usersRes = await getAllUsers();
//         setUsers(usersRes);
//         const posRes = await getAllPositions();
//         setPositions(posRes.positions);
//       } catch (err) {
//         console.error("Error loading data:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   // 🔍 Filter users
//   const handleUserSearch = (e) => {
//     const value = e.target.value;
//     setUserSearch(value);
//     setShowSuggestions(true);
//     const filtered = users.filter((user) =>
//       user.fullName.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   };

//   // ✅ Select user
//   const selectUser = (user) => {
//     setUserSearch(`${user.fullName} (${user.email})`);
//     setFormData((prev) => ({ ...prev, user: user._id }));
//     setShowSuggestions(false);
//   };

//   // 📋 Handle input
//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // 🚀 Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const res = await addPosition({
//         userId: formData.user,
//         companyName: formData.companyName,
//         buy: formData.buy,
//         sell: formData.sell,
//         quantity: formData.quantity,
//         gain: formData.gain,
//         tradeType: formData.tradeType,
//       });

//       setMessage(`✅ Trade added for ${res.position.companyName}`);

//       // reset form
//       setFormData({
//         user: "",
//         companyName: "",
//         buy: "",
//         sell: "",
//         quantity: "",
//         gain: "",
//         tradeType: "intraday",
//       });
//       setUserSearch("");

//       // refresh table
//       const posRes = await getAllPositions();
//       setPositions(posRes.positions);
//     } catch (err) {
//       console.error("Error adding position:", err);
//       setError(err.message || "❌ Failed to add position!");
//     }
//   };

//   return (
//     <Container className="mt-5" style={{ maxWidth: "900px" }}>
//       <Card className="p-4 shadow-lg rounded-3 mb-5">
//         <h3 className="text-center mb-4">📈 Trading Dashboard</h3>

//         {message && <Alert variant="success">{message}</Alert>}
//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleSubmit}>
//           {/* 🔹 User Search Field */}
//           <Form.Group className="mb-3 position-relative">
//             <Form.Label>User</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Type to search user..."
//               value={userSearch}
//               onChange={handleUserSearch}
//               required
//             />
//             {showSuggestions && userSearch && filteredUsers.length > 0 && (
//               <div
//                 className="border position-absolute bg-white w-100 rounded"
//                 style={{ zIndex: 10, maxHeight: "150px", overflowY: "auto" }}
//               >
//                 {filteredUsers.map((user) => (
//                   <div
//                     key={user._id}
//                     className="p-2 hover:bg-light"
//                     onClick={() => selectUser(user)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     {user.fullName} ({user.email})
//                   </div>
//                 ))}
//               </div>
//             )}
//           </Form.Group>

//           {/* 🔹 Company Name */}
//           <Form.Group className="mb-3">
//             <Form.Label>Company Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="companyName"
//               placeholder="Enter company name"
//               value={formData.companyName}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           {/* 🔹 Buy & Sell */}
//           <Form.Group className="mb-3">
//             <Form.Label>Buy Price (₹)</Form.Label>
//             <Form.Control
//               type="number"
//               name="buy"
//               placeholder="Optional"
//               value={formData.buy}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Sell Price (₹)</Form.Label>
//             <Form.Control
//               type="number"
//               name="sell"
//               placeholder="Optional"
//               value={formData.sell}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           {/* 🔹 Quantity */}
//           <Form.Group className="mb-3">
//             <Form.Label>Quantity</Form.Label>
//             <Form.Control
//               type="number"
//               name="quantity"
//               placeholder="Enter quantity"
//               value={formData.quantity}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           {/* 🔹 Gain */}
//           <Form.Group className="mb-3">
//             <Form.Label>Gain</Form.Label>
//             <Form.Control
//               type="number"
//               name="gain"
//               placeholder="Optional"
//               value={formData.gain}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           {/* 🔹 Trade Type */}
//           <Form.Group className="mb-3">
//             <Form.Label>Trade Type</Form.Label>
//             <Form.Select
//               name="tradeType"
//               value={formData.tradeType}
//               onChange={handleChange}
//             >
//               <option value="intraday">Intraday</option>
//               <option value="carry forward">Carry Forward</option>
//             </Form.Select>
//           </Form.Group>

//           <div className="d-grid mt-4">
//             <Button variant="primary" type="submit" size="lg">
//               Save Trade
//             </Button>
//           </div>
//         </Form>
//       </Card>

//       {/* 🧾 Recent Trades */}
//       <Card className="p-3 shadow-sm">
//         <h4>🕒 Recently Added Trades</h4>
//         <Table striped bordered hover responsive className="mt-3">
//           <thead>
//             <tr>
//               <th>User</th>
//               <th>Company</th>
//               <th>Buy ₹</th>
//               <th>Sell ₹</th>
//               <th>Quantity</th>
//               <th>Gain</th>
//               <th>Trade Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {positions.map((pos) => (
//               <tr key={pos._id}>
//                 <td>{pos.user?.fullName || "-"}</td>
//                 <td>{pos.companyName}</td>
//                 <td>{pos.buy || "-"}</td>
//                 <td>{pos.sell || "-"}</td>
//                 <td>{pos.quantity}</td>
//                 <td>{pos.gain || "-"}</td>
//                 <td>{pos.tradeType || "-"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Card>
//     </Container>
//   );
// };

// export default AddPositionForm;


import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card, Alert, Table, Modal, Spinner } from "react-bootstrap";
import { addPosition, getAllUsers, getAllPositions, updatePosition } from "../services/apiService";

const AddPositionForm = () => {
  const [formData, setFormData] = useState({
    user: "",
    companyName: "",
    buy: "",
    sell: "",
    quantity: "",
    gain: "",
    tradeType: "intraday",
  });

  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // For update modal
  const [showModal, setShowModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [updateData, setUpdateData] = useState({ buy: "", sell: "", quantity: "", gain: "", tradeType: "intraday" });

  // Load users + positions on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await getAllUsers();
        setUsers(usersRes);
        const posRes = await getAllPositions();
        setPositions(posRes.positions);
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };
    fetchData();
  }, []);

  // User search
  const handleUserSearch = (e) => {
    const value = e.target.value;
    setUserSearch(value);
    setShowSuggestions(true);
    const filtered = users.filter((user) =>
      user.fullName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const selectUser = (user) => {
    setUserSearch(`${user.fullName} (${user.email})`);
    setFormData((prev) => ({ ...prev, user: user._id }));
    setShowSuggestions(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError("");

    try {
      const res = await addPosition({
        userId: formData.user,
        companyName: formData.companyName,
        buy: formData.buy,
        sell: formData.sell,
        quantity: formData.quantity,
        gain: formData.gain,
        tradeType: formData.tradeType,
      });

      setMessage(`✅ Trade added for ${res.position.companyName}`);
      setFormData({ user: "", companyName: "", buy: "", sell: "", quantity: "", gain: "", tradeType: "intraday" });
      setUserSearch("");

      const posRes = await getAllPositions();
      setPositions(posRes.positions);
    } catch (err) {
      console.error("Error adding position:", err);
      setError(err.message || "❌ Failed to add position!");
    }
  };

  // Update modal handlers
  const handleEditClick = (pos) => {
    setSelectedPosition(pos);
    setUpdateData({
      buy: pos.buy,
      sell: pos.sell,
      quantity: pos.quantity,
      gain: pos.gain,
      tradeType: pos.tradeType,
    });
    setShowModal(true);
  };

  const handleUpdateChange = (e) => {
    setUpdateData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdatePosition = async () => {
    try {
      setMessage(""); setError("");
      await updatePosition(selectedPosition._id, updateData);
      setShowModal(false);

      const posRes = await getAllPositions();
      setPositions(posRes.positions);
      setMessage("✅ Position updated successfully!");
    } catch (err) {
      setError(err.message || "❌ Failed to update position!");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "900px" }}>
      <Card className="p-4 shadow-lg rounded-3 mb-5">
        <h3 className="text-center mb-4">📈 Trading Dashboard</h3>

        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 position-relative">
            <Form.Label>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type to search user..."
              value={userSearch}
              onChange={handleUserSearch}
              required
            />
            {showSuggestions && userSearch && filteredUsers.length > 0 && (
              <div className="border position-absolute bg-white w-100 rounded" style={{ zIndex: 10, maxHeight: "150px", overflowY: "auto" }}>
                {filteredUsers.map((user) => (
                  <div key={user._id} className="p-2 hover:bg-light" style={{ cursor: "pointer" }} onClick={() => selectUser(user)}>
                    {user.fullName} ({user.email})
                  </div>
                ))}
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" name="companyName" placeholder="Enter company name" value={formData.companyName} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Buy Price (₹)</Form.Label>
            <Form.Control type="number" name="buy" placeholder="Optional" value={formData.buy} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sell Price (₹)</Form.Label>
            <Form.Control type="number" name="sell" placeholder="Optional" value={formData.sell} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" name="quantity" placeholder="Enter quantity" value={formData.quantity} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gain</Form.Label>
            <Form.Control type="number" name="gain" placeholder="Optional" value={formData.gain} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Trade Type</Form.Label>
            <Form.Select name="tradeType" value={formData.tradeType} onChange={handleChange}>
              <option value="intraday">Intraday</option>
              <option value="carry forward">Carry Forward</option>
            </Form.Select>
          </Form.Group>

          <div className="d-grid mt-4">
            <Button variant="primary" type="submit" size="lg">Save Trade</Button>
          </div>
        </Form>
      </Card>

      {/* Recent Trades */}
      <Card className="p-3 shadow-sm">
        <h4>🕒 Recently Added Trades</h4>
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>User</th>
              <th>Company</th>
              <th>Buy ₹</th>
              <th>Sell ₹</th>
              <th>Quantity</th>
              <th>Gain</th>
              <th>Trade Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos) => (
              <tr key={pos._id}>
                <td>{pos.user?.fullName || "-"}</td>
                <td>{pos.companyName}</td>
                <td>{pos.buy || "-"}</td>
                <td>{pos.sell || "-"}</td>
                <td>{pos.quantity}</td>
                <td>{pos.gain || "-"}</td>
                <td>{pos.tradeType || "-"}</td>
                <td>
                  <Button size="sm" onClick={() => handleEditClick(pos)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Update Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Position</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Buy Price</Form.Label>
              <Form.Control type="number" name="buy" value={updateData.buy} onChange={handleUpdateChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Sell Price</Form.Label>
              <Form.Control type="number" name="sell" value={updateData.sell} onChange={handleUpdateChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" name="quantity" value={updateData.quantity} onChange={handleUpdateChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Gain</Form.Label>
              <Form.Control type="number" name="gain" value={updateData.gain} onChange={handleUpdateChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Trade Type</Form.Label>
              <Form.Select name="tradeType" value={updateData.tradeType} onChange={handleUpdateChange}>
                <option value="intraday">Intraday</option>
                <option value="carry forward">Carry Forward</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdatePosition}>Update</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AddPositionForm;
