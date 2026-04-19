import {NavDropdown,Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Menu() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand >NUMERICAL METHOD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menu-auto">
                        {/*ROOT OF EQUATION*/}
            <NavDropdown title="Root of Equation" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/graphical'>Graphical Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/bisection'>Bisection Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/falseposition'>False Position Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/onepoint'>One Point Iteration Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/secant'>Secant Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/newtonraphson'>Newton Raphson Method</NavDropdown.Item>
            </NavDropdown>
                        
                        {/*Linear Algebra*/}
            <NavDropdown title="Linear Algebra" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/cramer'>Cramer's Rule</NavDropdown.Item>
              <NavDropdown.Item >Guass Elimination</NavDropdown.Item>
              <NavDropdown.Item >Guass Jordan</NavDropdown.Item>
              <NavDropdown.Item >Matrix Inversion</NavDropdown.Item>
              <NavDropdown.Item >LU Decomposite</NavDropdown.Item>
              <NavDropdown.Item >Jacobi Interpolation</NavDropdown.Item>
              <NavDropdown.Item >Conjugate Gradient</NavDropdown.Item>
              
            </NavDropdown>

                        {/*interpolation*/}
            <NavDropdown title="Interpolation" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/newtondivided'>Newton's Divided Difference</NavDropdown.Item>
              <NavDropdown.Item > Lagrange Interpolation</NavDropdown.Item>
              <NavDropdown.Item > 
                Spline Interpolation
                </NavDropdown.Item>
                
              
              
            </NavDropdown>

                        {/*Extrapolation*/}
            <NavDropdown title="Regression" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/regress'>Regression</NavDropdown.Item>
              
              
              
            </NavDropdown>
            
                        {/*Integration*/}
            <NavDropdown title="Integration" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/compositetrapezoidal'>Composite Trapezoidal Rule</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/simson'>Simpson Rule</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/compositesimson'>Composite Simpson Rule</NavDropdown.Item>
            </NavDropdown>
                        
                    
                        {/*Differentiation*/}
            <NavDropdown title="Differentiation" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/forwardh'>Forward ( h )</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/backwardh'>Backward ( h )</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/centralh2'>Central ( h^2 )</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/backwardh2'>Forward ( h^2) </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/backwardh2'>Backward ( h^2 )</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/centralh4 '>Central ( h^4 )</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/test'>Test</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/test2'>Test2</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;