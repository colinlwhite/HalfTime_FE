import React from 'react';
// import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './AppNavbar.scss';

class AppNavbar extends React.Component {
    state = {
      isOpen: false,
    };

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }

    render() {
      return (
            <div className="navigation-bar">
                <Navbar color="blue" dark expand="md">
                    <NavbarBrand href="/">HalfTime</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Students</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Instruments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Uniforms</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Volunteers</NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>

                </Navbar>

            </div>
      );
    }
}

export default AppNavbar;
