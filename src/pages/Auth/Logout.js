import React, { Component } from 'react'
import { withFirebase } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class LogoutPage extends Component {

  render()  {
    const { firebase } = this.props

    firebase.logout()

    return <Redirect to="/" />
  }
}

LogoutPage = withFirebase(LogoutPage)

export default LogoutPage
