import React from 'react';
import {Accordion,Container, Row, Col, Card ,Button,useAccordionButton} from 'react-bootstrap';
import home_styles from '../../../assets/css/Home.module.css';
import service_styles from '../../../assets/css/Services.module.css';
import row_2_img from '../../../assets/img/cardimg.jpg';
import row_3_img from '../../../assets/img/ser_row2.jpg';
import {AiFillPlusCircle,AiFillStar} from 'react-icons/ai';
import servicetag from '../../../assets/img/service_tag.svg';
import triangle_dot from '../../../assets/img/triangle.svg';
import triangle_dot_white from '../../../assets/img/triangle_white.svg';
import badge from '../../../assets/img/badge.svg';
import grad from '../../../assets/img/gradient.jpg';
import Banner from '../../../components/Banner';

const Services = () => {
	function CustomToggle({ children, eventKey }) {
		const decoratedOnClick = useAccordionButton(eventKey, () =>
		  console.log('totally custom!'),
		);
	  
		return (
		  <button
			type="button"
			style={{ border:'0px',backgroundColor:'white' }}
			onClick={decoratedOnClick}
		  >
			{children}
		  </button>
		);
	  }
	return (
		<div>
			<Banner/>
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
								<h1>Easy Automated Check- <br /> ins</h1>
								<p className='mt-4 mb-4'>Use our in-office iPads to check in and complete your patient forms. Our average wait time is around 5 minutes — although, with all of the amenities in our waiting room, you may wish to stay longer.</p>
								<Button variant='outline-warning' className={home_styles.card_buttons}>Learn More</Button>
							</Col>
							<Col lg='6' sm='12' className='mt-4'>
								<img style={{width:'-webkit-fill-available'}} src={row_3_img} alt="" />
							</Col>
						</Row>
					</Container>
			</div>
			<div className={service_styles.row_4}>
				<Container className='text-center w-75'>
					<Row> <h1>Advanced Treatment Options</h1></Row>
					<Row> <p style={{fontWeight:'25px'}}>Come for your routine cleaning & exam. Stay for the comprehensive general dental treatments:</p></Row>
					<Accordion defaultActiveKey='0' className={service_styles.my_accord}>
						<Card className={service_styles.accord_cards}>
							<Card.Header style={{display:'flex',justifyContent:'space-between'}}>
								<p style={{margin:'0.5rem',fontWeight:'450'}}>White cavity fillings</p>
								<CustomToggle eventKey="0"><AiFillPlusCircle size={20} className={service_styles.accordionplus}/></CustomToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0">
								<Card.Body style={{backgroundColor:'rgba(157,190,187,0.5)'}}>With early detection technology, advanced imaging, and safe filling materials, addressing tooth decay is easier than ever.</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className={service_styles.accord_cards}>
							<Card.Header style={{display:'flex',justifyContent:'space-between'}}>
								<p style={{margin:'0.5rem',fontWeight:'450'}}>White cavity fillings</p>
								<CustomToggle eventKey="1"><AiFillPlusCircle size={20} className={service_styles.accordionplus}/></CustomToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="1">
								<Card.Body style={{backgroundColor:'rgba(157,190,187,0.5)'}}>With early detection technology, advanced imaging, and safe filling materials, addressing tooth decay is easier than ever.</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className={service_styles.accord_cards}>
							<Card.Header style={{display:'flex',justifyContent:'space-between'}}>
								<p style={{margin:'0.5rem',fontWeight:'450'}}>White cavity fillings</p>
								<CustomToggle eventKey="2"><AiFillPlusCircle size={20} className={service_styles.accordionplus}/></CustomToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="2">
								<Card.Body style={{backgroundColor:'rgba(157,190,187,0.5)'}}>With early detection technology, advanced imaging, and safe filling materials, addressing tooth decay is easier than ever.</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className={service_styles.accord_cards}>
							<Card.Header style={{display:'flex',justifyContent:'space-between'}}>
								<p style={{margin:'0.5rem',fontWeight:'450'}}>White cavity fillings</p>
								<CustomToggle eventKey="3"><AiFillPlusCircle size={20} className={service_styles.accordionplus}/></CustomToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="3">
								<Card.Body style={{backgroundColor:'rgba(157,190,187,0.5)'}}>With early detection technology, advanced imaging, and safe filling materials, addressing tooth decay is easier than ever.</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className={service_styles.accord_cards}>
							<Card.Header style={{display:'flex',justifyContent:'space-between'}}>
								<p style={{margin:'0.5rem',fontWeight:'450'}}>White cavity fillings</p>
								<CustomToggle eventKey="4"><AiFillPlusCircle size={20} className={service_styles.accordionplus}/></CustomToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="4">
								<Card.Body style={{backgroundColor:'rgba(157,190,187,0.5)'}}>With early detection technology, advanced imaging, and safe filling materials, addressing tooth decay is easier than ever.</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className={service_styles.accord_cards}>
							<Card.Header style={{display:'flex',justifyContent:'space-between'}}>
								<p style={{margin:'0.5rem',fontWeight:'450'}}>White cavity fillings</p>
								<CustomToggle eventKey="5"><AiFillPlusCircle size={20} className={service_styles.accordionplus}/></CustomToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="5">
								<Card.Body style={{backgroundColor:'rgba(157,190,187,0.5)'}}>With early detection technology, advanced imaging, and safe filling materials, addressing tooth decay is easier than ever.</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</Container>
			</div>
			<div className={service_styles.row_5}>
				<Container>
					<h1 style={{fontWeight:'500',fontSize:'2.5rem',wordSpacing:'4px',margin:'2rem 0'}} className='text-center'>It’s all in the details</h1>
					<Row style={{marginTop:'1rem'}}>
						<Col lg='3' md='6' sm='12'>
							<div className={service_styles.details_card}>
								<div ><img src={servicetag} alt="" /></div>
								<div >
									<h4>Quality</h4>
									<p>We use only the best quality materials and equipment to provide you with the best possible service.</p>
									</div>
							</div>
						</Col>
						<Col lg='3' md='6' sm='12'>
							<div className={service_styles.details_card}>
								<div ><img src={servicetag} alt="" /></div>
								<div >
									<h4>Quality</h4>
									<p>We use only the best quality materials and equipment to provide you with the best possible service.</p>
									</div>
							</div>
						</Col>
						<Col lg='3' md='6' sm='12'>
							<div className={service_styles.details_card}>
							<div ><img src={servicetag} alt="" /></div>
								
								<div >
									<h4>Quality</h4>
									<p>We use only the best quality materials and equipment to provide you with the best possible service.</p>
									</div>
							</div>
						</Col>
						<Col lg='3' md='6' sm='12'>
							<div className={service_styles.details_card}>
							<div ><img src={servicetag} alt="" /></div>
								
								<div >
									<h4>Quality</h4>
									<p>We use only the best quality materials and equipment to provide you with the best possible service.</p>
									</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className={home_styles.row_3}>
				<Row>
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
			<div className={home_styles.row_5}>
					<Container fluid style={{ padding: "30px 0 30px 0" }}>
				<div className={`${home_styles.parallax} ${home_styles.p2}`}>
				<div className={home_styles.card}>
					<h1 style={{ fontSize: "50px", paddingBottom: "20px" }}>
					How It Works
					</h1>
					<ul style={{ fontSize: "18px" }}>
					<li>Our warranty applies to all restorative dental treatments</li>
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
			<div style={{backgroundImage: `url(${grad})`,padding:'5rem 5rem'}}>
				<Container>
					<Row>
						<Col lg='6' sm='12' >
							<img style={{width:'inherit',objectFit:'cover'}} src={badge} alt="" />
							</Col>
							<Col lg='6' sm='12'>
								<h1>Unparalleled Warranty</h1>
								<p>We believe in the quality of our work and want to pass that confidence to you. Keep up on your routine 6-month checkups and if something breaks, we’ll fix it at no cost to you. Because it’s the right thing to do.</p>
								<Button variant='outline-warning' className={home_styles.card_buttons}>Learn More</Button>
							</Col>
					</Row>
					</Container>
			</div>
			<div className={service_styles.row_4}>
				<Container>
					<Row>
						<Col lg='6' sm='12' >
							<h4>INSURANCE</h4>
							<h1>We’ve got you covered</h1>
							<p>
							Our office is in-network with Delta Premier and bills all other providers. We’ll explain how your specific dental benefits apply to the cost of general dental care.
							</p>
							<p>No insurance? Cash, check, and credit card payments are always accepted.</p>
							</Col>
							<Col lg='6' sm='12' >
								<Row className='justify-content-center'>
								<img style={{width:'inherit',height:'350px'}} src={badge} alt="" />
								</Row>
								<Row className='text-center'>
								<p>“Pop Teeth to Top Teeth”</p>
								</Row>
								</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default Services;