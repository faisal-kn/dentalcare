import React from 'react'
import Banner from '../../../components/Banner'
import home_styles from '../../../assets/css/Home.module.css'
import service_styles from '../../../assets/css/Services.module.css';
import row_2 from '../../../assets/img/invisalign_row2.png';
import row2_2 from '../../../assets/about.jpg';
import { Container ,Col,Row, Card,Button} from 'react-bootstrap';
import D_img from '../../../assets/img/3d_imaging.jpg';
import {RiPriceTag2Fill,RiDoubleQuotesR} from 'react-icons/ri';
import badge2 from '../../../assets/img/badge2.svg';
import {AiFillStar} from 'react-icons/ai';
import triangle_dot from '../../../assets/img/triangle.svg';
import triangle_dot_white from '../../../assets/img/triangle_white.svg';


const Invisalign = () => {
  return (
	<div>
		<Banner/>
		<div className={service_styles.invisalign_row2}>
			<Container className={`w-50 ${service_styles.invisalign_row2}`}>
			<img src={row_2} alt="" style={{width:'200px',height:'200px'}}/>
			<h1>The world’s most advanced teeth straightening system</h1>
			<p>Invisalign is an easy and efficient way for adults and teens alike to straighten their teeth. Rest assured, at Village Dental, you’re working with the experts. Our team has years of experience with Invisalign and we’re excited to offer this technology to patients.</p>
			<img src={row2_2} alt="" />
			</Container>
		</div>
		<div  className={service_styles.botox_row3}>
				<Container style={{}}>
					<Row>
						<Col lg='6' sm='12'>
						<h3>Virtually Invisible</h3>
						<p>
						Invisalign uses clear acrylic aligners that are discreet and comfortable.
						</p>
						</Col>
						<Col lg='6' sm='12'>
						<h3>Removable During Treatment</h3>
						<p>
						Wear your retainers for 23 hours a day, pop them out while eating and brushing.
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
			<div className={service_styles.invisalign_row2}>
				<Container>
					<h2>What You Get</h2>
					<Row>
						<Col lg='3' md='6' xs='12'>
							<Card>
								<Card.Img src={D_img}/>
								<Card.Body>
									<h3>3D Imaging</h3>
									<p>Advanced technology helps us visualize the end result.</p>
								</Card.Body>
							</Card>
						</Col>
						<Col lg='3' md='6' xs='12'>
							<Card>
								<Card.Img src={D_img}/>
								<Card.Body>
									<h3>3D Imaging</h3>
									<p>Advanced technology helps us visualize the end result.</p>
								</Card.Body>
							</Card>
						</Col>
						<Col lg='3' md='6' xs='12'>
							<Card>
								<Card.Img src={D_img}/>
								<Card.Body>
									<h3>3D Imaging</h3>
									<p>Advanced technology helps us visualize the end result.</p>
								</Card.Body>
							</Card>
						</Col>
						<Col lg='3' md='6' xs='12'>
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
			<div className={home_styles.row_2}>
				<Container className='d-flex flex-column justify-content-center align-items-center pt-4 pb-4' style={{ minHeight:'20rem',color:'white'}}>
					<h1>Lifetime Warranty!</h1>
					<p className='text-center'>When problems arise, don’t wait. We offer same-day appointments to get you out of pain as soon as <br /> possible. Call (303) 220-7662.</p>
					<Button className='mt-4' variant='warning'>Learn More</Button>
				</Container>
			</div>
			<div className={home_styles.row_3}>
				<Row className='mt-2'>
					<Col>
						<p>
							<p className={home_styles.comma_img}><RiDoubleQuotesR/></p>
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

export default Invisalign