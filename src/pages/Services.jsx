import React from 'react';
import { Container, Row, Col, Card ,Button} from 'react-bootstrap';
import home_styles from '../assets/css/Home.module.css';
import service_styles from '../assets/css/Services.module.css';
import banner_img from '../assets/img/bg_1.jpg';
import row_2_img from '../assets/img/cardimg.jpg';

const Services = () => {
	return (
		<div>
			<img className={home_styles.banner_video} src={banner_img} alt="" />
			<Container fluid className={home_styles.banner_text}>
				<div className={home_styles.banner_inner_text}>GENERAL DENTAL CARE IN DENVER TECH CENTER, CO
				</div>
				<div className={home_styles.banner_heading}>
					Everything you expect and <br /> then some</div>
			</Container>
			<div className={service_styles.row_2}>
				<div className={service_styles.row_2_cards}>
					<Row>
						<Col md='6' sm='12' className='mr-3'>
							<img className={home_styles.row_image} src={row_2_img} alt="" />
						</Col>
						<Col md='6' sm='12' className='ml-3'>
							<Row>
								<div className={service_styles.banner_heading} style={{ fontSize: '3rem' }}>Love your general dental care
								</div>
							</Row>
							<Row className={service_styles.row_2_text}>
								<p>We’re thrilled to be your new home for exceptional dentistry. Visit us for a cleaning, general dental exam, and a bit of pampering. Plus, everything else you need to look and feel your best.</p>
							</Row>
						</Col>
					</Row>
				</div>
			</div>
			<div className={home_styles.row_2}>
				<Container className='d-flex flex-column justify-content-center align-items-center pt-4 pb-4' style={{ minHeight:'20rem',color:'white'}}>
					<h2>Need to see a general dentist ASAP?</h2>
					<p className='text-center'>When problems arise, don’t wait. We offer same-day appointments to get you out of pain as soon as <br /> possible. Call (303) 220-7662.</p>
				</Container>
			</div>
			<div className={service_styles.row_3}>
					<Container>
						<Row>
							<Col lg='6' sm='12'>
								<h2>Easy Automated Check-ins</h2>
								<p>Use our in-office iPads to check in and complete your patient forms. Our average wait time is around 5 minutes — although, with all of the amenities in our waiting room, you may wish to stay longer.</p>
								<Button variant='outline-warning' className={home_styles.card_buttons}>Learn More</Button>
							</Col>
							<Col lg='6' sm='12'>
							</Col>
						</Row>
					</Container>
			</div>
		</div>
	)
}

export default Services;