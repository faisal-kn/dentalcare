import styles from "./NewPatients.module.css";
import { Container, Row, Col,Card ,Button,Accordion,useAccordionButton} from "react-bootstrap";
import home_styles from '../assets/css/Home.module.css';
import service_styles from '../assets/css/Services.module.css';
import Banner from "../components/Banner";
import about from "../assets/about.jpg";
import badge from '../assets/img/badge.svg';
import grad from '../assets/img/gradient.jpg';
import servicetag from '../assets/img/service_tag.svg';
import My_3_Cards from '../components/3_Cards';
import Parallax from '../components/Parallax';
import VisitUs from "../components/VisitUs";
import {AiFillPlusCircle} from 'react-icons/ai';


const NewPatients = () => {
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
    <>
          <div
        className={styles.landingContainer}
        style={{
          height: "100 vh",
        }}
      >
        <img
          effect="blur"
          src={about}
          style={{
            height: "95vh",
            minWidth: "100vw",
            objectFit: "cover",
            opacity: "0.7",
          }}
          alt=""
        />
        <div className={styles.landingTitle}>
          ABOUT VILLAGE DENTAL
          <h2>Building lifetime relationships through positive experiences</h2>
          <p>OR CALL (303) 220-7662</p>
        </div>
      </div>
      <Container className="my-5 pt-5">
        <Row>
          <Col lg={6}>
            <h1 className="pb-3">We’ve reimagined every detail of your 60-min visit</h1>
            <div className="">
              <img
                src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/front-desk-village-dental-1024x576.jpg"
                alt=""
                className={styles.imgContainer}
              ></img>
            </div>
          </Col>
          <Col>
            <Container className="px-3">
              <ul className="list-unstyled">
                <li className="d-flex pl-l pt-4">
                  <div className="pt-2">
                    <img
                      src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                      alt=""
                      className={styles.imgIcon}
                    />
                  </div>
                  <div>
                    <h4>Simple Scheduling</h4>
                    <p>
                      Easily book online. We offer early morning and same-day
                      appointments.
                    </p>
                  </div>
                </li>
                <li className="d-flex pl-l pt-4">
                  <div className="pt-2">
                    <img
                      src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                      alt=""
                      className={styles.imgIcon}
                    />
                  </div>
                  <div>
                    <h4>Medical Sterilization</h4>
                    <p>
                      Come on in! Our office exceeds CDC and OSHA sterilization
                      requirements to keep you safe.
                    </p>
                  </div>
                </li>
                <li className="d-flex pl-l pt-4">
                  <div className="pt-2">
                    <img
                      src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                      alt=""
                      className={styles.imgIcon}
                    />
                  </div>
                  <div>
                    <h4>Automated Check-in</h4>
                    <p>
                      Complete your paperwork on an iPad. Our average wait time
                      is 5 minutes — but our lobby is so relaxing, you may wish
                      it was longer.
                    </p>
                  </div>
                </li>
                <li className="d-flex pl-l pt-4">
                  <div className="pt-2">
                    <img
                      src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/dark-blue-triangle-dots-village-dental.svg"
                      alt=""
                      className={styles.imgIcon}
                    />
                  </div>
                  <div>
                    <h4>Comfortable Care</h4>
                    <p>
                      Your new patient visit includes a dental cleaning, exam,
                      and 3D x-rays. We’ll recommend follow-up treatments as
                      needed.
                    </p>
                  </div>
                </li>
              </ul>
            </Container>
          </Col>
        </Row>
      </Container>
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
			<My_3_Cards/>
      <Parallax/>
      <VisitUs/>
      <div className={service_styles.cosmetic_row3}>
				<Container>
					<Row>
						<Col sm='12' md='12' lg='6' className='mb-4 mt-5 mr-2'> 
							<Row>
								<h1 className="mb-4">Frequently Asked Questions</h1>
								<p className="mt-4">Come on in! Use an iPad to check in and fill out your patient forms. We’ll escort you back to a patient room soon — our average wait time is around 5 minutes.</p>
							</Row>
						</Col>
						<Col sm='12' md='12' lg='6' className='mt-4 ml-2'>
						<Container fluid className='text-center'>
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

    </>
  );
};

export default NewPatients;
