import React from "react"
import { IntlProvider, addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import pt from "react-intl/locale-data/pt"
import ptTranslation from "./pt.json"
import enTranslation from "./en.json"

addLocaleData([...en, ...pt])

const { Provider, Consumer } = React.createContext()

class IntlProviderWrapper extends React.Component {
  constructor(...args) {
    super(...args)

    this.switchToEnglish = () =>
      this.setState({ locale: "en", messages: enTranslation })

    this.switchToPortuguese = () =>
      this.setState({ locale: "pt", messages: ptTranslation })

    // pass everything in state to avoid creating object inside render method (like explained in the documentation)
    this.state = {
      locale: "pt",
      messages: ptTranslation,
      switchToEnglish: this.switchToEnglish,
      switchToPortuguese: this.switchToPortuguese
    }
  }

  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (<Provider value={this.state}>
              <IntlProvider
                key={locale}
                locale={locale}
                messages={messages}
                defaultLocale="pt"
              >
                {children}
              </IntlProvider>
            </Provider>)
  }
}

export { IntlProviderWrapper as IntlProvider, Consumer as IntlConsumer };
