import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './components/containers/ArticleListView';
import ArticlDetails from './components/containers/ArticleDetailsView';
import Login from './components/containers/Login.js';
import Signup from './components/containers/Signup';

const BaseRouter = ({isLoggedIn}) => {
    return (

        <div>
            <Route exact path="/" component={ ArticleList } />
            {/* <Route exact path="/:articleID" component={ ArticlDetails } /> */ }
            <Route exact path="/article/:articleID" component={ ArticlDetails } />
            { isLoggedIn ? null :
                (<div>
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/signup" component={ Signup } /> 
                </div>)
            }
        </div>
    );
}
export default BaseRouter;