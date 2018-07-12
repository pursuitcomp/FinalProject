import React, { Component } from 'react';
import '../Css/dashboard.css';
import Axios from 'axios'
import Index from '../Index/index';
import Drivers from '../Drivers/Drivers';
import Trips from '../Trips/Trips';
import AddTrip from '../AddTrip/AddTrip';
import Signup from '../Signup/signup'
import { Badge, Icon } from 'react-mdl';
import Paystubs from '../Paystubs/paystubs';
import Chat from '../Chat/Chat';
//import Map from '../Maps/mymaps'
import MapContainer from '../Maps/MapContainer';
import PayStubReport from '../PayReports/payStubReport'
class Dashboard extends Component {


    state = {
        pick: "driver",
        drivers: [],
        trips: [],
        message: '',
        smsDriverNum: '',
        messages: [],
        tempMesseges: [],
        payStubs:[],
        TWILIONUMBER: "+13145820488",
       
    }

    //get users data from dp
    componentDidMount() {
        this.getData();
    }

    getData = (event) => {

        //GET ALL USERS
        Axios.get('http://localhost:8080/findAllUser')
            .then(response => {
                const DriversArray = response.data;
                this.setState({
                    drivers: DriversArray
                });

            });
        //GET ALL TRIPS
        Axios.get('http://localhost:8080/findAllTrips')
            .then(response => {
                const tripsArray = response.data;
                this.setState({
                    trips: tripsArray
                });

            });
        //Get messages
        Axios.get('http://localhost:8080/findAllsms')
            .then(response => {
                const smsArray = response.data;
               // console.log(smsArray);
                this.setState({
                    messages: smsArray
                });
            });

    }

    sendSmsHandler = (event) => {
        // alert('A name was submitted: ' + this.state.message);
        event.preventDefault();
        //check if message input is empty dont send empty message
        if (this.state.message !== "") {

            const message = {
                smsTo: this.state.smsDriverNum,
                smsFrom: this.state.TWILIONUMBER,
                body: this.state.message,
                author: true,
            }

            this.sendsms(message);
        }
    }
    //send sms
    sendsms = (message) => {
        Axios.post('http://localhost:8080/sendsms', message)
        .then(response => {
            const smsArray = response.data;
            console.log("Updated text",smsArray);
            this.setState({
                messages: smsArray,
                message: '',
            });
        });

    
        //add sent message to the array

        this.addMessageArray(this.state.smsDriverNum);
    }

    typeChangeHandler = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        //set number selected
        this.setState({
            [name]: value
        });

