import React from 'react';
import {months} from '../utility'
 const Order = ({order})=>{
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return(
        <div className="row">
            <div className="col s6 m3">
               <img src={"/photoOfCrop"+"/"+order.name+".jpg"} className="responsive-img"/>
            </div>
            <div className="col s6 m6">
                <p><b>Total Aount</b> {order.totalAmount} Kg</p>
                <p><b>  Item Purchased At cost </b>{order.cost} Rs</p>
                <div className="btn red "> Amount Remaining {order.remainingAmount} Kg</div>
            </div>
        </div>

    )
}

export default Order;
