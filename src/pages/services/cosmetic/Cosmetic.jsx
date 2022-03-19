import React from 'react'
import Banner from '../../../components/Banner';
import service_styles from '../../../assets/css/Services.module.css';
import {Container,Row,Col,Card, Button,Accordion,useAccordionButton} from 'react-bootstrap';
import tick from '../../../assets/img/tick-svgrepo-com.svg';
import row_3_img from '../../../assets/img/ser_row2.jpg';
import home_styles from '../../../assets/css/Home.module.css';
import row_2 from '../../../assets/img/row_2_img.jpg';
import {AiFillPlusCircle,AiFillStar} from 'react-icons/ai';
import servicetag from '../../../assets/img/service_tag.svg';
import triangle_dot from '../../../assets/img/triangle.svg';
import triangle_dot_white from '../../../assets/img/triangle_white.svg';

const Cosmetic = () => {
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
			<div className={service_styles.cosmetic_row2}>
				<div className={service_styles.cosmetic_cards}>
					<Row>
						<Col md='6' sm='12'>
							<Row>
								<div className={home_styles.banner_heading} style={{ fontSize: '3rem' }}>Dentistry Done Right
								</div>
							</Row>
							<Row>
								<p>Adults and kids, we welcome patients of all ages! Our team is passionate about building lifetime relationships through positive experiences, featuring:</p>
							</Row>
							<Row>
								<ul style={{listStyleImage:`url(${tick})`}}>
									<li>Transparent Pricing</li>
									<li>Unparalleled Warranty</li>
									<li>FREE Whitening (for life!)</li>
								</ul>
							</Row>
							<Row className={home_styles.downsentence}>
								“Our word is our worth. We promise to do it right, timely, and for a fair price.”
							</Row>
						</Col>
						<Col md='6' sm='12'>
							<img className={home_styles.row_image} src={row_2} alt="" />
						</Col>
					</Row>
				</div>
			</div>
			<div className={service_styles.cosmetic_row3}>
				<Container>
					<Row>
						<Col sm='12' md='12' lg='6' className='mb-4'> 
							<Row>
								<h1>Welcome to your cosmetic dental visit</h1>
								<p>Come on in! Use an iPad to check in and fill out your patient forms. We’ll escort you back to a patient room soon — our average wait time is around 5 minutes.</p>
							<img className={home_styles.row_image} src={row_2} alt="" />
							</Row>
						</Col>
						<Col sm='12' md='12' lg='6' className='mt-4'>
						<Container fluid className='text-center'>
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
					</Accordion>
				</Container>
						</Col>
					</Row>
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
	</div>
  )
}

export default Cosmetic