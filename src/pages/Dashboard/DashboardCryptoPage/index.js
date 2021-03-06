import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DashboardCrypto from './DashboardCrypto'

class DashboardCryptoPage extends React.Component {
  static defaultProps = {
    pathName: 'Dashboard Crypto',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Dashboard Crypto" />
        <DashboardCrypto />
      </Page>
    )
  }
}

export default DashboardCryptoPage
