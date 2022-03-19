import React from 'react'
import Banner from '../../../components/Banner';
import {Container,Col,Row,Card} from 'react-bootstrap';
import home_styles from '../../../assets/css/Home.module.css'
import service_styles from '../../../assets/css/Services.module.css';
import row2_2 from '../../../assets/about.jpg';
import grad from '../../../assets/img/gradient.jpg';
import {AiFillStar} from 'react-icons/ai';
import triangle_dot from '../../../assets/img/triangle.svg';
import triangle_dot_white from '../../../assets/img/triangle_white.svg';
import D_img from '../../../assets/img/3d_imaging.jpg';
import {RiPriceTag2Fill} from 'react-icons/ri';
import badge2 from '../../../assets/img/badge2.svg';



const Implants = () => {
  return (
	<div>
		<Banner/>
		<div className={service_styles.invisalign_row2}>
			<Container className={`w-50 ${service_styles.invisalign_row2}`}>
			<h1>Transform your confidence</h1>
			<p>Invisalign is an easy and efficient way for adults and teens alike to straighten their teeth. Rest assured, at Village Dental, you’re working with the experts. Our team has years of experience with Invisalign and we’re excited to offer this technology to patients.</p>
			<img src={row2_2} alt="" />
			</Container>
		</div>
		<div style={{backgroundImage: `url(${grad})`,padding:'5rem 5rem'}}>
				<Container className='text-center'>
								<h2>Lifetime Warranty <br />
If your implant breaks, we’ll fix it at no cost</h2>
								
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
			<div className={service_styles.invisalign_row2}>
				<Container>
					<h2>What You Get</h2>
					<Row>
						<Col lg='4' md='6' xs='12'>
							<Card>
								<Card.Img src={D_img}/>
								<Card.Body>
									<h3>3D Imaging</h3>
									<p>Advanced technology helps us visualize the end result.</p>
								</Card.Body>
							</Card>
						</Col>
						<Col lg='4' md='6' xs='12'>
							<Card>
								<Card.Img src={D_img}/>
								<Card.Body>
									<h3>3D Imaging</h3>
									<p>Advanced technology helps us visualize the end result.</p>
								</Card.Body>
							</Card>
						</Col>
						<Col lg='4' md='6' xs='12'>
							<Card>
								<Card.Img src={D_img}/>
								<Card.Body>
									<h3>3D Imaging</h3>
									<p>Advanced technology helps us visualize the end result.</p>
								</Card.Body>
							</Card>
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
	</div>
  )
}

export default Implants