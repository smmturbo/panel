import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroupItem } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'

function LinkListItem({to, children})  {

  return (
    <ListGroupItem tag={Link} to={to} className="d-flex justify-content-between align-items-center" action >
      <div>{children}</div>
      <FontAwesomeIcon icon={faAngleRight} />
    </ListGroupItem>
  )
}

export { LinkListItem }
