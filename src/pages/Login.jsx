
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
