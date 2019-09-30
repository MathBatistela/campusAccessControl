import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';

const { Header, Content, Footer } = Layout;

export default class NavBar extends Component {


    render() {
        return (
            <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">Acessos</Menu.Item>
                <Button style={{float: 'right'}} type="link" shape="circle" ghost size="large" icon="logout">
                </Button>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
        
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
        )
        
    }

}

