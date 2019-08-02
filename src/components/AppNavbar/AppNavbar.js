import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
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
                                <NavLink tag={RRNavLink} to="/students">Students</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/instruments">Instruments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/uniforms">Uniforms</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/events">Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/volunteers">Volunteers</NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>

                </Navbar>

            </div>
      );
    }
}

export default AppNavbar;
