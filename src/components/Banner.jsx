import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import home_styles from "../assets/css/Home.module.css";
import banner_img from "../assets/img/bg_1.jpg";

const Banner = ({ image = banner_img }) => {
  return (
    <div>
      <img className={home_styles.banner_video} src={image} alt="" />
      <Container fluid className={home_styles.banner_text}>
        <div className={home_styles.banner_inner_text}>
          GENERAL DENTAL CARE IN DENVER TECH CENTER, CO
        </div>
        <div className={home_styles.banner_heading}>
          Everything you expect and <br /> then some
        </div>
      </Container>
    </div>
  );
};

export default Banner;
