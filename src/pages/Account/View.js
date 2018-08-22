import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { PageHeader, LinkList, LinkListItem, LoadingMessage } from '../../components/interface'

class ViewAccountPage extends Component {

  render()  {

    const { profile } = this.props

    if( !isLoaded(profile) )  {
      return <LoadingMessage />
    }

    return (
      <div>
        <PageHeader title={<FormattedMessage id="page.account.view.title" />} />

        <ListGroup>
          <ListGroupItem>
            <small><FormattedMessage id="page.account.view.email" /></small>
            <h4>{profile.email}</h4>
          </ListGroupItem>

          <ListGroupItem>
            <small><FormattedMessage id="page.account.view.name" /></small>
            <h4>{profile.name}</h4>
          </ListGroupItem>

          <FormattedMessage id="page.account.view.phone" />

          <ListGroupItem>
            <small><FormattedMessage id="page.account.view.password" /></small>
            <h5><Link to="/auth/reset" ><FormattedMessage id="page.account.view.reset_password" /></Link></h5>
          </ListGroupItem>
        </ListGroup>

        <LinkList>
          <LinkListItem to="/orders" ><FormattedMessage id="page.account.view.order_history" /></LinkListItem>
          <LinkListItem to="/balance" ><FormattedMessage id="page.account.view.balance_history" /></LinkListItem>
          <LinkListItem to="/support" ><FormattedMessage id="page.account.view.support" /></LinkListItem>
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
