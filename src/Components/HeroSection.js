import React from "react";
import "../styles/myherosection.css";  
import { Link } from "react-router-dom";
// function HeroSection() {
//   return (
//     <section className="heroSection">
//       <Container>
//         <h1>Find Your Dream Car</h1>
//         <p>The best deals and offers for your next ride</p>
//         <div>
//           <Button variant="primary" size="lg" className="me-3">
//             Explore Cars
//           </Button>
//           <Button variant="light" size="lg">
//             Contact Us
//           </Button>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default HeroSection;
import { Container, Row, Col, Button } from "react-bootstrap";
import heroimage2 from "../Assets/images/heroimage2.png";
export default function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
     <Row className="align-items-center">
  <Col md={6} xs={{ order: 2 }}>
    <h1>Your Perfect Car Awaits</h1>
    <p>Choose elegance, power, and unmatched comfort</p>
   
<Link to="/contact" className="btn me-3 my-button">
  Get in Touch
</Link>

    
  </Col>
  <Col md={6} xs={{ order: 1 }}>
    <img src={heroimage2} alt="Car" className="img-fluid" />
  </Col>
</Row>

      </Container>
    </section>
  );
}

