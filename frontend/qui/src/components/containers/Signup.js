import React from 'react';
import { Input, Button, Spin, Form } from 'antd';
import { NavLink } from 'react-router-dom';
import Icon from '@ant-design/icons';

// import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
// import { Form } from '@ant-design/compatible';
// import { authSignup } from './../../storage/actions/auth';
import * as actions from './../../storage/actions/auth';






// const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={ { fontSize: 24 } } spin />;




class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
    };
    handleSubmit = values => {
        console.log('Success', values);
        this.props.onAuth(values.username,values.password,values.email,values.confirm);
    } 
        // e.preventDefault();
        // this.props.form.validateFieldsAndScroll((err, values) => {
        //     if (!err) {
        //         console.log('Recieved values of form', values);
        //         this.props.onAuth(values.username,
        //             values.password,
        //             values.email,
        //             values.confirm
        //         );
        //     }
        //     this.props.history.push('/');
        // });//close handle submit
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({
            confirmDirty: this.state.confirmDirty || !!value
        });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two password that your enter is inconsistent')
        } else {
            callback();
        }

    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });

        }
        callback();
    }



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

        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                { errorMessage }

                { this.props.loading ?
                    <Spin indicator={ antIcon } />
                    :
                    <Form   { ...layout }
                        onFinish={ this.handleSubmit } className="login-form">

                        <Form.Item style={ { height: '50px' } }>

                            {
                                getFieldDecorator('username', {
                                    rules: [{
                                        required: true, message: 'Please input your username!',
                                    }, {
                                        validator: this.validateToNextPassword,
                                    }
                                    ],
                                })
                                    (<Input prefix={ <Icon type="username" style={ { color: 'rgba(0,0,0,.25)' } } /> } placeholder="Username" />)
                            }
                        </Form.Item>

                        <Form.Item style={ { height: '50px' } }>
                            { getFieldDecorator('email', {
                                rules: [{
                                    required: true, message: 'Please input your email!',
                                }, {
                                    requird: true, message: "pls input your email",
                                }
                                ],
                            })

                                (<Input prefix={ <Icon type="email" style={ { color: 'rgba(0,0,0,.25)' } } /> } placeholder="Email Address" />)
                            }
                        </Form.Item>

                        <Form.Item style={ { height: '50px' } }>
                            { getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                }, {
                                    validator: this.validateToNextPassword,
                                }
                                ],
                            })
                                (<Input prefix={ <Icon type="lock" style={ { color: 'rgba(0,0,0,.25)' } } /> } placeholder="Passsword" />)
                            }
                        </Form.Item>



                        <Form.Item style={ { height: '50px' } }>
                            { getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: 'Please input your confirm password!',
                                }, {
                                    validator: this.compareToFirstPassword,
                                }
                                ],
                            })
                                (<Input prefix={ <Icon type="lock" style={ { color: 'rgba(0,0,0,.25)' } } /> } placeholder=" Confirm Passsword" />)
                            }
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
// const WrappedNormalLoginForm = Form.create()(RegistrationForm);
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



