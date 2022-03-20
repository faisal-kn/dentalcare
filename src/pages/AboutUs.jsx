import styles from "./about.module.css";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctor from "../assets/doctor.jpg";
import Banner from "../components/Banner";
import home_styles from '../assets/css/Home.module.css';
import VisitUs from "../components/VisitUs";
import Parallax from "../components/Parallax";

const dummyData = [" empathy", " integrity", " gratitude"];
const AboutUs = () => {
  const [currentText, setCurrentText] = useState(dummyData[0]);

  useEffect(() => {
    setInterval(() => {
      setCurrentText((prevState) => {
        if (prevState === dummyData[dummyData.length - 1]) {
          return dummyData[0];
        } else {
          return dummyData[dummyData.indexOf(prevState) + 1];
        }
      });
    }, 5000);
  }, []);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${home_styles.aniLeftToRight}`);
          return;
        }

        entry.target.classList.remove(`${home_styles.aniLeftToRight}`);
      });
    });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${home_styles.aniRightToLeft}`);
          return;
        }
        entry.target.classList.remove(`${home_styles.aniRightToLeft}`);
      });
    });

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${home_styles.aniBottomToTop}`);
          return;
        }
        entry.target.classList.remove(`${home_styles.aniBottomToTop}`);
      });
    });

    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${home_styles.aniTopToBottom}`);
          return;
        }
        entry.target.classList.remove(`${home_styles.aniTopToBottom}`);
      });
    });

    const check1 = document.getElementById("about_text1");
    // const check2 = document.getElementById("about_text2");
    const imgcheck1 = document.getElementById("about_img1");
    // const imgcheck3 = document.getElementById("about_check4");
    // const imgcheck4 = document.getElementById("about_bottomani");
    // const imgcheck5 = document.getElementById("about_topani");
    
    observer3.observe(check1);
    // observer1.observe(check2);
    observer2.observe(imgcheck1);
    // observer3.observe(imgcheck3);
    // observer3.observe(imgcheck4);
    // observer4.observe(imgcheck5);
  }, []);

  useEffect(() => {}, [currentText]);
  return (
    <div>
      <Banner text='ABOUT VILLAGE DENTAL' heading='Building lifetime relationships through positive experiences'/>
      <div style={{backgroundColor:'white'}}>
      <Container className={styles.firstContainer} >
        <Row>
          <Col lg={7} className={styles.mainContainer} id='about_text1'>
            <h1 style={{ paddingBottom: "30px" }}>
              Serving Patients with
              <span style={{ color: "#316A80" }}>{currentText}</span>
            </h1>
            <p style={{ paddingRight: "20px", textAlign: "justify" }}>
              We’re a group of energetic, values-driven dental clinicians
              dedicated to caring for all people — young to young at heart.
              Since 2002, we’ve been combining exciting technology with a warm
              and friendly team to deliver exceptional dentistry in Greenwood
              Village.
              <br />
              <br /> Find all the dental care you need (and then some) here in
              our beautiful office, designed for your comfort and rejuvenation.
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
          <Col
            lg={5}
            className={`${styles.container} d-flex justify-content-center align-items-center flex-column`}
            id='about_img1'
          >
            <img
              className={styles.imagezero}
              src="https://www.villagedentaldtc.com/wp-content/uploads/2021/08/dr-brenna-and-steve-village-dental-1024x731.jpg"
              alt="Dentists smiling at village dental"
            ></img>
            <p
              style={{
                color: "white",
                textAlign: "justify",
                marginTop: "20px",
              }}
            >
              At Village Dental, you are in good hands. With every treatment, we
              promise to do it right, quickly, and for a fair price. And we
              provide a lifetime warranty on all our work — because it’s the
              right thing to do.
            </p>
          </Col>
        </Row>
      </Container>
      </div>
        <Row className={styles["doctor-row"]} style={{ margin: "20px" }}>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={doctor} alt="a doctor" className={styles.imgUs} />
          </Col>
          <Col>
            <hr />
            <Row style={{ paddingTop: "30px" }}>
              <Col lg={6}>
                <img
                  src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                  alt=""
                  className={styles.imgTriangle}
                  // style={{ paddingBottom: "30px" }}
                ></img>

                <h2 style={{ padding: "20px 0 20px 0" }}>Dr. Steven Zervas</h2>
                <h6 style={{ padding: "0px 0 10px 0" }}>Why dentistry?</h6>
                <p style={{ textAlign: "justify" }}>
                  I’m a dentist because it has always been my desire to help
                  people in a healthcare environment. Growing up in my dad’s and
                  uncle’s dental office, I learned early on that dentistry was
                  going to be my path. I love the relationships we build with
                  our patients and our ability to help them live healthier,
                  better lives.
                </p>
              </Col>
              <Col>
                <h6 style={{ padding: "0px 0 10px 0" }}>Education</h6>
                <ol>
                  <li>
                    BA in Biology and World Religions, Westminster College
                  </li>
                  <li>DDS, University of Oklahoma</li>
                </ol>
                <h6 style={{ padding: "0px 0 10px 0" }}>
                  Out and about in Denver/Greenwood Village
                </h6>
                <ol>
                  <li>Running in Wash Park</li>
                  <li>Concerts at the Mission Ballroom and Red Rocks</li>
                  <li>Telemark skiing at Arapahoe Basin!!!!</li>
                  <li>Dinner at Sunday Vinyl</li>
                </ol>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={styles["doctor-row"]} style={{ margin: "20px" }}>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={doctor} alt="a doctor" className={styles.imgUs} />
          </Col>
          <Col>
            <hr />
            <Row style={{ paddingTop: "30px" }}>
              <Col lg={6}>
                <img
                  src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                  alt=""
                  className={styles.imgTriangle}
                  // style={{ paddingBottom: "30px" }}
                ></img>

                <h2 style={{ padding: "20px 0 20px 0" }}>Dr. Steven Zervas</h2>
                <h6 style={{ padding: "0px 0 10px 0" }}>Why dentistry?</h6>
                <p style={{ textAlign: "justify" }}>
                  I’m a dentist because it has always been my desire to help
                  people in a healthcare environment. Growing up in my dad’s and
                  uncle’s dental office, I learned early on that dentistry was
                  going to be my path. I love the relationships we build with
                  our patients and our ability to help them live healthier,
                  better lives.
                </p>
              </Col>
              <Col>
                <h6 style={{ padding: "0px 0 10px 0" }}>Education</h6>
                <ol>
                  <li>
                    BA in Biology and World Religions, Westminster College
                  </li>
                  <li>DDS, University of Oklahoma</li>
                </ol>
                <h6 style={{ padding: "0px 0 10px 0" }}>
                  Out and about in Denver/Greenwood Village
                </h6>
                <ol>
                  <li>Running in Wash Park</li>
                  <li>Concerts at the Mission Ballroom and Red Rocks</li>
                  <li>Telemark skiing at Arapahoe Basin!!!!</li>
                  <li>Dinner at Sunday Vinyl</li>
                </ol>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={styles["doctor-row"]} style={{ margin: "20px" }}>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={doctor}
              alt="a doctor"
              className={styles.imgUs}
              style={{ margin: "-20px" }}
            />
          </Col>
          <Col>
            <hr />
            <Row style={{ paddingTop: "30px" }}>
              <Col lg={6}>
                <img
                  src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                  alt=""
                  className={styles.imgTriangle}
                  // style={{ paddingBottom: "30px" }}
                ></img>

                <h2 style={{ padding: "20px 0 20px 0" }}>Dr. Steven Zervas</h2>
                <h6 style={{ padding: "0px 0 10px 0" }}>Why dentistry?</h6>
                <p style={{ textAlign: "justify" }}>
                  I’m a dentist because it has always been my desire to help
                  people in a healthcare environment. Growing up in my dad’s and
                  uncle’s dental office, I learned early on that dentistry was
                  going to be my path. I love the relationships we build with
                  our patients and our ability to help them live healthier,
                  better lives.
                </p>
              </Col>
              <Col>
                <h6 style={{ padding: "0px 0 10px 0" }}>Education</h6>
                <ol>
                  <li>
                    BA in Biology and World Religions, Westminster College
                  </li>
                  <li>DDS, University of Oklahoma</li>
                </ol>
                <h6 style={{ padding: "0px 0 10px 0" }}>
                  Out and about in Denver/Greenwood Village
                </h6>
                <ol>
                  <li>Running in Wash Park</li>
                  <li>Concerts at the Mission Ballroom and Red Rocks</li>
                  <li>Telemark skiing at Arapahoe Basin!!!!</li>
                  <li>Dinner at Sunday Vinyl</li>
                </ol>
              </Col>
            </Row>
          </Col>
        </Row>
      <Parallax/>
        <VisitUs/>
    </div>
  );
};

export default AboutUs;
