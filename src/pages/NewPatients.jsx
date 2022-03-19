import styles from "./NewPatients.module.css";
import { Container, Row, Col } from "react-bootstrap";

const NewPatients = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <h2>We’ve reimagined every detail of your 60-min visit</h2>
          <img
            src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/front-desk-village-dental-1024x576.jpg"
            alt=""
            className={styles.imgContainer}
          ></img>
        </Col>
        <Col>
          <img
            src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
            alt=""
          />
          <h2></h2>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPatients;
