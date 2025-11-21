

// Dashboard.jsx
// import React, { useState } from "react";
// import { Navbar, Nav, Container, Row, Col, Button, Image, Dropdown, Form } from "react-bootstrap";
// import { House, User, Folder, BarChart2, Settings } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import UsersListPage from "./UserListPage"; // users page
// // AccountPage component directly here for simplicity
// const AccountPage = () => {
//   const [accountNo, setAccountNo] = useState("");
//   const [ifsc, setIfsc] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Account No: ${accountNo}\nIFSC: ${ifsc}`);
//   };
//   return (
//     <div style={{
//       background: "rgba(255,255,255,0.1)",
//       backdropFilter: "blur(10px)",
//       padding: "30px",
//       borderRadius: "15px",
//       maxWidth: "500px",
//       margin: "0 auto",
//       color: "#fff"
//     }}>
//       <h3 className="mb-4">Add Account</h3>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Account Number</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Account Number"
//             value={accountNo}
//             onChange={(e) => setAccountNo(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>IFSC Code</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter IFSC Code"
//             value={ifsc}
//             onChange={(e) => setIfsc(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Button type="submit" style={{ background: "#1e88e5", border: "none" }}>Submit</Button>
//       </Form>
//     </div>
//   );
// };

// const sidebarOptions = [
//   { name: "Home", icon: <House size={20} /> },
//   { name: "Accounts", icon: <Folder size={20} /> },
//   { name: "Users", icon: <User size={20} /> },
//   { name: "Reports", icon: <BarChart2 size={20} /> },
//   { name: "Settings", icon: <Settings size={20} /> },
// ];

// const sampleStocks = [
//   { name: "AAPL", price: 172.5 },
//   { name: "GOOG", price: 134.7 },
//   { name: "MSFT", price: 320.1 },
//   { name: "TSLA", price: 290.3 },
// ];

// const TradingDashboard = () => {
//   const admin = JSON.parse(localStorage.getItem("admin")) || { name: "Admin" };
//   const [active, setActive] = useState("Home");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("admin");
//     navigate("/");
//   };

//   return (
//     <div style={{ display: "flex", minHeight: "100vh", backgroundImage: "url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", color: "#fff" }}>
//       {/* Sidebar */}
//       <div style={{ width: "220px", background: "#fff", padding: "20px", display: "flex", flexDirection: "column", borderRight: "1px solid rgba(0,0,0,0.1)" }}>
//         <h3 className="text-primary mb-4">GROW ADMIN</h3>
//         {sidebarOptions.map((opt) => (
//           <Button
//             key={opt.name}
//             variant="link"
//             className="d-flex align-items-center mb-3 text-dark"
//             onClick={() => setActive(opt.name)}
//             style={{
//               textDecoration: "none",
//               fontSize: "16px",
//               justifyContent: "flex-start",
//               background: active === opt.name ? "linear-gradient(90deg, #42a5f5, #1e88e5)" : "transparent",
//               color: active === opt.name ? "#fff" : "#333",
//               borderRadius: "8px",
//               padding: "10px",
//               transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(90deg, #64b5f6, #1e88e5)"; e.currentTarget.style.color = "#fff"; }}
//             onMouseLeave={(e) => { e.currentTarget.style.background = active === opt.name ? "linear-gradient(90deg, #42a5f5, #1e88e5)" : "transparent"; e.currentTarget.style.color = active === opt.name ? "#fff" : "#333"; }}
//           >
//             {opt.icon}
//             <span style={{ marginLeft: "12px", fontWeight: active === opt.name ? "bold" : "normal" }}>{opt.name}</span>
//           </Button>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <Navbar variant="dark" style={{ background: "linear-gradient(90deg, #1565c0, #1e88e5, #42a5f5)", boxShadow: "0 4px 10px rgba(0,0,0,0.5)", height: "60px", padding: "0 20px" }}>
//           <Container fluid className="d-flex justify-content-between align-items-center">
//             <Navbar.Brand style={{ fontWeight: "bold" }}>Trading Dashboard</Navbar.Brand>
//             <Nav className="d-flex align-items-center">
//               <Dropdown align="end">
//                 <Dropdown.Toggle variant="secondary" id="dropdown-profile" style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", padding: "0" }}>
//                   <Image src={`https://ui-avatars.com/api/?name=${admin.name}&background=0D47A1&color=fff&size=32`} roundedCircle style={{ marginRight: "10px" }} />
//                   <span>{admin.name}</span>
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu style={{ minWidth: "150px", background: "#fff", borderRadius: "12px", padding: "10px" }}>
//                   <Dropdown.Item style={{ padding: "10px", borderRadius: "8px", marginBottom: "5px", color: "#333" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#42a5f5")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>Profile</Dropdown.Item>
//                   <Dropdown.Item style={{ padding: "10px", borderRadius: "8px", color: "#333" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#42a5f5")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")} onClick={handleLogout}>Logout</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Nav>
//           </Container>
//         </Navbar>

