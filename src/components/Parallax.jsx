import React,{useEffect} from 'react';
import {Container} from 'react-bootstrap';
import styles from "../assets/css/Home.module.css";


const Parallax = () => {
	useEffect(()=>{
		const observer1 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				entry.target.classList.add(`${styles.aniLeftToRight}`);
				return;
			  }
	  
			  entry.target.classList.remove(`${styles.aniLeftToRight}`);
			});
		  });

		  const check1 = document.getElementById("parallax_text1");
		
		  observer1.observe(check1);
	},[])
  return (
	<div className={styles.row_5}>
	<Container fluid style={{ padding: "30px 0 30px 0" }}>
	  <div className={`${styles.parallax} ${styles.p2}`}>
		<div className={styles.card} id='parallax_text1'>
		  <h1 style={{ fontSize: "50px", paddingBottom: "20px" }}>
			How It Works
		  </h1>
		  <ul style={{ fontSize: "18px" }}>
			<li>
			  Our warranty applies to all restorative dental treatments
			</li>
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
  )
}

export default Parallax