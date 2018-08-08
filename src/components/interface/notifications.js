import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Alert } from 'reactstrap'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import { deleteNotification, clearNotifications } from '../../actions'
import 'react-notifications/lib/notifications.css';

class AppNotifications extends Component {

  renderNotifications = () => {
    const { notifications } = this.props

    return _.forEach(notifications, ({id, message, title, type}) => {

      setTimeout(() => this.props.deleteNotification(id), 5000)
      NotificationManager[type](message, title)

      return true
    })
  }

  render() {
    return <NotificationContainer />
  }

  componentDidUpdate()  {
    this.renderNotifications()
  }
}


function mapStateToProps(state) {
  return { notifications: state.notifications }
}

AppNotifications = connect(mapStateToProps, { deleteNotification, clearNotifications })(AppNotifications)

export { AppNotifications }
