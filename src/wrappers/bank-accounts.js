import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import _ from 'lodash'

import { PageHeader, LoadingMessage, EmptyList  } from '../components/interface'
import { BankAccountList } from '../components/bank-accounts'
import { UploadBankTransferReceipt } from '../components/balance-transactions'
import { notifySuccess } from '../actions'
import { extractFileMetadata } from '../helpers/system'

class BankAccountsWrapper extends React.Component {

  state = { processing: false }

  render()  {
    const { bankAccounts } = this.props

    if( !isLoaded(bankAccounts) ) {
      return <LoadingMessage />
    }

    if(isEmpty(bankAccounts) ) {
      return <EmptyList message="Nenhuma conta bancária" />
    }

    return (<div>
              <UploadBankTransferReceipt handleAction={this._handleFileUpload} processing={this.state.processing} />
              <BankAccountList bankAccounts={bankAccounts} />
            </div>)
  }

  _handleFileUpload = async (uploadedFile) => {

    const { firebase, auth } = this.props
    const storagePath = `/receipts`

    this.setState({processing: true})

    //console.log({uploadedFile})

    // uploadFiles(storagePath, files, dbPath)
    const uploadTask = await firebase.uploadFile(storagePath, uploadedFile)

    console.log('UP TASK SNAP:', { uploadTask,  uploadTaskSnapshot: uploadTask.uploadTaskSnapshot })

    // Creates a new Receipt
    const receiptRef = firebase.ref(`/userData/${auth.uid}/receipts`).push()
    const receipt = {...extractFileMetadata(uploadTask.uploadTaskSnapshot), ...{user: auth.uid, id: receiptRef.key } }

    // Saves File to Receipt
    receiptRef.update(receipt)

    // Clean Up
    this.setState({processing: false})
    this.props.notifySuccess('Aprovaremos o seu depósito o mais rápido possível.', 'Comprovante enviado')
  }
}

function mapStateToProps({ firebase: { data, auth } }) {
  return { bankAccounts: data.bankAccounts, auth }
}

const firebaseData = () => {
  return [{ path: '/systemData/bankAccounts', storeAs: 'bankAccounts'}]
}

BankAccountsWrapper = firebaseConnect(firebaseData)(BankAccountsWrapper)
BankAccountsWrapper = connect(mapStateToProps, { notifySuccess })(BankAccountsWrapper)

export { BankAccountsWrapper }
