import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand as={NavLink} to="/">Pro-Activities</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link ClassName={(navData) => navData.isActive? 'Active' : '' } as={NavLink} to="/client/list">Clients</Nav.Link>
                    <Nav.Link ClassName={(navData) => navData.isActive? 'Active' : '' } as={NavLink} to="/activity/list">Activities</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown align="end" title="Milani" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Configuration</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Exit</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
