import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class UserBalance extends React.Component {

  render = () => {

    const { balance } = this.props

    if(!isLoaded(balance) || isEmpty(balance)) {
      return null
    }

    return <span>R${this.props.balance.current}</span>
  }
}

const mapStateToProps = ({ firebase: { data } }) =>  {
  return { balance: data.balance }
}

const firebaseData = (props, store) =>  {
  const uid = store.getState().firebase.auth.uid
  return [ { path: `/userData/${uid}/balance`, storeAs: 'balance' } ]
}

UserBalance = firebaseConnect(firebaseData)(UserBalance)
UserBalance = connect(mapStateToProps)(UserBalance)

export { UserBalance }
