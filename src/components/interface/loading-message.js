import React from 'react'
import { Alert } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

function LoadingMessage() {

  return (
    <Alert color="light" className="my-2" >
      <FontAwesomeIcon icon={faSpinner} spin /> Carregando...
    </Alert>
  )
}

export { LoadingMessage }
