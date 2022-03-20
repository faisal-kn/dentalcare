import React from "react";
import Banner from "../components/Banner";
import ImageHolder from "../components/ImageHolder";
import styles from "../assets/css/Home.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { RiDoubleQuotesR } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import triangle_dot from "../assets/img/triangle.svg";
import doctor1 from "../assets/doctor1.jpg";
import { HiLocationMarker } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";

export default function BeforeAfter() {
  const imageUrl = [
    {
      img1: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/crowns-bonding-before-village-dental.jpeg",
      img2: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/crowns-bonding-after-village-dental.jpeg",
      title: `Crowns &
	Bonding`,
    },
    {
      img1: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implants-invisalign-before-village-dental.jpeg.jpeg",
      img2: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implants-invisalign-after-village-dental.jpeg",
      title: `Dental Implants &
	Invisalign`,
    },
    {
      img1: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/crown-lengthening-before-village-dental.jpeg",
      img2: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/crown-lengthening-after-village-dental.jpeg",
      title: `Crown
	Lengthening`,
    },
    {
      img1: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/teeth-in-a-day-before-village-dental.jpeg",
      img2: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/teeth-in-a-day-after-village-dental.jpeg",
      title: `Teeth in a Day
	(replacing a bridge with implants)
	`,
    },
    {
      img1: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implants-front-before-village-dental.jpeg",
      img2: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implants-front-after-village-dental.jpeg",
      title: `Dental Implants
	(replacing front teeth)
	`,
    },
    {
      img1: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/full-mouth-rehab-before-village-dental.jpeg",
      img2: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/full-mouth-rehab-after-village-dental.jpeg",
      title: `Full Mouth
	Rehabilitation`,
    },
    {
      img1: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implant-and-crown-lengthening-before-village-dental.jpeg",
      img2: "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implant-and-crown-lengthening-after-village-dental.jpeg",
      title: `Dental Implant &
	Crown Lengthening`,
    },
  ];

  return (
    <>
      <Banner />
      <div
        style={{
          margin: "25px 0",
          backgroundColor: "white",
          padding: "25px 0",
        }}
      >
        <h1 className={styles.imagehead}>Before/After</h1>
        <div className={styles.imagegrid}>
          {imageUrl.map(({ title, img1, img2 }) => {
            return <ImageHolder title={title} img1={img1} img2={img2} />;
          })}
        </div>
        <Container>
          <div className={styles.row_3} id="text2">
            <Row>
              <Col>
                <p>
                  <p className={styles.comma_img}>
                    {" "}
                    <RiDoubleQuotesR />{" "}
                  </p>
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
                <Card
                  className={styles.my_card}
                  style={{ backgroundColor: "#F4F6F3" }}
                >
                  Unlike other Greenwood Village dentists, Village Dental takes
                  you where you’re at rather than chastising or shaming. I can’t
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
                  Unlike other Greenwood Village dentists, Village Dental takes
                  you where you’re at rather than chastising or shaming. I can’t
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
                Unlike other Greenwood Village dentists, Village Dental takes
                you where you’re at rather than chastising or shaming. I can’t
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
            </Row>
          </div>
        </Container>
        <Container>
          <Row style={{ margin: "20px" }}>
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
          <Row className={styles.mapContainer}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7756.576108193791!2d80.04318612605061!3d13.579204961837346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d76fcef996f57%3A0x645caee60af97355!2sPudi%2C%20Andhra%20Pradesh%20524401!5e0!3m2!1sen!2sin!4v1646929611895!5m2!1sen!2sin"></iframe>
          </Row>
        </Container>
      </div>
    </>
  );
}
