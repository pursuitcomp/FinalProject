
import React, { Component } from 'react';
import {Button} from 'react-mdl';
import Axios from 'axios';

class AddTrip extends Component {

state={
pstreet:'',
dstreet:'',
pdate:'',
ddate:'',
pcity: '',
dcity: '',
pstate: '',
dstate: '',
pzip: '',
dzip: '',
ptime:'',
dtime:'',
bol:'',
tripstatus:'',
driver:'',
pay:'',
pcompany:'',
dcompany:'',
pphone:'',
dphone:'',

drivers:[]
}

componentDidMount(props){
this.setState({
    drivers:this.props.listOfDrivers
})

}

addTripChangeHandler=(event)=>{
    const value = event.target.value;
    const name = event.target.name;

    this.setState({

        [name]: value


    });
  
}

driverPhone=(email)=>{


    return 
}



addTripSubmitHandler=(event)=>{
    event.preventDefault();
    const trip={
        tripstatus:this.state.tripstatus,
        driverid:this.state.driver,
        payamount:this.state.pay,
        bol:this.state.bol,
        //picktime:this.state.ptime,
        deltime:this.state.dtime,
        pdate:this.state.pdate,
        picktime:this.state.ptime,
        ddate:this.state.ddate,
        pcompany:this.state.pcompany,
        dcompany:this.state.dcompany,
paddress:{
    street:this.state.pstreet,
    city:this.state.pcity,
    state:this.state.pstate,
    zip:this.state.pzip
},

daddress:{
    street:this.state.dstreet,
    city:this.state.dcity,
    state:this.state.dstate,
    zip:this.state.dzip
}
        
//pcompany:'',
//dcompany:'',

    }

    Axios.post('http://localhost:8080/addTrip', trip)
            .then(function (response) {
                
            })


}

    render() {
        return (
            <div className="tripform">
    <form onSubmit={this.addTripSubmitHandler}>
    <fieldset className="field1">
       
        <div className="form-row signupformcss">
            <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Bol</label>
                <input type="text" name="bol" value={this.state.bol} onChange={this.addTripChangeHandler} className="form-control" id="inputPassword4" placeholder="BOL#" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Pay Rate</label>
                <input type="phone" name="pay" value={this.state.pay} onChange={this.addTripChangeHandler} className="form-control" id="phone" placeholder="Rate $" />
            </div>
            
            <div className="col-auto my-1">
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Driver</label>
                <select name="driver" value={this.state.driver} onChange={this.addTripChangeHandler} className="custom-select mr-sm-2" id="role">
                    <option value="null">Choose...</option>
                    {this.state.drivers.map((driver, index) =>
                    <option key={index} value={driver.email}>{driver.email} {driver.fname} {driver.lname}</option>
                    )}
                </select>
            </div>
        </div>
        </fieldset>
        
       <fieldset className="field1">
        <legend className="legend1">Pickup Address
        <div className="form-row">
        <div className="form-group col-md-6">
        <label htmlFor="inputAddress"></label>
                <input type="text" name="pcompany" value={this.state.pcompany} onChange={this.addTripChangeHandler} className="form-control" id="inputPassword4" placeholder="Company Name" />
            </div>
            <div className="form-group col-md-6">
        <label htmlFor="inputAddress"></label>
                <input type="Time" name="ptime" value={this.state.ptime} onChange={this.addTripChangeHandler} className="form-control" id="inputPassword4" placeholder="Pick Up Time" />
            </div>
            <div className="form-group col-md-6">
        <label htmlFor="inputAddress"></label>
                <input type="Date" name="pdate" value={this.state.pdate} onChange={this.addTripChangeHandler} className="form-control" id="inputPassword4" placeholder="Pick Up Date" />
            </div>
            <div className="form-group col-md-6">
        <label htmlFor="inputAddress"></label>
                <input type="text" name="pphone" value={this.state.pphone} onChange={this.addTripChangeHandler} className="form-control" id="inputPassword4" placeholder="Phone" />
            </div>
            </div>
        <div className="form-group">
                        
                    <input type="text" name="pstreet" value={this.state.pstreet} onChange={this.addTripChangeHandler} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
        <div className="form-row">
            <div className="form-group col-md-6">
               
                <input type="text" name="pcity" value={this.state.pcity} onChange={this.addTripChangeHandler} className="form-control" id="inputCity" placeholder="City" />
            </div>
            <div className="form-group col-md-4">
                
                <select name="pstate" id="inputState" value={this.state.pstate} onChange={this.addTripChangeHandler} className="form-control" placeholder="state">
                    <option selected>Choose...</option>
                    <option value="Mo">Mo</option>
                    <option value="Il">Il</option>
                </select>
            </div>
            <div className="form-group col-md-2">
                
                <input type="text" name="pzip" value={this.state.pzip} onChange={this.addTripChangeHandler} className="form-control" id="inputZip" placeholder="zip"/>
            </div>
        </div>
        </legend>
        </fieldset>
        <fieldset>
        <legend className="legend1">Delivery Address
        <div className="form-row">
        <div className="form-group col-md-6">
                <label htmlFor="inputPassword4"></label>
                <input type="text" name="dcompany" value={this.state.dcompany} onChange={this.addTripChangeHandler} className="form-control" id="inputPassword4" placeholder="Company" />
            </div>
            <div className="form-group col-md-6">
        <label htmlFor="inputAddress"></label>
                <input type="time" name="dtime" value={this.state.dtime} onChange={this.addTripChangeHandler} className="form-control" id="inputPassword4" placeholder="Delivery Time" />
            </div>
            <div className="form-group col-md-6">
        <label htmlFor="inputAddress"></label>
                <input type="date" name="ddate" value={this.state.ddate} onChange={this.addTripChangeHandler} className="form-control" id="inputPassword4" placeholder="Pick Up Date" />
            </div>
            <div className="form-group col-md-6">
        <label htmlFor="inputAddress"></label>
                <input type="text" name="dphone" value={this.state.dphone} onChange={this.addTripChangeHandler} className="form-control" id="inputPassword4" placeholder="Phone" />
            </div>
            </div>
        <div className="form-group">
                        
                        <input type="text" name="dstreet" value={this.state.dstreet} onChange={this.addTripChangeHandler} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    
        <div className="form-row">
            <div className="form-group col-md-6">
               
                <input type="text" name="dcity" value={this.state.dcity} onChange={this.addTripChangeHandler} className="form-control" id="inputCity" placeholder="City" />
            </div>
            <div className="form-group col-md-4">
                
                <select name="dstate" id="inputState" value={this.state.dstate} onChange={this.addTripChangeHandler} className="form-control" placeholder="state">
                    <option selected>State...</option>
                    <option value="Mo">Mo</option>
                    <option value="Il">Il</option>
                </select>
            </div>
            <div className="form-group col-md-2">
                
                <input type="text" name="dzip" value={this.state.dzip} onChange={this.addTripChangeHandler} className="form-control" id="inputZip" placeholder="zip"/>
            </div>
        </div>
        </legend>
        </fieldset>
        
        <div className="buttonSpac">
        <button type="submit" value="submit" className="btn btn-sm btnSpace btn-primary">Submit</button>
        
        <button type="reset" value="Reset" className="btn btn-sm btnSpace btn-primary">Reset</button>
        </div>
    </form>
</div>
        );
    }
}

export default AddTrip;
