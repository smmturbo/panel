import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { NavLink as RouterNavLink } from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/fontawesome-free-solid'

import { UserBalance } from '../account'
import LanguageSwitch from '../../languages/switcher'

import AppLogo from '../../assets/img/logo-svg.svg'

class AppNav extends Component {

  state = { isOpen: false }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  close = () => {
    this.setState({
      isOpen: false
    })
  }

  render()  {

    const { auth } = this.props

    if(auth.isEmpty) {

      return (<Navbar dark expand="md" fixed="top" style={{backgroundColor: '#BD1932'}} >

                <NavbarBrand to="/" tag={RouterNavLink} >
                  <img src={AppLogo} alt="Painel.AumentarSeguidores.com" height="20" />
                </NavbarBrand>

                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink to="/login" tag={RouterNavLink} >
                        <FormattedMessage id="menu.auth" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/support" tag={RouterNavLink} >
                        <FormattedMessage id="menu.support" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/terms" tag={RouterNavLink} >
                        <FormattedMessage id="menu.tos" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>)
    }

    return (

      <Navbar dark expand="md" fixed="top" style={{backgroundColor: '#BD1932'}} >

        <NavbarBrand to="/" tag={RouterNavLink} >
          <img src={AppLogo} alt="Painel.AumentarSeguidores.com" height="20" />
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>

          <Nav navbar>
            <NavItem>
              <NavLink exact to="/orders/add" tag={RouterNavLink} onClick={this.close} >
                <FormattedMessage id="menu.new_order" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/orders" exact tag={RouterNavLink} onClick={this.close} >
                <FormattedMessage id="menu.orders" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/subscriptions" tag={RouterNavLink} onClick={this.close} >
                <FormattedMessage id="menu.subscriptions" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/catalog" tag={RouterNavLink} onClick={this.close} >
                <FormattedMessage id="menu.prices_services" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/account/api" tag={RouterNavLink} onClick={this.close} >
                <FormattedMessage id="menu.api" />
              </NavLink>
            </NavItem>

          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/support" tag={RouterNavLink} onClick={this.close} >
                <FormattedMessage id="menu.support" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/balance/add" tag={RouterNavLink} onClick={this.close} >
                <FormattedMessage id="menu.add_balance" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/balance" tag={RouterNavLink} onClick={this.close} ><UserBalance /></NavLink>
            </NavItem>

            <LanguageSwitch />

            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <FontAwesomeIcon icon={faEllipsisV} />
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem tag={RouterNavLink} to="/account" onClick={this.close} >
                  <FormattedMessage id="menu.account" />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RouterNavLink}  to="/terms" onClick={this.close} >
                  <FormattedMessage id="menu.tos" />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RouterNavLink}  to="/logout" onClick={this.close} >
                  <FormattedMessage id="menu.logout" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>

        </Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = ({ firebase: { auth }}) => { return { auth } }
const AppHeader = connect(mapStateToProps)(AppNav)

export { AppHeader }
