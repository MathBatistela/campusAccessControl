import logo from './logo.png';

import React, { Component } from 'react';
import { Layout, Menu, Button, message} from 'antd';
import Login from '../index.component';
import './navbar.css';
import { getToken, getStatus, getUserId, logout } from '../../services/auth';
import { Link, Redirect } from "react-router-dom";



const { Header, Content, Footer } = Layout;


export default class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          nav: '',
          token: getToken(),
          //      status: getStatus(),
          // token: null,
          // status: '2',
          modal: false,
          home: this.props.home
        };
        
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
     
    //   criaracesso = () => { 
    //     this.setState({nav: '/criaracesso'});
    //   } 
    //   visualizaracessosusuario = () => { 
    //     this.setState({nav: '/useraccesslist/'+getUserId()});
    //   }
      signout = () => {
        let hide = message.loading('Fazendo logout..', 0);
    
        setTimeout(() => {
          setTimeout(hide, 2000);
    
          logout();
          this.setState({ nav: '/' });
        }, 2000);
      }
      
    

    render() {
        if(this.state.nav) {
            return <Redirect to = { this.state.nav } />
          }
        return (

            
            <Layout className="layout">
                 
            <Header                     style={{ lineHeight: '80px' ,backgroundColor:'#555555' }}
>

                <div className="logo">
                    <img src= {logo}  alt="logo" style={{float:'left', padding:10}}/>
                </div>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' ,backgroundColor:'#555555', }}
                >
                    
                    <Menu.Item key="2" className="customclass"   >Acessos</Menu.Item>
                    
                    <Menu.Item key="3" className="customclass">Caledário</Menu.Item>
                    <Button style={{float: 'right'}} type="link" shape="circle" ghost size="large" icon="logout" onClick={this.signout}>
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

