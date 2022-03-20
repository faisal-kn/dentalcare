import React from 'react'
import Banner from '../../../components/Banner';
import {Container,Col,Row,Card} from 'react-bootstrap';
import home_styles from '../../../assets/css/Home.module.css'
import service_styles from '../../../assets/css/Services.module.css';
import row2_2 from '../../../assets/about.jpg';
import grad from '../../../assets/img/gradient.jpg';
import D_img from '../../../assets/img/3d_imaging.jpg';
import My_3_Cards from '../../../components/3_Cards';
import BlueBox from '../../../components/BlueBox';



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
			<My_3_Cards/>
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
			<BlueBox/>
	</div>
  )
}

export default Implants