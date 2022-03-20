import React,{useEffect} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import home_styles from '../assets/css/Home.module.css';
import {RiPriceTag2Fill} from 'react-icons/ri';
import badge2 from '../assets/img/badge2.svg';

const BlueBox = () => {
	useEffect(()=>{
		const observer2 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				entry.target.classList.add(`${home_styles.aniRightToLeft}`);
				return;
			  }
			  entry.target.classList.remove(`${home_styles.aniRightToLeft}`);
			});
		  });

		  const check1 = document.getElementById("bluebox_img");

		  observer2.observe(check1);
	},[])
  return (
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
							<Row className='d-flex justify-content-center'><img id='bluebox_img' src={badge2} alt="" /></Row>
						</Col>
					</Row>
				</Card>
			</Container>
  )
}

export default BlueBox