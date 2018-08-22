import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

class OrderStatusFilter extends React.PureComponent {

  render()  {

    const { status, handleClick } = this.props

    return (<div className="my-3 text-left"
              style={{overflow: 'scroll',
                      overflowX: 'scroll',
                      overflowY: 'hidden'
                    }}
            >
              <ButtonGroup>
                { _.map(statuses, statusItem => <Button key={`${statusItem.child}-${statusItem.status}`} color="primary" outline={status !== statusItem.status} onClick={() => handleClick(statusItem.status, statusItem.child)} >{statusItem.label}</Button> ) }
              </ButtonGroup>
            </div>)
  }
}

export { OrderStatusFilter }

const statuses = [
  {
    status: 'processing',
    label: <FormattedMessage id="order_list.status_filter.processing" />
  },
  {
    status: 'pending',
    label: <FormattedMessage id="order_list.status_filter.pending" />
  },
  {
    status: 'completed',
    label: <FormattedMessage id="order_list.status_filter.completed" />
  },
  {
    status: 'canceled',
    label: <FormattedMessage id="order_list.status_filter.canceled" />
  }
]
