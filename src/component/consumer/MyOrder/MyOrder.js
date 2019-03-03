import React from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import Order from './Order'
class MyOrder extends React.Component {
render() {
    return(
        <ul>
            {this.props.order.map((order)=>(
                <Order order={order} key={order.id} />
            ))}
        </ul>
    )
}
}

var mapStateToProps =(state)=>{
    if(state.firestore.ordered.order!=null){
    var order =state.firestore.ordered.order.filter((order)=>
        order.consumerId===state.firebase.auth.uid
    )}
    else var order = []
    console.log(order);
    return{
        id:state.firebase.auth.uid,
        order:order
    }
}


export default compose(firestoreConnect([{ collection: 'order'}]), connect(mapStateToProps))(MyOrder)