import React from 'react'
import Banner from '../../../components/Banner'
import home_styles from '../../../assets/css/Home.module.css'
import service_styles from '../../../assets/css/Services.module.css';
import row_2 from '../../../assets/img/invisalign_row2.png';
import row2_2 from '../../../assets/about.jpg';
import { Container ,Col,Row, Card,Button} from 'react-bootstrap';
import D_img from '../../../assets/img/3d_imaging.jpg';
import My_3_Cards from '../../../components/3_Cards';
import BlueBox from '../../../components/BlueBox';


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
			<BlueBox/>
			<div className={home_styles.row_2}>
				<Container className='d-flex flex-column justify-content-center align-items-center pt-4 pb-4' style={{ minHeight:'20rem',color:'white'}}>
					<h1>Lifetime Warranty!</h1>
					<p className='text-center'>When problems arise, don’t wait. We offer same-day appointments to get you out of pain as soon as <br /> possible. Call (303) 220-7662.</p>
					<Button className='mt-4' variant='warning'>Learn More</Button>
				</Container>
			</div>
			<My_3_Cards/>
	</div>
  )
}

export default Invisalign