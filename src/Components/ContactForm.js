import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/ContactForm.css"; // separate styling


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been sent successfully! 🎉");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });
  };

  return (
    <div className="contact-page">
      <Card className="contact-card">
        <h2 className="form-title myform ">Contact Us</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label class="myform"> Full Name</Form.Label>
            <Form.Control className="myform2"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label class="myform">Email</Form.Label>
            <Form.Control className="myform2"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label class="myform">Phone Number</Form.Label>
            <Form.Control className="myform2"
              type="text"
              name="phone"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label  class="myform">Message</Form.Label>
            <Form.Control className="myform2"
              as="textarea"
              name="message"
              rows={3}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check className="myform"
              type="checkbox"
              label="I accept the Terms and Privacy Policy"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button   style={{backgroundColor:"rgba(77, 159, 207, 1)" , color:"white"}}type="submit" className="w-100 myform " >
            Send Message
          </Button>
        </Form>
      </Card>
    </div>
  );
}
