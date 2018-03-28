import React from 'react'
import './style/style.css'
import { Checkbox, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  class App extends React.Component {
    state = {
      checked: true,
      disabled: false,
    }
    render() {
      const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled
        ? 'Disabled'
        : 'Enabled'}`
      return (
        <div>
          <p style={{ marginBottom: '20px' }}>
            <Checkbox
              checked={this.state.checked}
              disabled={this.state.disabled}
              onChange={this.onChange}
            >
              {label}
            </Checkbox>
          </p>
          <p>
            <Button type="primary" size="small" onClick={this.toggleChecked}>
              {!this.state.checked ? 'Check' : 'Uncheck'}
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              type="primary"
              size="small"
              onClick={this.toggleDisable}
            >
              {!this.state.disabled ? 'Disable' : 'Enable'}
            </Button>
          </p>
        </div>
      )
    }
    toggleChecked = () => {
      this.setState({ checked: !this.state.checked })
    }
    toggleDisable = () => {
      this.setState({ disabled: !this.state.disabled })
    }
    onChange = e => {
      console.log('checked = ', e.target.checked)
      this.setState({
        checked: e.target.checked,
      })
    }
  }

  ReactDOM.render(<App />, mountNode)
}
