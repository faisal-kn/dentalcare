import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../assets/css/Home.module.css";
import banner_video from "../assets/img/banner-video.mp4";
import row_2 from "../assets/img/row_2_img.jpg";
import tick from "../assets/img/tick-svgrepo-com.svg";
import cardimg from "../assets/img/cardimg.jpg";
import footericon1 from "../assets/img/footer_icon1.png";
import footericon2 from "../assets/img/footer_icon2.png";
import footericon3 from "../assets/img/footer_icon3.png";
import footericon4 from "../assets/img/footer_icon4.png";
import footericon5 from "../assets/img/footer_icon5.png";
import My_3_Cards from "../components/3_Cards";
import BlueBox from "../components/BlueBox";
import Parallax from "../components/Parallax";
import VisitUs from "../components/VisitUs";

const Home = () => {
  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${styles.aniLeftToRight}`);
          return;
        }

        entry.target.classList.remove(`${styles.aniLeftToRight}`);
      });
    });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${styles.aniRightToLeft}`);
          return;
        }
        entry.target.classList.remove(`${styles.aniRightToLeft}`);
      });
    });

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${styles.aniBottomToTop}`);
          return;
        }
        entry.target.classList.remove(`${styles.aniBottomToTop}`);
      });
    });

    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${styles.aniTopToBottom}`);
          return;
        }
        entry.target.classList.remove(`${styles.aniTopToBottom}`);
      });
    });

    const check1 = document.getElementById("text1");
    // const check2 = document.getElementById("text2");
    const imgcheck1 = document.getElementById("img1");
    const imgcheck3 = document.getElementById("check4");
    // const imgcheck4 = document.getElementById("bottomani");
    // const imgcheck5 = document.getElementById("topani");
    
    observer1.observe(check1);
    // observer1.observe(check2);
    observer2.observe(imgcheck1);
    observer3.observe(imgcheck3);
    // observer3.observe(imgcheck4);
    // observer4.observe(imgcheck5);
  }, []);

  return (
    <div>
      <video
        className={styles.banner_video}
        loop
        autoPlay
        playsInline
        muted
        id="mejs_45125869032737276_html5"
        preload="none"
        src={banner_video}
      >
        <source type="video/mp4" src={banner_video} />
      </video>
      <Container fluid className={styles.banner_text}>
        <div className={styles.banner_inner_text}>
          trusted denver tech center dentists
        </div>
        <div className={styles.banner_heading}>
          Exceptional care <br /> for all ages
        </div>
      </Container>
      <div className={styles.row_2}>
        <div className={styles.my_cards}>
          <Row>
            <Col md="6" sm="12" className={styles.ani} id="text1">
              <Row>
                <div
                  className={styles.banner_heading}
                  style={{ fontSize: "3rem" }}
                >
                  Dentistry Done Right
                </div>
              </Row>
              <Row>
                <p>
                  Adults and kids, we welcome patients of all ages! Our team is
                  passionate about building lifetime relationships through
                  positive experiences, featuring:
                </p>
              </Row>
              <Row>
                <ul style={{ listStyleImage: tick }}>
                  <li>Transparent Pricing</li>
                  <li>Unparalleled Warranty</li>
                  <li>FREE Whitening (for life!)</li>
                </ul>
              </Row>
              <Row className={styles.downsentence}>
                “Our word is our worth. We promise to do it right, timely, and
                for a fair price.”
              </Row>
            </Col>
            <Col md="6" sm="12">
              <img className={styles.row_image} src={row_2} alt="" id="img1" />
            </Col>
          </Row>
        </div>
      </div>
      <My_3_Cards/>
      <div className={styles.row_4} id="check4">
        <Container fluid className="d-flex flex-column align-items-center">
          <h1 className="pb-4 mb-4">
            Comprehensive care, one convenient location
          </h1>
          <Container className="d-flex">
            <Row id="check4">
              <Col lg="4" md="12" sm="12" className="mt-4">
                <Card className={styles.my_custom_cards}>
                  <Card.Img
                    variant="top"
                    src={cardimg}
                    className={styles.my_custom_cards_img}
                  />
                  <Card.Body>
                    <Card.Title>General</Card.Title>
                    <Card.Text>
                      Everything you expect and then some. Cleanings, fillings,
                      and x-rays are just the beginning.
                    </Card.Text>
                  </Card.Body>
                  <Button
                    variant="outline-warning"
                    className={styles.card_buttons}
                  >
                    Learn More
                  </Button>
                </Card>
              </Col>
              <Col lg="4" md="12" sm="12" className="mt-4">
                <Card className={styles.my_custom_cards}>
                  <Card.Img
                    variant="top"
                    src={cardimg}
                    className={styles.my_custom_cards_img}
                  />
                  <Card.Body>
                    <Card.Title>Cosmetic</Card.Title>
                    <Card.Text>
                      Discover your “wow!” factor. Invisalign, veneers, and
                      in-office or take-home teeth whitening.
                    </Card.Text>
                  </Card.Body>
                  <Button
                    variant="outline-warning"
                    className={styles.card_buttons}
                  >
                    Learn More
                  </Button>
                </Card>
              </Col>
              <Col lg="4" md="12" sm="12" className="mt-4">
                <Card className={styles.my_custom_cards}>
                  <Card.Img
                    variant="top"
                    src={cardimg}
                    className={styles.my_custom_cards_img}
                  />
                  <Card.Body>
                    <Card.Title>Surgical</Card.Title>
                    <Card.Text>
                      We can fix anything. Our dentists repair damaged or lost
                      teeth with cutting-edge implants and more.
                    </Card.Text>
                  </Card.Body>
                  <Button
                    variant="outline-warning"
                    className={styles.card_buttons}
                  >
                    Learn More
                  </Button>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
      <Parallax/>
      <BlueBox/>
      <VisitUs/>
      <div className={styles.row_7}>
        <Container fluid>
          <Row>
            <Col className={styles.footer_icons}>
              <img
                style={{ height: "inherit", width: "inherit" }}
                src={footericon1}
                alt=""
              />
            </Col>
            <Col className={styles.footer_icons}>
              <img
                style={{ height: "inherit", width: "inherit" }}
                src={footericon2}
                alt=""
              />
            </Col>
            <Col className={styles.footer_icons}>
              <img
                style={{ height: "inherit", width: "inherit" }}
                src={footericon3}
                alt=""
              />
            </Col>
            <Col className={styles.footer_icons}>
              <img
                style={{ height: "inherit", width: "inherit" }}
                src={footericon4}
                alt=""
              />
            </Col>
            <Col className={styles.footer_icons}>
              <img
                style={{ height: "inherit", width: "inherit" }}
                src={footericon5}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
