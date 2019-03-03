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
        <div className="container">
        <div className="row">

        {items ? items.map((item)=>(
            <Order name={item.name} key={item.id} price={item.price} onClickFabListner={this.onClickFabListner}/>
        )) : null}
        </div>
       </div>
    )}
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        items:state.firestore.ordered.rates
    }
}
export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            { collection: 'rates'}
        ])
    )(Home)