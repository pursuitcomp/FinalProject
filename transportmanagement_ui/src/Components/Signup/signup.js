import React, { Component } from 'react';
import '../Css/signin.css';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class signup extends Component {
    state = {
        company: '',
        phone: '',
        fname: '',
        lname: '',
        email: '',
        password: '',
        role: '',
        street: '',
        street2: '',
        city: '',
        state: '',
        zip: ''

    }
    //On change handler
    signUpChangeHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({

            [name]: value

        });

    }

    signupSubmitHandler = (event) => {
        event.preventDefault();
        //create user constant
        const user = {
            fname: this.state.fname,
            company: this.state.company,
            phone:"+1"+this.state.phone,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            address:{
            street:this.state.street,
            city:this.state.city,
            state:this.state.state,
            zip:this.state.zip
            }
        }

        Axios.post('http://localhost:8080/registerUser', user)
            .then(function (response) {
               

            })

    }



    render() {
        <Redirect to='/' />
        return (
            <div className="signupform">
                <form onSubmit={this.signupSubmitHandler}>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Company</label>
                            <input type="text" name="company" value={this.state.company} onChange={this.signUpChangeHandler} className="form-control" id="inputPassword4" placeholder="Company" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Phone</label>
                            <input type="phone" name="phone" value={this.state.phone} onChange={this.signUpChangeHandler} className="form-control" id="phone" placeholder="Phone" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">FirstName</label>
                            <input type="text" name="fname" value={this.state.fname} onChange={this.signUpChangeHandler} className="form-control" id="fname" placeholder="FirstName" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">LastName</label>
                            <input type="text" name="lname" value={this.state.lname} onChange={this.signUpChangeHandler} className="form-control" id="lname" placeholder="LastName" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Email</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.signUpChangeHandler} className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.signUpChangeHandler} className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="col-auto my-1">
                            <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Role</label>
                            <select name="role" value={this.state.role} onChange={this.signUpChangeHandler} className="custom-select mr-sm-2" id="role">
                                <option value="null">Choose...</option>
                                <option value="admin">Admin</option>
                                <option value="driver">Driver</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" name="street" value={this.state.street} onChange={this.signUpChangeHandler} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" name="street2" value={this.state.street2} onChange={this.signUpChangeHandler} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" name="city" value={this.state.city} onChange={this.signUpChangeHandler} className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select name="state" id="inputState" value={this.state.state} onChange={this.signUpChangeHandler} className="form-control">
                                <option selected>Choose...</option>
                                <option>MO</option>
                                <option>IL</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" name="zip" value={this.state.zip} onChange={this.signUpChangeHandler} className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Receive NewsLetter
                </label>
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default signup;