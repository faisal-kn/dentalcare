import React,{useEffect} from 'react';
import home_styles from '../assets/css/Home.module.css';
import {  Row, Col, Card} from 'react-bootstrap';
import {AiFillStar} from 'react-icons/ai';
import triangle_dot from '../assets/img/triangle.svg';
import triangle_dot_white from '../assets/img/triangle_white.svg';
import {RiDoubleQuotesR} from 'react-icons/ri';


const My_3_Cards = () => {
	useEffect(()=>{
		const observer3 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				entry.target.classList.add(`${home_styles.aniBottomToTop}`);
				return;
			  }
			  entry.target.classList.remove(`${home_styles.aniBottomToTop}`);
			});
		  });
		  const check1 = document.getElementById("3_cards_text1");

		  observer3.observe(check1);
	},[])
  return (
	<div className={home_styles.row_3} id='3_cards_text1'>
	<Row className='mt-4 pt-4' >
		<Col>
			<p>
				<p className={home_styles.comma_img}> <RiDoubleQuotesR /> </p>
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
  )
}

export default My_3_Cards