
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       formData.email === "admin@gmail.com" &&
//       formData.password === "admin123"
//     ) {
//       alert("✅ Login Successful!");
//       navigate("/dashboard");
//     } else {
//       alert("❌ Invalid email or password");
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         background:
//           `
//           repeating-linear-gradient(0deg, rgba(0,255,0,0.03) 0px, rgba(0,255,0,0.03) 1px, transparent 1px, transparent 25px),
//           repeating-linear-gradient(90deg, rgba(0,255,0,0.03) 0px, rgba(0,255,0,0.03) 1px, transparent 1px, transparent 25px),
//           linear-gradient(135deg, #0a0a0a 0%, #1a2a3a 100%)
//           `,
//         overflow: "hidden",
//       }}
//     >
//       <Card
//         className="shadow-lg p-5 login-card"
//         style={{
//           width: "100%",
//           maxWidth: "480px",
//           borderRadius: "25px",
//           background: "rgba(255, 255, 255, 0.15)",
//           backdropFilter: "blur(12px)",
//           border: "1px solid rgba(255,255,255,0.3)",
//           color: "#fff",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
//           transition: "all 0.4s ease-in-out",
//           transform: "scale(1)",
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         <Card.Body>
//           {/* 🌟 Title */}
//           <div className="text-center mb-4">
//             <div
//               style={{
//                 fontSize: "48px",
//                 fontWeight: "bold",
//                 color: "#fff",
//                 letterSpacing: "1.5px",
//               }}
//             >
//               GROW<span style={{ color: "#ffeb3b" }}>ADMIN</span>
//             </div>
//             <p className="text-light mt-2 mb-0">Secure Access Portal</p>
//           </div>

//           <Form onSubmit={handleSubmit}>
//             {/* 📧 Email */}
//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label className="fw-semibold text-white">
//                 Email Address
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white border-0">
//                   <i className="bi bi-envelope-fill text-primary"></i>
//                 </span>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="py-2"
//                   style={{
//                     borderRadius: "0 10px 10px 0",
//                     border: "none",
//                     outline: "none",
//                   }}
//                 />
//               </div>
//             </Form.Group>

//             {/* 🔒 Password */}
//             <Form.Group className="mb-4" controlId="formPassword">
//               <Form.Label className="fw-semibold text-white">
//                 Password
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white border-0">
//                   <i className="bi bi-lock-fill text-primary"></i>
//                 </span>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   placeholder="Enter password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="py-2"
//                   style={{
//                     borderRadius: "0 10px 10px 0",
//                     border: "none",
//                   }}
//                 />
//               </div>
//             </Form.Group>

//             {/* 🌈 Login Button */}
//             <Button
//               type="submit"
//               className="w-100 fw-bold py-2 mt-2"
//               style={{
//                 fontSize: "17px",
//                 borderRadius: "10px",
//                 background:
//                   "linear-gradient(90deg, #42a5f5, #1e88e5, #1565c0)",
//                 border: "none",
//                 boxShadow: "0 0 15px rgba(66,165,245,0.6)",
//                 transition: "all 0.3s ease-in-out",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.background =
//                   "linear-gradient(90deg, #64b5f6, #2196f3, #1976d2)";
//                 e.target.style.boxShadow =
//                   "0 0 25px rgba(66,165,245,0.9)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background =
//                   "linear-gradient(90deg, #42a5f5, #1e88e5, #1565c0)";
//                 e.target.style.boxShadow =
//                   "0 0 15px rgba(66,165,245,0.6)";
//               }}
//             >
//               Login
//             </Button>

//             {/* 🔁 Forgot link */}
//             <p className="text-center mt-3 mb-0">
//               <a
//                 href="#"
//                 style={{
//                   color: "#fff",
//                   textDecoration: "none",
//                   fontSize: "14px",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
//                 onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
//               >
//                 Forgot Password?
//               </a>
//             </p>
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       formData.email === "admin@gmail.com" &&
//       formData.password === "admin123"
//     ) {
//       alert("✅ Login Successful!");
//       navigate("/dashboard");
//     } else {
//       alert("❌ Invalid email or password");
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80')", // 📈 trading background image
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* 🔹 Overlay for dark trading theme */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background:
//             "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0, 40, 80, 0.8))",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* 🔹 Grid pattern overlay for trading-tech feel */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: `
//             repeating-linear-gradient(0deg, rgba(0,255,0,0.05) 0px, rgba(0,255,0,0.05) 1px, transparent 1px, transparent 25px),
//             repeating-linear-gradient(90deg, rgba(0,255,0,0.05) 0px, rgba(0,255,0,0.05) 1px, transparent 1px, transparent 25px)
//           `,
//           zIndex: 2,
//         }}
//       ></div>

