import React from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import Shipment from './Shipment'
class MyShipments extends React.Component {
render() {
    return(
        <ul>
            {this.props.shipments.map((shipment)=>(
                <Shipment shipment={shipment} key={shipment.id}></Shipment>
            ))}
        </ul>
    )
}
}

var mapStateToProps =(state)=>{
    if(state.firestore.ordered.shipments!=null){
    var shipments =state.firestore.ordered.shipments.filter((shipment)=>
        shipment.shiperId==state.firebase.auth.uid
    )}
    else var shipments = []
    console.log(shipments);
    return{
        id:state.firebase.auth.uid,
        shipments:shipments
    }
}

var mapDispatchToProps =(dispatch)=>{

   

}

export default compose(firestoreConnect([{ collection: 'shipments'}]), connect(mapStateToProps))(MyShipments)