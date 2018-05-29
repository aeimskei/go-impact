import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import decode from 'jwt-decode';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {

    // console.log('componentDidMount');

    let token = localStorage.getItem("user")
    
    if (token) {
      this.setState({
        loggedIn: decode(token).loggedIn
      })
    } else {
      this.setState({
        loggedIn: false
      })
    }
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">SocialEnterprise</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/experiences">Experiences</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/post">Add New Experience</NavLink>
              </NavItem>
              {
                this.state.loggedIn ? (
                  <NavItem>
                    <NavLink href="/profile">Profile</NavLink>
                  </NavItem>
                ) : (
                  null
                )
              }
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Signout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Signup</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}