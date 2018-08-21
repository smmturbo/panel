import React, { Component } from 'react'
import { connect } from 'react-redux'

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
                  <img src={AppLogo} alt="Painel AumentarSeguidores.com" height="20" />
                </NavbarBrand>

                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink to="/login" tag={RouterNavLink} >Login / Cadastro</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/support" tag={RouterNavLink} >Suporte</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/terms" tag={RouterNavLink} >Termos de Uso</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>)
    }

    return (

      <Navbar dark expand="md" fixed="top" style={{backgroundColor: '#BD1932'}} >

        <NavbarBrand to="/" tag={RouterNavLink} >
          <img src={AppLogo} alt="Painel AumentarSeguidores.com" height="20" />
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>

          <Nav navbar>
            <NavItem>
              <NavLink exact to="/orders/add" tag={RouterNavLink} onClick={this.close} >Novo Pedido</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/orders" exact tag={RouterNavLink} onClick={this.close} >Pedidos</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/subscriptions" tag={RouterNavLink} onClick={this.close} >Assinaturas</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/catalog" tag={RouterNavLink} onClick={this.close} >Preços & Serviços</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/account/api" tag={RouterNavLink} onClick={this.close} >API</NavLink>
            </NavItem>

          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/support" tag={RouterNavLink} onClick={this.close} >Suporte</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/balance/add" tag={RouterNavLink} onClick={this.close} >Inserir créditos</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/balance" tag={RouterNavLink} onClick={this.close} >Saldo: <UserBalance /></NavLink>
            </NavItem>

            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <FontAwesomeIcon icon={faEllipsisV} />
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem tag={RouterNavLink} to="/account" onClick={this.close} >Conta</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RouterNavLink}  to="/terms" onClick={this.close} >Termos de Uso</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RouterNavLink}  to="/logout" onClick={this.close} >Sair</DropdownItem>
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
