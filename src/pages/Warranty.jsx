import styles from "./warranty.module.css";
import { Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Parallax from "../components/Parallax";
import VisitUs from "../components/VisitUs";
import home_styles from '../assets/css/Home.module.css';


const Warranty = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    console.log(width);
  }, [width]);
  useEffect(()=>{
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${home_styles.aniBottomToTop}`);
          return;
        }
        entry.target.classList.remove(`${home_styles.aniBottomToTop}`);
      });
    });
    const check1 = document.getElementById("warranty_text1");

    observer3.observe(check1);
  },[])
  return (
    <>
      <Banner text='LIFETIME DENTAL WARRANTY AT VILLAGE DENTAL' heading='If it breaks, we fix it. No cost to you.'/>
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
              id='warranty_text1'
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
        </Container>
          <VisitUs/>
      </div>
    </>
  );
};

export default Warranty;
