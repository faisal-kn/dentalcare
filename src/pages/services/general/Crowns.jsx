import React from 'react';
import {Container,Row,Col,Card, Button} from 'react-bootstrap';
import home_styles from '../../../assets/css/Home.module.css';
import service_styles from '../../../assets/css/Services.module.css';
import Banner from '../../../components/Banner';
import row_3_img from '../../../assets/img/ser_row2.jpg';
import tick from '../../../assets/img/tick-svgrepo-com.svg';
import My_3_Cards from '../../../components/3_Cards';
import BlueBox from '../../../components/BlueBox';

const Crowns = () => {
  return (
	<div>
		<Banner/>
		<div className={service_styles.row_2}>
				<Container className={service_styles.botox_row2}>
				<Row>
					<h1>Ask us about Botox treatment!</h1>
				</Row>
				<Row>
					<p>As the top cosmetic procedure in the United States and with a 97% satisfaction rate, we’re proud to offer Botox treatments in our Greenwood Village dental office. Botox can be used to minimize the appearance of fine lines and wrinkles, as well as reduce muscle tension and headaches.</p>
				</Row>
				<Row>
					<h4>What can Botox do for you?</h4>
				</Row>
				<Row>
					<ul className={service_styles.row2_list}>
						<li>Reduce wrinkles and other signs of aging</li>
						<li>Reduce wrinkles and other signs of aging</li>
						<li>Reduce wrinkles and other signs of aging</li>
						<li>Reduce wrinkles and other signs of aging</li>
						<li>Reduce wrinkles and other signs of aging</li>
					</ul>
				</Row>
				<p>If you’re interested in a high-quality dental crown experience in Greenwood Village, give us a call at (303) 220-7662 or book your visit now!</p>
				</Container>
			</div>
			<div  className={service_styles.botox_row3}>
				<Container style={{}}>
					<Row>
						<Col lg='6' sm='12'>
						<h3>Made for you</h3>
						<p>
							Our tooth-colored crowns keep your smile looking natural.
						</p>
						</Col>
						<Col lg='6' sm='12'>
						<h3>Made for you</h3>
						<p>
							Our tooth-colored crowns keep your smile looking natural.
						</p>
						</Col>
					<Col lg='6' sm='12'>
						<h3>Made for you</h3>
						<p>
							Our tooth-colored crowns keep your smile looking natural.
						</p>
						</Col>
						<Col lg='6' sm='12'>
						<h3>Made for you</h3>
						<p>
							Our tooth-colored crowns keep your smile looking natural.
						</p>
						</Col>
					</Row>
					</Container>
			</div>

			<div className={home_styles.row_2}>
				<Container className='d-flex flex-column justify-content-center align-items-center pt-4 pb-4' style={{ minHeight:'20rem',color:'white'}}>
					<h1>Lifetime Warranty!</h1>
					<p className='text-center'>When problems arise, don’t wait. We offer same-day appointments to get you out of pain as soon as <br /> possible. Call (303) 220-7662.</p>
					<Button className='mt-4' variant='warning'>Learn More</Button>
				</Container>
			</div>
				<div className={service_styles.row_3}>
					<Container>
						<Row>
							<Col lg='6' sm='12' className={service_styles.sub_container}>
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
					<Button className='mt-4' variant='warning'>Learn More</Button>

							</Col>
							<Col lg='6' sm='12' className='mt-4'>
								<img style={{width:'-webkit-fill-available'}} src={row_3_img} alt="" />
							</Col>
						</Row>
					</Container>
			</div>
			<BlueBox/>
			<My_3_Cards/>
	</div>
  )
}

export default Crowns