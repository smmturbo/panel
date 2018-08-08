import React from 'react'
import { UncontrolledAlert } from 'reactstrap'
import { Link } from 'react-router-dom'

class Alert extends React.PureComponent {

  render()  {
    const { color } = this.props

    return (<UncontrolledAlert color={ color || 'primary' } className="my-2" >
              { this.renderMessage() }
            </UncontrolledAlert>)
  }

  renderMessage()  {
    const { title, message, to } = this.props

    if(to)  {
      return <Link to={to} ><h6>{title}</h6>{ message }</Link>
    }

    return <div><h6>{title}</h6>{ message }</div>
  }
}

export { Alert }