//         <div style={{ flex: 1, padding: "20px", overflowY: "auto", background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85))" }}>
//           {active === "Home" && (
//             <>
//               <h2 className="mb-4">Welcome, {admin.name} 🎯</h2>
//               <Row className="g-3">
//                 {sampleStocks.map((s) => {
//                   const price = Number(s.price || 0);
//                   const randomPrice = (price + (Math.random() - 0.5) * 5).toFixed(2);
//                   return (
//                     <Col md={3} key={s.name}>
//                       <div style={{ padding: "20px", borderRadius: "15px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", textAlign: "center", border: "1px solid rgba(255,255,255,0.2)", transition: "all 0.3s ease", cursor: "pointer" }}
//                         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//                         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                       >
//                         <h4>{s.name}</h4>
//                         <p>${randomPrice}</p>
//                       </div>
//                     </Col>
//                   );
//                 })}
//               </Row>
//             </>
//           )}
//           {active === "Users" && <UsersListPage />}
//           {active === "Accounts" && <AccountPage />}
//           {/* You can add more components for Reports or Settings */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradingDashboard;


// import React, { useState } from "react";
// import { Navbar, Nav, Container, Row, Col, Button, Image, Dropdown, Form } from "react-bootstrap";
// import { House, User, Folder, BarChart2, Settings } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import UsersListPage from "./UserListPage";
// import AccountPage from "./AccountPage";
// import AddTradeForm from "./PositionForm";
// import AdminFiles from "./AdminFiles";
// import WithdrawRequest from "./WithdrawRequest";
// import AdminMessages from "./AdminMessages";
// import AdminUserManagement from "./AdminUserManagement";



// const sidebarOptions = [
//   { name: "Home", icon: <House size={20} /> },
//   { name: "Users", icon: <User size={20} /> },
//    { name: "Accounts", icon: <Folder size={20} /> },
//   { name: "Positions", icon: <BarChart2 size={20} /> },
//   { name: "Payments Uploads", icon: <Settings size={20} /> },
//   { name: "Withdraw Request", icon: <Settings size={20} /> },
//    { name: "Messages", icon: <Settings size={20} /> },
 
  
// ];

// const sampleStocks = [
//   { name: "AAPL", price: 172.5 },
//   { name: "GOOG", price: 134.7 },
//   { name: "MSFT", price: 320.1 },
//   { name: "TSLA", price: 290.3 },
// ];

// const TradingDashboard = () => {
//   const admin = JSON.parse(localStorage.getItem("admin")) || { name: "Admin" };
//   const [active, setActive] = useState("Home");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("admin");
//     navigate("/");
//   };

