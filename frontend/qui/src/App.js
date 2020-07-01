import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomeLayout from './components/containers/layout';

// import ArticleList from './components/containers/ArticleListView';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from './storage/actions/auth.js';



class App extends Component {
  com() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (

      <div id="app">
        <Router>
          <CustomeLayout { ...this.props }>
            <BaseRouter isLoggedIn = { this.props.isAuthenticated } />
          </CustomeLayout>
        </Router>

      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
