import React from 'react';
import {ListItemContent} from 'react-mdl'


const Trips=(props)=>{

        return (
            
               <React.Fragment>
                <h4>Trips</h4>
            <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Trip_Id</th>
                        <th>From</th>
                        <th>PU Time</th>
                        <th>PU Date</th>
                        <th>To</th>
                        <th>Del Time</th>
                        <th>Del Date</th>
                        <th>Pay</th>
                        <th>Driver</th>
                        <th>Status</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                {props.listOfTrips.map((trip, index) =>
                <tr key={index}>
                        <td>{trip.bol}</td>
                        <td>{trip.pcompany} <br/>{trip.paddress.street}<br/> {trip.paddress.city} {trip.paddress.zip}</td>
                        <td>{trip.picktime}</td>
                        <td>{trip.pdate}</td>
                        <td>{trip.dcompany}<br/> {trip.daddress.street}<br/> {trip.daddress.city} {trip.daddress.zip}</td>
                        <td>{trip.deltime}</td>
                        <td>{trip.ddate}</td>
                        <td>${trip.payamount}</td>
                        <td>{trip.driverid}</td>
                        <td>{trip.tripstatus}</td>
                        <td>Status</td>
                    </tr> 
                )} 
                </tbody>
            </table>
        </div>
        </React.Fragment> 
           
        );
    
}

export default Trips;