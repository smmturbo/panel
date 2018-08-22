import React from 'react'
import { PageHeader, Whatsapp } from '../../components/interface'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { EMAIL_SUPPORT_EMAIL, PHONE_SUPPORT_PHONE } from '../../data/constants'

class HelpPage extends React.PureComponent {

  render()  {

    return (<div>
              <PageHeader title={<FormattedMessage id="page.extras.support.title" />} />

              <p><FormattedMessage id="page.extras.support.if_you_have_problems" /></p>

              <ListGroup>
                <ListGroupItem tag={Link} to="/faq" >
                  <FormattedMessage id="page.extras.support.faq" />
                </ListGroupItem>
                <ListGroupItem>
                  <small>
                    <FormattedMessage id="page.extras.support.email" />
                  </small>
                  <h5>{EMAIL_SUPPORT_EMAIL}</h5>
                </ListGroupItem>

                <ListGroupItem>
                  <p><small>WhatsApp</small></p>

                  <Whatsapp number={PHONE_SUPPORT_PHONE} />

                </ListGroupItem>
              </ListGroup>

            </div>)
  }
}

export default HelpPage
