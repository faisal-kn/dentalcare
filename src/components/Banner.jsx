import React,{useEffect} from "react";
import { Container} from "react-bootstrap";
import home_styles from "../assets/css/Home.module.css";
import banner_img from "../assets/img/bg_1.jpg";

const Banner = ({ image = banner_img }) => {
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
    const check2 = document.getElementById("banner_text2");

    observer3.observe(check2);
  },[])
  return (
    <div>
      <img className={home_styles.banner_video} src={image} alt="" />
      <Container fluid className={home_styles.banner_text}>
        <div className={home_styles.banner_inner_text}>
          GENERAL DENTAL CARE IN DENVER TECH CENTER, CO
        </div>
        <div className={home_styles.banner_heading} id='banner_text2'>
          Everything you expect and <br /> then some
        </div>
      </Container>
    </div>
  );
};

export default Banner;
