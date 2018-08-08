import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faWhatsapp from '@fortawesome/fontawesome-free-brands/faWhatsapp'

class Whatsapp extends React.PureComponent {

  render()  {

    const { number } = this.props

    return (<div className="my-2" ><a href={`https://wa.me/+55${number}`} className="btn btn-success" target="_blank" >
              {number} <FontAwesomeIcon icon={faWhatsapp} />
            </a></div>)
  }
}

export { Whatsapp }
