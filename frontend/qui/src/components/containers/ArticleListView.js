import React, { Component } from 'react'
import Article from './article';
import axios from 'axios';
import CustomForm from './../form';

class ArticleList extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                })
                console.log(res.data);
            })
    }
    render() {
        return (
            <div>
                <Article data={ this.state.articles } />
                <br />
                <h2>Create an form</h2>
                <CustomForm
                    requestType="post"
                    articleID={ null }
                    btnText="Create"

                />
            </div>
        )
    }
}
export default ArticleList;
