import logo from './logo.png';

import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';


const { Header, Content, Footer } = Layout;

export default class NavBar extends Component {


    render() {
        return (
            <Layout className="layout">
                 
            <Header                     style={{ lineHeight: '64px' ,backgroundColor:'#555555' }}
>

                <div className="logo">
                    <img src= {logo}  alt="logo" style={{float:'left', padding:8}}/>
                </div>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' ,backgroundColor:'#555555' }}
                >
                    
                    <Menu.Item key="1" style={{backgroundColor:'#596061'}}>Acessos</Menu.Item>
                    <Button style={{float: 'right'}} type="link" shape="circle" ghost size="large" icon="logout">
                    </Button>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                
        
            <div style={{ background: '#fff', padding: 24, minHeight: 900 }}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            <div className="logo">
                    <img src= {logo}  alt="logo" style={{float:'center', padding:8}}/> 
                </div>
            </Footer>
        </Layout>
        
        )
        
    }

}

