import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'
import _ from 'lodash'

class SubscriptionStatusFilter extends React.PureComponent {

  render()  {

    const { status, handleClick } = this.props

    return (<div className="my-3 text-left"
              style={{overflow: 'scroll',
                      overflowX: 'scroll',
                      overflowY: 'hidden'
                    }}
            >
              <ButtonGroup>
                { _.map(statuses, statusItem => <Button key={`ssf-${statusItem.status}`} color="primary" outline={status !== statusItem.status} onClick={() => handleClick(statusItem.status, statusItem.child)} >{statusItem.label}</Button> ) }
              </ButtonGroup>
            </div>)
  }
}

export { SubscriptionStatusFilter }

const statuses = [
  {
    status: 'active',
    label: 'Ativas'
  },
  {
    status: 'paused',
    label: 'Pausadas'
  },
  {
    status: 'completed',
    label: 'Concluídas'
  },
  {
    status: 'cancelled',
    label: 'Canceladas'
  }
]
