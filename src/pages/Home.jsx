import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../assets/css/Home.module.css";
import banner_video from "../assets/img/banner-video.mp4";
import row_2 from "../assets/img/row_2_img.jpg";
import tick from "../assets/img/tick-svgrepo-com.svg";
import { AiFillStar } from "react-icons/ai";
import triangle_dot from "../assets/img/triangle.svg";
import cardimg from "../assets/img/cardimg.jpg";
import row5_img from "../assets/img/row5_img.jpg";
import { RiPriceTag2Fill ,RiDoubleQuotesR} from "react-icons/ri";
import badge2 from "../assets/img/badge2.svg";
import footericon1 from "../assets/img/footer_icon1.png";
import footericon2 from "../assets/img/footer_icon2.png";
import footericon3 from "../assets/img/footer_icon3.png";
import footericon4 from "../assets/img/footer_icon4.png";
import footericon5 from "../assets/img/footer_icon5.png";

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
    const check2 = document.getElementById("text2");
    const imgcheck1 = document.getElementById("img1");
    const imgcheck3 = document.getElementById("check4");
    const imgcheck4 = document.getElementById("bottomani");
    const imgcheck5 = document.getElementById("topani");
    observer1.observe(check1);
    observer1.observe(check2);
    observer2.observe(imgcheck1);
    observer3.observe(imgcheck3);
    observer3.observe(imgcheck4);
    observer4.observe(imgcheck5);
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
      <div className={styles.row_3} id="text2">
        <Row>
          <Col>
            <p>
              <p className={styles.comma_img}> <RiDoubleQuotesR/> </p>
            </p>
            <p className={styles.banner_heading}>
              Kind words from our patients
            </p>
            <p className={styles.star_row}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p className={styles.underline_text}>850+ 5-star reviews!</p>
          </Col>
          <Col lg="4" md="12" className={styles.my_card_cont}>
            <Card className={styles.my_card} style={{backgroundColor:'#F4F6F3'}}>
              Unlike other Greenwood Village dentists, Village Dental takes you
              where you’re at rather than chastising or shaming. I can’t
              recommend them highly enough. You will be well cared for!
              <p className={styles.card_author}>— Sherryll K.</p>
              <p className={styles.card_triangle_dot}>
                <img
                  style={{ transform: "rotate(270deg)" }}
                  src={triangle_dot}
                  alt=""
                />
              </p>
            </Card>
          </Col>
          <Col lg="4" md="12" className={styles.my_card_cont}>
            <Card
              className={styles.my_card}
              style={{ backgroundColor: "rgba(231,202,113,0.9)" }}
            >
              Unlike other Greenwood Village dentists, Village Dental takes you
              where you’re at rather than chastising or shaming. I can’t
              recommend them highly enough. You will be well cared for!
              <p className={styles.card_author}>— Sherryll K.</p>
              <p className={styles.card_triangle_dot}>
                <img
                  style={{ transform: "rotate(270deg)" }}
                  src={triangle_dot}
                  alt=""
                />
              </p>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-end">
          <Card
            className={styles.my_card + " " + styles.my_card_3}
            style={{ backgroundColor: "#9DBEBB" }}
          >
            Unlike other Greenwood Village dentists, Village Dental takes you
            where you’re at rather than chastising or shaming. I can’t recommend
            them highly enough. You will be well cared for!
            <p className={styles.card_author}>— Sherryll K.</p>
            <p className={styles.card_triangle_dot}>
              <img
                style={{ transform: "rotate(270deg)" }}
                src={triangle_dot}
                alt=""
              />
            </p>
          </Card>
        </Row>
      </div>
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
      <div className={styles.row_5}>
					<Container fluid style={{ padding: "30px 0 30px 0" }}>
				<div className={`${styles.parallax} ${styles.p2}`}>
				<div className={styles.card}>
					<h1 style={{ fontSize: "50px", paddingBottom: "20px" }}>
					How It Works
					</h1>
					<ul style={{ fontSize: "18px" }}>
					<li>Our warranty applies to all restorative dental treatments</li>
					<li>
						Visit Village Dental every 6 months for routine cleanings &
						exams
					</li>
					<li>If something breaks, contact us. We’ll fix it.</li>
					</ul>
				</div>
				</div>
			</Container>
			</div>
      <Container fluid="md" className={styles.row_6}>
        <Card className={styles.row6_card}>
          <Row style={{ margin: "0px" }}>
            <Col
              lg="6"
              md="6"
              sm="12"
              className={styles.row6_col1}
              id="bottomani"
            >
              <Row className="d-flex justify-content-start">
                <RiPriceTag2Fill size={40} style={{ width: "7rem" }} />
              </Row>
              <Row style={{ padding: "10px 0px" }}>
                <p> TRANSPARENT PRICING</p>
              </Row>
              <Row style={{ padding: "10px 0px" }}>
                <h1>No Surprises</h1>
              </Row>
              <Row style={{ padding: "10px 0px" }}>
                <p>
                  Our team believes in accessible dental care. We offer
                  straightforward pricing, clear estimates, and an unprecedented
                  dental warranty. Keep up with your routine 6-month checkups
                  and if something needs fixing, we’ll handle it at no cost to
                  you.
                </p>
              </Row>
            </Col>
            <Col lg="6" md="6" sm="12" className={styles.row6_col2} id="topani">
              <Row>
                <h2>Insurance</h2>
              </Row>
              <Row>
                <p>
                  Our office is in-network with Delta Premier and bills all
                  other providers. Our team will explain how your specific
                  dental benefits apply to the cost of treatment.
                </p>
              </Row>
              <Row className="d-flex justify-content-center">
                <img src={badge2} alt="" />
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
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
            <Col className={styles.footer_icons} >
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