//       {/* 🔹 Login Card */}
//       <Card
//         className="shadow-lg p-5 login-card"
//         style={{
//           width: "100%",
//           maxWidth: "480px",
//           borderRadius: "25px",
//           background: "rgba(255, 255, 255, 0.15)",
//           backdropFilter: "blur(12px)",
//           border: "1px solid rgba(255,255,255,0.3)",
//           color: "#fff",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
//           transition: "all 0.4s ease-in-out",
//           transform: "scale(1)",
//           zIndex: 3,
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         <Card.Body>
//           {/* 🌟 Title */}
//           <div className="text-center mb-4">
//             <div
//               style={{
//                 fontSize: "48px",
//                 fontWeight: "bold",
//                 color: "#fff",
//                 letterSpacing: "1.5px",
//               }}
//             >
//               GROW<span style={{ color: "#ffeb3b" }}>ADMIN</span>
//             </div>
//             <p className="text-light mt-2 mb-0">Secure Trading Access</p>
//           </div>

//           <Form onSubmit={handleSubmit}>
//             {/* 📧 Email */}
//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label className="fw-semibold text-white">
//                 Email Address
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white border-0">
//                   <i className="bi bi-envelope-fill text-primary"></i>
//                 </span>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="py-2"
//                   style={{
//                     borderRadius: "0 10px 10px 0",
//                     border: "none",
//                     outline: "none",
//                   }}
//                 />
//               </div>
//             </Form.Group>

//             {/* 🔒 Password */}
//             <Form.Group className="mb-4" controlId="formPassword">
//               <Form.Label className="fw-semibold text-white">
//                 Password
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white border-0">
//                   <i className="bi bi-lock-fill text-primary"></i>
//                 </span>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   placeholder="Enter password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="py-2"
//                   style={{
//                     borderRadius: "0 10px 10px 0",
//                     border: "none",
//                   }}
//                 />
//               </div>
//             </Form.Group>

//             {/* 🌈 Login Button */}
//             <Button
//               type="submit"
//               className="w-100 fw-bold py-2 mt-2"
//               style={{
//                 fontSize: "17px",
//                 borderRadius: "10px",
//                 background:
//                   "linear-gradient(90deg, #42a5f5, #1e88e5, #1565c0)",
//                 border: "none",
//                 boxShadow: "0 0 15px rgba(66,165,245,0.6)",
//                 transition: "all 0.3s ease-in-out",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.background =
//                   "linear-gradient(90deg, #64b5f6, #2196f3, #1976d2)";
//                 e.target.style.boxShadow =
//                   "0 0 25px rgba(66,165,245,0.9)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background =
//                   "linear-gradient(90deg, #42a5f5, #1e88e5, #1565c0)";
//                 e.target.style.boxShadow =
//                   "0 0 15px rgba(66,165,245,0.6)";
//               }}
//             >
//               Login
//             </Button>

//             {/* 🔁 Forgot link */}
//             <p className="text-center mt-3 mb-0">
//               <a
//                 href="#"
//                 style={{
//                   color: "#fff",
//                   textDecoration: "none",
//                   fontSize: "14px",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.target.style.textDecoration = "underline")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.target.style.textDecoration = "none")
//                 }
//               >
//                 Forgot Password?
//               </a>
//             </p>
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       formData.email === "admin@gmail.com" &&
//       formData.password === "admin123"
//     ) {
//       alert("✅ Login Successful!");
//       navigate("/dashboard");
//     } else {
//       alert("❌ Invalid email or password");
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80')", // 📈 trading background image
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* 🔹 Overlay for dark trading theme */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background:
//             "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0, 40, 80, 0.8))",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* 🔹 Grid pattern overlay for trading-tech feel */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: `
//             repeating-linear-gradient(0deg, rgba(0,255,0,0.05) 0px, rgba(0,255,0,0.05) 1px, transparent 1px, transparent 25px),
//             repeating-linear-gradient(90deg, rgba(0,255,0,0.05) 0px, rgba(0,255,0,0.05) 1px, transparent 1px, transparent 25px)
//           `,
//           zIndex: 2,
//         }}
//       ></div>

