import React, { Component } from 'react';
import Axios from 'axios';
import { FABButton, Icon } from 'react-mdl';
//import PrintTemplate from 'react-print';

class paystubs extends Component {

    state = {
        drivers: [],
        trips: [],
        selectedDriver: '',
        paydriver: '',
        drivertrips: [],
        expenseAmount: '',
        expenseType: '',
        expensesRows: [],
        sumPay: 0,
        showTable: false,
        ExpensesValues: [],
        Fuel:'',
        Toll:'',
        Insurance: 0,
        Repairs: 0,
        Maintenance: 0,
        Dispacher:0,
        sumExpenses: 0,

    }

    componentDidMount() {
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
   
    }
    //select driver details
    selectDriverChangehandler = (event) => {
        //get driver selected
        const value = event.target.value;


        //+" "+date.getDay()+" "+date.getFullYear();
        //loop through drivers array and select the object driver

        this.state.drivers.map(driver => {
            if (driver.email === value) {
                this.setState({
                    paydriver: driver,
                    selectedDriver: value,
                    drivertrips: [],
                    expensesRows: [],
                    sumPay: 0,
                    showTable: true,
                    sumExpenses: 0,


                });
            }
        }
        )//end loop
        //loop through trips that belong to driver
        let newState = []
        let sumPay = 0;
        this.state.trips.map(item => {
            if (item.driverid === value) {
                newState.push(item);
                sumPay += item.payamount;
                this.setState({
                    drivertrips: newState,
                    sumPay: sumPay,
                })

            }
        })

    }//end method

    //expense type and input amount change handler
    inputchangeHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;


        this.setState({

            [name]: value
        });
    };


    //select expenses
    addExpenseRow = (event) => {
        let rowName = this.state.expenseType;
        let rowValue = parseInt(this.state.expenseAmount);
        this.state.sumExpenses += rowValue;
        //add expenses to variables
      
        //create expenses rows 
        let row = (
            <React.Fragment>
                <th colSpan="4"></th>
                <td key={rowName}>{rowName}</td>
                <td key="amount">  {rowValue}</td>
            </React.Fragment>

        );


        let newState = [...this.state.expensesRows]
        newState.push(row)

        this.setState({
            expensesRows: newState,
            [rowName]: rowValue,
            showTable: true,
        })
        console.log(rowName)
        console.log(rowValue)
        console.log("expense",this.state.expenseType)
        console.log("dl",this.state.paydriver.email)
    }

    removeRow = (index) => {

        let updatedState = { ...this.state.expensesRows }
        if (index > -1) {

            updatedState.splice(index, 1);
            console.log(updatedState)
            this.setState({
                expensesRows: updatedState
            });
        }
    }

    savePaystub = () => {
        const paystub = {
            driverId: this.state.paydriver.email,
            totalPay: this.state.sumPay,
            totalExpenses: this.state.sumExpenses,
            expense: {
                repair: this.state.Repairs,
                toll: this.state.Toll,
                fuel: this.state.Fuel,
                insurance: this.state.Insurance,
                maintenance: this.state.Maintenance,
                dispacher: this.state.Dispacher,
            }
        }
        Axios.post('http://localhost:8080/addPayStub', paystub)
            .then(function (response) {
                console.log(paystub)
            })


    }



    render() {

        let payTable;

        if (this.state.showTable) {

            payTable = (

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" colSpan="5"></th>

                            <th scope="col">Name: {this.state.paydriver.fname} {this.state.paydriver.lname}<br />
                                Email: {this.state.paydriver.email}<br />
                                Date: 2/3/4434<br />
                                Week: 34
                            </th>

                        </tr>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Bol </th>
                            <th scope="col">From</th>
                            <th scope="col">To </th>
                            <th scope="col">Notes</th>
                            <th scope="col">Amount </th>

                        </tr>

                    </thead>
                    <tbody>
                        {this.state.drivertrips.map((trip, index) =>
                            <tr key={index}>
                                <th scope="row">{trip.pdate}</th>
                                <td>{trip.bol}</td>
                                <td >{trip.pcompany}</td>
                                <td>{trip.dcompany}</td>
                                <td >{trip.notes}</td>
                                <td >{trip.payamount}</td>
                            </tr>
                        )}

                        <tr>
                            <th colSpan="4"></th>

                            <th>Expenses</th>
                            <th>Amount</th>
                        </tr>

                        {this.state.expensesRows.map((row, index) =>

                            <tr onClick={() => this.removeRow(index)} key={index}>
                                {row}
                            </tr>
                        )}

                        <tr>
                            <th colSpan="4"></th>

                            <th>Total</th>
                            <td>{this.state.sumPay - this.state.sumExpenses}</td>
                        </tr>

                    </tbody>
                </table>

            );
        } else {
            payTable = (
                <h5 style={{ color: 'blue' }}>Use Menus Above to create PayStub</h5>
            )

        }
        return (
            <div className="table-responsive">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Create PayStubs</h1>


                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <select name="paydriver" value={this.state.selectedDriver} onChange={this.selectDriverChangehandler} >
                                <option value="null">Select Driver</option>

                                {this.state.drivers.map((driver, index) =>

                                    <option on key={index} value={driver.email}>{driver.fname} {driver.lname}</option>

                                )}
                            </select>
                            <select name="expenseType" value={this.state.expenseType} onChange={this.inputchangeHandler} >
                                <option value="null">Add Expense</option>
                                <option value="Fuel">Fuel</option>
                                <option value="Toll">Toll</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Dispacher">Dispacher</option>
                                <option value="Repairs">Repairs</option>
                                <option value="Maintenace">Maintenance</option>

                            </select>
                            <input name="expenseAmount" onChange={this.inputchangeHandler} value={this.state.expenseAmount} placeholder="Enter Amount" />
                            <button value="driver" onClick={this.addExpenseRow} className="btn btn-sm btn-outline-secondary">Add Expense</button>
                            <button value="PayStubs" onClick={this.savePaystub} className="btn btn-sm btn-outline-secondary">Save PayStub</button>

                        </div>

                    </div>
                </div>
                {payTable}
            </div>

        );

    }
}

export default paystubs;
