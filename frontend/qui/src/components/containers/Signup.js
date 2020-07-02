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
        errorMessage : ""

    };
    onFinish = values => {
        if(values.password1 !== values.password2) {
            this.setState({ errorMessage : "Passwords doesn't match" })
        }else{
            this.props.onAuth(values.username,values.email,values.password1,values.password1)
        }
    } 
    
    onFinishFailed = errorInfo => {
        console.log('Failed', errorInfo)
    }
        
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({
            confirmDirty: this.state.confirmDirty || !!value
        });
    }


    // handlePasswordChange = (event) => {
    //     console.log(event.value)
    //     // const Password1 = event.target.value;
    //     // const Password2 = event.target.elements.Password2.value;
    //     // console.log(event)//, Password2)
    // };
    // handleConfirmPassword = event => {
    //     if (event.handleConfirmPassword !== event.handlePasswordChange) {
    //         this.message.error('error');
    //     }
    //     console.log(event)//, Password2)
    
    // };

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
                            value = "password"
                            name="password1"
                            style={ { height: '50px' } }
                            rules={ [{ required: true, message: 'Please input your password!', },
                            // {
                            //     validator: this.handlePasswordChange,
                            // }

                            ]
                            }
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="confirm"
                            name="password2"
                            style={ { height: '50px' } }
                            rules={ [{ required: true, message: 'Please input your confirm!', },
                            // {
                            //     validator: this.handleConfirmPassword,
                            // }

                            ]
                            }
                        >
                            <Input />
                        </Form.Item>
                        <p style={{'color': 'red'}}> { this.state.errorMessage } </p>
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



