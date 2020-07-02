
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

import { connect } from 'react-redux';
// import { logOut } from './../../storage/actions/auth';
import * as actions from './../../storage/actions/auth';


const { Header, Content, Footer } = Layout;

class CustomeLayout extends React.Component {
    render() {

        return (

            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ['2'] }>

                        {
<<<<<<< HEAD
                            this.props.isAuthenticated ? 
                                <Menu.Item key="1" onClick={ this.props.logout }>Logout</Menu.Item>
                            :
=======
                            this.props.isAuthenticated ?

                                <Menu.Item key="1" onClick={ this.props.logout }> Logout<Link to="/login"></Link>
                                </Menu.Item>
                                :
>>>>>>> c5539721de0569859d54088a480ed13d5675e649
                                <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>

                        }
                        <Menu.Item key="2"><Link to="/">posts</Link></Menu.Item>


                    </Menu>
                </Header>
                <Content style={ { padding: '0 50px' } }>
                    <Breadcrumb style={ { margin: '16px 0' } }>
                        <Breadcrumb.Item><Link to=''>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/'>List</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        {/* main content */ }
                        { this.props.children }
                        {/* end main content */ }
                    </div>
                </Content>
                <Footer style={ { textAlign: 'center' } }>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout >

        );
    }
}


const mapDispatchToProps = (dispach) => {
    return {
        logout: () => dispach(actions.logOut())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomeLayout));

