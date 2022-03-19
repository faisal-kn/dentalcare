import styles from "./NewPatients.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import about from "../assets/about.jpg";

const NewPatients = () => {
  return (
    <>
          <div
        className={styles.landingContainer}
        style={{
          height: "100 vh",
        }}
      >
        <img
          effect="blur"
          src={about}
          style={{
            height: "95vh",
            minWidth: "100vw",
            objectFit: "cover",
            opacity: "0.7",
          }}
          alt=""
        />
        <div className={styles.landingTitle}>
          ABOUT VILLAGE DENTAL
          <h2>Building lifetime relationships through positive experiences</h2>
          <p>OR CALL (303) 220-7662</p>
        </div>
      </div>
      <Container className="my-5">
        <Row>
          <Col lg={6}>
            <h2>We’ve reimagined every detail of your 60-min visit</h2>
            <div className="">
              <img
                src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/front-desk-village-dental-1024x576.jpg"
                alt=""
                className={styles.imgContainer}
              ></img>
            </div>
          </Col>
          <Col>
            <Container className="px-3">
              <ul className="list-unstyled">
                <li className="d-flex pl-l pt-1">
                  <div className="pt-2">
                    <img
                      src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                      alt=""
                      className={styles.imgIcon}
                    />
                  </div>
                  <div>
                    <h4>Simple Scheduling</h4>
                    <p>
                      Easily book online. We offer early morning and same-day
                      appointments.
                    </p>
                  </div>
                </li>
                <li className="d-flex pl-l pt-1">
                  <div className="pt-2">
                    <img
                      src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                      alt=""
                      className={styles.imgIcon}
                    />
                  </div>
                  <div>
                    <h4>Medical Sterilization</h4>
                    <p>
                      Come on in! Our office exceeds CDC and OSHA sterilization
                      requirements to keep you safe.
                    </p>
                  </div>
                </li>
                <li className="d-flex pl-l pt-1">
                  <div className="pt-2">
                    <img
                      src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                      alt=""
                      className={styles.imgIcon}
                    />
                  </div>
                  <div>
                    <h4>Automated Check-in</h4>
                    <p>
                      Complete your paperwork on an iPad. Our average wait time
                      is 5 minutes — but our lobby is so relaxing, you may wish
                      it was longer.
                    </p>
                  </div>
                </li>
                <li className="d-flex pl-l pt-1">
                  <div className="pt-2">
                    <img
                      src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                      alt=""
                      className={styles.imgIcon}
                    />
                  </div>
                  <div>
                    <h4>Comfortable Care</h4>
                    <p>
                      Your new patient visit includes a dental cleaning, exam,
                      and 3D x-rays. We’ll recommend follow-up treatments as
                      needed.
                    </p>
                  </div>
                </li>
              </ul>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewPatients;
