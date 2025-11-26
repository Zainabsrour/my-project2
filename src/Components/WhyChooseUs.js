import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/WhyChooseUs.css";
import { FaCarSide, FaShieldAlt, FaBolt } from "react-icons/fa";
import mercedes_video from "../Assets/videos/mercedes_video.mp4";

export default function WhyChooseUs() {
  return (
    <div style={{backgroundColor:"white"}}>
    <h2 className="choose-title-top text-center mb-5">Why Choose Us</h2>

    <section className="choose-section py-5">

      {/* TITLE */}
      
      <Container>
        <Row className="align-items-start">

          {/* LEFT — VIDEO */}
          <Col md={6} className="mb-4 mb-md-0">
            <video 
              className="video-responsive"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={mercedes_video} type="video/mp4" />
            </video>
          </Col>

          {/* RIGHT — ICONS + TEXT DIRECTLY */}
          <Col md={6} className="choose-right">

  <div className="choose-item">
    <FaCarSide className="choose-icon" />
    <p className="choose-text">
      Luxury cars carefully selected from top global brands.
    </p>
  </div>

  <div className="choose-item">
    <FaShieldAlt className="choose-icon" />
    <p className="choose-text">
      Clear pricing and guaranteed quality that gives you full confidence.
    </p>
  </div>

  <div className="choose-item">
    <FaBolt className="choose-icon" />
    <p className="choose-text">
      Fast service, easy financing, and a smooth buying experience.
    </p>
  </div>

</Col>

        </Row>
      </Container>
    </section>
    </div>
  );
}
