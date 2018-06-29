import React, { Component } from 'react';
import {Button} from 'react-mdl';
import {Link} from 'react-router-dom';
import '../Css/signin.css'
import Axios from 'axios';

class login extends Component {
state={
    username:'',
    password:'',
}

signinChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({

        [name]: value

    });
}

signinSubmitHandler = (event) => {
    event.preventDefault();
    //create user constant
    const loginUser = {
        username:this.state.username,
        password:this.state.password,
    }

    Axios.post('http://localhost:8080//sign-in',loginUser)
    .then(function(response){
        console.log(loginUser)

    })
  
   
}
    render() {
        return (
        
            <form className="form-signin" onSubmit={this.signinSubmitHandler}>
            <img className="mb-4" src="./Signin Template for Bootstrap_files/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" name="username" value={this.state.username} onChange={this.signinChangeHandler} placeholder="Email address" required="" autoFocus=""/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" name="password" value={this.state.password} className="form-control" onChange={this.signinChangeHandler} placeholder="Password" required=""/>
            <div className="checkbox mb-3">
              
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <Link to="signup"><Button  accent>Create Account</Button></Link>
            <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
          </form>
       
           
        );
    }
}

export default login;