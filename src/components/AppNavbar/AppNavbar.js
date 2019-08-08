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
                    <NavbarBrand href="/"><strong>HALFTIME</strong></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/students"><strong>STUDENTS</strong></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/instruments"><strong>INSTRUMENTS</strong></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/uniforms"><strong>UNIFORMS</strong></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/events"><strong>EVENTS</strong></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/volunteers"><strong>VOLUNTEERS</strong></NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>

                </Navbar>

            </div>
      );
    }
}

export default AppNavbar;