//   return (
//     <div style={{ display: "flex", minHeight: "100vh", color: "#fff", backgroundImage: "url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
//       {/* Sidebar */}
//       <div
//         style={{
//           width: "280px",
//           background: "#fff",
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           borderRight: "1px solid rgba(0,0,0,0.1)",
//           position: "fixed",
//           top: 0,
//           bottom: 0,
//           left: 0,
//           zIndex: 1000,
//         }}
//       >
//         <h3 className="text-primary mb-4">GROW ADMIN</h3>
//         {sidebarOptions.map((opt) => (
//           <Button
//             key={opt.name}
//             variant="link"
//             className="d-flex align-items-center mb-3 text-dark"
//             onClick={() => setActive(opt.name)}
//             style={{
//               textDecoration: "none",
//               fontSize: "16px",
//               justifyContent: "flex-start",
//               background: active === opt.name ? "linear-gradient(90deg, #42a5f5, #1e88e5)" : "transparent",
//               color: active === opt.name ? "#fff" : "#333",
//               borderRadius: "8px",
//               padding: "10px",
//               transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(90deg, #64b5f6, #1e88e5)"; e.currentTarget.style.color = "#fff"; }}
//             onMouseLeave={(e) => { e.currentTarget.style.background = active === opt.name ? "linear-gradient(90deg, #42a5f5, #1e88e5)" : "transparent"; e.currentTarget.style.color = active === opt.name ? "#fff" : "#333"; }}
//           >
//             {opt.icon}
//             <span style={{ marginLeft: "12px", fontWeight: active === opt.name ? "bold" : "normal" }}>{opt.name}</span>
//           </Button>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div style={{ marginLeft: "280px", flex: 1, display: "flex", flexDirection: "column" }}>
//         {/* Navbar */}
//         <Navbar
//           variant="dark"
//           style={{
//             position: "fixed",
//             top: 0,
//             left: "280px",
//             right: 0,
//             zIndex: 999,
//             background: "linear-gradient(90deg, #1565c0, #1e88e5, #42a5f5)",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
//             height: "60px",
//             padding: "0 20px",
//           }}
//         >
//           <Container fluid className="d-flex justify-content-between align-items-center">
//             <Navbar.Brand style={{ fontWeight: "bold" }}>Trading Dashboard</Navbar.Brand>
//             <Nav className="d-flex align-items-center">
//               <Dropdown align="end">
//                 <Dropdown.Toggle variant="secondary" id="dropdown-profile" style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", padding: "0" }}>
//                   <Image src={`https://ui-avatars.com/api/?name=${admin.name}&background=0D47A1&color=fff&size=32`} roundedCircle style={{ marginRight: "10px" }} />
//                   <span>{admin.name}</span>
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu style={{ minWidth: "150px", background: "#fff", borderRadius: "12px", padding: "10px" }}>
//                   <Dropdown.Item style={{ padding: "10px", borderRadius: "8px", marginBottom: "5px", color: "#333" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#42a5f5")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>Profile</Dropdown.Item>
//                   <Dropdown.Item style={{ padding: "10px", borderRadius: "8px", color: "#333" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#42a5f5")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")} onClick={handleLogout}>Logout</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Nav>
//           </Container>
//         </Navbar>

//         {/* Page Content */}
//         <div
//           style={{
//             flex: 1,
//             padding: "90px 20px 20px 20px",
//             overflowY: "auto",
//             background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85))",
//             minHeight: "100vh",
//           }}
//         >
//           {active === "Home" && (
//             <>
//               <h2 className="mb-4">Welcome, {admin.name} 🎯</h2>
//               <Row className="g-3">
//                 {sampleStocks.map((s) => {
//                   const price = Number(s.price || 0);
//                   const randomPrice = (price + (Math.random() - 0.5) * 5).toFixed(2);
//                   return (
//                     <Col md={3} key={s.name}>
//                       <div
//                         style={{
//                           padding: "20px",
//                           borderRadius: "15px",
//                           background: "rgba(255,255,255,0.1)",
//                           backdropFilter: "blur(10px)",
//                           textAlign: "center",
//                           border: "1px solid rgba(255,255,255,0.2)",
//                           transition: "all 0.3s ease",
//                           cursor: "pointer",
//                         }}
//                         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//                         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                       >
//                         <h4>{s.name}</h4>
//                         <p>${randomPrice}</p>
//                       </div>
//                     </Col>
//                   );
//                 })}
//               </Row>
//             </>
//           )}
//             {active === "Home" && <AdminUserManagement />}

//           {active === "Users" && <UsersListPage />}
//           {active === "Accounts" && <AccountPage />}
//           {active === "Positions" && <AddTradeForm />}
//           {active === "Payments Uploads" && <AdminFiles />}
//           {active === "Withdraw Request" && <WithdrawRequest />}
//          {active === "Messages" && <AdminMessages />}
    
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradingDashboard;


