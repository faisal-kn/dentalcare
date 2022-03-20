import React from 'react'
import Banner from '../../../components/Banner';
import { Container, Row, Col, Card ,Button,Accordion,useAccordionButton} from 'react-bootstrap';
import home_styles from '../../../assets/css/Home.module.css';
import service_styles from '../../../assets/css/Services.module.css';
import row_3_img from '../../../assets/img/ser_row2.jpg';
import tick from '../../../assets/img/tick-svgrepo-com.svg';
import {AiFillPlusCircle} from 'react-icons/ai';
import servicetag from '../../../assets/img/service_tag.svg';
import grad from '../../../assets/img/gradient.jpg';
import badge from '../../../assets/img/badge.svg';
import My_3_Cards from '../../../components/3_Cards';

const Surgical = () => {
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
		<div className={service_styles.row_3}>
					<Container>
						<Row>
						<Col lg='6' sm='12' className='mt-4'>
								<img style={{width:'-webkit-fill-available'}} src={row_3_img} alt="" />
							</Col>
							<Col lg='6' sm='12' className={service_styles.sub_container} style={{paddingLeft:'2rem'}}>
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
					<Button variant='outline-warning' className={service_styles.card_buttons}>Learn More</Button>

							</Col>
						</Row>
					</Container>
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
						
							<Col lg='6' sm='12' className={service_styles.sub_container} style={{paddingLeft:'2rem'}}>
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
					<Button variant='outline-warning' className={service_styles.card_buttons}>Learn More</Button>

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
								<Button variant='outline-warning' className={home_styles.card_buttons}>Learn More</Button>
							</Col>
					</Row>
					</Container>
			</div>
			<div className={service_styles.row_3}>
					<Container>
						<Row>
						
							<Col lg='6' sm='12' className={service_styles.sub_container} style={{paddingLeft:'2rem'}}>
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
					<Button variant='outline-warning' className={service_styles.card_buttons}>Learn More</Button>

							</Col>
							<Col lg='6' sm='12' className='mt-4'>
								<img style={{width:'-webkit-fill-available'}} src={row_3_img} alt="" />
							</Col>
						</Row>
					</Container>
			</div>
	</div>
  )
}

export default Surgical