// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import TablePageItems from 'components/AntComponents/TablePage/index'

class TablePage extends React.Component {
  static defaultProps = {
    pathName: 'Table',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Table" />
        <TablePageItems />
      </Page>
    )
  }
}

export default TablePage