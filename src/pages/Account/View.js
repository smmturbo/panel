import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import { PageHeader, LinkList, LinkListItem, LoadingMessage } from '../../components/interface'

class ViewAccountPage extends Component {

  render()  {

    const { profile } = this.props

    if( !isLoaded(profile) )  {
      return <LoadingMessage />
    }

    return (
      <div>
        <PageHeader title="Minha Conta" />

        <ListGroup>
          <ListGroupItem>
            <small>Email</small>
            <h4>{profile.email}</h4>
          </ListGroupItem>

          <ListGroupItem>
            <small>Nome</small>
            <h4>{profile.name}</h4>
          </ListGroupItem>

          <ListGroupItem>
            <small>Senha</small>
            <h5><Link to="/auth/reset" >Redefinir senha</Link></h5>
          </ListGroupItem>
        </ListGroup>

        <LinkList>
          <LinkListItem to="/orders" >Histórico de pedidos</LinkListItem>
          <LinkListItem to="/balance" >Histórico de recargas</LinkListItem>
          <LinkListItem to="/support" >Suporte &amp; tickets</LinkListItem>
        </LinkList>
      </div>
    )
  }
}

function mapStateToProps({ firebase: { auth, profile } }) {
  return { auth, profile }
}

ViewAccountPage = connect(mapStateToProps)(ViewAccountPage)

export default ViewAccountPage
