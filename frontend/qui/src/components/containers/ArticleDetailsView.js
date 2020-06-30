import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'antd';
import CustomForm from './../form';

class ArticleDetails extends Component {

    state = {
        article: {}
    }
    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}/`)
            .then(res => {
                this.setState({
                    article: res.data
                })
                console.log(res.data);
            })

    }

    handleDelete = (event) => {
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/`)
            .then(res => console.log("Deleted"))
            .catch(error => console.log(error));
        this.props.history.push('/');
        this.props.forceUpdate();


    }
    render() {
        return (
            <div>
                <Card title={ this.state.article.title }>
                    <p>{ this.state.article.content }</p>
                </Card>
                <br />
                <CustomForm requestType="put"
                    articleID={ this.props.match.params.articleID }
                    btnText="Update" />

                <form onSubmitCapture={ this.handleDelete }>
                    <button type="Danger" htmlType="submit">Delete</button>
                </form>


            </div>
        )
    }
}

export default ArticleDetails;
