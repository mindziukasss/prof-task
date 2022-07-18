import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Navbar() {
	return (
		<NavbarBs className='bg-white shadow-sm mb-3'>
			<Container className='justify-content-center'>
				<NavbarBs.Brand href='/' className='me-auto'>Profit</NavbarBs.Brand>
				<Nav>
					<Nav.Link to='/' as={ NavLink }>
						Home
					</Nav.Link>
					<Nav.Link to='/about' as={ NavLink }>
						About
					</Nav.Link>
					<Nav.Link to='/contact' as={ NavLink }>
						Contact
					</Nav.Link>
				</Nav>
			</Container>
		</NavbarBs>
	)
}