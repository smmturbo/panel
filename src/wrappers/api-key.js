import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded } from 'react-redux-firebase'
import randomstring from 'randomstring'

import { LoadingMessage } from '../components/interface'
import { ApiKey } from '../components/account'
import { notifySuccess } from '../actions'

class ApiKeyWrapper extends React.Component {

  state = { processing: false }

  render()  {

    const { apiKey } = this.props

    if( !isLoaded(apiKey) || this.state.processing ) {
      return <LoadingMessage />
    }

    return <ApiKey apiKey={apiKey} handleAction={this._generateApiKey} />
  }

  _generateApiKey = () => {

    const { firebase, auth } = this.props
    const date = new Date().toString()

    this.setState({processing: true})

    // Creates a new API Key
    const apiKey = randomstring.generate()
    const apiKeyData = { id: apiKey, key: apiKey, user: auth.uid, createdOn: date }

    // Saves Key
    firebase.ref(`/userData/${auth.uid}/apiKey`).set(apiKeyData)

    // Clean Up
    this.setState({processing: false})
    this.props.notifySuccess('Chave API criada.')
  }
}

function mapStateToProps({ firebase: { data, auth } }) {
  return { apiKey: data.apiKey, auth }
}

const firebaseData = (props, store) =>  {
  const uid = store.getState().firebase.auth.uid
  return [{ path: `/userData/${uid}/apiKey`, storeAs: 'apiKey'}]
}

ApiKeyWrapper = firebaseConnect(firebaseData)(ApiKeyWrapper)
ApiKeyWrapper = connect(mapStateToProps, { notifySuccess })(ApiKeyWrapper)

export { ApiKeyWrapper }
