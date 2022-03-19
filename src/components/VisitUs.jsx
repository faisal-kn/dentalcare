import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {HiLocationMarker} from 'react-icons/hi';
import {BiTimeFive} from 'react-icons/bi';
import styles from './component.module.css';

const VisitUs = () => {
  return (
	<div>
		<Container>
		<Row>
          <Col sm='12' md='6'>
		  <Container style={{position:'relative'}}>
			  <Row>
				  <Col style={{position:'absolute',top:'0px',left:'0%' }}>
				  <img className={styles.row_image} src='https://www.villagedentaldtc.com/wp-content/uploads/2021/09/waiting-room-chairs-village-dental-1.jpg' alt="" />
				  </Col>
				  <Col style={{position:'absolute',top:'0px',left:'50.88%' }}>
				  <img className={styles.row_image} src="https://www.villagedentaldtc.com/wp-content/uploads/2021/08/blue-waiting-room-chairs-village-dental-test.jpg" alt="" />
				  </Col>
				  <Col style={{position:'absolute',top:'137.6px',left:'0%' }}>
				  <img className={styles.row_image} src="https://www.villagedentaldtc.com/wp-content/uploads/2021/08/exam-room-village-dental.jpg" alt="" />
				  </Col>
				  <Col style={{position:'absolute',top:'137.6px',left:'50.88%' }}>
				  <img className={styles.row_image} src="https://www.villagedentaldtc.com/wp-content/uploads/2021/08/neon-sign-village-dental-test.jpg" alt="" />
				  </Col>
			  </Row>
		  </Container>
		  </Col>
          <Col sm='12' md='6'>
            <h2>Visit Us</h2>
            <p>
              We’re conveniently located in the Denver Tech Center area. Find us
              on the 4th floor of the Triad Office Park building. Plenty of free
              parking available.
            </p>
            <HiLocationMarker size="2em" />
            5670 Greenwood Plaza Blvd., Suite 404 Greenwood Village, CO 80111
            <br />
            <BiTimeFive size="2em" />
            Monday–Thursday: 7AM–3PM
          </Col>
        </Row>
        <Row className={styles.mapContainer}>
          <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7756.576108193791!2d80.04318612605061!3d13.579204961837346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d76fcef996f57%3A0x645caee60af97355!2sPudi%2C%20Andhra%20Pradesh%20524401!5e0!3m2!1sen!2sin!4v1646929611895!5m2!1sen!2sin"></iframe>
        </Row>
		</Container>
	</div>
  )
}

export default VisitUs;