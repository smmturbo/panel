import React from 'react'
import { PageHeader, Whatsapp } from '../../components/interface'
import { ListGroup, ListGroupItem } from 'reactstrap'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faWhatsapp from '@fortawesome/fontawesome-free-brands/faWhatsapp'

class HelpPage extends React.PureComponent {

  render()  {

    return (<div>
              <PageHeader title="Ajuda & Suporte" />

              <p>Se encontrou algum problema, entre em contato conosco:</p>

              <ListGroup>
                <ListGroupItem>
                  <small>E-mail</small>
                  <h5>suporte@aumentarseguidores.com</h5>
                </ListGroupItem>

                <ListGroupItem>
                  <p><small>WhatsApp</small></p>

                  <Whatsapp number="21969534028" />

                </ListGroupItem>
              </ListGroup>

            </div>)
  }
}

export { HelpPage }
