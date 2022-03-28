import { Navbar, Container, Nav } from 'react-bootstrap'

function NavbarComponent(props) {
  // let signin;
  // if(props.userData != null){ signin = <Navbar.Text>Signed in as: {props.userData}</Navbar.Text>}
  // else {signin = <Navbar.Text><Nav.Link href="/LoginPage">Login</Nav.Link></Navbar.Text>}

  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">MCGH-Reporting</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/ViciLeadsPage">LeadsCount</Nav.Link>
      </Nav>
      {/* {signin} */}
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarComponent;
