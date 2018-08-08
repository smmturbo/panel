import React from 'react'
import _ from 'lodash'
import { ListGroup } from 'reactstrap'

import { BankAccountListItem } from './'

class BankAccountList extends React.PureComponent {

  render() {
    return (
          <ListGroup>
            {_.map(_.orderBy(this.props.bankAccounts, ['bank'], ['asc']), bankAccount => <BankAccountListItem bankAccount={bankAccount} key={`${bankAccount.id}`} /> )}
          </ListGroup>
         )
  }
}

export { BankAccountList }
