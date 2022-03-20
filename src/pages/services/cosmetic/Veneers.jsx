import React from 'react'
import Banner from '../../../components/Banner';
import {Container,Row,Col,Card, Button} from 'react-bootstrap';
import home_styles from '../../../assets/css/Home.module.css';
import service_styles from '../../../assets/css/Services.module.css';
import row_3_img from '../../../assets/img/ser_row2.jpg';
import tick from '../../../assets/img/tick-svgrepo-com.svg';
import My_3_Cards from '../../../components/3_Cards';
import BlueBox from '../../../components/BlueBox';

const Veneers = () => {
  return (
	<div>
		<Banner/>
		<div className={service_styles.row_2}>
				<Container className={service_styles.botox_row2}>
				<Row>
					<h1>Ask us about Botox treatment!</h1>
				</Row>
				<Row>
					<p>Improve the appearance of your teeth and smile with veneers. Usually made of porcelain or resin, veneers are thin, custom-made shells that fit around your teeth. This treatment completely transforms the shape, color, length, or size of your teeth.</p>
				</Row>
				<Row>
					<p>Our dentists take a comprehensive approach to veneers. We’ll address any underlying dental health treatments before addressing cosmetic imperfections. When planning your treatment, we’ll ensure your veneers not only improve your smile but complement the natural shape of your face. </p>
				</Row>
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

export default Veneers