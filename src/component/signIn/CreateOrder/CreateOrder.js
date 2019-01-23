import React from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import M from 'materialize-css';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { createOrder } from '../../../Store/actions/orderAction';

class CreateOrder extends React.Component {

    element
    
    componentDidMount (){
        
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        /* this.element=this.props.items.find((item)=>{
         return item.name === this.props.match.params.crop
        }) */
    }
    state = {
        amount : 0,
    }

    handleInputChange = (e)=>{
        this.setState({
            amount:e.target.value
        })
    }
    handleConfirmOrder = (e)=>{
        this.props.createOrder({
            
        })
    }
 render (){
    this.props.items?this.element=this.element=this.props.items.find((item)=>{
        return item.name === this.props.match.params.crop
    }):this.element={name:"",price:0}
     var crop = this.props.match.params.crop;
     return <React.Fragment>
                <div className="row">
                <div className="col s6 l4">
                <div className="card">
                <div className="card-image">
                    <img src={"/photoOfCrop"+"/"+crop+".jpg"} className="responsive-img" />
                    </div>
                <div className="card-content">
                     <span class="chip">
                        Todays price
                    </span>
                    <div className="price">
                        
                            {this.element.price+"  \u20B9"} 
                    </div>
                </div>
                    </div>
                    <div class="input-field ">
                      <input id="first_name" type="text" class="validate" onChange={this.handleInputChange} />
                      <label for="first_name">First Name</label>
                    </div>
                </div>
                <button data-target="modal1" class="btn modal-trigger purple ">Modal
                 create order
                 </button>
                </div>

                <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4 className="center">Please Confirm Your Order</h4>
                  <div className="row">
                    <div className="col l4 card">
                        <div className="card-image">
                        <img src={"/photoOfCrop"+"/"+crop+".jpg"} className="responsive-img" />

                        </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <div  class="modal-close waves-effect waves-green btn purple center" onClick={this.handleConfirmOrder}>Confirm</div>
                </div>
                </div>
            </React.Fragment>
 }

}
var mapStateToProps =(state)=>{
    console.log(state);
    return{
        profile: state.firebase.profile,
        items:state.firestore.ordered.rates
    }
}

var mapDispatchToProps =(dispatch)=>{

    return{
        createOrder:(item)=>(dispatch(createOrder(item)))
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'rates'}
    ])
)(CreateOrder)