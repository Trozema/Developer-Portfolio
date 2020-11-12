
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import {Navbar, Nav, NavDropdown,} from 'react-bootstrap';

const linkStyle = {
  marginRight: 15,
}

const Header = () => (
    <div>
      < style jsx> {`
p {
color: blue;
}
div {
background: lightgrey;
}
profile {
width: 20px
}



`} </ style >
<Navbar collapseOnSelect expand="lg" bg="Light" variant="light">
  <Navbar.Brand href="/">Portfolio site</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown.Item href="/">Home</NavDropdown.Item> 
      <NavDropdown.Item href="/about">About</NavDropdown.Item>
      <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
      <NavDropdown.Item href="/contact">Contact</NavDropdown.Item> 
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
)

export default Header