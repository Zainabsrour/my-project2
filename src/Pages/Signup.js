import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link , useNavigate } from "react-router-dom";
import "../styles/signup.css"
export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup Data:", formData);
     navigate("/home");

  };

  return (
   <Container className="signup-page">
   <Card className="signup-card shadow">
        <h3 className="text-center mb-4">Create Account</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="confirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirm"
              placeholder="Re-enter password"
              value={formData.confirm}
              onChange={handleChange}
              required
            />
          </Form.Group>
    
          <Button variant="success" type="submit" className="w-100 signup-btn">
            Sign Up
          </Button>
          <div className="text-center mt-3">
            <small  className="muted-text">
              Already have an account?{" "}
              <Link to="/login" className="login-link">Login</Link>
            </small>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
