import React from 'react';
import { Input, Button, Spin, Form } from 'antd';
import { NavLink } from 'react-router-dom';
import Icon from '@ant-design/icons';

// import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { authLogin } from './../../storage/actions/auth';
import * as actions from './../../storage/actions/auth';

const antIcon = (
    <div>
        <Icon type="loading" style={ { fontSize: 24 } } spin />
    </div>
);




class NormalLoginForm extends React.Component {

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             alert(values.username, values.password)
    //             console.log('Recieved values of form', values);
    //             this.props.onAuth(values.username, values.password);
    //             // this.props.history.push('/');
    //         }
    //         else{
    //             alert(err)
    //         }

    //     });

    // }

    onFinish = values => {
        console.log('Success', values)
        this.props.onAuth(values.username, values.password)

    }

    onFinishFailed = errorInfo => {
        console.log('Failed', errorInfo)
    }

    render() {

        const layout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 10 },
            padding: { space: 8 },

        };

        const tailLayout = { wrapperCol: { offset: 8, span: 16 },};

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = <p>{ this.props.error.message }</p>
        }

        // const { getFieldDecorator } = this.props.form;

        return (
            <div>
                { errorMessage }

                { this.props.loading ?
                    <Spin indicator={ antIcon } />
                    : (<Form   { ...layout } name='loginForm' onFinish={ this.onFinish } onFinishFailed={ this.onFinishFailed } className="login-form">

                        <Form.Item
                            label = "Username"
                            name="username"
                            style={ { height: '50px', marginLeft:'10px' } }
                            rules={ [{ required: true, message: 'Please input your username!' }] }>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            style={ { height: '50px' } }
                            rules={ [{ required: true, message: 'Please input your password!' }] }>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item { ...tailLayout } style={ { marginRight: '170px' } }>
                            <Button type="primary" htmlType="submit" > Login </Button>
                            <NavLink to="/signup"> Signup </NavLink>
                        </Form.Item>
                    </Form >)
                }

            </div>
        );
    }
}
// const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = (dispach) => {
    return {
        onAuth: (username, password) => dispach(actions.authLogin(username, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);



