import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { FormattedMessage } from 'react-intl'

class BankAccountListItem extends React.PureComponent {

  render()  {

    const { bankAccount } = this.props

    return (<ListGroupItem>
              <h5>{bankAccount.bank}</h5>

              <div className="d-flex justify-content-start" >
                <span className="mr-5" >
                  <small className="text-muted" >
                    <FormattedMessage id="bank_accounts.owner" />
                  </small>
                  <h6>{bankAccount.name}</h6>
                </span>

                <span className="mr-5" >
                  <small className="text-muted" >
                    <FormattedMessage id="bank_accounts.branch" />
                  </small>
                  <h6>{bankAccount.branch}</h6>
                </span>

                <span className="mr-5" >
                  <small className="text-muted" >
                    <FormattedMessage id="bank_accounts.account_number" />
                  </small>
                  <h6>{bankAccount.account}</h6>
                </span>

                <span className="mr-5" >
                  <small className="text-muted" >
                    <FormattedMessage id="bank_accounts.extra" />
                  </small>
                  <h6>{bankAccount.extra}</h6>
                </span>
              </div>
            </ListGroupItem>)
  }
}

export { BankAccountListItem }
