import React from 'react'
import { Alert } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import { FormattedMessage } from 'react-intl'

function LoadingMessage() {

  return (
    <Alert color="light" className="my-2" >
      <FontAwesomeIcon icon={faSpinner} spin /> <FormattedMessage id="interface.loading_message.message" />
    </Alert>
  )
}

export { LoadingMessage }
