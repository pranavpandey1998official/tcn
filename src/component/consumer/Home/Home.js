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
   onClickFabListner=(name)=> {
       this.props.history.push("/createOrder/"+name)
   }
    render(){
        var {items}= this.props
       
    return(
        <div className="container">
        <div className="row">

        {items ? items.map((item)=>(
            <div className="row">
                <Order name={item.name} key={item.id} price={item.price} onClickFabListner={this.onClickFabListner}/>
                </div>
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