import React from 'react';
import Order from './Order';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';


class Home extends React.Component {
    

    constructor(props){
        super(props);
        this.onClickFabListner=this.onClickFabListner.bind(this);
    }
   onClickFabListner=()=> {
       this.props.history.push("/createOrder/apple")
   }
    render(){
        var {items}= this.props
       
    return(
        <>
        {items ? items.map((item)=>(
            <Order item={item} onClickFabListner={this.onClickFabListner}/>
        )) : null}
        </>
    )}
}

const mapStateToProps = (state) => {
    var order
    if(state.firestore.ordered.order==null){
        order=[]
    }
    else{
    order=state.firestore.ordered.order.filter((order)=>(
        order.remainingAmount > 0
    ))}
    console.log(state)
    return{
        items:order
    }
}
export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            { collection: 'order'}
        ])
    )(Home)