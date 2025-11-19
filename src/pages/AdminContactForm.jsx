import React, { useEffect, useState } from "react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import { getAdminContact, updateAdminContact } from "../services/apiService";

const AdminContactForm = () => {
const [contact, setContact] = useState({ address: "", phone: "", email: "" });
const [loading, setLoading] = useState(true);
const [saving, setSaving] = useState(false);
const [message, setMessage] = useState({ type: "", text: "" });

// Fetch current contact details
useEffect(() => {
const fetchContact = async () => {
try {
setLoading(true);
const data = await getAdminContact();
setContact({
address: data.address || "",
phone: data.phone || "",
email: data.email || ""
});
} catch (err) {
setMessage({ type: "danger", text: err.message || "Failed to fetch contact details." });
} finally {
setLoading(false);
}
};
fetchContact();
}, []);

const handleChange = (e) => {
setContact({ ...contact, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
setSaving(true);
const res = await updateAdminContact(contact);
setMessage({ type: "success", text: res.message || "Contact updated successfully!" });
} catch (err) {
setMessage({ type: "danger", text: err.message || "Failed to update contact." });
} finally {
setSaving(false);
}
};

if (loading) return <div className="text-center my-5"><Spinner animation="border" /> Loading...</div>;

return ( <Container className="py-4"> <h3 className="mb-4">Update Contact Details</h3>


  {message.text && <Alert variant={message.type}>{message.text}</Alert>}  

  <Form onSubmit={handleSubmit}>  
    <Form.Group className="mb-3" controlId="formAddress">  
      <Form.Label>Address</Form.Label>  
      <Form.Control  
        type="text"  
        name="address"  
        value={contact.address}  
        onChange={handleChange}  
        placeholder="Enter address"  
        required  
      />  
    </Form.Group>  

    <Form.Group className="mb-3" controlId="formPhone">  
      <Form.Label>Phone</Form.Label>  
      <Form.Control  
        type="text"  
        name="phone"  
        value={contact.phone}  
        onChange={handleChange}  
        placeholder="Enter phone number"  
        required  
      />  
    </Form.Group>  

    <Form.Group className="mb-3" controlId="formEmail">  
      <Form.Label>Email</Form.Label>  
      <Form.Control  
        type="email"  
        name="email"  
        value={contact.email}  
        onChange={handleChange}  
        placeholder="Enter email"  
        required  
      />  
    </Form.Group>  

    <Button variant="primary" type="submit" disabled={saving}>  
      {saving ? "Saving..." : "Update Contact"}  
    </Button>  
  </Form>  
</Container>  


);
};

export default AdminContactForm;
