import React from 'react';
import Order from './Order';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';


class Home extends React.Component {
    

    constructor(props){
        super(props);
    }
    render(){
        var {items}= this.props
       
    return(
        <>
        {items ? items.map((item)=>(
            <Order item={item}  />
        )) : null}
        </>
    )}
}

const mapStateToProps = (state) => {
    var rates
    if(state.firestore.ordered.rates==null){
        rates=[]
    }
    else{
    rates=state.firestore.ordered.rates.filter((order)=>(
        order.demandAmount-order.supplyAmount > 0
    ))}
    return{
        items:rates
    }
}
export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            { collection: 'rates'}
        ])
    )(Home)