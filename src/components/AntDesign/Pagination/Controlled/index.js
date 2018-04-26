import React from 'react'
import './style.css'
import { Pagination } from 'antd';




export default function(ReactDOM, mountNode) {
  class App extends React.Component {
  state = {
    current: 3,
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {
    return <Pagination current={this.state.current} onChange={this.onChange} total={50} />;
  }
}

ReactDOM.render(<App />, mountNode);

}