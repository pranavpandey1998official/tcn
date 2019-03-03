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
    console.log(state)
    return{
        items:state.firestore.ordered.order
    }
}
export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            { collection: 'order'}
        ])
    )(Home)