
import { Container, Row, Col, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope} from "react-icons/fa6";
import "../styles/myfooter.css"
function Footer() {
  return (
    <footer className=" my-footer text-light py-5 mt-5">
      <Container>
        <Row className="mb-5">

          {/* WHO WE ARE */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Who we are ?</h5>

            <p className="small text-light">
              CarZ is a premium marketplace offering luxury vehicles with transparent pricing
              and a smooth buying experience.
            </p>
            {/* phone number */}
<p className="mb-2 text-light d-flex align-items-center gap-2 justify-content-start ">
  <FaPhone size={20} className="text-light" />
  +961 71 587 499
</p>
{/* email */}
<p className="mb-3 text-light d-flex align-items-center gap-2 justify-content-start pb-3">
  <FaEnvelope size={20} className="text-light" />
  support@carz.com
</p>

            {/* Social Icons */}
<div className="d-flex gap-3 mt-3">

  {/* WhatsApp */}
  <div className="rounded-circle p-3 d-flex justify-content-center align-items-center"
       style={{ backgroundColor: "#25D366", width: "55px", height: "55px" }}>
    <FaWhatsapp size={28} color="#fff" />
  </div>

  {/* Facebook */}
  <div className="rounded-circle p-3 d-flex justify-content-center align-items-center"
       style={{ backgroundColor: "#1877F2", width: "55px", height: "55px" }}>
    <FaFacebook size={28} color="#fff" />
  </div>

  {/* Instagram */}
  <a
  href="https://instagram.com/zainab._srour"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="rounded-circle p-3 d-flex justify-content-center align-items-center"
       style={{ backgroundColor: "#E1306C", width: "55px", height: "55px" }}>
    <FaInstagram size={28} color="#fff" />
  </div>
</a>

</div>
          </Col>

          {/* LEARN ABOUT US */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Learn about us</h5>

            <Nav className="flex-column gap-2">
              <Nav.Link as={Link} to="/about" className="text-light p-0">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-light p-0">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/home" className="text-light p-0">Privacy Policy</Nav.Link>
              <Nav.Link as={Link} to="/home" className="text-light p-0">Terms & Conditions</Nav.Link>
            </Nav>
          </Col>

          {/* STAY UPDATED */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Stay updated</h5>

            <p className="small text-light mb-3">
              Subscribe to get updates about new cars, offers, and exclusive deals.
            </p>

            <div className="d-flex">
              <Form.Control
                type="email"
                placeholder="Your email address"
                className="me-2"
              />
              <Button style={{backgroundColor:"rgba(77, 159, 207, 1)" ,fontWeight:"1000"}}>Submit</Button>
            </div>
          </Col>

        </Row>

        {/* COPYRIGHT */}
        <Row>
          <Col className="text-center medium text-light">
            © 2025 CarZ. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
