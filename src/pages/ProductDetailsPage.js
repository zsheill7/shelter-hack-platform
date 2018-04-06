// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import ProductDetails from 'components/Pages/ProductDetails/ProductDetails'

class ProductDetailsPage extends React.Component {
  static defaultProps = {
    pathName: 'Products Details',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Products Details" />
        <ProductDetails />
      </Page>
    )
  }
}

export default ProductDetailsPage
