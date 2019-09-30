import React, { Component } from 'react';
import { Layout, Menu, List } from 'antd';
//import { Link, Redirect } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const data = [
    'Acesso 1',
    'Acesso 2',
    'Acesso 3',
    'Acesso 4',
    'Acesso 5',

];
export default class NavBar extends Component {


    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <h3 style={{ margin: '16px 0' }}>Acessos</h3>
                    <div style={{ background: '#fff' }}>
                        <List
                            size="small"
                            header={<div>Header</div>}
                            footer={<div>Footer</div>}
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
            </Layout>
        )
    }

}

