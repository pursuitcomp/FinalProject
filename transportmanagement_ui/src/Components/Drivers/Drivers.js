import React from 'react';
import {ListItemContent} from 'react-mdl'


const Drivers=(props)=>{

        return (
            <React.Fragment>
            <h4>Drivers</h4>
        <div className="table-responsive">
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                <td></td>

                    <th>Phone</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>Role</th>
                    
                </tr>
            </thead>

            <tbody>
          { props.listOfDrivers.map((driver, index) =>
                <tr key={index}>
                  <th> <ListItemContent icon="person"></ListItemContent></th> 
                    <td>{driver.phone}</td>
                    <td>{driver.email}</td>
                    <td>{driver.fname} {driver.lname}</td>
                    <td>{driver.company}</td>
                    <td>{driver.address.street}</td>
                    <td>{driver.address.city}</td>
                    <td>{driver.role}</td>
                </tr> 
            )}
            </tbody>



        </table>
    </div>
    </React.Fragment>
        );
}

export default Drivers;