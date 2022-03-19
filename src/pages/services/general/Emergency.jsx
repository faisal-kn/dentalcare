import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import home_styles from '../../../assets/css/Home.module.css';
import service_styles from '../../../assets/css/Services.module.css';
import banner_img from '../../../assets/img/bg_1.jpg';
import tick from '../../../assets/img/tick-svgrepo-com.svg';
import row_3_img from '../../../assets/img/ser_row2.jpg';
import row_2 from '../../../assets/img/row_2_img.jpg';
import {RiPriceTag2Fill} from 'react-icons/ri';
import badge2 from '../../../assets/img/badge2.svg';
import {AiFillStar} from 'react-icons/ai';
import triangle_dot from '../../../assets/img/triangle.svg';
import triangle_dot_white from '../../../assets/img/triangle_white.svg';

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
			<Container fluid='md' className={home_styles.row_6+' mb-4 pb-4'	}>
				<Card className={home_styles.row6_card}>
					<Row style={{margin:'0px'}}>
						<Col lg='6' md='6' sm='12' className={home_styles.row6_col1}>
							<Row className='d-flex justify-content-start'><RiPriceTag2Fill size={40} style={{width:'7rem'}}/></Row>
							<Row style={{padding:'10px 0px'}}><p> PAYMENT INFO</p></Row>
							<Row style={{padding:'10px 0px'}}><h1>How much does Botox cost?</h1></Row>
							<Row style={{padding:'10px 0px'}}>
								<ul>
									<li>Botox injections are priced per unit and range from $10-15 per unit</li>
									<li>You may need anywhere from 10-100 units per session, depending on your goals</li>
									<li>Botox injections are priced per unit and range from $10-15 per unit</li>
								</ul>
								<p>We’ll never leave you in the dark. After your consultation, we’ll outline exactly what to budget for your Botox treatments.</p>
								</Row>
						</Col>
						<Col lg='6' md='6' sm='12' className={home_styles.row6_col2}>
							<Row><h2>Insurance</h2></Row>
							<Row><p>Our office is in-network with Delta Premier and bills all other providers. Our team will explain how your specific dental benefits apply to the cost of treatment.</p></Row>
							<Row className='d-flex justify-content-center'><img src={badge2} alt="" /></Row>
						</Col>
					</Row>
				</Card>
			</Container>
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
			<div className={home_styles.row_3}>
				<Row className='mt-2'>
					<Col>
						<p>
							<p className={home_styles.comma_img}>"</p>
						</p>
						<p className={home_styles.banner_heading}>
						Kind words from our patients
						</p>
						<p className={home_styles.star_row}>
							<AiFillStar/>
							<AiFillStar/>
							<AiFillStar/>
							<AiFillStar/>
							<AiFillStar/>
						</p>
						<p className={home_styles.underline_text}>850+ 5-star reviews!</p>
					</Col>
					<Col lg='4' md='12'>
					<Card className={home_styles.my_card}>
					Unlike other Greenwood Village dentists, Village Dental takes you where you’re at rather than chastising or shaming. I can’t recommend them highly enough. You will be well cared for!
					<p className={home_styles.card_author}>— Sherryll K.</p>
					<p className={home_styles.card_triangle_dot}><img style={{transform:'rotate(270deg)'}} src={triangle_dot} alt="" /></p>
					</Card>
					</Col>
					<Col lg='4' md='12'>
					<Card className={home_styles.my_card} style={{backgroundColor:'#9DBEBB'}}>
					Unlike other Greenwood Village dentists, Village Dental takes you where you’re at rather than chastising or shaming. I can’t recommend them highly enough. You will be well cared for!
					<p className={home_styles.card_author}>— Sherryll K.</p>
					<p className={home_styles.card_triangle_dot}><img style={{transform:'rotate(270deg)'}} src={triangle_dot} alt="" /></p>
					</Card>
					</Col>
				</Row>
				<Row className='d-flex justify-content-end' >	
				<Card className={home_styles.my_card+' '+home_styles.my_card_3} style={{backgroundColor:'#052639',color:'white'}}>
					Unlike other Greenwood Village dentists, Village Dental takes you where you’re at rather than chastising or shaming. I can’t recommend them highly enough. You will be well cared for!
					<p className={home_styles.card_author}>— Sherryll K.</p>
					<p className={home_styles.card_triangle_dot}><img style={{transform:'rotate(270deg)',color:'white'}} src={triangle_dot_white} alt="" /></p>
					</Card>
				</Row>
			</div>
	</div>
  )
}

export default Emergency