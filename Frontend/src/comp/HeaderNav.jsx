import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavItem from 'react-bootstrap/esm/NavItem';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from "../favi.png";
import { Link } from 'react-router-dom'


function NavScrollExample() {
  return (
    <div>
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        
        <Navbar.Brand href="#"><img src={image} width="30" alt='logo'
              height="30"
              className="d-inline-block align-top"/>{' '}shopBrisky</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/Register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/Table'>Table</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/update">
              Update
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


{/* <Navbar bg="primary" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
</Navbar> */}
</div>
  );
}

export default NavScrollExample;