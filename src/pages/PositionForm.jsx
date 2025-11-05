// import React, { useState } from "react";
// import { Container, Form, Button, Card, Alert } from "react-bootstrap";
// import axios from "axios";

// const AddTradeForm = () => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     buy: "",
//     sell: "",
//     totalPrice: "",
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   // 🔹 handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 🔹 submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/positions", formData);
//       setMessage(`✅ Trade added successfully for ${res.data.companyName}`);
//       setFormData({ companyName: "", buy: "", sell: "", totalPrice: "" });
//     } catch (err) {
//       setError("❌ Error saving trade. Check API or inputs!");
//       console.error(err);
//     }
//   };

//   return (
//     <Container className="mt-5" style={{ maxWidth: "600px" }}>
//       <Card className="p-4 shadow-lg rounded-3">
//         <h3 className="text-center mb-4">📈 Add Trade </h3>

//         {message && <Alert variant="success">{message}</Alert>}
//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleSubmit}>
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

//           <Form.Group className="mb-3">
//             <Form.Label>Buy Price (₹)</Form.Label>
//             <Form.Control
//               type="number"
//               name="buy"
//               placeholder="Enter buy price"
//               value={formData.buy}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Sell Price (₹)</Form.Label>
//             <Form.Control
//               type="number"
//               name="sell"
//               placeholder="Enter sell price"
//               value={formData.sell}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Total Investment (₹)</Form.Label>
//             <Form.Control
//               type="number"
//               name="totalPrice"
//               placeholder="Enter total investment"
//               value={formData.totalPrice}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <div className="d-grid mt-4">
//             <Button variant="primary" type="submit" size="lg">
//               Save Trade
//             </Button>
//           </div>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default AddTradeForm;

// import React, { useState } from "react";
// import { Container, Form, Button, Card, Alert } from "react-bootstrap";
// import { addPosition } from "../services/apiService"; // 👈 your API call function

// const AddPositionForm = () => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     buy: "",
//     sell: "",
//     totalPrice: "",
//   });

//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   // 🔹 Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 🔹 Handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const res = await addPosition(formData); // ✅ integrated API call
//       setMessage(`✅ Position added successfully for ${res.position.companyName}`);
//       setFormData({ companyName: "", buy: "", sell: "", totalPrice: "" });
//     } catch (err) {
//       console.error("Error adding position:", err);
//       setError(err.message || "❌ Failed to add position!");
//     }
//   };

//   return (
//     <Container className="mt-5" style={{ maxWidth: "600px" }}>
//       <Card className="p-4 shadow-lg rounded-3">
//         <h3 className="text-center mb-4">📈 Add Trade </h3>

//         {message && <Alert variant="success">{message}</Alert>}
//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleSubmit}>
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

//           <Form.Group className="mb-3">
//             <Form.Label>Buy Price (₹)</Form.Label>
//             <Form.Control
//               type="number"
//               name="buy"
//               placeholder="Enter buy price"
//               value={formData.buy}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Sell Price (₹)</Form.Label>
//             <Form.Control
//               type="number"
//               name="sell"
//               placeholder="Enter sell price"
//               value={formData.sell}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Total Investment (₹)</Form.Label>
//             <Form.Control
//               type="number"
//               name="totalPrice"
//               placeholder="Enter total investment"
//               value={formData.totalPrice}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <div className="d-grid mt-4">
//             <Button variant="primary" type="submit" size="lg">
//               Save Trade
//             </Button>
//           </div>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default AddPositionForm;

import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card, Alert, Table } from "react-bootstrap";
import { addPosition, getAllUsers, getAllPositions } from "../services/apiService";

const AddPositionForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    companyName: "",
    buy: "",
    sell: "",
    totalPrice: "",
  });

  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const usersRes = await getAllUsers();
      setUsers(usersRes);
      const posRes = await getAllPositions();
      setPositions(posRes.positions);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await addPosition(formData);
      setMessage(`✅ Trade added for ${res.position.user.fullName}`);
      setFormData({ userId: "", companyName: "", buy: "", sell: "", totalPrice: "" });

      // Refresh recent list
      const posRes = await getAllPositions();
      setPositions(posRes.positions);
    } catch (err) {
      console.error("Error adding position:", err);
      setError(err.message || "❌ Failed to add position!");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "800px" }}>
      <Card className="p-4 shadow-lg rounded-3 mb-5">
        <h3 className="text-center mb-4">📈 Add Trade</h3>

        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Select User</Form.Label>
            <Form.Select name="userId" value={formData.userId} onChange={handleChange} required>
              <option value="">-- Select User --</option>
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.fullName} ({user.email})
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              name="companyName"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Buy Price (₹)</Form.Label>
            <Form.Control
              type="number"
              name="buy"
              placeholder="Enter buy price"
              value={formData.buy}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sell Price (₹)</Form.Label>
            <Form.Control
              type="number"
              name="sell"
              placeholder="Enter sell price"
              value={formData.sell}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Total Investment (₹)</Form.Label>
            <Form.Control
              type="number"
              name="totalPrice"
              placeholder="Enter total investment"
              value={formData.totalPrice}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-grid mt-4">
            <Button variant="primary" type="submit" size="lg">
              Save Trade
            </Button>
          </div>
        </Form>
      </Card>

      {/* Recent Trades List */}
      <Card className="p-3 shadow-sm">
        <h4>🕒 Recently Allotted Trades</h4>
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>User</th>
              <th>Company</th>
              <th>Buy ₹</th>
              <th>Sell ₹</th>
              <th>Profit ₹</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos) => (
              <tr key={pos._id}>
                <td>{pos.user?.fullName}</td>
                <td>{pos.companyName}</td>
                <td>{pos.buy}</td>
                <td>{pos.sell}</td>
                <td>{pos.totalProfit.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default AddPositionForm;
