import React,{useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {HiLocationMarker} from 'react-icons/hi';
import {BiTimeFive} from 'react-icons/bi';
import styles from '../assets/css/Home.module.css';
import doctor1 from "../assets/doctor1.jpg";


const VisitUs = () => {
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
	
		const observer4 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				entry.target.classList.add(`${styles.aniTopToBottom}`);
				return;
			  }
			  entry.target.classList.remove(`${styles.aniTopToBottom}`);
			});
		  });

		const check1 = document.getElementById("visit_text1");
    	const check2 = document.getElementById("visit_text2");

		observer4.observe(check1);
    observer1.observe(check2);
	},[]);
  return (
	<>
		<Row style={{ margin: "20px" }}>
          <Col md={12} lg={5}>
            <div class={styles.visitcontainer}>
              <img src={doctor1} alt="a doctor" className={styles.imageUs} id='visit_text1'/>
              <div class={styles["top-right"]} id='visit_text2'>VISIT US</div>
            </div>
          </Col>
          <Col md={12} lg={7}>
            <p>
              We’re conveniently located in the Denver Tech Center area. Find us
              on the 4th floor of the Triad Office Park building. Plenty of free
              parking available.
            </p>
            <div>
              <HiLocationMarker size="2em" style={{ color: "#316A80" }} />
              5670 Greenwood Plaza Blvd., Suite 404 Greenwood Village, CO 80111
            </div>
            <br />
            <div>
              <BiTimeFive size="2em" style={{ color: "#316A80" }} />
              Monday–Thursday: 7AM–3PM
            </div>
          </Col>
        </Row>
	</>
  )
}

export default VisitUs;