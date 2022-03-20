import styles from "./component.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="">
      <Row className="px-0">
        <footer className={styles.footer}>
          <Container>
            <Row>
              <Col className="mb-3" md={3}>
                <div className={`${styles["footer-title"]} mt-5 mb-2 pb-2`}>
                  Social
                </div>
                <div
                  className={`${styles["footer-social-links"]} mt-2`}
                >
                  <li>
                    <Row style={{paddingLeft:'0.5rem'}}>
                    <Col className="mt-3" xs='6'  style={{paddingLeft:'0px'}} md='6' lg='3'>
                    <a href="#">
                      <FaFacebook />
                    </a>
                    </Col>
                    <Col className="mt-3" xs='6'  style={{paddingLeft:'0px'}} md='6' lg='3'>
                    <a href="https://twitter.com/FiynLabs">
                      <FaTwitter />
                    </a>
                    </Col>

                    <Col className="mt-3" xs='6'  style={{paddingLeft:'0px'}} md='6' lg='3'>
                    <a href="https://www.linkedin.com/company/fiyn-labs">
                      <FaLinkedin />
                    </a>
                    </Col>

                    <Col className="mt-3" xs='6'  style={{paddingLeft:'0px'}} md='6' lg='3'>
                    <a href="#">
                      <FaWhatsapp />
                    </a>
                    </Col>

                    </Row>
                  </li>
                </div>
              </Col>
              <Col className="mb-3" md={3}>
                <div className={`${styles["footer-title"]} mt-5 mb-4 pb-2`}>
                  Services
                </div>
                <div className={`${styles["footer-links"]}`}>
                  <a smooth to="/about-us#">
                    General
                  </a>
                  <a smooth to="our-values#">
                    Cosmetic
                  </a>
                  <a smooth to="customer-success#">
                    Surgical
                  </a>
                </div>
              </Col>
              <Col className="mb-3" md={3}>
                <div className={`${styles["footer-title"]} mt-5 mb-4 pb-2`}>
                  Our Office
                </div>
                <div className={`${styles["footer-links"]}`}>
                  <a smooth to="/">
                    Home
                  </a>
                  <a smooth to="/contact-us#">
                    Warranty
                  </a>
                  <a smooth to="/careers#">
                    About
                  </a>
                  <a smooth to="/careers#">
                    New Patients
                  </a>
                  <a smooth to="/careers#">
                    Contact
                  </a>
                </div>
              </Col>
              <Col className="mb-3" md={3}>
                <div className={`${styles["footer-title"]} mt-5 mb-4 pb-2`}>
                  Contact Us
                </div>
                
              </Col>
            </Row>
          </Container>
        </footer>
        <div className={`${styles["footer-bottom"]}`}>
          VillageDental © 2022, All Rights Reserved
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
