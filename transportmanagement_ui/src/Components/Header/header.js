import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class header extends Component {

    state = {
        email: '',
        password: ''

    }

    signInSubmitHandler = (event) => {

        event.preventDefault();
        this.props.submitHandler(true);

        this.setState({

            isUserLoggedIn: false

        });

    }

    onChangeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({

            [name]: value

        });

    }

    render() {

        let links = (
            <React.Fragment>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="login">SIGN IN</a>
                    </li>
                </ul>



            </React.Fragment>

        );

        if (this.props.isUserLoggedIn) {

            let links = (
                <React.Fragment>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">SIGN OUT</a>
                        </li>
                    </ul>
                </React.Fragment>
            );
        }

        return (

            <nav className="navbar navbar-expand-md  navbar-dark fixed-top bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>

                    </ul>


                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        {links}

                    </div>
                </div>
            </nav>


        );
    }
}

export default header;