//       {/* 🔹 Login Card */}
//       <Card
//         className="shadow-lg p-5 login-card"
//         style={{
//           width: "100%",
//           maxWidth: "480px",
//           borderRadius: "25px",
//           background: "rgba(255, 255, 255, 0.15)",
//           backdropFilter: "blur(12px)",
//           border: "1px solid rgba(255,255,255,0.3)",
//           color: "#fff",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
//           transition: "all 0.4s ease-in-out",
//           transform: "scale(1)",
//           zIndex: 3,
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         <Card.Body>
//           {/* 🌟 Title */}
//           <div className="text-center mb-4">
//             <div
//               style={{
//                 fontSize: "48px",
//                 fontWeight: "bold",
//                 color: "#fff",
//                 letterSpacing: "1.5px",
//               }}
//             >
//               GROW<span style={{ color: "#ffeb3b" }}>ADMIN</span>
//             </div>
//             <p className="text-light mt-2 mb-0">Secure Trading Access</p>
//           </div>

//           <Form onSubmit={handleSubmit}>
//             {/* 📧 Email */}
//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label className="fw-semibold text-white">
//                 Email Address
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white border-0">
//                   <i className="bi bi-envelope-fill text-primary"></i>
//                 </span>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="py-2"
//                   style={{
//                     borderRadius: "0 10px 10px 0",
//                     border: "none",
//                     outline: "none",
//                   }}
//                 />
//               </div>
//             </Form.Group>

//             {/* 🔒 Password */}
//             <Form.Group className="mb-4" controlId="formPassword">
//               <Form.Label className="fw-semibold text-white">
//                 Password
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white border-0">
//                   <i className="bi bi-lock-fill text-primary"></i>
//                 </span>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   placeholder="Enter password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="py-2"
//                   style={{
//                     borderRadius: "0 10px 10px 0",
//                     border: "none",
//                   }}
//                 />
//               </div>
//             </Form.Group>

//             {/* 🌈 Login Button */}
//             <Button
//               type="submit"
//               className="w-100 fw-bold py-2 mt-2"
//               style={{
//                 fontSize: "17px",
//                 borderRadius: "10px",
//                 background:
//                   "linear-gradient(90deg, #42a5f5, #1e88e5, #1565c0)",
//                 border: "none",
//                 boxShadow: "0 0 15px rgba(66,165,245,0.6)",
//                 transition: "all 0.3s ease-in-out",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.background =
//                   "linear-gradient(90deg, #64b5f6, #2196f3, #1976d2)";
//                 e.target.style.boxShadow =
//                   "0 0 25px rgba(66,165,245,0.9)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background =
//                   "linear-gradient(90deg, #42a5f5, #1e88e5, #1565c0)";
//                 e.target.style.boxShadow =
//                   "0 0 15px rgba(66,165,245,0.6)";
//               }}
//             >
//               Login
//             </Button>

//             {/* 🔁 Forgot link */}
//             <p className="text-center mt-3 mb-0">
//               <a
//                 href="#"
//                 style={{
//                   color: "#fff",
//                   textDecoration: "none",
//                   fontSize: "14px",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.target.style.textDecoration = "underline")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.target.style.textDecoration = "none")
//                 }
//               >
//                 Forgot Password?
//               </a>
//             </p>
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { loginAdmin } from "../services/apiService"

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = await loginAdmin(formData.email, formData.password);
//       // Save token or admin info in localStorage
//       localStorage.setItem("admin", JSON.stringify(data));
//       alert("✅ Login Successful!");
//       navigate("/dashboard");
//     } catch (error) {
//       alert(`❌ ${error.message || "Invalid email or password"}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0, 40, 80, 0.8))",
//           zIndex: 1,
//         }}
//       ></div>

//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: `
//             repeating-linear-gradient(0deg, rgba(0,255,0,0.05) 0px, rgba(0,255,0,0.05) 1px, transparent 1px, transparent 25px),
//             repeating-linear-gradient(90deg, rgba(0,255,0,0.05) 0px, rgba(0,255,0,0.05) 1px, transparent 1px, transparent 25px)
//           `,
//           zIndex: 2,
//         }}
//       ></div>