        // this.addMessageArray(value);

    }

    selectContactChangeHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        //set number selecte
        this.setState({
            [name]: value
        });
        //get message from db
        this.getData();
        // update messages list
        this.addMessageArray(value);
    }

    //add items to array that displays messages for current chat
    addMessageArray = (value) => {

        let newState = [];
        this.state.messages.map(item => {
            if (item.smsTo === value || item.smsFrom === value) {
                newState.push(item);
            }

        })//end loop

        //set state add new messages array
        this.setState({
            tempMesseges: newState,
        });
    }



    //switch buttons
    switchButtons = (event) => {

        const value = event.target.value;

        this.setState({
            pick: value

        });

    }

    //select driver whole paystub you want to process from paystub component
    //     selectDriverChangehandler=(event)=>{
    //         //get driver selected
    //         const value=event.target.value;

    //         //loop through drivers array and select the object driver
    // this.state.drivers

    //     }

    render() {
        let page;

        if (this.state.pick === 'driver') {
            page = (<Drivers listOfDrivers={this.state.drivers} />)

        } else if (this.state.pick === 'trips') {
            page = (<Trips listOfTrips={this.state.trips} />)

        } else if (this.state.pick === 'addtrip') {

            page = (<AddTrip listOfDrivers={this.state.drivers} />)

        } else if (this.state.pick === 'adddriver') {

            page = (<Signup />)

        } else if (this.state.pick === 'paystubs') {

            page = (<Paystubs listOfTrips={this.state.trips}
                paydriver={this.state.paydriver}
                listOfDrivers={this.state.drivers}
                payChangehandler={this.state.payChangehandler}
                switchButtons={this.switchButtons} />

            )

        } else if (this.state.pick === 'chat') {
            page = (<Chat
                listOfDrivers={this.state.drivers}
                typeChangeHandler={this.typeChangeHandler}
                sendSmsHandler={this.sendSmsHandler}
                message={this.state.message}
                typeChangeHandler={this.typeChangeHandler}
                tempMesseges={this.state.tempMesseges}
                selectContactChangeHandler={this.selectContactChangeHandler}

            />)
        }
        else if (this.state.pick === 'map') {
            page = (<MapContainer google={this.props.google} />)

        }else if (this.state.pick === 'payStubReport') {
            page = (<PayStubReport drivers={this.state.drivers}/>)
        }
        return (

            <div className="dash">
                {console.log(this.state.paydriver)}
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="dashboard">Pursuit Inc</a>
                    {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}

                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="/">Home</a>
                        </li>

                    </ul>
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="dashboard">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                            Dashboard <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    
                                        <button className="sidebtn" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                            Trips
                </button>
                                    
                                    
                                        <button className="sidebtn" value="payStubReport" onClick={this.switchButtons}  href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                            PayStubs
                </button>
                                    
                                    
                                        <button className="sidebtn" href="https://getbootstrap.com/docs/4.1/examples/dashboard/#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                            Drivers
                </button>
                                    
                                    
                                        <button className="sidebtn" href="https://getbootstrap.com/docs/4.1/examples/dashboard/#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                            Geolocation
                </button>
                                   
                                    <li className="nav-item">
                                        <button className="sidebtn" href="https://getbootstrap.com/docs/4.1/examples/dashboard/#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                            Integrations
                </button>
                                    </li>
                                </ul>

                                {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>Saved reports</span>
                                    <a className="d-flex align-items-center text-muted" href="https://getbootstrap.com/docs/4.1/examples/dashboard/#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                    </a>
                                </h6> */}
                                <ul className="nav flex-column mb-2">
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="https://getbootstrap.com/docs/4.1/examples/dashboard/#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                            Current month
                </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://getbootstrap.com/docs/4.1/examples/dashboard/#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                            Last quarter
                </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://getbootstrap.com/docs/4.1/examples/dashboard/#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                            Social engagement
                </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://getbootstrap.com/docs/4.1/examples/dashboard/#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                            Year-end sale
                </a>
                                    </li> */}
                                </ul>
                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4"><div className="chartjs-size-monitor" style={{ position: ' absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1' }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1' }}><div style={{ position: 'absolute;width:1000000px;height:1000000px;left:0;top:0' }}></div></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;' }}><div style={{ position: 'absolute;width:200%;height:200%;left:0; top:0' }}></div></div></div>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Dashboard</h1>

                                <Badge text={this.state.trips.length}>Trips</Badge>
                                <Badge text={this.state.drivers.length}>Drivers</Badge>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">

                                        <button  value="driver" onClick={this.switchButtons} className="btn btn-sm topbtn btn-outline-secondary">Drivers</button>
                                        <button value="trips" onClick={this.switchButtons} className="btn btn-sm topbtn btn-outline-secondary">Trips</button>
                                        <button value="addtrip" onClick={this.switchButtons} className="btn btn-sm topbtn btn-outline-secondary">Add Trip</button>
                                        <button value="adddriver" onClick={this.switchButtons} className="btn btn-sm topbtn btn-outline-secondary">Add Driver</button>
                                        <button value="paystubs" onClick={this.switchButtons} className="btn btn-sm topbtn btn-outline-secondary">PayStubs</button>
                                        <button value="chat" onClick={this.switchButtons} className="btn btn-sm topbtn btn-outline-secondary">Chat</button>
                                        {/* <button value="map" onClick={this.switchButtons} className="btn btn-sm topbtn btn-outline-secondary">Maps</button> */}
                                    </div>
                                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                        This week
                                    </button>
                                </div>
                            </div>

                            {/* <canvas className="my-4 w-100 chartjs-render-monitor" id="myChart" width="1004" height="423" style={{display:' block; width: 1004px; height: 423px'}}></canvas> */}


                            {page}

                        </main>
                    </div>
                </div>
                {/* <Start js code>  */

//     /* <!-- Bootstrap core JavaScript
//     ================================================== -->
//     <!-- Placed at the end of the document so the pages load faster --> */
//     
//     <script src="./Dashboard Template for Bootstrap_files/jquery-3.3.1.slim.min.js.download" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
//     <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"></script>')</script>
//     <script src="./Dashboard Template for Bootstrap_files/popper.min.js.download"></script>
//     <script src="./Dashboard Template for Bootstrap_files/bootstrap.min.js.download"></script>

//     /* <!-- Icons --> */
//     <script src="./Dashboard Template for Bootstrap_files/feather.min.js.download"></script>
//     <script>
//        feather.replace() 
//     </script>

//     /* <!-- Graphs --> */
//     <script src="./Dashboard Template for Bootstrap_files/Chart.min.js.download"></script>
//     <script>

//       var ctx = document.getElementById("myChart");
//       var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//           datasets: [{
//             data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
//             lineTension: 0,
//             backgroundColor: 'transparent',
//             borderColor: '#007bff',
//             borderWidth: 4,
//             pointBackgroundColor: '#007bff'
//           }]
//         },
//         options: {
//           scales: {
//             yAxes: [{
//               ticks: {
//                 beginAtZero: false
//               }
//             }]
//           },
//           legend: {
//             display: false,
//           }
//         }
//       });
//     </script>
//     }
/* end js code */}
            </div>

        );
    }
}

export default Dashboard;