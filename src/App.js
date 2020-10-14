import React, {Component} from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';
const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '42',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '41',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '32',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '31',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '27',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '18',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '21',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '15',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '14',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '13',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '12',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '11',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '9999',
        name: '胡彦祖',
        age: 18,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: "my_scroll_",
        };
    }

    componentDidMount() {

    }

    handleMouseEnter = () => {
        console.log(`鼠标移入`);
        this.setState({
            scroll: 'my_scroll',
        });
    }

    handleMouseLeave = () => {
        console.log(`鼠标移出`);
        this.setState({
            scroll: 'my_scroll_',
        });
    }

    render() {
        return (
            <Scrollbars className={this.state.scroll}
                        onMouseEnter={() => this.handleMouseEnter()}
                        onMouseLeave={() => this.handleMouseLeave()}
                        style={{ width: 500, height: 300 }}>
                <Table dataSource={dataSource} columns={columns} pagination={false} />
            </Scrollbars>
        )
    };
}

export default App;