//       <Card
//         className="shadow-lg p-5 login-card"
//         style={{
//           width: "100%",
//           maxWidth: "480px",
//           borderRadius: "25px",
//           background: "rgba(255, 255, 255, 0.15)",
//           backdropFilter: "blur(12px)",
//           border: "1px solid rgba(255,255,255,0.3)",
//           color: "#fff",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
//           zIndex: 3,
//         }}
//       >
//         <Card.Body>
//           <div className="text-center mb-4">
//             <div style={{ fontSize: "48px", fontWeight: "bold", color: "#fff", letterSpacing: "1.5px" }}>
//               GROW<span style={{ color: "#ffeb3b" }}>ADMIN</span>
//             </div>
//             <p className="text-light mt-2 mb-0">Secure Trading Access</p>
//           </div>

//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label className="fw-semibold text-white">Email Address</Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white border-0">
//                   <i className="bi bi-envelope-fill text-primary"></i>
//                 </span>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="py-2"
//                   style={{ borderRadius: "0 10px 10px 0", border: "none", outline: "none" }}
//                 />
//               </div>
//             </Form.Group>

//             <Form.Group className="mb-4" controlId="formPassword">
//               <Form.Label className="fw-semibold text-white">Password</Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white border-0">
//                   <i className="bi bi-lock-fill text-primary"></i>
//                 </span>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   placeholder="Enter password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="py-2"
//                   style={{ borderRadius: "0 10px 10px 0", border: "none" }}
//                 />
//               </div>
//             </Form.Group>

//             <Button type="submit" className="w-100 fw-bold py-2 mt-2" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { loginAdmin } from "../services/apiService";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false); // Notification state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginAdmin(formData.email, formData.password);
      localStorage.setItem("admin", JSON.stringify(data));

      // Show notification
      setNotify(true);
      setTimeout(() => setNotify(false), 2000); // Auto-hide after 2 sec

      // Navigate to dashboard after 2 sec
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      alert(`❌ ${error.message || "Invalid email or password"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0, 40, 80, 0.8))",
          zIndex: 1,
        }}
      ></div>

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            repeating-linear-gradient(0deg, rgba(0,255,0,0.05) 0px, rgba(0,255,0,0.05) 1px, transparent 1px, transparent 25px),
            repeating-linear-gradient(90deg, rgba(0,255,0,0.05) 0px, rgba(0,255,0,0.05) 1px, transparent 1px, transparent 25px)
          `,
          zIndex: 2,
        }}
      ></div>

      <div style={{ zIndex: 3, textAlign: "center" }}>
        {/* Login Card */}
        <Card
          className="shadow-lg p-5 login-card"
          style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "25px",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
          }}
        >
          <Card.Body>
            <div className="text-center mb-4">
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#fff",
                  letterSpacing: "1.5px",
                }}
              >
                GROW<span style={{ color: "#ffeb3b" }}>ADMIN</span>
              </div>
              <p className="text-light mt-2 mb-0">Secure Trading Access</p>
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-semibold text-white">Email Address</Form.Label>
                <div className="input-group">
                  <span className="input-group-text bg-white border-0">
                    <i className="bi bi-envelope-fill text-primary"></i>
                  </span>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="py-2"
                    style={{ borderRadius: "0 10px 10px 0", border: "none", outline: "none" }}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formPassword">
                <Form.Label className="fw-semibold text-white">Password</Form.Label>
                <div className="input-group">
                  <span className="input-group-text bg-white border-0">
                    <i className="bi bi-lock-fill text-primary"></i>
                  </span>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="py-2"
                    style={{ borderRadius: "0 10px 10px 0", border: "none" }}
                  />
                </div>
              </Form.Group>

              <Button type="submit" className="w-100 fw-bold py-2 mt-2" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* Notification below login card */}
        {notify && (
          <div
            style={{
              marginTop: "15px",
              background: "rgba(40, 180, 99, 0.95)",
              padding: "12px 20px",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "16px",
              textAlign: "center",
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
              transition: "all 0.3s ease",
            }}
          >
            ✅ Login Successful!
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
