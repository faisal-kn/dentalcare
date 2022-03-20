import React,{useEffect} from 'react'
import Banner from '../components/Banner';
import ImageHolder from '../components/ImageHolder';
import styles from '../assets/css/Home.module.css';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import service_styles from '../assets/css/Services.module.css';
import row_3_img from '../assets/img/ser_row2.jpg';
import tick from '../assets/img/tick-svgrepo-com.svg';
import grad from '../assets/img/gradient.jpg';
import badge from '../assets/img/badge.svg';
import VisitUs from '../components/VisitUs';
import My_3_Cards from '../components/3_Cards';

export default function BeforeAfter() {
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

    const check1 = document.getElementById("before_text1");
    const check2 = document.getElementById("before_text2");

    observer2.observe(check2);
    observer3.observe(check1);
  },[])
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
	`},
	{
		"img1": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/full-mouth-rehab-before-village-dental.jpeg", "img2": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/full-mouth-rehab-after-village-dental.jpeg", "title": `Full Mouth
	Rehabilitation`},
	{
		"img1": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implant-and-crown-lengthening-before-village-dental.jpeg", "img2": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implant-and-crown-lengthening-after-village-dental.jpeg", "title": `Dental Implant &
	Crown Lengthening`},
	];
  return (
	<>
	<Banner/>
  <div className={service_styles.row_3}>
					<Container>
						<Row>
							<Col lg='6' sm='12' className={service_styles.sub_container} id='before_text1'>
								<h1>Our approach to Botox</h1>
								<h3>Aesthetic Treatments</h3>
								<p>After completing a cosmetic dentistry treatment, add Botox to enhance your facial aesthetics. We can address common concerns like:</p>								
								<ul style={{ fontSize: "18px" ,listStyleImage:`url(${tick})`}}>
					<li>Our warranty applies to all restorative dental treatments</li>
					<li>
						Visit Village Dental every 6 months for routine cleanings &
						exams
					</li>
					<li>If something breaks, contact us. We’ll fix it.</li>
					</ul>
							</Col>
							<Col lg='6' sm='12' className='mt-4' id='before_text2'>
								<img style={{width:'-webkit-fill-available'}} src={row_3_img} alt="" />
							</Col>
						</Row>
					</Container>
			</div>
    <div style={{ margin: "25px 0" ,backgroundColor:'white',paddingTop:'4rem'}}>
				<h1 className={styles.imagehead}>Before/After</h1>
				<div className={styles.imagegrid}>
					{
						imageUrl.map(({ title, img1, img2 }) => {
							return <ImageHolder title={title} img1={img1} img2={img2} />
						})
					}
				</div>
			</div>
      <My_3_Cards/>
      <div style={{backgroundImage: `url(${grad})`,padding:'5rem 5rem'}}>
				<Container>
					<Row>
						<Col lg='6' sm='12' style={{display:'flex',justifyContent:'flex-end',paddingRight:'5rem'}}>
							<img style={{width:'inherit',objectFit:'cover'}} src={badge} alt="" />
							</Col>
							<Col lg='6' sm='12'>
								<h1>Unparalleled Warranty</h1>
								<p>We believe in the quality of our work and want to pass that confidence to you. Keep up on your routine 6-month checkups and if something breaks, we’ll fix it at no cost to you. Because it’s the right thing to do.</p>
								<Button variant='outline-warning' className={styles.card_buttons}>Learn More</Button>
							</Col>
					</Row>
					</Container>
			</div>
      <VisitUs/>
	</>
  )
}
