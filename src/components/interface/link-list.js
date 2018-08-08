import React from 'react'
import { ListGroup } from 'reactstrap'

function LinkList({children})  {
  return (
    <ListGroup className="my-2" >
      {children}
    </ListGroup>
  )
}

export { LinkList }
