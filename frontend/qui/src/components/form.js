import React from 'react';
import { Form, Input, Button } from 'antd';
import { Component } from 'react'
import axios from 'axios';

class CustomForm extends Component {
    FormHandleSubmit = (event, requestType, articleID) => {

        const t1 = event.target.elements.title.value;
        const t2 = event.target.elements.content.value;
        console.log(t1, t2);

        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: t1,
                    content: t2

                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));


            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: t1,
                    content: t2
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
            default: return requestType

        }
    }



    render() {
        return (
            <div>
                <Form onSubmitCapture={ (event) => this.FormHandleSubmit(
                    event,
                    this.props.requestType,
                    this.props.articleID) }>
                    <Form.Item label=" Title">
                        <Input name="title" placeholder="put a title" />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="Enter a some contnet" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">{ this.props.btnText }</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default CustomForm;

