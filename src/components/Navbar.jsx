import React from 'react';
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap';

const MyNavbar = () => {
  return (
	<Navbar bg="light" expand="lg">
	<Container fluid>
	  <Navbar.Brand href="#">Dentacare</Navbar.Brand>
	  <Navbar.Toggle aria-controls="navbarScroll" />
	  <Navbar.Collapse id="navbarScroll">
		<Nav
		  className="mr-auto my-lg-0"
		  style={{ maxHeight: '100px' }}
		  navbarScroll
		>
		  <Nav.Link href="#action1">About</Nav.Link>
		  <Nav.Link href="#action2">Services</Nav.Link>
		  <Nav.Link href="#">
			Warranty
		  </Nav.Link>
		  <Nav.Link href="#">New Patients</Nav.Link>
		</Nav>
		<Form className="d-flex">
		  <FormControl
			type="search"
			placeholder="Search"
			className="me-2"
			aria-label="Search"
		  />
		  <Button variant="outline-success">Search</Button>
		</Form>
	  </Navbar.Collapse>
	</Container>
  </Navbar>
// 		<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
//     <div class="container">
//       <a class="navbar-brand" href="index.html">Denta<span>Care</span></a>
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
//         aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="oi oi-menu"></span> Menu
//       </button>

//       <div class="collapse navbar-collapse" id="ftco-nav">
//         <ul class="navbar-nav ml-auto">
//           <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
//           <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
//           <li class="nav-item"><a href="services.html" class="nav-link">Services</a></li>
//           <li class="nav-item"><a href="doctors.html" class="nav-link">Doctors</a></li>
//           <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
//           <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
//           <li class="nav-item cta"><a href="contact.html" class="nav-link" data-toggle="modal"
//               data-target="#modalRequest"><span>Make an Appointment</span></a></li>
//         </ul>
//       </div>
//     </div>
//   </nav>
  )
}

export default MyNavbar