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
    if(state.firestore.ordered.shipment!=null){
    var shipments =state.firestore.ordered.shipment.filter((shipment)=>
        shipment.supplierId==state.firebase.auth.uid
    )}
    else var shipments = []
    return{
        id:state.firebase.auth.uid,
        shipments:shipments
    }
}

var mapDispatchToProps =(dispatch)=>{

   

}

export default compose(firestoreConnect([{ collection: 'shipment'}]), connect(mapStateToProps))(MyShipments)