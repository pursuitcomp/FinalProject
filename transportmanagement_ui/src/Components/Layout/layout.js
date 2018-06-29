import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import Header from '../Header/header'
import Index from '../Index/index'
import SignUp from '../Signup/signup'
import Login from '../Login/login'
import Dashboard from '../Dashboard/Dashboard';


class layout extends Component {
    render() {
        let routes=(
        <React.Fragment>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/" component={Index}/>
        </React.Fragment>
    );
        return (
            <div>
              <Header/>
              
               
               {routes}
            </div>
        );
    }
}

export default layout;