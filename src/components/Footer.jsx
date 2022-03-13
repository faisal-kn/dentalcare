import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import { a } from "react-router-hash-link";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="">
      <Row className="px-0">
        <footer className={styles.footer}>
          <Container>
            <Row>
              <Col className="mb-3" md={3}>
                <div className={`${styles["footer-title"]} mt-5 mb-4 pb-2`}>
                  About us
                </div>
                <p className={`${styles["white-text"]}`}>
                  FIYN LABS is a salesforce consulting firm that provides
                  high-quality services and solutions to customers. Our mission
                  is to help our clients improve and grow their business. FIYN
                  LABS provides customers with competent Salesforce CRM
                  solutions from start to finish of their business operations.
                </p>
              </Col>
              <Col className="mb-3" md={3}>
                <div className={`${styles["footer-title"]} mt-5 mb-4 pb-2`}>
                  Company
                </div>
                <div className={`${styles["footer-links"]}`}>
                  <a smooth to="/about-us#">
                    About Us
                  </a>
                  <a smooth to="our-values#">
                    Our Values
                  </a>
                  <a smooth to="customer-success#">
                    Customer Success
                  </a>
                </div>
              </Col>
              <Col className="mb-3" md={3}>
                <div className={`${styles["footer-title"]} mt-5 mb-4 pb-2`}>
                  Quick Links
                </div>
                <div className={`${styles["footer-links"]}`}>
                  <a smooth to="/">
                    Home
                  </a>
                  <a smooth to="/contact-us#">
                    Contact Us
                  </a>
                  <a smooth to="/careers#">
                    Work with us
                  </a>
                </div>
              </Col>
              <Col className="mb-3" md={3}>
                <div className={`${styles["footer-title"]} mt-5 mb-4 pb-2`}>
                  Services
                </div>
                <div className={`${styles["footer-links"]}`}>
                  <a smooth to="/services/salesforce-cloud-implementation#">
                    Salesforce Cloud Implementation
                  </a>
                  <a smooth to="/services/salesforce-services#">
                    Salesforce Services
                  </a>
                  <a smooth to="/services/other-crm-services#">
                    Other CRM Services
                  </a>
                  <a smooth to="/services/salesforce-integration-services#">
                    Salesforce Integrations Services
                  </a>
                  <a smooth to="/services/product-integration#">
                    Products Integration
                  </a>
                </div>
              </Col>

              <div
                className={`${styles["footer-social-links"]} mt-3 text-center`}
              >
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com/FiynLabs">
                    <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com/company/fiyn-labs">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaWhatsapp />
                  </a>
                </li>
              </div>
            </Row>
          </Container>
        </footer>
        <div className={`${styles["footer-bottom"]}`}>
          Fiyn Labs © 2022, All Rights Reserved
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
