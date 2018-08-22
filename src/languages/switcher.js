import React from "react"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { IntlConsumer } from "./wrapper"

class LanguageSwitch extends React.PureComponent {
  render()  {
    return (<IntlConsumer>
              {({ switchToEnglish, switchToPortuguese }) => (
                <React.Fragment>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav caret>
                      Lang
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem onClick={switchToEnglish} >EN</DropdownItem>
                      <DropdownItem onClick={switchToPortuguese} >PT</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </React.Fragment>
              )}
            </IntlConsumer>)
  }
}


export default LanguageSwitch
