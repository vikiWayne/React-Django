import React, { Component } from 'react';
import { Input, Button, Spin, Form } from 'antd';
import { NavLink } from 'react-router-dom';
import Icon from '@ant-design/icons';

import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { authSignup } from './../../storage/actions/auth';
import * as actions from './../../storage/actions/auth';






const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={ { fontSize: 24 } } spin />;




class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,

    };
    /* handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (values) {
                console.log('Recieved values of form', values);
                this.props.onAuth(values.username,
                    values.Password1,
                    values.email,
                    values.Password2
                );
            }
            this.props.history.push('/');
        }); */


    //}//close handle submit
    onFinish = values => {
        console.log('Success Registration', values);
        this.props.onAuth(values.username,
            values.email,
            values.Password1,
            values.Password2)
        this.props.history.push('/');

    }

    onFinishFailed = errorInfo => {
        console.log('Failed', errorInfo)
    }

    handlePasswordChange = event => {
        const Password1 = event.target.elements.Password1.value;
        const Password2 = event.target.elements.Password2.value;
        console.log(Password1, Password2)
    };
    handleConfirmPassword = event => {
        if (event.handleConfirmPassword !== event.handlePasswordChange) {
            this.message.error('error');
        }
    };

    // handleConfirmBlur = (e) => {
    //     const value = e.target.value;
    //     this.setState({
    //         confirmDirty: this.state.confirmDirty || !!value
    //     });
    // }

    // compareToFirstPassword = (rule, value, callback) => {
    //     const form = this.props.form;
    //     if (value && value !== ('Password1')) {
    //         callback('Two password that your enter is inconsistent')
    //     } else {
    //         callback();
    //     }

    // }
    // validateToNextPassword = (rule, value, callback) => {
    //     const form = this.props.form;
    //     if (value && this.state.confirmDirty == ('Password1')) {

    //     } else {
    //         callback();
    //     }

    // }





    render() {
        const layout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 10 },
            padding: { space: 8 },

        };

        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{ this.props.error.message }</p>
            )
        }

        // const { getFieldDecorator } = this.props.form;

        return (
            <div>
                { errorMessage }

                { this.props.loading ?
                    <Spin indicator={ antIcon } />
                    :
                    <Form   { ...layout } name="normal_login"
                        onFinish={ this.onFinish } onFinishFailed={ this.onFinishFailed } className="login-form">

                        <Form.Item
                            label="Username"
                            name="username"

                            style={ { height: '50px' } }
                            rules={ [{ required: true, message: 'Please input your username!' }]
                            }
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            style={ { height: '50px' } }
                            rules={ [{ required: true, message: 'Please input your email!' }]
                            }
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            label="Password"
                            name="Password1"
                            style={ { height: '50px' } }
                            rules={ [{ required: true, message: 'Please input your password!', },
                            {
                                validator: this.handlePasswordChange,
                            }

                            ]
                            }
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="confirm"
                            name="Password2"
                            style={ { height: '50px' } }
                            rules={ [{ required: true, message: 'Please input your confirm!', },
                            {
                                validator: this.handleConfirmPassword,
                            }

                            ]
                            }
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item { ...tailLayout } style={ { marginRight: '510px' } }>
                            <Button type="primary" htmlType="submit" >
                                Signup
                            </Button>   Or
                            <NavLink
                                to="/login">   Login
                           </NavLink>
                        </Form.Item>
                    </Form >
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = (dispach) => {
    return {
        onAuth: (username, email, Password1, Password2) => dispach(actions.authSignup(username, email, Password1, Password2))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);



