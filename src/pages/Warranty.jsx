import styles from "./warranty.module.css";
import { Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import doctor1 from "../assets/doctor1.jpg";
import { HiLocationMarker } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import Parallax from "../components/Parallax";

const Warranty = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    console.log(width);
  }, [width]);
  return (
    <>
      <Banner />
      <div style={{ backgroundColor: "white", padding: "70px 0 0 0" }}>
        <Container>
          <Row className={styles.firstContainer}>
            {width > 1400 && (
              <Col
                lg={5}
                md={12}
                className="d-flex align-items-center justify-content-center "
              >
                <img
                  alt=""
                  className={styles.imgContainer}
                  src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/shine-bright-today-village-dental.jpg"
                />
              </Col>
            )}

            <Col
              lg={7}
              md={12}
              style={{ paddingTop: "30px" }}
              className="d-flex justify-content-center flex-column"
            >
              <h1 style={{ paddingBottom: "10px" }} className="text-center">
                We stand behind our work
              </h1>
              <p>
                We’re the only dentist in Denver Tech Center to offer a lifetime
                warranty. We believe in the quality of our work and want to pass
                that confidence to you. If something breaks, we’ll fix it at no
                cost to you. Because it’s the right thing to do.
              </p>
              <iframe
                src="https://www.youtube.com/embed/PWZnenTQDB4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className={styles.videoContainer}
              ></iframe>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col
              lg={4}
              className="d-flex align-items-center justify-content-center flex-column flex wrap"
            >
              <img
                src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/cavity-icon-village-dental.svg"
                alt=""
              ></img>
              <h3>Dental Fillings</h3>
              <p>
                <strong>Warranty period:</strong> 5 years
                <br />
                <strong>Problem:</strong> Breakage, misfit, or leakage
                <br />
                <strong>Promise:</strong> Replace or repair — no cost to you
                <br />
                <strong>Terms:</strong> Patient must maintain 6-month cleanings{" "}
                <br />
              </p>
            </Col>
            <Col
              lg={4}
              className="d-flex align-items-center justify-content-center flex-column flex wrap"
            >
              <img
                src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/bridge-icon-village-dental.svg"
                alt=""
                title="bridge-icon-village-dental"
                class="wp-image-31328"
              />
              <h3>Crowns and Bridges</h3>
              <p>
                <strong>Warranty period:</strong> 5 years
                <br />
                <strong>Problem:</strong> Breakage, misfit, or leakage
                <br />
                <strong>Promise:</strong> Replace or repair — no cost to you
                <br />
                <strong>Terms:</strong> Patient must maintain 6-month cleanings{" "}
                <br />
              </p>
            </Col>
            <Col
              lg={4}
              className="d-flex align-items-center justify-content-center flex-column flex wrap"
            >
              <img
                src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/root-canal-icon-village-dental.svg"
                alt=""
                title="root-canal-icon-village-dental"
              ></img>
              <h3>Root Canals</h3>
              <p>
                <strong>Warranty period:</strong> 5 years
                <br />
                <strong>Problem:</strong> Breakage, misfit, or leakage
                <br />
                <strong>Promise:</strong> Replace or repair — no cost to you
                <br />
                <strong>Terms:</strong> Patient must maintain 6-month cleanings{" "}
                <br />
              </p>
            </Col>
          </Row>
        </Container>
        <Parallax/>
        <Container style={{ padding: "40px" }}>
          <Row>
            <Col
              lg={6}
              md={12}
              className="d-flex justify-content-center flex-column flex wrap"
            >
              {" "}
              <h2>Frequently Asked Questions</h2>
              <h6>Why do I need to maintain 6-month dental cleanings?</h6>
              <p>
                By visiting us every 6 months for routine dental cleanings and
                exams, we can catch and stop issues from developing. These
                appointments are your best defense against breakage and decay
                and help keep your mouth healthy.
              </p>
              <h3>How else can I prevent dental work from failing?</h3>
              <ul>
                <li>Brush your teeth 2x a day for 2 minutes</li>
                <li>Floss at least once a day</li>
                <li>Eat a healthy diet, limiting sugary and acidic foods</li>
                <li>Don’t smoke!!!!!</li>
              </ul>
            </Col>
            <Col
              lg={6}
              md={12}
              className="d-flex justify-content-center flex-column flex wrap"
            >
              <img
                loading="lazy"
                src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/patient-waiting-room-village-dental.jpg"
                alt="waiting room village dental"
                className={styles.image}
              />
            </Col>
          </Row>
          <Row style={{ margin: "20px", paddingTop: "50px" }}>
            <Col md={12} lg={5}>
              <div class={styles.visitcontainer}>
                <img src={doctor1} alt="a doctor" className={styles.imageUs} />
                <div class={styles["top-right"]}>VISIT US</div>
              </div>
            </Col>
            <Col md={12} lg={7}>
              <p>
                We’re conveniently located in the Denver Tech Center area. Find
                us on the 4th floor of the Triad Office Park building. Plenty of
                free parking available.
              </p>
              <div>
                <HiLocationMarker size="2em" style={{ color: "#316A80" }} />
                5670 Greenwood Plaza Blvd., Suite 404 Greenwood Village, CO
                80111
              </div>
              <br />
              <div>
                <BiTimeFive size="2em" style={{ color: "#316A80" }} />
                Monday–Thursday: 7AM–3PM
              </div>
            </Col>
          </Row>
          <Row className={styles.mapContainer} style={{ paddingTop: "30px" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7756.576108193791!2d80.04318612605061!3d13.579204961837346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d76fcef996f57%3A0x645caee60af97355!2sPudi%2C%20Andhra%20Pradesh%20524401!5e0!3m2!1sen!2sin!4v1646929611895!5m2!1sen!2sin"></iframe>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Warranty;