import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Button, Image, Dropdown } from "react-bootstrap";
import { House, User, Folder, BarChart2, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UsersListPage from "./UserListPage";
import AccountPage from "./AccountPage";
import AddTradeForm from "./PositionForm";
import AdminFiles from "./AdminFiles";
import WithdrawRequest from "./WithdrawRequest";
import AdminMessages from "./AdminMessages";
import AdminUserManagement from "./AdminUserManagement";
import AdminContactForm from "./AdminContactForm";
import AdminAmountManager from "./AdminAmountManager";

const sidebarOptions = [
  { name: "User Management", icon: <House size={20} /> },
  { name: "Users Details", icon: <User size={20} /> },
  { name: "Accounts", icon: <Folder size={20} /> },
  { name: "Positions", icon: <BarChart2 size={20} /> },
  { name: "Payments Uploads", icon: <Settings size={20} /> },
  { name: "Withdraw Request", icon: <Settings size={20} /> },
   { name: "Amount", icon: <Settings size={20} /> },
  { name: "Messages", icon: <Settings size={20} /> },
  { name: "Contact Info", icon: <Settings size={20} /> },
];

const TradingDashboard = () => {
  const admin = JSON.parse(localStorage.getItem("admin")) || { name: "Admin" };
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        color: "#fff",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "280px",
          background: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid rgba(0,0,0,0.1)",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <h3 className="text-primary mb-4">GROW ADMIN</h3>
        {sidebarOptions.map((opt) => (
          <Button
            key={opt.name}
            variant="link"
            className="d-flex align-items-center mb-3 text-dark"
            onClick={() => setActive(opt.name)}
            style={{
              textDecoration: "none",
              fontSize: "16px",
              justifyContent: "flex-start",
              background:
                active === opt.name
                  ? "linear-gradient(90deg, #42a5f5, #1e88e5)"
                  : "transparent",
              color: active === opt.name ? "#fff" : "#333",
              borderRadius: "8px",
              padding: "10px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #64b5f6, #1e88e5)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                active === opt.name
                  ? "linear-gradient(90deg, #42a5f5, #1e88e5)"
                  : "transparent";
              e.currentTarget.style.color = active === opt.name ? "#fff" : "#333";
            }}
          >
            {opt.icon}
            <span
              style={{
                marginLeft: "12px",
                fontWeight: active === opt.name ? "bold" : "normal",
              }}
            >
              {opt.name}
            </span>
          </Button>
        ))}
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: "280px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar */}
        <Navbar
          variant="dark"
          style={{
            position: "fixed",
            top: 0,
            left: "280px",
            right: 0,
            zIndex: 999,
            background: "linear-gradient(90deg, #1565c0, #1e88e5, #42a5f5)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            height: "60px",
            padding: "0 20px",
          }}
        >
          <Container fluid className="d-flex justify-content-between align-items-center">
            <Navbar.Brand style={{ fontWeight: "bold" }}>Trading Dashboard</Navbar.Brand>
            <Nav className="d-flex align-items-center">
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-profile"
                  style={{
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    padding: "0",
                  }}
                >
                  <Image
                    src={`https://ui-avatars.com/api/?name=${admin.name}&background=0D47A1&color=fff&size=32`}
                    roundedCircle
                    style={{ marginRight: "10px" }}
                  />
                  <span>{admin.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    minWidth: "150px",
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "10px",
                  }}
                >
                  <Dropdown.Item
                    style={{
                      padding: "10px",
                      borderRadius: "8px",
                      marginBottom: "5px",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#42a5f5")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      padding: "10px",
                      borderRadius: "8px",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#42a5f5")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    onClick={handleLogout}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>

        {/* Page Content */}
        <div
          style={{
            flex: 1,
            padding: "90px 20px 20px 20px",
            overflowY: "auto",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85))",
            minHeight: "100vh",
          }}
        >
          {/* Only AdminUserManagement component for Home */}
          {active === "User Management" && <AdminUserManagement />}
          {active === "Users Details" && <UsersListPage />}
          {active === "Accounts" && <AccountPage />}
          {active === "Positions" && <AddTradeForm />}
          {active === "Payments Uploads" && <AdminFiles />}
          {active === "Withdraw Request" && <WithdrawRequest />}
          {active === "Messages" && <AdminMessages />}
          {active === "Contact Info" && <AdminContactForm />}
          {active === "Amount" && <AdminAmountManager/>}
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;
