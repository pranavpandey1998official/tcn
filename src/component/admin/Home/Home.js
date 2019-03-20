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
        <div className="container">
            <div className="row">

            {items ? items.map((item)=>(
                <div className="row">
                    <Order item={item} key={item.id} />
                </div>
            )) : null}
            </div>
       </div>
    
    )}
}

const mapStateToProps = (state) => {
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