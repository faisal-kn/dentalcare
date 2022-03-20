import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import home_styles from '../../../assets/css/Home.module.css';
import service_styles from '../../../assets/css/Services.module.css';
import banner_img from '../../../assets/img/bg_1.jpg';
import tick from '../../../assets/img/tick-svgrepo-com.svg';
import row_3_img from '../../../assets/img/ser_row2.jpg';
import row_2 from '../../../assets/img/row_2_img.jpg';
import My_3_Cards from '../../../components/3_Cards';
import BlueBox from '../../../components/BlueBox';

const Emergency = () => {
  return (
	<div>
		<img className={home_styles.banner_video} src={banner_img} alt="" />
			<Container fluid className={home_styles.banner_text}>
				<div className={home_styles.banner_inner_text}>GENERAL DENTAL CARE IN DENVER TECH CENTER, CO
				</div>
				<div className={home_styles.banner_heading}>
					Everything you expect and <br /> then some</div>
			</Container>
			<div className={service_styles.row_3}>
					<Container>
						<Row>
							<Col lg='6' sm='12' className={service_styles.sub_container}>
								<h1>Feel better fast in a dental emergency</h1>
								<p>Looking for an emergency dentist? Village Dental offers same-day emergency dental care for current and new patients alike in our Denver Tech Center office.</p>
								We’re here to help with:
								<ul style={{ fontSize: "18px" ,listStyleImage:`url(${tick})`}}>
									<li>Our warranty applies to all restorative dental treatments</li>
									<li>
										Visit Village Dental every 6 months for routine cleanings &
										exams
									</li>
									<li>If something breaks, contact us. We’ll fix it.</li>
									<li>Knocked-out teeth</li>
									<li>Anything that doesn’t feel right in your mouth!</li>
								</ul>
							</Col>
							<Col lg='6' sm='12' className='mt-4'>
								<img style={{width:'-webkit-fill-available'}} src={row_3_img} alt="" />
							</Col>
						</Row>
					</Container>
			</div>
			<div className={service_styles.row_3}>
					<Container>
						<Row>
						<Col lg='6' sm='12' className='mt-4'>
								<img style={{width:'-webkit-fill-available'}} src={row_2} alt="" />
							</Col>
							<Col lg='6' sm='12' className={service_styles.sub_container}>
								<h1>Feel better fast in a dental emergency</h1>
								<p>Looking for an emergency dentist? Village Dental offers same-day emergency dental care for current and new patients alike in our Denver Tech Center office.</p>
								We’re here to help with:
								<ul style={{ fontSize: "18px" ,listStyleImage:`url(${tick})`}}>
									<li>Our warranty applies to all restorative dental treatments</li>
									<li>
										Visit Village Dental every 6 months for routine cleanings &
										exams
									</li>
									<li>If something breaks, contact us. We’ll fix it.</li>
									<li>Knocked-out teeth</li>
									<li>Anything that doesn’t feel right in your mouth!</li>
								</ul>
							</Col>
							
						</Row>
					</Container>
			</div>
			<BlueBox/>
			<div className={service_styles.row_3}>
					<Container>
						<Row>
							<Col lg='6' sm='12' className={service_styles.sub_container}>
								<h1>Keeping you safe during COVID-19</h1>
								<p>Our team prioritizes patient safety above all else.
									We’ve expanded safety measures to ensure you can continue to receive your much-needed routine dental care during COVID-19.</p>								
								<p>Please contact us at (303) 220-7662 with questions.</p>
							</Col>
							<Col lg='6' sm='12' className='mt-4'>
								<img style={{width:'-webkit-fill-available'}} src={row_3_img} alt="" />
							</Col>
						</Row>
					</Container>
			</div>
			<My_3_Cards/>
	</div>
  )
}

export default Emergency