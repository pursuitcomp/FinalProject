import React from 'react';

const payReports =(props)=>{

    return(
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Paystubs Reports</h1>


        <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
                <select name="paydriver" value={props.selectedDriver} onChange={this.selectDriverChangehandler} >
                    <option value="null">Select Driver</option>

                    {props.drivers.map((driver, index) =>

                        <option on key={index} value={driver.email}>{driver.fname} {driver.lname}</option>

                    )}
                </select>
               
               

            </div>

        </div>
    </div>
    )
}
export default payReports;