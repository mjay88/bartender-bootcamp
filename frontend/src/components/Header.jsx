import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/images/Logo.png";

const Header = () => {
	return (
		<header>
			<Navbar
				className="flex-column"
				bg="dark"
				variant="dark"
				expand="lg"
				collapseOnSelect
			>
				<Container>
					<Navbar.Brand href="/">
						<img src={logo}></img>
						Bartender Bootcamp
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/cart">
								<FaShoppingCart /> Cart
							</Nav.Link>
							<Nav.Link href="/login">
								<FaUser /> Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;