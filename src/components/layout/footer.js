import React from 'react'
import { FormattedMessage } from 'react-intl'

const AppFooter = () => {
    return (<footer className="container my-3 py-3" >

              <hr/>

              <p className="text-muted" >
                <small><FormattedMessage id="copy.copy_site_name" /></small>
              </p>
            </footer>
           )
}

export { AppFooter }
