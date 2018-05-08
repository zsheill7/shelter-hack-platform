import React from 'react'
import './style.css'
import { LocaleProvider, Pagination, DatePicker, TimePicker, Calendar,
         Popconfirm, Table, Modal, Button, Select, Transfer, Radio } from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';

import moment from 'moment';

import 'moment/locale/zh-cn';



export default function(ReactDOM, mountNode) {
  moment.locale('en');

const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  filters: [{
    text: 'filter1',
    value: 'filter1',
  }],
}, {
  title: 'Age',
  dataIndex: 'age',
}];

class Page extends React.Component {
  state = {
    visible: false,
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  hideModal = () => {
    this.setState({ visible: false });
  }
  render() {
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return (
      <div className="locale-components">
        <div className="example">
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
        <div className="example">
          <Select showSearch style={{ width: 200 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
          </Select>
          <DatePicker />
          <TimePicker />
          <RangePicker style={{ width: 200 }} />
        </div>
        <div className="example">
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <Button onClick={info}>Show info</Button>
          <Button onClick={confirm}>Show confirm</Button>
          <Popconfirm title="Question?">
            <a href="javascript: void(0);" >Click to confirm</a>
          </Popconfirm>
        </div>
        <div className="example">
          <Transfer
            dataSource={[]}
            showSearch
            targetKeys={[]}
            render={item => item.title}
          />
        </div>
        <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} value={moment()} />
        </div>
        <div className="example">
          <Table dataSource={[]} columns={columns} />
        </div>
        <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
          <p>Locale Modal</p>
        </Modal>
      </div>
    );
  }
}

let forceRerender = 0;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: null,
    };
  }
  changeLocale = (e) => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('zh-cn');
    }
  }
  render() {
    return (
      <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group defaultValue={null} onChange={this.changeLocale}>
            <Radio.Button key="en" value={null}>English</Radio.Button>
            <Radio.Button key="cn" value={zhCN}>中文</Radio.Button>
          </Radio.Group>
        </div>
        <LocaleProvider locale={this.state.locale}>
          <Page key={forceRerender++ /* HACK: just refresh in production environment */} />
        </LocaleProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);

}
